<script setup lang="ts">
import {
  onMounted,
  onBeforeUnmount,
  ref,
  computed,
  watch,
} from 'vue';
import { getImageOnload } from '@/utils/helpers';

const emit = defineEmits(['click']);

const props = defineProps({
  project: String,
  cardBg: String,
  cardFg: String,
  title: String,
  titleColor: {
    type: String,
    default: 'white'
  },
  gradientColor: {
    type: String,
    default: '45, 45, 45'
  },
});

const width = ref(0);

const cardHeight = ref(0);
const clientHeight = ref(document.documentElement.clientHeight);
const clientWidth = ref(document.documentElement.clientWidth);
const cardFgSrc = ref(`/src/assets/projects/${props.project}/${props.cardFg}`);
const isHovered = ref(false);
const mouseLeaveDelay = ref();
const mouseX = ref(0);
const mouseY = ref(0);

const card = ref({
  offsetWidth: 0,
  offsetHeight: 0,
  offsetLeft: 0,
  offsetTop: 0,
});

onMounted(() => {
  window.addEventListener("resize", getDimensions);
  width.value = card.value.offsetWidth;
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", getDimensions);
});

const mousePX = computed(() => mouseX.value / width.value);
const mousePY = computed(() => mouseY.value / cardHeight.value);

const cardStyle = computed(() => {
  const rX = mousePX.value * 30;
  const rY = mousePY.value * -30;

  return {
    color: props.titleColor,
    height: `${cardHeight.value}px`,
    transform: `rotateY(${-0.33*rX}deg) rotateX(${-0.33*rY}deg)`,
  };
});

const fgStyle = computed(() => {
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

const titleStyle = computed(() => {
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

const bgStyle = computed(() => {
  const style = {
    backgroundImage: `url("/src/assets/projects/${props.project}/${props.cardBg}")`,
    height: `${cardHeight.value}px`,
  };

  return style;
});

const getDimensions = () => {
  clientWidth.value = document.documentElement.clientWidth;
  clientHeight.value = document.documentElement.clientHeight;
};

const handleMouseMove = (e: MouseEvent) => {
  mouseX.value = e.pageX - card.value.offsetLeft - width.value / 2;
  mouseY.value = e.pageY - card.value.offsetTop - cardHeight.value / 2;
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

watch(
  () => clientWidth.value,
  () => {
    const bgImagePath = `/src/assets/projects/${props.project}//${props.cardBg}`;
    const cb = (
      img?: HTMLImageElement,
      err?: string|Event
    ) => {
      if (!img || err) {
        console.error('Error while uploading image with path: ', bgImagePath);
        return;
      }
      cardHeight.value = (img.naturalHeight / img.naturalWidth) * (window.innerWidth -160) / 3;
    };

    getImageOnload(bgImagePath, cb);
  },
  { immediate: true },
);

const gradientStyle = {
  backgroundImage: `linear-gradient(0deg,
		rgba(${props.gradientColor}, 1) 0%,
		rgba(${props.gradientColor}, 0.991353) 6.67%,
		rgba(${props.gradientColor}, 0.96449) 13.33%,
		rgba(${props.gradientColor}, 0.91834) 20%,
		rgba(${props.gradientColor}, 0.852589) 26.67%,
		rgba(${props.gradientColor}, 0.768225) 33.33%,
		rgba(${props.gradientColor}, 0.668116) 40%,
		rgba(${props.gradientColor}, 0.557309) 46.67%,
		rgba(${props.gradientColor}, 0.442691) 53.33%,
		rgba(${props.gradientColor}, 0.331884) 60%,
		rgba(${props.gradientColor}, 0.231775) 66.67%,
		rgba(${props.gradientColor}, 0.147411) 73.33%,
		rgba(${props.gradientColor}, 0.0816599) 80%,
		rgba(${props.gradientColor}, 0.03551) 86.67%,
		rgba(${props.gradientColor}, 0.0086472) 93.33%,
		rgba(${props.gradientColor}, 0) 100%)`
};
</script>

<template>
  <div class="card-wrapper"
    @mousemove="handleMouseMove"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
    @mousedown="handleMousedown"
    @mouseup="handleMouseup"
    ref="card"
  >
    <div class="card" :style="cardStyle">
      <div class="card-bg" :style="[bgStyle]"/>
      <img
        class="card-fg"
        :src="cardFgSrc"
        :style="[fgStyle]"
      >
      <div class="gradient" :style="gradientStyle"/>
      <div class="card-title" :style="[titleStyle]">
        {{ title }}
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
$hoverEasing: cubic-bezier(0.23, 1, 0.32, 1);
$returnEasing: cubic-bezier(0.23, 1, 0.32, 1);

.title {
  font-size: 24px;
  font-weight: 700;
  color: #5D4037;
  text-align: center;
}

h1+p, p+p {
  font-size: 24px;
  margin-top: 10px;
}

.card-wrapper {
  user-select: none;
  font-size: 24px;
  margin-bottom: 40px;
  font-family: 'Mont';
  transform: perspective(1000px);
  transform-style: preserve-3d;
  cursor: pointer;
  transition: transform .3s;

  &:hover {
    transform: perspective(1000px) scale(1.015);
    z-index: 250;
  }
}

.card {
  display: flex;
  align-items: center;
  border-radius: 16px;
  width: 100%;
  position: relative;
  overflow: hidden;
  transition: 0.7s $returnEasing;
  
  &:hover {
    z-index: 250;
  }
}

.card-bg {
  width: 100%;
  position: absolute;
  top: 0px; left: 0px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  pointer-events: none;
}

.card-fg {
  width: 100%;
  background-repeat: no-repeat;
  background-position: center;
  pointer-events: none;
  transition:
    0.7s $returnEasing;
    
  &:hover {
    transform: scale(2);
  }
}

.gradient {
  width: 100%;
 position: absolute;
 bottom: 0px;
 left: 0px;
 padding: 30px;
}

.card-title {
  font-size: 24px;
  margin: 0 24px;
  position: absolute;
  bottom: 20px;
  transition: 1s $returnEasing;
  text-align: left;
  
  p {
    opacity: 0;
    text-shadow: rgba(black, 1) 0 2px 3px;
    transition: 1s 1.6s cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  
  * {
    position: relative;
    z-index: 1;
  }
  
  &:after {
    content: '';
    position: absolute;
    top: 0; left: 0;
    z-index: 0;
    width: 100%;
    height: 100%;
    background-blend-mode: overlay;
    opacity: 0;
  }
}

.card-title h1 {
  display: none;
  font-size: 24px;
  font-weight: 700;
  text-shadow: rgba(black, 0.5) 0 10px 10px;
}
</style>