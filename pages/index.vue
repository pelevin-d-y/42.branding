<template lang="pug">
  .page.home
    // Tetris
    .container
      .logo-wrapper
        .logo
          .logo-image
            Logo
          .logo-shadow
            LogoShadow
        .logo-text
          | We create the face for the interact
      nav.nav
        ul
          li.nav-item
            nuxt-link.nav-link(to="/projects") Projects
          li.nav-item
            nuxt-link.nav-link(to="/about") About
          li.nav-item
            nuxt-link.nav-link(to="/contact") Contact


</template>

<script>
import Logo from '~/assets/images/logo-main.svg?inline'
import LogoShadow from '~/assets/images/logo-main-shadow.svg?inline'

import Tetris from '~/components/Tetris'

export default {
  components: {
    Logo,
    LogoShadow,
    Tetris
  }
}
</script>

<style lang="scss">

</style>


<style scoped lang="scss">
  .home {
    position: relative;
    height: 100vh;
    min-height: 650px;
    background: linear-gradient(180deg, #3431DC 0%, #615EEE 100%);
  }

  .container {
    position: relative;
    z-index: 10;
    top: 50%;
    transform: translateY(-50%);

    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;

    max-width: 812px;
    width: 100%;
    margin: 0 auto;
  }

  .nav {
    margin-top: 80px;
  }

  .nav-link {
    display: block;

    font-size: 88px;
    line-height: 80px;
    letter-spacing: 0.02em;
    text-decoration: none;
    font-weight: bold;
    color: #FFFFFF;

    transition: all 0.1s linear;

    &:hover {
      -webkit-text-stroke: 2px white;
      color: transparent;
    }
  }

  .nav ul {
    list-style: none;
    padding-left: 45px;
  }

  .nav-item {
    margin-bottom: 55px;

    &:last-child {
        margin-bottom: 0;
    }
  }

  .logo {
    position: relative;
    margin-bottom: 48px;
  }

  .logo-image {
    position: relative;
    z-index: 10;
  }

  .logo-shadow {
    position: absolute;
    top: 57px;
    left: 78px;
    z-index: 9;
  }

  .logo-shadow svg {
    width: 275px;
  }

  .logo-text {
    font-size: 18px;
    line-height: 32px;
    letter-spacing: 0.01em;

    color: #ffffff;
  }

  @media (max-width: 768px) {
    .home {
      height: auto;
      min-height: 100vh;
      padding-bottom: 60px;
      padding-top: 60px;
    }

    .container {
      top: auto;
      transform: translateY(0);
      flex-flow: column nowrap;
      justify-content: center;
    }

    .logo {
      max-width: 250px;
      width: 100%;
      margin-left: auto;
      margin-right: auto;
      margin-bottom: 30px;
    }

    .logo-text {
      text-align: center;
    }

    .logo-shadow svg {
      // max-width: 250px;
      width: 100%;
      height: auto;
    }

    .nav {
      margin-top: 55px;
    }

    .nav ul {
      padding-left: 0;
    }

    .nav-item {
      text-align: center;
      margin-bottom: 16px;
    }

    .nav-link {
      display: inline;
      font-size: 46px;
      line-height: 52px;
    }
  }
</style>
