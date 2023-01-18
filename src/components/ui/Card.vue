<script setup lang="ts">
	const props = defineProps({
		img: String,
		titleColor: String,
		gradientColor: {
			type: String,
			default: '0, 0, 0'
		},
	})


	const cardStyle = {
		color: props.titleColor
	}

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
	<div class="card_wrapper">
		<img
      class="card_image"
      :src="`/src/assets/img/${props.img}`"
    >
		<div
      class="gradient"
      :style="gradientStyle"
    >
			<div
        class="card_title"
        :style="cardStyle"
      >
				Текст
			</div>
		</div>
	</div>
</template>

<style scoped>
.card_wrapper {
	position: relative;
	width: 100%;
	text-align: left;
  margin-bottom: 2px;
  transition: ease-in-out .3s;
}
.card_wrapper:hover {
  z-index: 10;
  transform: scale(1.05); 
}
.card_title {
	font-family: Mont;
	font-size: 24px;
}
.card_image {
  width: 100%;
  display: block;
  transition: ease-in-out .3s;
}
.gradient {
	position: absolute;
	bottom: 0px;
	left: 0px;
	padding: 12px;
	width: calc(100% - 24px);
}
</style>
