<template lang="pug">
  .project
    .container
      h1.title
        | {{ project.name }}
      .text
        | {{ project.text }}
</template>

<script>
import projects from '~/projects/projects'

export default {
  name: 'project',
  layout: 'item-page',

  data() {
    return {
      project: null
    }
  },

  created: function() {
    this.project = projects.filter(project => project.id === Number(this.$route.params.id))[0]
  }
}
</script>

<style lang="scss" scoped>

</style>
