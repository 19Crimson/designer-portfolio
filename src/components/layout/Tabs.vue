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

const indicatorClass = computed(() => ({
  'project-tabs__indicator': true,
  'project-tabs__indicator--right': props.modelValue === props.items[1],
}));
</script>

<template>
  <div
    class="project-tabs__wrapper"
    :style="wrapperStyle"
  >
    <div class="project-tabs">
      <div
        :class="indicatorClass"
        :style="indicatorStyle"
      />

      <div
        v-for="(tab, index) in items"
        :ref="el => { tabs[index] = el }"
        :key="index"
        class="project-tabs__tab"
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
    font-weight: 600;
    color: #00000070;
    margin-right: 4px;
    cursor: pointer;
    border-radius: 24px;
    padding: 10px 18px;
    z-index: 10;
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
