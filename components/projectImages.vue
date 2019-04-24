<template lang="pug">
  .images
    .column(v-for="column in splitImages")
      .image(v-for="image in column" :style="{backgroundImage: `url(${getBackgrounImage(image)}`}" :key="column.image")
</template>

<script>
export default {
  name: "projectsImages",
  props: {
    images: Array,
    name: String
  },

  mounted() {
    console.log()
  },

  computed: {
    splitImages() {

      let chunk = 3;
      // return this.images
      let chunked = this.images.reduce((accumulator, currentValue) => {
        if ((accumulator.length == 0) || (accumulator[accumulator.length  -  1].length >= chunk)) {
          accumulator.push([])
        }

        accumulator[accumulator.length  - 1].push(currentValue)
        return accumulator
      }, []);

      return chunked;
    }
  },

  methods: {
    getBackgrounImage(image) {
      return require(`~/static/images/${this.name}/${image}.png`)
    }
  }
}
</script>

<style lang="scss" scoped>
.images {
  position: relative;
  left: -10%;

  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  width: 120%;
}

.image {
  width: 22.2vw;
  height: 39.5vw;
  margin-bottom: calc(32/1152*100vw);

  background-repeat: no-repeat;
  background-size: cover;

  box-shadow: 0px 8px 49px rgba(0, 0, 0, 0.15);
}

.column:nth-child(2) {
  margin-top: calc(26/1152*100vw);
}

.column:nth-child(3) {
  margin-top: calc(120/1152*100vw);
}

.column:nth-child(5) {
  margin-top: calc(112/1152*100vw);
}
</style>
