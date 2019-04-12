<template lang="pug">
  .page.home
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
          li
            nuxt-link(to="/projects") Projects
          li
            nuxt-link(to="/about") About
          li
            nuxt-link(to="/contact") Contact


</template>

<script>
// import Logo from '~/components/Logo.vue'
import Logo from '~/assets/images/logo-main.svg'
import LogoShadow from '~/assets/images/logo-main-shadow.svg'

export default {
  components: {
    Logo,
    LogoShadow
  }
}
</script>

<style lang="scss">
@import url('https://use.typekit.net/mzr0qwe.css');
body {
  margin: 0;
  font-family: bio-sans
}

.page-enter-active, .page-leave-active {
  transition: opacity .5s ease;
}

.page-enter-active {
  transition-delay: .5s;
}

.page-enter, .page-leave-active {
  opacity: 0;
}

.container {
  max-width: 994px;
  width: 100%;
  padding-left: 32px;
  padding-right: 32px;
  margin: 0 auto;
}
</style>


<style scoped lang="scss">
  .home {
    height: 100vh;
    background: linear-gradient(180deg, #F98430 0%, #FFA63E 100%);
  }

  .container {
    position: relative;
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
    ul {
      list-style: none;
    }

    li {
      margin-bottom: 32px;

      &:last-child {
         margin-bottom: 0;
      }
    }

    a {
      display: block;

      font-size: 88px;
      line-height: 80px;
      letter-spacing: 0.02em;
      text-decoration: none;
      font-weight: bold;

      color: #FFFFFF;
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

  .logo-text {
    font-size: 18px;
    line-height: 32px;
    letter-spacing: 0.01em;

    color: #000105;
  }

  .nav {
    margin-top: 40px;
  }
</style>
