<script setup lang="ts">
import {
  PropType,
  defineEmits,
  onMounted,
  computed,
} from 'vue';

export type ProjectTab = {
  value: string,
  title: string,
}

export type ProjectTabsItems = Array<ProjectTab>

const props = defineProps({
  items: {
    type: Array as PropType<ProjectTabsItems>,
    required: true,
  },
  modelValue: String,
  color: String,
});

const emit = defineEmits(['update:modelValue']);

function getValueByIndex(index: number) {
  if (props.items && props.items[index]) {
    return props.items[index]?.value;
  }
}

onMounted(() => {
  if (!props.modelValue && props.items) {
    emit('update:modelValue', getValueByIndex(0));
  }
});

const handleClickTab = (index: number) => {
  emit('update:modelValue', getValueByIndex(index));
};

const tabStyle = computed(() => ({
  color: props.color,
}));

const getTabClass = (index: number) => ({
  'project-tabs__tab': true,
  'project-tabs__tab--active': getValueByIndex(index) === props.modelValue,
});
</script>

<template>
  <div class="project-tabs__wrapper">
    <div class="project-tabs">
      <div
        v-for="(tab, index) in items"
        :key="index"
        :style="[tabStyle]"
        :class="getTabClass(index)"
        @click="handleClickTab(index)"
      >
        {{ tab.title }}
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.project-tabs {
  display: flex;
  :last-child {
    margin: 0;
  }

  &__tab {
    font-size: 28px;
    font-weight: 600;
    color: #000000;
    opacity: 0.3;
    margin-right: 30px;
    transition: ease-in-out .3s;
    cursor: pointer;
  }

  &__tab--active {
    opacity: 1;
  }

  &__wrapper {
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 40px 0;
  }
}
</style>
