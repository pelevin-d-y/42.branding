<template lang="pug">
  .wrapper
    .image
      img(:src="require(`~/static/images/sicilia/sicilia1.jpg`)" )
    .image
      img(:src="require(`~/static/images/sicilia/sicilia2.jpg`)" )
    .image
      img(:src="require(`~/static/images/sicilia/sicilia3.jpg`)" )
    .image
      img(:src="require(`~/static/images/sicilia/sicilia4.jpg`)" )
    .image
      img(:src="require(`~/static/images/sicilia/sicilia5.jpg`)" )
</template>

<script>
export default {

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
