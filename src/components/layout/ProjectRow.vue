<script setup lang="ts">
import { defineProps, computed } from 'vue'

const props = defineProps({
  folder: String,
  bgImage: String,
  bgColor: String,
  noBgRepeat: Boolean,
})

const headerStyle = computed(() => ({
  ...(props.bgImage && { backgroundImage: `url("/src/assets/img/${props.folder}/${props.bgImage}")` }),
  backgroundColor: props.bgColor,
  backgroundRepeat: props.noBgRepeat ? 'no-repeat' : 'repeat',
}))
</script>

<template>
  <div class="project-row__wrapper" :style="headerStyle">
    <div class="project-row" :style="headerStyle">
      <slot/>
    </div>
  </div>
</template>

<style scoped lang="scss">
.project-row {
  display: flex;
  justify-content: space-between;

  &__wrapper {
    display: flex;
    padding: 60px 0px;
    width: 100%;
    background-repeat: repeat;
    align-items: center;
    justify-content: center;
  }
}
</style>
