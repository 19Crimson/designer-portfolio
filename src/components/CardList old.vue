<script setup lang="ts">
import Card from './Card.vue'

const cards = [
  {
    img: 'after.png',
    'title-color': 'white'
  },
  {
    img: 'after (2).png',
    'title-color': 'red',
    'gradient-color': '255, 255, 255',
  },
  {
    img: 'after.png',
    'title-color': 'white'
  },
  {
    img: 'after (2).png',
    'title-color': 'red',
    'gradient-color': '255, 255, 255',
  },
  {
    img: 'after.png',
    'title-color': 'white'
  },
  {
    img: 'after (2).png',
    'title-color': 'red',
    'gradient-color': '255, 255, 255',
  },
  {
    img: 'after.png',
    'title-color': 'white'
  },
  {
    img: 'after.png',
    'title-color': 'white'
  },
]

const firstColumnCards = cards.filter((_, index) => index % 3 === 0)
const secondColumnCards = cards.filter((_, index) => (index - 1) % 3 === 0)
const thirdColumnCards = cards.filter((_, index) => (index - 2) % 3 === 0)
</script>

<template>
  <div class="card-list-container">
    <div class="card-list-column">
      <Card
        v-for="card in firstColumnCards"
        v-bind="card"
      />
    </div>
    <div class="card-list-column">
      <Card
        v-for="card in secondColumnCards"
        v-bind="card"
      />
    </div>
    <div class="card-list-column">
      <Card
        v-for="card in thirdColumnCards"
        v-bind="card"
      />
    </div>
  </div>
</template>

<style scoped>
.card-list-container {
  height: 100vh;
  display: flex;
}
.card-list-column {
  width: 100%;
}
.card-list-column:nth-child(even) {
  width: 100%;
  margin: 0 2px;
}
</style>
