<script setup lang="ts">
import {
  defineEmits,
  onMounted,
  computed,
  ref,
} from 'vue';

const props = defineProps({
  items: {
    type: Array<string>,
    required: true,
  },
  modelValue: String,
  bgColor: String,
  textColor: String,
  textColorActive: String,
  indicatorColor: String,
});

const tabs = ref<any>([]);

const emit = defineEmits(['update:modelValue']);

function getValueByIndex(index: number) {
  if (props.items && props.items[index]) {
    return props.items[index];
  }
}

function getTabByName(name?: string) {
  const index = props.items.findIndex(tab => tab === name);
  if (props.items && name) {
    return tabs.value[index];
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

const indicatorStyle = computed(() => {
  const tab = getTabByName(props.modelValue);
  return {
    backgroundColor: props.indicatorColor,
    height: `${tab?.clientHeight}px`,
    width: `${tab?.clientWidth}px`,
    left: `${tab?.offsetLeft}px`,
  };
});

const getTabClass = (index: number) => ({
  'project-tabs__tab': true,
  'project-tabs__tab--active': props.modelValue === props.items[index],
});

const getTabStyle = (index: number) => {
  const tab = props.items[index];
  const isActive = tab === props.modelValue;
  return {
    color: isActive ? props.textColorActive : props.textColor,
  };
};

const wrapperStyle = computed(() => ({
  backgroundColor: props.bgColor,
}));
</script>

<template>
  <div
    class="project-tabs__wrapper"
    :style="wrapperStyle"
  >
    <div class="project-tabs">
      <div
        class="project-tabs__indicator"
        :style="indicatorStyle"
      />

      <div
        v-for="(tab, index) in items"
        :ref="el => { tabs[index] = el }"
        :key="index"
        :class="getTabClass(index)"
        :style="getTabStyle(index)"
        @click="handleClickTab(index)"
      >
        {{ tab }}
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.project-tabs {
  display: flex;

  &__tab {
    font-size: 20px;
    font-weight: 500;
    color: #00000070;
    margin-right: 4px;
    cursor: pointer;
    border-radius: 24px;
    padding: 10px 18px;
    transition: ease-in-out 0.2s;
    z-index: 10;
  }

  &__tab--active {
    font-weight: 600;
  }

  &__tab:last-child {
    margin-right: 0px;
  }

  &__indicator {
    position: absolute;
    top: 3px;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.12);
    background-color: #FFFFFF;
    opacity: 1;
    transition: cubic-bezier(0, .79, .33, 1.02) .2s;
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
    padding: 3px;
    background-color: #00000012;
    border-radius: 26px;
    overflow: hidden;
  }
}
</style>
