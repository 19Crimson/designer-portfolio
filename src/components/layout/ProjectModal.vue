<script setup lang="ts">
import {
  computed,
  ref,
  inject,
  watchEffect,
  Ref,
} from 'vue';
import { CloseButton } from '@/components';

const emit = defineEmits(['close']);

const props = defineProps({
  bgImage: String,
});


const folder = inject<string>('folder');
const opened = inject<Ref<boolean>>('modalOpened');

console.log('dfdf', folder, opened?.value);

const displayCondition = ref(opened?.value);

watchEffect(() => {
  setTimeout(
    () => displayCondition.value = opened?.value,
    opened?.value ? 0 : 300
  );
});

const handleClose = () => {
  emit('close');
};

const overlayClass = computed(() => ({
  'overlay': true,
  'overlay--active': opened?.value,
}));

const overlayInnerClass = computed(() => ({
  'overlay__inner': true,
  'overlay__inner--active': opened?.value,
}));

const bgStyle = computed(() => ({
  ...(props.bgImage && { backgroundImage: `url("/projects/${folder}/${props.bgImage}")` }),
}));
</script>

<template>
  <!-- <Transition appear> -->
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
  <!-- </Transition> -->
</template>

<style scoped lang="scss">
.overlay {
  position: fixed;
  overflow-y: scroll;
  overscroll-behavior: contain;
  height: 100%;
  width: 100%;
	padding: 60px;
	background-color: rgba(7, 7, 7, 0.1);
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
