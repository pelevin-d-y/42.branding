<template lang="pug">
  .project
    .container
      h1.title
        | {{ project.title }}
      .block(v-for="text in project.textBlocks" :key="text.title")
        .subtitle
          | {{ text.title }}
        .text
          | {{ text.text }}

      .block.project-footer
        .project-footer__left
          .subtitle
            | Services
          .text(v-for="service in project.services")
            | {{ service }}
        .project-footer__right
          .subtitle
            | Live
          a.live-link(:href="`https://${project.live}`")
            | {{ project.live }}
    .project-cover-image
      img(:src="getCoverImage(project.name)")
    .project-images
      projectImages(:images="project.images" :name="project.name")


</template>

<script>
import projects from '~/projects/projects'
import projectImages from '~/components/projectImages'

export default {
  name: 'project',
  layout: 'item-page',

  components: {
    projectImages
  },

  data() {
    return {
      project: null
    }
  },

  created: function() {
    this.project = projects.filter(project => project.id === Number(this.$route.params.id))[0]
  },

  methods: {
    getCoverImage(name) {
      return require(`~/static/images/${name}/coverImage.png`)
    }
  }
}
</script>

<style lang="scss" scoped>
  .project {
    padding-top: 16px;
  }

  .container {
    max-width: 716px;
    width: 100%;
  }

  .title {
    margin-bottom: 12px;

    font-size: 40px;
    line-height: 56px;
    letter-spacing: 0.01em;
  }

  .subtitle {
    margin-bottom: 24px;

    font-size: 16px;
    line-height: 40px;
    letter-spacing: 0.01em;
    color: #000105;
  }

  .text {
    font-weight: lighter;
    font-size: 21px;
    line-height: 40px;
    letter-spacing: 0.01em;

    color: rgba(0, 1, 5, 0.6);
  }

  .live-link {
    font-size: 21px;
    line-height: 40px;
    letter-spacing: 0.01em;
    font-weight: lighter;

    color: #3431DC;
    text-decoration: none;
  }

  .block {
    padding-top: 30px;
    padding-bottom: 30px;
  }

  .project-cover-image {
    margin-top: 106px;
  }

  .project-cover-image img {
    width: 100%;
  }

  .project-footer {
    display: flex;
    flex-flow: row nowrap;
    padding-top: 40px
  }

  .project-footer__left {
    max-width: 372px;
    width: 100%;
  }

  .project-footer__right {
    max-width: 256px;
    width: 50%;
  }

  .project-images {
    overflow: hidden;
    padding-top: calc(88/1152*100vw);
    padding-bottom: 60px;
  }

  @media (max-width: 768px) {
    .project {
      padding-top: 65px;
    }

    .text {
      font-size: 18px;
      line-height: 32px;
    }

    .project-image {
      margin-top: 60px;
    }
  }

  @media (max-width: 600px) {
    .project-footer {
      flex-flow: column nowrap;
    }

    .project-footer__right {
      padding-top: 60px;
    }
  }
</style>
