<template lang="pug">
  .project
    .container
      h1.title
        | {{ project.title }}
      .block
        .subtitle
          | About project
        .text
          | {{ project.about }}
      .block
        .subtitle
          | What we do
        .text
          | {{ project.whatWeDo }}
      .block.footer
        .budget
          .subtitle
            | Budget
          .text
            | {{ project.budget }}
        .live
          .subtitle
            | Live
          a(:href="`https://${project.live}`").live-link
            | {{ project.live }}
    .project-image
      img(:src="project.image")


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
  .project {
    padding-top: 16px;
  }

  .container {
    max-width: 707px;
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
    padding-top: 20px;
    padding-bottom: 20px;
  }

  .project-image {
    margin-top: 106px;
  }

  .project-image img {
    width: 100%;
  }

  .footer {
    display: flex;
    flex-flow: row wrap;
    padding-top: 40px
  }

  .budget,
  .live {
    width: 50%;
  }

  @media (max-width: 768px) {
    .project {
      padding-top: 65px;
    }

    .text {
      font-size: 18px;
      line-height: 32px;
    }
  }
</style>
