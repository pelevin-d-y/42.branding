<template lang="pug">
  .project
    .container
      h1.title
        | {{ project.title }}
      .about
        .subtitle
          | About project
        .text
          | {{ project.about }}
      .what-we-do
        .subtitle
          | What we do
        .text
          | {{ project.whatWeDo }}
      .footer
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

  .about {
    padding-top: 32px;
  }

  .what-we-do {
    padding-top: 56px;
  }

  .footer {
    padding-top: 54px;
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
