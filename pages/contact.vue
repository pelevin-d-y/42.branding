<template lang="pug">
  .page-gradient.contact
    .gradient
    .content
      .form-container
        .container
          .title
            | Drop us a line
          Form
      .mail
        .container
          | Contact us:
          |
          a.link(href="mailto:hello@42.com")
            | hello@42.com
</template>

<script>
import Form from '~/components/Form'

export default {
  name: 'Contacts',
  layout: 'item-page',

  components: {
    Form
  }
}
</script>

<style lang="scss" scoped>
  .content {
    padding-top: 70px;
  }

  .container {
    max-width: 911px;
    padding-left: 86px;
    padding-right: 280px;
  }

  .text {
    padding-top: 120px;
    padding-bottom: 96px;
    border-bottom: 0.5px solid #DBDBDB;

    font-size: 21px;
    line-height: 40px;
    letter-spacing: 0.01em;
    font-weight: lighter;
    color: rgba(0, 1, 5, 0.6);
  }

  .form-container {
    padding-top: 72px;
    padding-bottom: 96px;
    border-bottom: 0.5px solid #DBDBDB;
  }

  .title {
    margin-bottom: 56px;

    font-size: 40px;
    line-height: 56px;
    letter-spacing: 0.01em;
    font-weight: bold;

    color: #000105;
  }

  .mail {
    padding-top: 72px;
    padding-bottom: 103px;

    font-size: 40px;
    line-height: 56px;
    letter-spacing: 0.01em;
    font-weight: bold;

    color: $black;
  }

  .mail .link {
    text-decoration: none;
    color: #3431DC;
  }

  @media (max-width: 1024px) {
    .container {
      max-width: 530px;
      padding-right: 24px;
      padding-left: 24px;
    }
  }

  @media (max-width: 768px) {
    .content {
      padding-top: 0;
    }

    .title {
      margin-bottom: 36px;
      font-size: 31px;
      line-height: 46px;
    }

    .text {
      padding-top: 60px;
      padding-bottom: 60px;

      font-size: 18px;
      line-height: 32px;
    }

    .form-container {
      padding-top: 60px;
      padding-bottom: 60px;
    }

    .mail {
      padding-top: 60px;
      padding-bottom: 60px;

      font-size: 28px;
      line-height: 36px;
    }
  }
</style>
