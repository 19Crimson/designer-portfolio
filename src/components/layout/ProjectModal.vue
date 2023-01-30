<script setup lang="ts">
import {
  defineEmits,
  computed,
  watch,
  ref,
} from 'vue';
import { CloseButton } from '@/components';

const emit = defineEmits(['close']);

const props = defineProps({
  opened: {
    type: Boolean,
    default: false,
  },
  bgImage: String,
});

// const inner = ref();

// watch(
//   () => props.opened,
//   () => {
//     if (props.opened) {
//       inner.value.scrollTo(0, 0);
//     }
//   }
// );

const handleClose = () => {
  emit('close');
};

const overlayClass = computed(() => ({
  'overlay': true,
  'overlay--active': props.opened,
}));

const overlayInnerClass = computed(() => ({
  'overlay__inner': true,
  'overlay__inner--active': props.opened,
}));

const bgStyle = computed(() => ({
  ...(props.bgImage && { backgroundImage: `url("/src/assets/img/${props.bgImage}")` }),
}));
</script>

<template>
	<div
		:class="overlayClass"
		@click.self="handleClose"
	>
		<div
			class="overlay__inner"
			:class="overlayInnerClass"
      :style="bgStyle"
    >
      <CloseButton
        class="overlay__close"
        @click="handleClose"
      />
      <slot/>
		</div>
	</div>
</template>

<style scoped lang="scss">
.test-text {
	font-family: SfPro;
	padding: 20px;
}
.overlay {
  position: fixed;
  overflow-y: scroll;
  height: 100%;
  width: 100%;
	visibility: hidden;
	padding: 100px;
	background-color: rgba(16, 16, 16, 0.1);
	cursor: pointer;
	z-index: 1000;
	transition: ease-in-out 0.3s;

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
			animation: scaleUp .5s
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
