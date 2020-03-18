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
  },

  mounted() {
    console.log(this.member)
  }
}
</script>

<style lang="scss" scoped>

</style>
