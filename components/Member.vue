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
  .image img {
    width: 208px;
    height: 208px;
    margin-bottom: 18px;
  }

  .name {
    color: #3431DC;
    font-size: 16px;
    line-height: 40px;
    text-align: center;
  }

  .position {
    font-size: 21px;
    line-height: 32px;
    text-align: center;
    color: #000105;
  }
</style>
