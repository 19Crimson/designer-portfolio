<script setup lang="ts">
</script>

<template>
  <header>
    <div class="header_content">
      <div class="user_profile">
        <img src="../assets/img/avatar.png"/>
        <div class="username">Nikita Karpinsky</div>
        <a class="about_me" href="https://t.me/karpnsky">About me</a>
      </div>
      <a class="tg_link" href="https://t.me/karpnsky" target="_blank">Let's talk on telegram</a>
    </div>
    <title>When product meets design</title>
  </header>
</template>

<style scoped>
header {
  display: flex;
  flex-direction: column;
  height: 382px;
  padding: 46px 54px 30px 36px;
  background-image : url("../src/assets/img/header_bg.png");
  background-repeat: no-repeat;
  background-size: auto;
}
title {
  display: block;
  font-family: 'Mont';
  font-style: normal;
  font-weight: 700;
  font-size: 105px;
  line-height: 96px;
  color: #2B2B2B;
  text-align: left;
  max-width: 840px;
}
.header_content {
  display: flex;
  justify-content: space-between;
  margin-bottom: 128px;
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
  margin-left: 22px;
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 39px;
  color: #000000;
}
.about_me {
  margin-left: 40px;
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 39px;
  color: #000000;
  opacity: 0.5;
}
.tg_link {
  height: 48px;
  padding: 11px 25px;
  background-color: #FFFFFF;
  color: #000000;
  border: 1px solid #000000;
  border-radius: 50px;
  font-style: normal;
  font-weight: 400;
  font-size: 38px;
  line-height: 47px;
  transition: ease-in-out .3s;
}
.tg_link:hover {
  color:  #1a8ad5;
}
</style>
