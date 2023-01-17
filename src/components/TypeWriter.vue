<script setup lang="ts">
  import {
    ref,
    computed,
    onMounted,
    onBeforeUnmount,
    defineProps
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

  const interval = ref<ReturnType<typeof setInterval>>()
  const currentKeyword = ref(props.value[0])
  const currentColor = ref(props.colors[Math.floor(getRandomInt(7))])

  const colorStyle = computed(() => `
    color: ${currentColor.value};
    border-coler: ${currentColor.value};
  `)

  onMounted(() => {
    interval.value = setInterval(() => {

    })
  })  
</script>

<template>
  <div class="header-title header-title-suffix" >
    <div class="header-keyword" :style="colorStyle">{{ currentKeyword }}</div>
    <div class="caret" :style="colorStyle"/>
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

.caret {
  display: block;
  border-left: 2px solid;
  animation: blink 1s step-end infinite;
}
</style>
