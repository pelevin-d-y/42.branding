<template lang="pug">
  .page.project
    .container
      h1.title
        | {{ project.title }}
      .block(v-for="text in project.textBlocks" :key="text.title")
        .subtitle(v-if="text.title")
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
          a.live-link(:href="`https://${project.live}`" target="_blank")
            | {{ project.live }}
    .project-images(v-if="project.images.length")
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

  asyncData (context) {
    return {
      project: projects.filter(project => project.id === Number(context.route.params.id))[0]
    }
  },

  data() {
    return {
      project: null
    }
  }
}
</script>

<style lang="scss" scoped>
  .project {
    padding-top: 120px;
  }

  .container {
    max-width: 716px;
    width: 100%;
    padding-bottom: 106px;
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
  }

  @media (max-width: 768px) {
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
