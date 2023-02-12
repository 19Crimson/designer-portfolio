<script setup lang="ts">
const emit = defineEmits(['click']);

const handleClick = () => {
  emit('click');
};
</script>

<template>
  <div
    class="close-button"
    @click="handleClick"
  >
    <img
      class="close-button__icon"
      @click="handleClick"
      src="/src/assets/img/close-icon.svg"
    />
  </div>
</template>

<style scoped lang="scss">
.close-button {
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  max-height: 44px;
  max-width: 44px;
  border-radius: 50%;
  cursor: pointer;
  transition: .2s ease-in-out;
  background-color: rgba(85, 85, 85, .4);
  border: 1px solid rgba(255, 255, 255, 0.06);
  backdrop-filter: blur(15px);

  &__icon {
    opacity: 1;
    position: absolute;
    top: 7px;
    left: 7px;
    transition: ease-in-out .5;
  }

  &:hover {
    .close-button__icon {
      opacity: 0.8;
    }
  }
}
</style>
