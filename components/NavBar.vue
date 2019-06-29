<template lang="pug">
  div.nav-bar
    nuxt-link(:to="'/project/' + (prevProject() + 1)")
      | {{ projects[prevProject()].title }}
    nuxt-link(:to="'/project/' + (nextProject() + 1)")
      | {{ projects[nextProject()].title }}
</template>

<script>
export default {
  props: ['currentProject', 'projects'],

  methods: {
    prevProject() {
      const projectsLength = this.projects.length

      if (this.currentProject.id === 1) {
        return projectsLength - 1
      } else {
        return this.currentProject.id - 2
      }
    },

    nextProject() {
      const projectsLength = this.projects.length

      if (this.currentProject.id === this.projects[projectsLength-1].id) {
        return 0
      } else {
         return this.currentProject.id
      }
    }
  }
}

</script>

<style>

</style>
