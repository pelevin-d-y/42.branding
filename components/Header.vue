<template lang="pug">
  .header(:class="{'menu-open': openMenu}")
    .burger(@click="toggleMenu")
      Burger
    .overlay(@click="toggleMenu")
    .container
      router-link.logo(to="/")
        Logo
      nav.nav
        ul.menu
          li.menu-item(@click="toggleMenu")
            router-link.nav-link(to="/projects")
              | Projects
          li.menu-item(@click="toggleMenu")
            router-link.nav-link(to="/about")
              | About
          li.menu-item(@click="toggleMenu")
            router-link.nav-link(to="/Contact")
              | Contact
      .close-menu(@click="toggleMenu")
        Close
</template>

<script>
import Logo from '~/assets/images/logo.svg?inline'
import Burger from '~/assets/images/burger.svg?inline'
import Close from '~/assets/images/close.svg?inline'

export default {
  components: {
    Logo,
    Burger,
    Close
  },

  data() {
    return {
      openMenu: false
    }
  },

  methods: {
    toggleMenu() {
      this.openMenu = !this.openMenu
    }
  }
}
</script>

<style scoped lang="scss">
  .header {
    border-bottom: 0.5px solid #DBDBDB;
  }

  .container {
    height: 80px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    max-width: 100%;
    padding-left: calc(112/1152*100%);
    padding-right: calc(112/1152*100%);
  }

  .overlay {
    display: none;
  }

  .burger {
    display: none;
  }

  .close-menu {
    display: none;
  }

  .menu {
    display: flex;
    flex-flow: row nowrap;
    list-style: none;
  }

  .menu-item {
    margin-right: 24px;
    &:last-child {
      margin-right: 0;
    }
  }

  .nav-link {
    text-decoration: none;
    font-size: 21px;
    line-height: 32px;
    text-align: center;
    letter-spacing: 0.02em;
    color: #000105;
    transition: color 0.1s linear;

    &:hover {
      color: #3431DC;
    }
  }

  .nuxt-link-active {
    color: #DBDBDB;
  }

  .burger-path-1,
  .burger-path-2 {
    fill:#FFA63E;
  }

  .close-path-1,
  .close-path-2 {
    fill:#FFA63E;
  }

  @media (max-width: 768px) {
    .header {
      position: fixed;
      left: 0;
      top: 0;
      z-index: 100;

      border-bottom: none;
    }

    .container {
      position: fixed;
      top: 0;
      left: 0;
      z-index: 102;
      transform: translateX(-100%);

      flex-flow: column nowrap;
      justify-content: flex-start;
      align-items: flex-start;

      height: 100%;
      width: 167px;
      padding-top: 24px;
      padding-left: 23px;
      padding-right: 12px;
      padding-bottom: 32px;

      background: #ffffff;
      transition: transform 0.2s linear;
    }

    .menu-open .container {
      transform: translateX(0);
    }

    .overlay {
      position: fixed;
      left: 0;
      top: 0;
      z-index: 101;
      transform: translateX(-100%);

      display: block;
      width: 100%;
      height: 100%;

      background: rgba(0, 1, 5, 0.25);

      transition: transform 0.2s 0s linear;
    }

    .menu-open .overlay {
      transform: translateX(0);
      transition: transform 0.2s 0.1s linear;
    }

    .burger {
      position: fixed;
      top: 24px;
      left: 24px;

      display: block;
    }

    .close-menu {
      display: block;
    }

    .logo {
      margin-bottom: 117px;
    }

    .menu {
      display: flex;
      flex-flow: column nowrap;
      padding-left: 0;
    }

    .menu-item {
      margin-bottom: 16px;
    }

    .nav-link {
      font-size: 18px;
      line-height: 24px;
      letter-spacing: 0.02em;
    }

    .close-menu {
      margin-top: auto;
    }
  }
</style>
