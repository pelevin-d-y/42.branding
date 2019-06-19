<template lang="pug">
  .wrapper(:class="name")
    .image
      img(:src="require(`~/static/images/${name}/image.png`)")
</template>

<script>
export default {
  props: [
    'name'
  ],

  mounted() {

  }
}
</script>

<style scoped lang="scss">
  .wrapper {
    width: 100%;
    border-top: 1px solid #EDECE9;
  }

  .image {
    max-width: 1220px;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    padding-left: 20px;
    padding-right: 20px;
  }

  .image img {
    width: 100%;
    display: block;
  }

  .chisel,
  .statebird,
  .uptime {
    border-top: none;
  }

  @media (max-width: 1200px) {
    .image {
      padding-left: 0;
      padding-right: 0;
    }
  }
</style>
