<template lang="pug">
  .page-gradient.contact
    .gradient
    .content
      .form-container
        .gradient-container
          .title
            | Drop us a line
          Form(@toggleModal="toggleModal")
      .mail
        .gradient-container
          | Contact us:
          |
          a.link(href="mailto:hello@42.works")
            | hello@42.works
    transition(name="fade")
      Modal(v-if="showModal" :toggleModal="toggleModal" :modalText="modalText")
</template>

<script>
import Form from '~/components/Form'
import Modal from '~/components/Modal'

export default {
  name: 'Contacts',
  layout: 'item-page',

  components: {
    Form,
    Modal
  },

  data() {
    return {
      showModal: false,
      modalText: ''
    }
  },

  methods: {
    toggleModal(status) {
      console.log('status', status)
      if (status === 200 ) {
        this.modalText = "Your message has been sent!"
      } else {
        this.modalText = "The message has not been sent. Please try again later"
      }

      this.showModal = !this.showModal
    }
  }
}
</script>

<style lang="scss" scoped>
  .content {
    padding-top: 70px;
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

  .fade-enter,
  .fade-leave-active {
    opacity: 0;
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity .5s ease
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
