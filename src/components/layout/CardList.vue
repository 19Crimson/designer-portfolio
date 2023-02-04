<script setup lang="ts">
import { ParallaxCard } from '@/components';
import Projects from '@/assets/configs/projects';

const emit = defineEmits(['open']);

// Sorting content by columns
const firstColumnItems = Projects.filter((_, index) => index % 3 === 0);
const secondColumnItems = Projects.filter((_, index) => (index - 1) % 3 === 0);
const thirdColumnItems = Projects.filter((_, index) => (index - 2) % 3 === 0);

const handleClickCard = (project?: string) => {
  emit('open', project);
};
</script>

<template>
  <div class="card-list-container">
    <div class="card-list-column">
      <ParallaxCard
        v-for="(card, id) in firstColumnItems"
        :key="id"
        v-bind="card"
        @click="() => handleClickCard(card.project)"
      />
    </div>

    <div class="card-list-column">
      <ParallaxCard
        v-for="(card, id) in secondColumnItems"
        :key="id"
        v-bind="card"
        @click="() => handleClickCard(card.project)"
      />
    </div>

    <div class="card-list-column">
      <ParallaxCard
        v-for="(card, id) in thirdColumnItems"
        :key="id"
        v-bind="card"
        @click="() => handleClickCard(card.project)"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
$hoverEasing: cubic-bezier(0.23, 1, 0.32, 1);
$returnEasing: cubic-bezier(0.445, 0.05, 0.55, 0.95);

.title {
  font-family: "Mont";
  font-size: 24px;
  font-weight: 700;
  color: #5D4037;
  text-align: center;
}

h1+p, p+p {
  margin-top: 10px;
}

.card-list-container {
  display: flex;
  margin: 0 40px;
}

.card-list-column {
  width: 100%;
  &:hover {
    z-index: 100;
  }
}
.card-list-column:nth-child(even) {
  margin: 0 40px;
}
</style>
