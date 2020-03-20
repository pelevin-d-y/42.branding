<template lang="pug">
  .mail
    .gradient-container
      | Contact us:
      |
      a.link(href="mailto:hello@42.works")
        | hello@42.works
</template>

<script>
export default {

}
</script>

<style lang="scss">
  .mail {
    padding-top: 72px;
    padding-bottom: 103px;

    font-size: 40px;
    line-height: 56px;
    letter-spacing: 0.01em;
    font-weight: bold;
    color: $black;

    border-top: 0.5px solid #DBDBDB;
  }

  .link {
    text-decoration: none;
    color: #3431DC;
  }

  .team-list {
    margin-bottom: 100px;
  }

  @media (max-width: 768px) {
    .mail {
      padding-top: 60px;
      padding-bottom: 60px;

      font-size: 28px;
      line-height: 36px;
    }
  }
</style>
