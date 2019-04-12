<template lang="pug">
  .header
    .container
      router-link.logo(to="/")
        Logo
      nav.nav
        ul
          li
            router-link.nav-link(to="/projects")
              | Projects
          li
            router-link.nav-link(to="/about")
              | About
          li
            router-link.nav-link(to="/Contact")
              | Contact

</template>

<script>
import Logo from '~/assets/images/logo.svg'

export default {
  components: {
    Logo
  }
}
</script>

<style scoped lang="scss">
  .container {
    max-width: 994px;
    width: 100%;
    height: 84px;
    padding-left: 32px;
    padding-right: 32px;
    margin: 0 auto;

    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    padding-top: 32px;
  }

  .nav {
    padding-top: 10px;

    ul {
      display: flex;
      flex-flow: row nowrap;
      list-style: none;
    }

    li {
      margin-right: 24px;
      &:last-child {
        margin-right: 0;
      }
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
      color: #DBDBDB;
    }

  }
</style>
