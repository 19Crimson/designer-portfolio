<script setup lang="ts">
import CardParallax from '@/components/ui/CardParallax.vue'
import { defineEmits } from 'vue'

const emit = defineEmits(['openCard'])

const cards = [
  {
    bgImage: 'bg.png',
    fgImage: 'fg.png',
    title: 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum ',
    titleColor: 'white',
  },
  {
    bgImage: 'bg-1.png',
    fgImage: 'fg-1.png',
    title: 'Beaches',
    titleColor: 'white',
  },
  {
    bgImage: 'bg-2.png',
    fgImage: 'fg-2.png',
    title: 'Beaches',
    titleColor: 'white',
  },
  {
    bgImage: 'bg-3.png',
    fgImage: 'fg-3.png',
    title: 'Trees',
    titleColor: 'white',
  },
  {
    bgImage: 'bg-4.png',
    fgImage: 'fg-4.png',
    title: 'Trees',
    titleColor: 'white',
    'gradient-color': '77, 45, 45',
  },
  {
    bgImage: 'bg-5.png',
    fgImage: 'fg-5.png',
    title: 'Trees',
    titleColor: 'white',
  },
  {
    bgImage: 'bg.png',
    fgImage: 'fg.png',
    title: 'Canyons',
    titleColor: 'white',
  },
  {
    bgImage: 'bg-1.png',
    fgImage: 'fg-1.png',
    title: 'Beaches',
    titleColor: 'white',
  },
  {
    bgImage: 'bg-2.png',
    fgImage: 'fg-2.png',
    title: 'Beaches',
    titleColor: 'white',
  },
  {
    bgImage: 'bg-3.png',
    fgImage: 'fg-3.png',
    title: 'Trees',
    titleColor: 'white',
  },
  {
    bgImage: 'bg-4.png',
    fgImage: 'fg-4.png',
    title: 'Trees',
    titleColor: 'white',
    'gradient-color': '77, 45, 45',
  },
  {
    bgImage: 'bg-5.png',
    fgImage: 'fg-5.png',
    title: 'Trees',
    titleColor: 'white',
  },
  {
    bgImage: 'bg.png',
    fgImage: 'fg.png',
    title: 'Canyons',
    titleColor: 'white',
  },
  {
    bgImage: 'bg-1.png',
    fgImage: 'fg-1.png',
    title: 'Beaches',
    titleColor: 'white',
  },
  {
    bgImage: 'bg-2.png',
    fgImage: 'fg-2.png',
    title: 'Beaches',
    titleColor: 'white',
  },
  {
    bgImage: 'bg-3.png',
    fgImage: 'fg-3.png',
    title: 'Trees',
    titleColor: 'white',
  },
  {
    bgImage: 'bg-4.png',
    fgImage: 'fg-4.png',
    title: 'Trees',
    titleColor: 'white',
    'gradient-color': '77, 45, 45',
  },
  {
    bgImage: 'bg-5.png',
    fgImage: 'fg-5.png',
    title: 'Trees',
    titleColor: 'white',
  },
]

const firstColumnCards = cards.filter((_, index) => index % 3 === 0)
const secondColumnCards = cards.filter((_, index) => (index - 1) % 3 === 0)
const thirdColumnCards = cards.filter((_, index) => (index - 2) % 3 === 0)

const handleClickCard = (id: number) => {
  console.log('click')
  emit('openCard', id)
}
</script>

<template>
  <div class="card-list-container">
    <div class="card-list-column">
      <CardParallax
        v-for="(card, id) in firstColumnCards"
        v-bind="card"
        @click="() => handleClickCard(id)"
      />
    </div>

    <div class="card-list-column">
      <CardParallax
        v-for="(card, id) in secondColumnCards"
        v-bind="card"
        @click="() => handleClickCard(id)"
      />
    </div>

    <div class="card-list-column">
      <CardParallax
        v-for="(card, id) in thirdColumnCards"
        v-bind="card"
        @click="() => handleClickCard(id)"
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
