<template lang="pug">
  .wrapper(:class="name")
    .image
      img(@click="closePreview" :src="require(`~/static/images/${name}/image.png`)")
    //- ImagePreview(v-if="previewOpen" @closePopup="closePreview" :name="name" ref="imagePreviev")
</template>

<script>
import ImagePreview from '~/components/ImagePreview'

export default {
  name: 'Default',

  props: [
    'name'
  ],

  components: {
    ImagePreview
  },

  data() {
    return {
      previewOpen: false
    }
  },

  methods: {
    closePreview() {
      this.previewOpen = !this.previewOpen
    }
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
