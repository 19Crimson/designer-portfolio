<script setup lang="ts">
import Typewriter from '@/components/layout/Typewriter.vue';
</script>

<template>
  <header class="header">
    <div class="header-plug"/>
    <div class="header-main">
      <div class="user_profile">
        <img src="@/assets/img/logo.png"/>
        <div class="username">Nikita Karpinsky</div>
      </div>
      <a class="tg_link" href="https://t.me/karpnsky" target="_blank">
        Let's talk on telegram 🙂
      </a>
    </div>
    <div class="header-title" >When product</div>
    <div class="header-title header-title-suffix" >
      meets&nbsp;
      <typewriter/>
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
  max-height: 342px;
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
    margin-bottom: 34px;
  }
}
.header-main {
  width: calc(100% - 80px);
  position: relative;
  position: fixed;
  display: flex;
  justify-content: space-between;
  margin-bottom: 120px;
  z-index: 500;
}
.header-plug {
  margin-bottom: 120px;
}
.user_profile {
  z-index: 500;
  display: flex;
  position: relative;
  align-items: center;
  > img {
    position: absolute;
    z-index: 500;
    left: -12px;
  }
}
a {
  text-decoration: none;
  white-space: nowrap;
}
.username {
  user-select: none;
  z-index: 500;
  font-family: 'Mont';
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  position: absolute;
  left: 94px;
  text-transform: uppercase;
  text-align: left;
  letter-spacing: 80%;
  line-height: 42px;
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
  color: #ffffff;
  font-size: 18px;
  text-decoration: none;
  padding: 10px 12px 10px 19px;
  background: #272727;
  border: 2px solid #555555;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  border-radius: 32px;
  line-height: 30px;
  font-weight: bold;
}
.tg_link:hover {
  opacity: .8;
}
</style>
