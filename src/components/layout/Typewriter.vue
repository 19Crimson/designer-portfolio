<script setup lang="ts">
  import {
    ref,
    computed,
    onMounted,
  } from 'vue'

  const props = defineProps({
    value: {
      type: Array<string>,
      default: () => [],
    },
    colors: {
      type: Array<string>,
      default: () => ['white']
    }
  })

  function getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
  }

  const currentKeyword = ref(props.value[0])
  const renderedKyword = ref(props.value[0])
  const currentColor = ref(props.colors[Math.floor(getRandomInt(props.colors.length - 1))])
  const usedColors = ref<Array<String>>([currentColor.value])
  const usedKeywords = ref<Array<String>>([currentKeyword.value])

  const getRandomTypingInterval = () => {
    const num = (Math.random() + 1) * 100
    // 100ms 0.5
    // 60ms 0.325
    // 30ms 0.125
    // 10ms 0.0625

    if (num <= 7) { // 7
      return 700
    } else if (num <= 20) { // 13
      return 50
    } else if (num <= 50) { // 30
      return 130
    } else { // 50
      return 100
    }
  }

  let i = 0;
  let timer;

  function typingEffect() {
    let word = currentKeyword.value.split("");
    var loopTyping = function() {
      if (word.length > 0) {
        renderedKyword.value += word.shift();
      } else {
        setTimeout(deletingEffect, 3000);
        return false;
      };
      timer = setTimeout(loopTyping, getRandomTypingInterval());
    };
    loopTyping();
  };

  function deletingEffect() {
    let word = currentKeyword.value.split("");
    var loopDeleting = function() {
      if (word.length > 0) {
        word.pop();
        renderedKyword.value = word.join("");
        if (renderedKyword.value.length === currentKeyword.value.length - 1) {
          timer = setTimeout(loopDeleting, 200);
        } else {
          timer = setTimeout(loopDeleting, 50);
        }
      } else {
        if (props.value.length > (i + 1)) {
          i++;
        } else {
          i = 0;
        };

        nextWord()
        typingEffect();

        return false;
      };
    };
    loopDeleting();
  };

  const colorStyle = computed(() => `
    color: ${currentColor.value};
    border-coler: ${currentColor.value};
  `)

  const nextWord = () => {
    if (usedColors.value.length === props.colors.length) {
      usedColors.value = []
    }

    if (usedKeywords.value.length === props.value.length) {
      usedKeywords.value = []
    } 

    const availableWords = props.value.filter(word => !usedKeywords.value.includes(word))
    const availableColors = props.colors.filter(color => !usedColors.value.includes(color))

    currentColor.value = availableColors[getRandomInt(availableColors.length)]
    currentKeyword.value = availableWords[getRandomInt(availableWords.length)]
    usedColors.value.push(currentColor.value)
    usedKeywords.value.push(currentKeyword.value)
  }


  onMounted(() => {
    setTimeout(deletingEffect, 1650);
  })
</script>

<template>
  <div class="typewriter" >
    <span :style="colorStyle">{{ renderedKyword }}</span>
    <span class="caret" :style="colorStyle"/>
  </div>
</template>

<style scoped lang="scss">
@keyframes typing {
  from {
    width: 0
  }
}
    
@keyframes blink {
  50% {
    border-color: transparent
  }
}

@keyframes typing {
  from { width: 0 }
  to { width: 100% }
}

/* The typewriter cursor effect */
@keyframes blink-caret {
  from, to { border-color: transparent }
  50% { border-color: orange; }
}

.typewriter {
  display: flex;
  white-space: nowrap;
}

.caret {
  display: block;
  border-left: 2px solid;
  animation: blink 1s step-end infinite;
}
</style>
