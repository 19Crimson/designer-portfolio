<script setup lang="ts">
import {
  PropType,
  defineEmits,
  onMounted,
  computed,
  ref,
} from 'vue';

export type ProjectTab = {
  value: string,
  title: string,
  textColor?: string,
  textColorActive?: string,
}

export type TabsItems = Array<ProjectTab>

const props = defineProps({
  items: {
    type: Array as PropType<TabsItems>,
    required: true,
  },
  modelValue: String,
  bgColor: String,
  activeColor: String,
});

const tab = ref<HTMLElement>();

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


const indicatorStyle = () => {
  const isAvtive = props.modelValue === tab.value;
  return {
    backgroundColor:  props.activeColor,
    height: tab.value?.clientHeight,
    width: tab.value?.clientWidth,
    left: tab.value?.offsetLeft,
  };
};

const wrapperStyle = computed(() => ({
  backgroundColor: props.bgColor,
}));

const indicatorClass = computed(() => ({
  'project-tabs__indicator': true,
  'project-tabs__indicator--right': props.modelValue === props.items[1]?.value,
}));
</script>

<template>
  <div class="project-tabs__wrapper" :style="wrapperStyle">
    <div class="project-tabs">
      <div
        ref="tab"
        v-for="(tab, index) in items"
        :key="index"
        class="project-tabs__tab"
        @click="handleClickTab(index)"
      >
        {{ tab.title }}
      </div>

      <div
        :class="indicatorClass"
        :style="indicatorStyle"
      >
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.project-tabs {
  display: flex;

  &__tab {
    font-size: 20px;
    font-weight: 600;
    color: #00000070;
    margin-right: 4px;
    transition: ease-in-out .3s;
    cursor: pointer;
    border-radius: 24px;
    padding: 10px 18px;

    :last-child {
      margin-right: 0;
    }
  }

  &__indicator {
    width: 100px;
    height: 50px;
    position: absolute;
    top: 4px;
    left: 4px;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.12);
    background-color: #FFFFFF;
    opacity: 1;
    transition: ease-in-out .3s;
    cursor: pointer;
    border-radius: 24px;
    padding: 10px 18px;
  }

  &__wrapper {
    position: relative;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 40px 0;
    padding: 4px;
    background-color: #00000012;
    border-radius: 24px;
    overflow: hidden;
  }
}
</style>
