<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import {
  ref,
  computed,
  onMounted,
} from 'vue';
import { getRandomArrayElement, getRandomValue } from '@/utils/helpers';

export type KeywordsType = {
  chance: number,
  keywords: Array<string>
}

const props = defineProps({
  keywordsList: Array<KeywordsType>,
  colors: {
    type: Array<string>,
    default: ['#FFB9AA', '#F2FDAE']
  },
  pretext: String,
  headline: String,
});

const firstKeyword = computed(() => {
  if (!props.keywordsList) {
    return '';
  }
  return props.keywordsList[0].keywords[0];
});

const keywordsLists = computed(() => {
  if (!props.keywordsList) {
    return [['']];
  }
  return props.keywordsList.map(item => item.keywords);
});

const keywordsAmount = computed(() => {
  let amount = 0;
  props.keywordsList?.forEach(list => {
    amount += list.keywords.length;
  });
  return amount;
});

const currentKeyword = ref(firstKeyword.value);
const renderedKeyword = ref(firstKeyword.value);
const usedKeywords = ref([firstKeyword.value]);
const currentList = ref(keywordsLists.value[0]);
const currentColor = ref<string>(getRandomArrayElement(props.colors));
const usedColors = ref<Array<string>>([currentColor.value]);
const step = ref(1);

const getKeywordsList = () => {
  const availableLists = keywordsLists.value?.filter(list => {
    const avaliableWordsAmount = list.filter(w => !usedKeywords.value.includes(w)).length;
    return avaliableWordsAmount > 0;
  });
  if (availableLists.length === 0) {
    const a = getRandomArrayElement(keywordsLists.value);
    console.log('reason 1', a);
    return a;
  }

  const a = getRandomValue({
    chances: props.keywordsList?.map(item => item.chance) ?? [100],
    values: availableLists,
  });
  console.log('reason 2', a);
  return a;

  // return getRandomValue({
  //   chances: props.keywordsList?.map(item => item.chance) ?? [100],
  //   values: availableLists,
  // });
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
      nextWord();
      typingEffect();
      return;
    }
  };
  loopDeleting();
}

const colorStyle = computed(() => `
  color: ${currentColor.value};
  border-coler: ${currentColor.value};
`);

const nextWord = () => {
  const availableColors = props.colors.filter(color => !usedColors.value.includes(color));

  currentList.value = getKeywordsList();

  if (usedColors.value.length === props.colors.length) {
    usedColors.value = [];
  }
  currentColor.value = getRandomArrayElement(availableColors);
  usedColors.value.push(currentColor.value);

  let sourceList = currentList.value;
  console.log('currentList.value', currentList.value);

  if (step.value === 1) {
    sourceList = keywordsLists.value[0];
  } else if (step.value === 2 && keywordsLists.value[1]?.length > 0) {
    sourceList = keywordsLists.value[1];
  }

  if (keywordsAmount.value === usedKeywords.value.length) {
    usedKeywords.value = [];
    currentKeyword.value = getRandomArrayElement(sourceList);
  } else {
    currentKeyword.value = getRandomArrayElement(sourceList.filter(w => !usedKeywords.value.includes(w)));
    usedKeywords.value.push(currentKeyword.value);
  }

  // console.log('usedKeywords.value', usedKeywords.value, currentKeyword.value);

  step.value += 1;
};

onMounted(() => {
  setTimeout(deletingEffect, 1650);
});
</script>

<template>
  <div class="typewriter">
    <div v-if="headline" class="typewriter__headline">{{ headline }}</div>

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

/* The typewriter__keyword cursor effect */
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
  margin-left: 40px;
  margin-bottom: 52px;

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
