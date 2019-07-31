<template lang="pug">
  .modal
    .modal-wrapper
      .close(@click="toggleModal")
      .text
        | Your message has been sent!
    .overlay(@click="toggleModal")
</template>

<script>
export default {
  props: {
    toggleModal: Function
  }
}
</script>

<style scoped lang="scss">
  .modal {
    position: fixed;
    z-index: 100;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .modal-wrapper {
    position: relative;
    z-index: 102;

    max-width: 487px;
    min-height: 210px;
    padding: 57px 87px;
    margin: 130px auto 0;
    background: #524FE8;
  }

  .text {
    font-size: 40px;
    line-height: 56px;
    text-align: center;
    color: #FFFFFF;
  }

  .overlay {
    position: fixed;
    z-index: 101;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #000000;
    opacity: 0.5;
  }

  .close {
    position: absolute;
    top: 23px;
    right: 23px;
    width: 25px;
    height: 25px;

    cursor: pointer;

    &::after,
    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 50%;

      display: block;
      width: 22px;
      height: 3px;
      border-radius: 2px;
      background: #FFFFFF;
    }

    &::after {
      transform: rotate(45deg);
    }

    &::before {
      transform: rotate(-45deg);
    }
  }

  @media(max-width: 768px) {
    .close {
      top: 16px;
      right: 20px;
    }

    .modal-wrapper {
      max-width: 365px;
      min-height: 182px;
    }

    .text {
      font-size: 27px;
      line-height: 37px;
    }
  }
</style>
