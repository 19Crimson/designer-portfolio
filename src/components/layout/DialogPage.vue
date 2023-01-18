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
		:class="opened ? 'dialog--active' : ''"
		@click.self="handleClose"
	>
		<div class="dialog__inner" :class="opened ? 'dialog__inner--active' : ''">
			<div
				class="dialog-close"
				:class="computedCloseClass"
				@click.self="handleClose"
				@mousedown="handleMousedownClose"
				@mouseleave="handleMouseleaveClose"
			/>
		</div>
	</div>
</template>

<style scoped lang="scss">
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
	}

	&__inner {		
		visibility: hidden;
		border-radius: 16px;
		cursor: default;
		background-color: white;
		width: 100%;
		height: 100%;
		overflow-y: auto;
		transition: ease-in-out 0.5s;
		animation: scaleBack .5s cubic-bezier(0.165, 0.840, 0.440, 1.000) forwards;

		&--active {
			visibility: visible;
			// transition: ease-in-out 0.5s;
			animation: scaleForward 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
		}
	}

	&-close {
		cursor: pointer;
		position: absolute;
		left: 40px;
		top: 40px;
		width: 40px;
		height: 40px;
	}

	&-close:before, &-close:after {
		content: "";
		position: absolute;
		left: 40px;
		top: 40px;
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

	&-close--transparent {
		opacity: 80%;
	}

	@keyframes scaleForward {
		0% {
			transform:scale(.85);
		}
		100% {
			transform:scale(1);
		}
	}

	@keyframes scaleBack {
		0% {
			transform:scale(1);
		}
		100% {
			transform:scale(.85);
		}
	}
}
</style>
