<template lang="pug">
  .wrapper
    .image
      img(:src="require(`~/static/images/matter/matter_desktop.jpg`)" )
    .title.title-1
      | Desktop / Dark Theme
    .image
      img(:src="require(`~/static/images/matter/matter_desctop_dark_theme.jpg`)" )
    .title.title-2
      | Desktop / White Theme
    .image
      img(:src="require(`~/static/images/matter/matter_desktop_white_theme.jpg`)" )
    .title.title-3
      | Mobile
    .image
      img(:src="require(`~/static/images/matter/matter_mobile.jpg`)" )
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.wrapper {
  max-width: 1920px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
}

.image img {
  position: relative;
  display: block;
  width: 100%;
}

.title {
  position: relative;
  z-index: 5;
  padding-left: 10px;
  padding-right: 10px;

  text-align: center;
  font-weight: 700;
  font-size: 60px;
  line-height: 82px;
  color: #ffffff;
  background: linear-gradient(#121118, #1A1827);
}

.title-1 {
  background: linear-gradient(#121118, #1A1827);
}

.title-2 {
  background: linear-gradient(#9071FB, #9475FC);
}

.title-3 {
  background: linear-gradient(#B49FFE, #B19BFE);
  margin-top: -1px;
}

@media (max-width: 1024px) {
  .title-1 {
    background: linear-gradient(#131219, #1B192A);
  }

  .title-2 {
    background: linear-gradient(#8F70FC, #9577FD);
  }
}

@media (max-width: 768px) {
  .title {
    font-size: 32px;
    line-height: 50px;
  }

  .title-1 {
    padding-top: 20px;
    padding-bottom: 20px;
    background: linear-gradient(#111016, #181625);
  }

  .title-2 {
    padding-top: 20px;
    padding-bottom: 20px;
  }
}
</style>
