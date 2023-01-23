<script setup lang="ts">
import {
	defineProps,
	defineEmits,
} from 'vue'
import CloseButton from '@/components/ui/CloseButton.vue'

const emit = defineEmits(['close'])
defineProps({
	opened: {
		type: Boolean,
		default: false,
	}
})

const handleClose = () => {
	emit('close')
}
</script>

<template>
	<div
		class="overlay"
		:class="opened && 'overlay--active'"
		@click.self="handleClose"
	>
		<div
			class="overlay__inner"
			:class="opened && 'overlay__inner--active'"
		>
      <div class="overlay__close" >
        <CloseButton @click="handleClose"/>
      </div>
			<div class="content-row">
				<div class="content-row__left-cell">
					<div class="test-content"/>
				</div>
				<div class="content-row__right-cell">
					<div class="test-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped lang="scss">
.test-content {
	width: 100%;
	height: 10000px;
	background-image: url("../src/assets/img/blurtest.jpg");
}
.content-row {
	width: 100%;
	display: flex;

	&__left-cell, &__right-cell {
		width: 100%;
		max-width: 50%;

		&--third {
			max-width: 33%;
		}
	}
}
.test-text {
	font-family: SfPro;
	padding: 20px;
}
.overlay {
  position: fixed;
  overflow-y: scroll;
  height: 100%;
	// display: none;
	visibility: hidden;
	padding: 100px;
	background-color: rgba(16, 16, 16, 0.1);
	cursor: pointer;
	transition: ease-in-out 0.3s;
	z-index: 1000;

  &__close {
    position: fixed;
    top: 22px;
    left: 22px;
    width: 100%;
    height: 100%;
    max-width: 40px;
    max-height: 40px;
  }

	&--active {
		visibility: visible;
		display: block;
		backdrop-filter: blur(15px);
	}

	&__inner {
    overflow: hidden;
		display: flex;
		flex-direction: column;
		align-items: center;
		transform: scale(0);
		border-radius: 20px;
		cursor: default;
		background-color: white;
		width: 100%;
		animation: scaleDown .5s
			cubic-bezier(0.165, 0.840, 0.440, 1.000) forwards;

		&--active {
			transform: scale(1);
			animation: scaleUp 0.5s
				cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
		}
	}

  @keyframes scaleUp {
    0% {
      transform:scale(.8) translateY(1000px);
      opacity:0;
    }
    100% {
      transform:scale(1) translateY(0px);
      opacity:1;
    }
  }
  
  @keyframes scaleDown {
    0% {
      transform:scale(1) translateY(0px);
      opacity:1;
    }
    100% {
      transform:scale(.8) translateY(1000px);
      opacity:0;
    }
  }
}
</style>
