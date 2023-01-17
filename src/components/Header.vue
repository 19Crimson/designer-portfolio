<script setup lang="ts">
  import TypeWriter from './Typewriter.vue';

  const keywords = [
    'design',
    'CJM',
    'processes',
    'identity',
    'accessibility',
    'aha-moment',
    'growth',
    'insights',
    'クスコム旅マップ',
    'プロセ身元',
    '图什尼克',
    'xác thực',
    'barrierefreiheit',
    'процессы',
    'дизайн',
    'աճը',
    'processus',
    'identità',
    'postřehy'
  ]

  const colors = [
    '#FFB9AA',
    '#F2FDAE',
    '#DAC3FF',
    '#7DE3E8',
    '#FFEB8C',
    '#FBD0FF',
  ]
</script>

<template>
  <header class="header">
    <div class="header_content">
      <div class="user_profile">
        <img src="../assets/img/avatar.png"/>
        <div class="username">Nikita Karpinsky</div>
      </div>
      <a class="tg_link" href="https://t.me/karpnsky" target="_blank">
        Let's talk on telegram
      </a>
    </div>
    <div class="header-title" >When product</div>
    <div class="header-title header-title-suffix" >
      meets&nbsp;
      <type-writer :value="keywords" :colors="colors"/>
    </div>
  </header>
</template>

<style scoped lang="scss">
.header {
  color: #ffffff;
  display: flex;
  flex-direction: column;
  height: 382px;
  padding: 40px;
  /* background-image : url("../src/assets/img/header_bg.png"); */
  background-repeat: no-repeat;
  background-size: auto;
}
.header-title {
  font-family: SfPro;
  font-style: normal;
  font-weight: 650;
  font-size: 96px;
  line-height: 104px;
  font-stretch: expanded;
  text-align: left;
  max-width: 840px;

  &-suffix {
    display: flex;
  }
}
.header_content {
  display: flex;
  justify-content: space-between;
  margin-bottom: 80px;
}
.user_profile{
  display: flex;
  align-items: center;
}
a {
  text-decoration: none;
  white-space: nowrap;
}
.username {
  font-family: 'Mont';
  margin-left: 22px;
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
}
.tg_link {
  font-family: 'Mont';
  height: 48px;
  padding: 11px 25px;
  background-color: #FFFFFF;
  color: #000000;
  border: 1px solid #000000;
  border-radius: 50px;
  font-style: normal;
  font-weight: 400;
  font-size: 38px;
  transition: ease-in-out .3s;
}
.tg_link:hover {
  color:  #1a8ad5;
}
</style>
