<template lang="pug">
  .contacts
    .gradient-container
      .title
        | Contact us:
      a.link(href="mailto:hello@42.works")
        | hello@42.works
      a.link.phone(href="tel:+79996966550")
        | +7(999)696-65-50
</template>

<script>
export default {

}
</script>

<style lang="scss">
  .contacts {
    padding-top: 42px;
    padding-bottom: 42px;

    font-size: 40px;
    line-height: 56px;
    letter-spacing: 0.01em;
    font-weight: bold;
    color: $black;

    border-top: 0.5px solid #DBDBDB;
  }

  .link {
    display: block;
    font-size: 32px;
    line-height: 140%;

    text-decoration: none;
    color: #3431DC;
  }

  .team-list {
    margin-bottom: 100px;
  }

  @media (max-width: 768px) {
    .contacts {
      padding-top: 42px;
      padding-bottom: 42px;

      font-size: 28px;
      line-height: 36px;
    }

    .link {
      font-size: 22px;
    }

    .phone {
       font-size: 22px;
    }
  }
</style>
