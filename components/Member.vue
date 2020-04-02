<template lang="pug">
  .member
    .image
      img(:src="require(`~/assets/images/team/${member.image}`)")
    .text
      .name
        | {{ member.name }}
      .position
        | {{ member.position }}
</template>

<script>
export default {
  name: 'Member',

  props: {
    member: Object
  }
}
</script>

<style lang="scss" scoped>
  .member {
    text-align: center;

    max-width: 175px;
    width: 100%;
  }

  .image img {
    width: 161px;
    height: 161px;
    margin-bottom: 7px;

    object-fit: cover;
    border-radius: 50%;
  }

  .name {
    color: #3431DC;
    font-size: 16px;
    line-height: 28px;
    text-align: center;
  }

  .position {
    font-size: 21px;
    line-height: 32px;
    text-align: center;
    color: #000105;
  }

  @media (max-width: 560px) {
    .member {
      margin-left: auto;
      margin-right: auto;
    }

    .image img {
      width: 180px;
      height: 180px;
    }
  }
</style>
