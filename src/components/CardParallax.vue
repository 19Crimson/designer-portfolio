<script setup lang="ts">
  import {
    onMounted,
    onBeforeUnmount,
    ref,
    computed,
    watch,
  } from 'vue'

	const props = defineProps({
    bgImage: String,
    fgImage: String,
    title: String,
    titleColor: {
			type: String,
			default: 'white'
		},
		gradientColor: {
			type: String,
			default: '20, 20, 20'
		},
	})

  const width = ref(0)

  const clientWidth = ref(document.documentElement.clientWidth)
  const clientHeight = ref(document.documentElement.clientHeight)
  const cardHeight = ref(0)
  const mouseX = ref(0)
  const mouseY = ref(0)
  const isHovered = ref(false)
  const mouseLeaveDelay = ref(0)

  const card = ref({
    offsetWidth: 0,
    offsetHeight: 0,
    offsetLeft: 0,
    offsetTop: 0,
  })

  onMounted(() => {
    window.addEventListener("resize", getDimensions);
    width.value = card.value.offsetWidth;
  })

  onBeforeUnmount(() => {
    window.removeEventListener("resize", getDimensions);
  })

  const mousePX = computed(() => mouseX.value / width.value)
  const mousePY = computed(() => mouseY.value / cardHeight.value)

  const cardStyle = computed(() => {
    const rX = mousePX.value * 30;
    const rY = mousePY.value * -30;
    const style = {
      color: props.titleColor,
      height: `${cardHeight.value}px`,
      transform: `rotateY(${0.33*rX}deg) rotateX(${0.33*rY}deg)`,
    };
    
    return style;
  })

  const fgStyle = computed(() => {
    const rX = mousePX.value * 30;
    const rY = mousePY.value * -30;
    const tX = mousePX.value * -40;
    const tY = mousePY.value * -40;
    const style = {
      transform: `rotateY(${0.33*rX}deg) rotateX(${0.33*rY}deg) translateX(${-0.33 * tX}px) translateY(${-0.33 * tY}px)`,
    }
    return style;
  })

  const titleStyle = computed(() => {
    const rX = mousePX.value * 30;
    const rY = mousePY.value * -30;
    const tX = mousePX.value * -40;
    const tY = mousePY.value * -40;
    const style = {
      transform: `rotateY(${0.33*rX}deg) rotateX(${0.33*rY}deg) translateX(${-0.33 * tX}px) translateY(${-0.33 * tY}px)`,
    }
    // if (isHovered.value) {
    //   style.transform += 'scale(1.05)'
    // }
    return style;
  })

  // const cardBgTransform = computed(() => {
  //   const rX = mousePX.value * 30;
  //   const rY = mousePY.value * -30;
  //   const tX = mousePX.value * -40;
  //   const tY = mousePY.value * -40;
  //   const style = {
  //     transform: `rotateY(${rX}deg) rotateX(${rY}deg) translateX(${tX}px) translateY(${tY}px)`,
  //   }
  //   if (isHovered.value) {
  //     style.transform += 'scale(1.02)'
  //   }
  //   return style;
  // })

  const bgStyle = computed(() => {
    return {
      backgroundImage: `url("/src/assets/img/${props.bgImage}")`,
      height: `${cardHeight.value}px`,
    }
  })

  const cardFgImage = computed(() => {
    return {
      backgroundImage: `url("/src/assets/img/${props.fgImage}")`
    }
  })

  const getDimensions = () => {
      clientWidth.value = document.documentElement.clientWidth;
      clientHeight.value = document.documentElement.clientHeight;
    }

  const handleMouseMove = (e: MouseEvent) => {
    mouseX.value = e.pageX - card.value.offsetLeft - width.value / 2;
    mouseY.value = e.pageY - card.value.offsetTop - cardHeight.value / 2;
    isHovered.value = true
  }

  const handleMouseEnter = () => {
    clearTimeout(mouseLeaveDelay.value);
  }

  const handleMouseLeave = () => {
    mouseLeaveDelay.value = setTimeout(()=>{
      mouseX.value = 0;
      mouseY.value = 0;
      isHovered.value = false
    }, 0);
  }

  const getImageHeight = (url: any, cb: any) => {
    const img = new Image();
    img.onload = () => cb(null, img);
    img.onerror = (err) => cb(err);
    img.src = url;
  };


  watch(
    () => clientWidth.value,
    () => {
      getImageHeight(`/src/assets/img/${props.bgImage}`, (err: any, img: any) => {
        cardHeight.value = (img.naturalHeight / img.naturalWidth) * (window.innerWidth -160) / 3;
      });
    },
    { immediate: true },
  )

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
	}
</script>

<template>
  <div class="card-wrapper"
    @mousemove="handleMouseMove"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
    ref="card"
  >
    <!-- :style="[cardHeightStyle]" -->
    <div class="card"
      :style="cardStyle"
    >
      <div class="card-bg" :style="[bgStyle]"></div>
      <img class="card-fg"  :src="`/src/assets/img/${fgImage}`" :style="[fgStyle]">
      <div
        class="gradient"
        :style="gradientStyle"
      />
      <div class="card-info" :style="[titleStyle]">
          {{ title }}
        </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
$hoverEasing: cubic-bezier(0.23, 1, 0.32, 1);
$returnEasing: cubic-bezier(0.445, 0.05, 0.55, 0.95);

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
  
  &:hover {
    .card-info p {
      opacity: 1;
    }
    .card-info, .card-info p {
      transition: 1s $hoverEasing;
    }
    .card-info:after {
      transition: 1s $hoverEasing;
      opacity: 1;
    }
    .card-fg {
      transition: 
        1s $hoverEasing,
    }
    .card {
      transition:
        1s $hoverEasing,
        box-shadow 2s $hoverEasing;
      box-shadow:
        rgba(black, 0.66) 0 30px 60px 0,
        inset #333 0 0 0 5px,
    }
  }
}

.card {
  display: flex;
  align-items: center;
  border-radius: 16px;
  width: 100%;
  position: relative;
  overflow: hidden;
  transition: .3s $returnEasing;
  
  &:hover {
    z-index: 9999;
  }
  &:active {
    transform: scale(1.5)
  }
}

.card-bg {
  position: absolute;
  top: 0px; left: 0px;
  width: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  pointer-events: none;
}

.card-fg {
  // position: absolute;
  // top: -50px;
  // left: 0px;
  width: 100%;
  background-repeat: no-repeat;
  background-position: center;
  pointer-events: none;
  transition:
    .3s $returnEasing;
}

.gradient {
	position: absolute;
	bottom: 0px;
	left: 0px;
	padding: 30px;
	width: calc(100% - 24px);
}

.card-info {
  font-size: 24px;
  margin: 0 24px;
  position: absolute;
  bottom: 20px;
  transition: .3s $returnEasing;
  
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

.card-info h1 {
  display: none;
  font-size: 24px;
  font-weight: 700;
  text-shadow: rgba(black, 0.5) 0 10px 10px;
}
</style>
