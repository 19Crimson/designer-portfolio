<script setup lang="ts">
export type LinkType = 'tg' | 'inst' | 'linkedIn'

import {
  onMounted,
  ref,
  computed,
  PropType,
} from 'vue';
const emit = defineEmits(['click']);

const props = defineProps({
  linkType: {
    type: String as PropType<LinkType>
  }
});

const mouseX = ref(0);
const mouseY = ref(0);
const link = ref<HTMLElement>();
const linkHeight = computed(() => link.value?.offsetHeight || 0);
const linkWidth = ref(0);
const isHovered = ref(false);
const timeout = ref<ReturnType<typeof setTimeout>>();

// Link Rotating coefficient
const LRC = 60;

// Text Rotating coefficient
const TRC = 1;

// Transforming coefficient
const TC = 6;

// Scaling coefficient
const SC = 1.03;


onMounted(() => {
  linkWidth.value = link.value?.offsetWidth ?? 0;
});

const mousePX = computed(() => mouseX.value / linkWidth.value);
const mousePY = computed(() => mouseY.value / linkHeight.value);

const linkClass = computed(() => ({
  'social-link': true,
  'social-link--tg': props.linkType === 'tg',
  'social-link--inst': props.linkType === 'inst',
  'social-link--linked-in': props.linkType === 'linkedIn',
}));

const linkHref = computed(() => {
  if (!props.linkType) {
    return;
  }
  const linksMap = {
    tg: 'https://t.me/karpnsky',
    inst: 'https://www.instagram.com/n.karpnsky/',
    linkedIn: 'https://www.linkedin.com/in/nikita-karpinskiy-07b504211/'
  };
  return linksMap[props.linkType];
});

const linkStyle = computed(() => {
  const rX = -mousePX.value;
  const rY = mousePY.value;

  return {
    transform: `rotateY(${-LRC * rX}deg) rotateX(${-LRC * rY}deg)`,
  };
});

const linkText = computed(() => {
  if (!props.linkType) {
    return;
  }
  const textMap = {
    tg: 'Tg',
    inst: 'Inst',
    linkedIn: 'LinkedIn'
  };
  return textMap[props.linkType];
});

const textStyle = computed(() => {
  const rX = mousePX.value;
  const rY = -mousePY.value;
  const tX = -mousePX.value;
  const tY = -mousePY.value;

  const style = {
    transform: `
      rotateY(${-TRC * rX}deg)
      rotateX(${-TRC * rY}deg)
      translateX(${TC * tX}px)
      translateY(${TC * tY}px)`,
  };

  if (isHovered.value) {
    style.transform = `
      rotateY(${-TRC * rX}deg)
      rotateX(${-TRC * rY}deg)
      translateX(${TC * tX}px)
      translateY(${TC * tY}px)
      perspective(1000px)
      scale(${SC})`;
  }

  return style;
});

const handleMouseMove = (e: MouseEvent) => {
  mouseX.value = e.clientX - Number(link.value?.getBoundingClientRect().left) - linkWidth.value / 2;
  mouseY.value = e.clientY - Number(link.value?.getBoundingClientRect().top) - linkHeight.value / 2;
  console.log('Mouse XY', mouseX.value, mouseY.value);
  isHovered.value = true;
};

const handleMouseEnter = () => {
  clearTimeout(timeout.value);
};

const handleMouseLeave = () => {
  timeout.value = setTimeout(()=>{
    mouseX.value = 0;
    mouseY.value = 0;
    isHovered.value = false;
  }, 0);
};

const invertCardPosition = () => {
  mouseX.value = -mouseX.value;
  mouseY.value = -mouseY.value;
};

const handleMousedown = () => {
  invertCardPosition();
};

const handleMouseup = () => {
  invertCardPosition();
  emit('click');
};
</script>

<template>
  <a
    ref="link"
    :class="linkClass"
    :href="linkHref"
    :style="[linkStyle]"
    target="_blank"

    @mousemove="handleMouseMove"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
    @mousedown="handleMousedown"
    @mouseup="handleMouseup"
  >
      <div
        class="social-link__text" 
        :style="[textStyle]"
      >
        {{ linkText }}
      </div>
  </a>
</template>

<style scoped lang="scss">
$returnEasing: cubic-bezier(0.23, 1, 0.32, 1);
.social-link {
  display: block;
  font-family: SfPro;
  margin-right: 20px;
  font-weight: 400;
  font-size: 32px;
  line-height: 44px;
  font-stretch: expanded;
  color: #ffffff;
  text-decoration: none;
  padding: 8px 22px;
  border: 2px solid #ffffff29;
  border-radius: 87px;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  transition: 0.2s $returnEasing;
  user-select: none;
  // transform-style: preserve-3d;
  transition: transform .3s;

  &__text {
    transform-style: preserve-3d;
    transition:
      0.2s $returnEasing;
  }

  &:hover {
    .social-link__text {
      opacity: .7;
    }
  }

  &--tg {
    > .social-link__text {
      width: 46px;
    }
  }

  &--inst {
    > .social-link__text {
      width: 70px;
    }
  }

  &--linked-in {
    background: #ffffff;
    font-weight: 470;
    color: #000000;
    margin-right: 0;

    > .social-link__text {
      width: 160px;
    }
  }
}
</style>
