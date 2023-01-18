<script setup lang="ts">
import {
	defineProps,
	defineEmits,
	ref,
	computed
} from 'vue'

const emit = defineEmits(['close'])

const props = defineProps({
	opened: {
		type: Boolean,
		default: false,
	}
})

const closeHovered = ref(false)

const handleMousedownClose = () => {
	closeHovered.value = true
}

const handleMouseleaveClose = () => {
	closeHovered.value = false
}

const computedCloseClass = computed(() => closeHovered.value ? 'dialog-close--transparent' : '')

const handleClose = () => {
	console.log('close')
	emit('close')
}
</script>

<template>
	<div
		class="dialog"
		:class="opened && 'dialog--active'"
		@click.self="handleClose"
	>
		<div
			class="dialog__inner"
			:class="opened && 'dialog__inner--active'"
		>
			<div class="content-row">
				<div class="content-row__left-cell">
					<div class="test-content"/>
				</div>
				<div class="content-row__right-cell">
					<div class="test-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
				</div>
			</div>

		</div>
		<div
			class="dialog-close"
			:class="computedCloseClass"
			@click.self="handleClose"
			@mousedown="handleMousedownClose"
			@mouseleave="handleMouseleaveClose"
		/>
	</div>
</template>

<style scoped lang="scss">
.test-content {
	width: 100%;
	height: 1500px;
	background-color: green;
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
.dialog {
	// display: none;
	visibility: hidden;
	height: 2000px;
	padding: 150px;
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	background-color: rgba(16, 16, 16, 0.1);
	cursor: pointer;
	transition: ease-in-out 0.3s;
	z-index: 1000;

	&--active {
		visibility: visible;
		display: block;
		backdrop-filter: blur(15px);

		.dialog-close {
			animation: scaleUp 0.5s
				cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
		}
		.dialog-close:before, .dialog-close:after {
			display: block;
		}
	}

	&__inner {
		padding: 20px;
		display: flex;
		flex-direction: column;
		align-items: center;
		transform: scale(0);
		border-radius: 16px;
		cursor: default;
		background-color: white;
		width: 100%;
		height: 100%;
		overflow-y: auto;
		animation: scaleDown .5s
			cubic-bezier(0.165, 0.840, 0.440, 1.000) forwards;

		&--active {
			transform: scale(1);
			animation: scaleUp 0.5s
				cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
		}
	}

	&-close {
		cursor: pointer;
		position: absolute;
		left: 40px;
		top: 40px;
		width: 40px;
		height: 40px;
		animation: scaleDown .5s
			cubic-bezier(0.165, 0.840, 0.440, 1.000) forwards;
	}

	&-close:before, &-close:after {
		display: none;
		content: "";
		position: absolute;
    top: 16px;
    right: 8px;
		width: 24px;
		height: 4px;
		background: rgb(255, 255, 255);
	}

	&-close:before {
		transform: rotate(45deg);
	}

	&-close:after {
		transform: rotate(-45deg);
	}

	&-close--transparent:before, &-close--transparent:after {
		opacity: 80%;
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
