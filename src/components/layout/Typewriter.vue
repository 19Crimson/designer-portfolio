<script setup lang="ts">
import {
  ref,
  computed,
  onMounted,
  defineEmits,
} from 'vue';
import { getRandomInt, getRandomValue } from '@/utils/helpers';

const keywords = [
  [
    'design',
    'business thinking',
    'UX research',
    'CJM',
    'JTBD',
    'processes',
    'identity',
    'accessibility',
    'aha-moment',
    'growth',
    'insights',
    'relevance',
    'clarity',
    'logic',
  ],
  [
    'Identität',
    'barrierefreiheit',
    'identita',
    'přístupnost',
    'postřehy',
    'motif',
    'processus',
    'identité',
    'accessibilité',
    'clarté',
  ],
  [
    'デザイン',
    'ビジネス思考',
    'UXリサーチ',
    'プロセス',
    '身元',
    'アクセシビリティ',
    'あは瞬間',
    '成長',
    'インサイト',
    '関連性',
    '明瞭さ',
    '身份',
    '可達性',
    '啊哈時刻',
    '明晰',
    '邏輯',
    'դիզայն',
    'բիզնես',
    'ինքնությունը',
    'մատչելիությունը',
    'աճը',
  ],
];

const colors = [
  '#FFB9AA',
  '#F2FDAE',
  '#DAC3FF',
  '#7DE3E8',
  '#FFEB8C',
  '#FBD0FF',
];

const emit = defineEmits(['next']);

const currentKeyword = ref(keywords[0][0]);
const renderedKyword = ref(keywords[0][0]);
const currentList = ref(keywords[0]);
const currentColor = ref(colors[Math.floor(getRandomInt(colors.length - 1))]);
const usedColors = ref<Array<string>>([currentColor.value]);
const step = ref(0);

const getKeywordsList = () => getRandomValue({
  chances: [50, 10, 40],
  values: [keywords[0], keywords[1], keywords[2]],
}) as string[];

const getRandomTypingInterval = () => {
  return getRandomValue({
    chances: [10, 30, 60],
    values: [90, 120, 70],
  });
};

let i = 0;

function typingEffect() {
  let word = currentKeyword.value?.split('');
  var loopTyping = function() {
    if (word.length > 0) {
      renderedKyword.value += word?.shift();
    } else {
      setTimeout(deletingEffect, 3000);
      return;
    }
    setTimeout(loopTyping, getRandomTypingInterval());
  };
  loopTyping();
}

function deletingEffect() {
  let word = currentKeyword.value?.split('');
  var loopDeleting = function() {
    if (word.length > 0) {
      word.pop();
      renderedKyword.value = word.join('');
      if (renderedKyword.value.length === currentKeyword.value.length - 1) {
        setTimeout(loopDeleting, 200);
      } else {
        setTimeout(loopDeleting, 50);
      }
    } else {
      if (keywords.length > (i + 1)) {
        i++;
      } else {
        i = 0;
      }
      emit('next');
      nextWord();
      typingEffect();
      return;
    }
  };
  loopDeleting();
}

const calculatedColorStyle = computed(() => `
  color: ${currentColor.value};
  border-coler: ${currentColor.value};
`);

const nextWord = () => {
  currentList.value = getKeywordsList();

  if (usedColors.value.length === colors.length) {
    usedColors.value = [];
  }

  const availableColors = colors.filter(color => !usedColors.value.includes(color));

  currentColor.value = availableColors[getRandomInt(availableColors.length)];
  usedColors.value.push(currentColor.value);

  if (step.value === 0) {
    const list = keywords[0];
    console.log('list', list);
    console.log('word', list[getRandomInt(list.length)]);
    currentKeyword.value = list[getRandomInt(list.length)];
  } else if (step.value === 1) {
    const list = keywords[2];
    console.log('list', list);
    console.log('word', list[getRandomInt(list.length)]);
    currentKeyword.value = list[getRandomInt(list.length)];
  } else {
    currentKeyword.value = currentList.value[getRandomInt(currentList.value.length)];
  }
  step.value += 1;
};

onMounted(() => {
  setTimeout(deletingEffect, 1650);
});
</script>

<template>
  <div class="typewriter" >When product</div>
    <div class="typewriter typewriter-suffix">
      meets&nbsp;
      <div class="typewriter__keyword" >
        <span :style="calculatedColorStyle">
          {{ renderedKyword }}
        </span>
        <span
          class="caret"
          :style="calculatedColorStyle"
        />
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

  &-suffix {
    display: flex;
    margin-bottom: 52px;
  }
}
.typewriter__keyword {
  display: flex;
  white-space: nowrap;
}

.caret {
  display: block;
  border-left: 2px solid;
  animation: blink 1s step-end infinite;
}
</style>
