<template lang="pug">
  .wrapper
    .image(v-lazy-container="{ selector: 'img' }")
      img(:data-src="require(`~/static/images/sicilia/sicilia1.jpg`)")
    .image(v-lazy-container="{ selector: 'img' }")
      img(:data-src="require(`~/static/images/sicilia/sicilia2.jpg`)" )
    .image(v-lazy-container="{ selector: 'img' }")
      img(:data-src="require(`~/static/images/sicilia/sicilia3.jpg`)" )
    .image(v-lazy-container="{ selector: 'img' }")
      img(:data-src="require(`~/static/images/sicilia/sicilia4.jpg`)" )
    .image(v-lazy-container="{ selector: 'img' }")
      img(:data-src="require(`~/static/images/sicilia/sicilia5.jpg`)" )
</template>

<script>
export default {
  mounted() {

  }
}
</script>

<style lang="scss" scoped>
.image img {
  width: 100%;
  display: block;
}

.wrapper {
  max-width: 1920px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
}
</style>
