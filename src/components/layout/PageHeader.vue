<script setup lang="ts">
import { scrrollTop } from '@/utils/helpers';
import { SocialLink } from '@/components';
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
        <SocialLink link-type="tg" />
        <SocialLink link-type="inst" />
        <SocialLink link-type="linkedIn" />
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
  background-color: rgb(7, 7, 7);
}
.header__gradient {
  width: 100vw;
  height: 200px;
  background-image: linear-gradient(180deg,
		rgba(7, 7, 7, 1) 0%,
		rgba(7, 7, 7, 0.991353) 6.67%,
		rgba(7, 7, 7, 0.96449) 13.33%,
		rgba(7, 7, 7, 0.91834) 20%,
		rgba(7, 7, 7, 0.852589) 26.67%,
		rgba(7, 7, 7, 0.768225) 33.33%,
		rgba(7, 7, 7, 0.668116) 40%,
		rgba(7, 7, 7, 0.557309) 46.67%,
		rgba(7, 7, 7, 0.442691) 53.33%,
		rgba(7, 7, 7, 0.331884) 60%,
		rgba(7, 7, 7, 0.231775) 66.67%,
		rgba(7, 7, 7, 0.147411) 73.33%,
		rgba(7, 7, 7, 0.0816599) 80%,
		rgba(7, 7, 7, 0.03551) 86.67%,
		rgba(7, 7, 7, 0.0086472) 93.33%,
		rgba(7, 7, 7, 0) 100%);
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
  transition: ease-in-out .2s;
  > img {
    z-index: 500;
  }
  &:hover {
    opacity: .7;
  }
}
a {
  text-decoration: none;
  white-space: nowrap;
}
.username {
  user-select: none;
  z-index: 500;
  font-family: 'SFPro';
  font-stretch: expanded;
  font-weight: 600;
  font-size: 32px;
  margin-left: 16px;
  max-width: 180px;
  text-align: left;
  letter-spacing: 2px;
  line-height: 36px;
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
  margin-right: 20px;
  font-weight: 400;
  font-size: 32px;
  line-height: 44px;
  font-stretch: expanded;
  
  color: #ffffff;
  text-decoration: none;
  padding: 8px 22px;
  border: 2px solid #ffffff29;
  border-radius: 87px;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;

  &__text {
    transition: ease-in-out .2s;
  }

  &:hover {
    .social-link__text {
      witdh: fixed;
      opacity: .7;
    }
  }

  &--tg {
    > .social-link__text {
      width: 46px;
    }
  }

  &--inst {
    > .social-link__text {
      width: 70px;
    }
  }

  &--linked-in {
    background: #ffffff;
    font-weight: 470;
    color: #000000;
    margin-right: 0;

    > .social-link__text {
      width: 160px;
    }
  }
}
</style>
