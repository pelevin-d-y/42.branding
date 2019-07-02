<template lang="pug">
  div.nav-bar
    nuxt-link(class="prev" :to="'/project/' + projects[prevProject()].id")
      | {{ projects[prevProject()].title }}
    nuxt-link(class="next" :to="'/project/' + projects[nextProject()].id")
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

<style scoped lang="scss">
  .nav-bar {
    display: flex;
    flex-flow: row nowrap;
    width: 100%;
    border-top:  0.5px solid #DBDBDB;
  }

  .prev,
  .next {
    width: 50%;
    padding: 56px 12px;

    font-size: 40px;
    line-height: 56px;
    letter-spacing: 0.01em;
    color: #000105;
    text-decoration: none;
    text-align: center;
    font-weight: 600;

    &:hover {
      color: #3431DC;
    }
  }

  .prev {
    border-right: 0.5px solid #DBDBDB;
    cursor: url("../assets/images/cursor-left.svg"), auto;
  }

  .next {
    cursor: url("../assets/images/cursor-right.svg"), auto;
  }

  @media(max-width: 768px) {
    .prev,
    .next {
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      justify-content: center;
      padding: 26px 12px;
      font-size: 36px;
    }
  }
</style>
