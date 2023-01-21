<script setup lang="ts">
import { scrrollTop } from '@/utils/helpers'
</script>

<template>
  <header class="header">
    <div class="header__plug"/>
    <div class="header__main">
      <div class="header__bg">
        <div class="header__bg-top"></div>
        <div class="header__gradient"></div>
      </div>>
      <div class="header__logo" @click="scrrollTop">
        <img src="@/assets/img/logo.png"/>
        <div class="username">Nikita Karpinsky</div>
      </div>
      <div class="social-links">
        <a class="social-link social-link--tg" href="https://t.me/karpnsky" target="_blank">
          <div class="social-link__text">Tg</div>
        </a>
        <a class="social-link social-link--inst" href="https://www.instagram.com/n.karpnsky/" target="_blank">
          <div class="social-link__text">Inst</div>
        </a>
        <a class="social-link social-link--linked-in" href="https://www.linkedin.com/in/nikita-karpinskiy-07b504211/" target="_blank">
          <div class="social-link__text">LinkedIn</div>
        </a>
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
.header {
  pointer-events: none;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  /* background-image : url("../src/assets/img/header_bg.png"); */
  background-repeat: no-repeat;
  background-size: auto;
}
.header__main {
  width: 100vw;
  position: fixed;
  display: flex;
  justify-content: space-between;
  padding: 40px 0px;
  z-index: 500;
}
.header__bg {
  margin-top: -40px;
  width: 100vw;
  height: 200px;
  position: fixed;
}
.header__bg-top {
  width: 100vw;
  height: 40px;
  background-color: rgb(16, 16, 16);
}
.header__gradient {
  width: 100vw;
  height: 200px;
  background-image: linear-gradient(180deg,
		rgba(16, 16, 16, 1) 0%,
		rgba(16, 16, 16, 0.991353) 6.67%,
		rgba(16, 16, 16, 0.96449) 13.33%,
		rgba(16, 16, 16, 0.91834) 20%,
		rgba(16, 16, 16, 0.852589) 26.67%,
		rgba(16, 16, 16, 0.768225) 33.33%,
		rgba(16, 16, 16, 0.668116) 40%,
		rgba(16, 16, 16, 0.557309) 46.67%,
		rgba(16, 16, 16, 0.442691) 53.33%,
		rgba(16, 16, 16, 0.331884) 60%,
		rgba(16, 16, 16, 0.231775) 66.67%,
		rgba(16, 16, 16, 0.147411) 73.33%,
		rgba(16, 16, 16, 0.0816599) 80%,
		rgba(16, 16, 16, 0.03551) 86.67%,
		rgba(16, 16, 16, 0.0086472) 93.33%,
		rgba(16, 16, 16, 0) 100%);
}
.header__plug {
  margin-bottom: 160px;
}
.header__logo {
  cursor: pointer;
  pointer-events: auto;
  z-index: 500;
  display: flex;
  position: absolute;
  top: 40px;
  left: 28px;
  align-items: center;
  > img {
    z-index: 500;
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
  margin-left: 16px;
  max-width: 180px;
  text-transform: uppercase;
  text-align: left;
  letter-spacing: 2px;
  line-height: 42px;
}
.social-links {
  pointer-events: auto;
  position: absolute;
  right: 40px;
  display: flex;
}
.social-link {
  display: block;
  font-family: SfPro;
  margin-right: 40px;
  font-weight: 560;
  font-size: 36px;
  line-height: 44px;
  font-stretch: expanded;
  color: #ffffff;
  text-decoration: none;
  padding: 16px 32px;
  border: 2px solid #ffffff1c;
  border-radius: 87px;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;

  &__text {
    transition: ease-in-out .2s;
  }

  &:hover {
    .social-link__text {
      opacity: .6;
    }
  }

  &--linked-in {
    background: #B5DEFF;
    color: #000000;
    margin-right: 0;
  }
}
</style>
