<script setup lang="ts">
export type LinkType = 'tg' | 'inst' | 'linkedIn'

import {
  onMounted,
  onBeforeUnmount,
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

const width = ref(0);

const link = ref({
  offsetWidth: 0,
  offsetHeight: 0,
  offsetLeft: 0,
  offsetTop: 0,
});
const linkHeight = computed(() => link.value?.offsetHeight ?? 0);
const clientHeight = ref(document.documentElement.clientHeight);
const clientWidth = ref(document.documentElement.clientWidth);
const isHovered = ref(false);
const mouseLeaveDelay = ref();
const mouseX = ref(0);
const mouseY = ref(0);

onMounted(() => {
  window.addEventListener("resize", getDimensions);
  width.value = link.value.offsetWidth;
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", getDimensions);
});

const mousePX = computed(() => mouseX.value / width.value);
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
  const rX = mousePX.value * 30;
  const rY = mousePY.value * -30;

  return {
    transform: `rotateY(${-0.33*rX}deg) rotateX(${-0.33*rY}deg)`,
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
  const rX = mousePX.value * 30;
  const rY = mousePY.value * -30;
  const tX = mousePX.value * -40;
  const tY = mousePY.value * -40;

  const style = {
    transform: `rotateY(${-0.33*rX}deg) rotateX(${-0.33*rY}deg) translateX(${0.33 * tX}px) translateY(${0.33 * tY}px)`,
  };

  if (isHovered.value) {
    style.transform = `scale(1.03) rotateY(${-0.33*rX}deg) rotateX(${-0.33*rY}deg) translateX(${0.33 * tX}px) translateY(${0.33 * tY}px)`;
  }

  return style;
});

const getDimensions = () => {
  clientWidth.value = document.documentElement.clientWidth;
  clientHeight.value = document.documentElement.clientHeight;
};

const handleMouseMove = (e: MouseEvent) => {
  mouseX.value = e.pageX - link.value.offsetLeft - width.value / 2;
  mouseY.value = e.pageY - link.value.offsetTop - linkHeight.value / 2;
  isHovered.value = true;
};

const handleMouseEnter = () => {
  clearTimeout(mouseLeaveDelay.value);
};

const handleMouseLeave = () => {
  mouseLeaveDelay.value = setTimeout(()=>{
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
.social-link {
  display: block;
  font-family: SfPro;
  margin-right: 40px;
  font-weight: 560;
  font-size: 36px;
  line-height: 44px;
  font-stretch: expanded;
  color: #ffffff;
  text-decoration: none;
  padding: 16px 32px;
  border: 2px solid #ffffff1c;
  border-radius: 87px;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;

  &__text {
    transition: ease-in-out .2s;
  }

  &:hover {
    .social-link__text {
      opacity: .6;
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
    background: #B5DEFF;
    color: #000000;
    margin-right: 0;

    > .social-link__text {
      width: 160px;
    }
  }
}
</style>
