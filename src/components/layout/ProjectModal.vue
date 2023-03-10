<script setup lang="ts">
import {
  computed,
  ref,
  inject,
  watchEffect,
  Ref,
} from 'vue';
import { CloseButton } from '@/components';

const props = defineProps({
  bgImage: String,
  smallScreen: Boolean
});

const project = inject<string>('project');
const showModal = inject<Ref<boolean>>('modalOpened');
const showBlur = ref<boolean|undefined>(false);

const displayCondition = ref(showModal?.value);

watchEffect(() => {
  // Wait animation ends
  setTimeout(
    () => displayCondition.value = showModal?.value,
    showModal?.value ? 0 : 300
  );
  setTimeout(() => showBlur.value = showModal?.value, 5);
});

const handleClose = () => {
  if (!showModal) {
    return;
  }
  showModal.value = false;
};

const overlayClass = computed(() => ({
  'overlay': true,
  'overlay--active': showBlur?.value,
  'overlay--mobile': props.smallScreen
}));

const overlayInnerClass = computed(() => ({
  'overlay__inner': true,
  'overlay__inner--active': showModal?.value,
  'overlay__inner--mobile': props.smallScreen
}));

const bgStyle = computed(() => ({
  ...(props.bgImage && { backgroundImage: `url("/projects/${project}/${props.bgImage}")` }),
}));
</script>

<template>
    <div
      v-if="displayCondition"
      :class="overlayClass"
      @click.self="handleClose"
    >
      <div
        :class="overlayInnerClass"
        :style="bgStyle"
      >
        <CloseButton
          class="overlay__close"
          @click="handleClose"
        />
        <slot />
      </div>
    </div>
</template>

<style scoped lang="scss">
.overlay {
  position: fixed;
  overflow-y: scroll;
  overscroll-behavior: contain;
  height: 100%;
  width: 100%;
	padding: 60px;
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
		backdrop-filter: blur(15px);
    background-color: rgba(7, 7, 7, 0.6);
	}

  &--mobile {
    padding: 0px;
  }

	&__inner {
    overflow: hidden;
		display: flex;
		flex-direction: column;
		align-items: center;
		transform: scale(0);
		border-radius: 20px;
		cursor: auto;
		background-color: white;
		width: 100%;
		animation: scaleDown .5s
			cubic-bezier(0.165, 0.840, 0.440, 1.000) forwards;
    transition: 1s;

		&--active {
			transform: scale(1);
			animation: scaleUp .5s
				cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
		}

    &--mobile {
			border-radius: 0px;
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
