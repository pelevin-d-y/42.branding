<template lang="pug">
  .popup
    .close(@click="close")
      Close
    .wrapper(ref="popup")
      .image
        img(:src="require(`~/static/images/${name}/image.png`)")
    .overlay(@click="close")
</template>

<script>
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'
import Close from '~/assets/images/close.svg?inline'

export default {
  props: ['name'],

  components: {
    Close
  },

  mounted() {
    document.body.style.overflow = 'hidden'
    disableBodyScroll(this.$refs.popup)
  },

  beforeDestroy() {
    enableBodyScroll(this.$refs.popup)
  },

  methods: {
    close() {
      this.$emit('closePopup')
    }
  }
}
</script>

<style lang="scss" scoped>
  .popup {
    position: fixed;
    z-index: 101;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;
    padding: 10px;
  }

  .overlay {
    position: fixed;
    z-index: 101;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;
    background: #000000;
    opacity: 0.3;
  }

  .wrapper {
    position: relative;

    overflow: auto;
    z-index: 102;
    max-width: 1200px;
    width: 100%;
    height: 100%;
    margin-left: auto;
    margin-right: auto;

    -webkit-overflow-scrolling: touch;
  }

  .close {
    position: fixed;
    z-index: 103;
    right: 35px;
    top: 13px;
    width: 30px;
    height: 30px;
    background: red;
  }

  .image {
    width: 100%;
    height: 100%;
    margin: 0 auto;
    overflow: auto;
  }

  .image img {
    width: 1200px;
    height: auto;
  }
</style>
