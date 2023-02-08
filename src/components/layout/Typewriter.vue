<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import {
  ref,
  computed,
  onMounted,
  watchEffect,
} from 'vue';
import { getRandomArrayElement, getRandomValue } from '@/utils/helpers';

export type KeywordsType = {
  chance: number,
  values: Array<string>
}

const props = defineProps({
  keywords: {
    type: Array<KeywordsType>,
    default: () => []
  },
  colors: {
    type: Array<string>,
    default: () => []
  },
  pretext: String,
  headline: String,
  changeTitle: Boolean
});

const firstKeyword = !props.keywords ? '' : props.keywords[0].values[0];

const wordLists = computed(() => {
  return props.keywords.map(item => item.values);
});

const currentKeyword = ref(firstKeyword);
const renderedKeyword = ref(firstKeyword);
const usedKeywords = ref([firstKeyword]);
const currentList = ref(wordLists.value[0]);
const currentColor = ref<string>(getRandomArrayElement(props.colors));
const usedColors = ref<Array<string>>([currentColor.value]);
const currentStep = ref(1);

watchEffect(() => {
  if (props.changeTitle) {
    document.title = renderedKeyword.value;
  }
});

const availableColors = computed(() => props.colors.filter(color => !usedColors.value.includes(color)));

const availableLists = computed(() => props.keywords?.filter(list => {
  const avaliableWordsAmount = list.values.filter(w => !usedKeywords.value.includes(w)).length;
  return avaliableWordsAmount > 0;
}));

const availableCurrentListWords = computed(() => currentList.value.filter(w => !usedKeywords.value.includes(w)));

const totalAvailableWords = computed(() => {
  const mergedWords = props.keywords.map(list => list.values).flat();
  const test = mergedWords.filter(w => !usedKeywords.value.includes(w)).length;
  return test;
});

const colorStyle = computed(() => `
  color: ${currentColor.value};
  border-coler: ${currentColor.value};
`);

const switchWordList = () => {
  if (!availableLists.value || availableLists.value.length === 0) {
    usedKeywords.value = [];
  }

  currentList.value = getRandomValue({
    chances: availableLists.value.map(item => item.chance),
    values: availableLists.value.map(item => item.values),
  });
};

const getRandomTypingInterval = () => {
  return getRandomValue({
    chances: [10, 30, 60],
    values: [90, 120, 70],
  });
};

function typingEffect() {
  const word = currentKeyword.value?.split('');
  const loopTyping = () => {
    if (word?.length > 0) {
      renderedKeyword.value += word.shift();
    } else {
      setTimeout(deletingEffect, 3000);
      return;
    }
    setTimeout(loopTyping, getRandomTypingInterval());
  };
  loopTyping();
}

function deletingEffect() {
  const word = currentKeyword.value?.split('');
  const loopDeleting = () => {
    if (word?.length > 0) {
      word.pop();
      renderedKeyword.value = word.join('');
      
      if (renderedKeyword.value.length === currentKeyword.value.length - 1) {
        setTimeout(loopDeleting, 200);
      } else {
        setTimeout(loopDeleting, 50);
      }
    } else {
      nextStep();
      typingEffect();
      return;
    }
  };
  loopDeleting();
}

function listHasUnusedKeywords (list?: string[]): boolean  {
  if (!list) {
    return false;
  }
  const unusedKeywords = list.filter(w => !usedKeywords.value.includes(w));
  return unusedKeywords.length > 0;
}

const checkCurrentStep = () => {
  if (currentStep.value > 2) {
    return;
  }
  const list = wordLists.value[currentStep.value - 1];

  if (listHasUnusedKeywords(list)) {
    currentList.value = list;
  }
  currentStep.value += 1;
};

const switchColor = () => {
  if (!availableColors.value.length) {
    usedColors.value = [];
  }
  currentColor.value = getRandomArrayElement(availableColors.value);
  usedColors.value.push(currentColor.value);
};

const switchWord = () => {
  switchWordList();
  checkCurrentStep();

  if (totalAvailableWords.value === 0) {
    usedKeywords.value = [];
  }

  currentKeyword.value = getRandomArrayElement(availableCurrentListWords.value);
  usedKeywords.value.push(currentKeyword.value);
};

const nextStep = () => {
  switchColor();
  switchWord();
};

onMounted(() => {
  setTimeout(deletingEffect, 1650);
});
</script>

<template>
  <div class="typewriter">
    <div v-if="headline" class="typewriter__headline">
      {{ headline }}
    </div>

    <div class="typewriter__content">
      <div v-if="pretext" class="typewriter__content">
        {{ pretext + '&nbsp;' }}
      </div>

      <div class="typewriter__keyword">
        <span :style="colorStyle">
          {{ renderedKeyword }}
        </span>

        <span
          class="typewriter__caret"
          :style="colorStyle"
        />
      </div>
    </div>
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

@keyframes blink-caret {
  from, to { border-color: transparent }
  50% { border-color: orange; }
}
.typewriter {
  color: #ffffff;
  font-family: SfPro;
  font-style: normal;
  font-weight: 650;
  font-size: 96px;
  line-height: 104px;
  font-stretch: expanded;
  text-align: left;
  max-width: 840px;
  margin-top: 16px;
  margin-left: 40px;
  margin-bottom: 56px;

  &__content {
    display: flex;
  }

  &__keyword {
    min-height: 104px;
    max-height: 104px;
    display: flex;
    white-space: nowrap;
  }

  &__caret {
    max-height: 104px;
    display: block;
    border-left: 2px solid;
    animation: blink 1s step-end infinite;
  }
}
</style>
