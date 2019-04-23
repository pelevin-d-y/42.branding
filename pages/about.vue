<template lang="pug">
  .page-gradient.about
    .gradient
    .content
      .who-we-are
        .container
          h2.about__title
            | Who we are
          .who-we-are__text.text
            | 42 was built to be different. An alternative to the large agency. We are a collective of design-obsessed digital junkies, based in Rostov-on-Don. Our focus is to create new interactive experiences for users; striking the perfect balance between usability and aesthetic. We seek to push creative and developmental boundaries, while bringing ambitious ideas to life.
      .what-we-do
        .container
          h2.about__title
            | What we do
          .what-we-do__lists
            .what-we-do__list
              .what-we-do__list-title
                | Services
              ul.what-we-do__items
                li.what-we-do__item
                  | Website Development
                li.what-we-do__item
                  | Ui/Ux Design
                li.what-we-do__item
                  | Creative Direction
                li.what-we-do__item
                  | Game Development
            .what-we-do__list
              .what-we-do__list-title
                | Solutions
              ul.what-we-do__items
                li.what-we-do__item
                  | Mobile Applications
                li.what-we-do__item
                  | Branding
                li.what-we-do__item
                  | Unity Development
                li.what-we-do__item
                  | Email Templates
      .how-we-work
        .container
          h2.about__title
            | How we work
          .how-we-work__text.text
            | We believe that great design is made better by great code; a marriage of crafts resulting in an original experience for the greater good. We are story-tellers at heart because that is the human language, and we strive to bring your story to life in a truly unique way with a strong sense of identity. We embrace the unknown and have expertise across a wide range of cutting-edge web technologies, frameworks, and tools.
</template>

<script>
export default {
  layout: 'item-page',
  name: 'About',
}
</script>

<style lang="scss" scoped>
  .container {
    max-width: 911px;
    padding-left: 86px;
    padding-right: 280px
  }

  .about__title {
    margin-bottom: 24px;

    font-size: 40px;
    line-height: 56px;
    letter-spacing: 0.01em;
    color: #000000;
  }

  .who-we-are {
    padding-top: 120px;
    padding-bottom: 96px;
    border-bottom: 0.5px solid #DBDBDB;
  }

  .text {
    font-weight: lighter;
    font-size: 21px;
    line-height: 40px;
    letter-spacing: 0.01em;

    color: rgba(0, 1, 5, 0.6);
  }

  .what-we-do {
    padding-top: 73px;
    padding-bottom: 104px;

    border-bottom: 0.5px solid #DBDBDB;
  }

  .what-we-do__lists {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
  }

  .what-we-do__items {
    padding-left: 0;
    list-style: none;
    font-weight: lighter;
  }

  .what-we-do__list-title {
    margin-bottom: 24px;

    font-size: 16px;
    line-height: 40px;
    letter-spacing: 0.01em;

    color: #000105;
  }

  .what-we-do__item {
    font-size: 21px;
    line-height: 40px;
    letter-spacing: 0.01em;
  }

  .how-we-work {
    padding-top: 72px;
    padding-bottom: 103px;
  }

  @media (max-width: 1024px) {
    .container {
      max-width: 530px;
      padding-right: 24px;
      padding-left: 24px;
    }
  }

  @media (max-width: 768px) {
    .who-we-are,
    .what-we-do,
    .how-we-work
     {
      padding-top: 60px;
      padding-bottom: 60px;
    }

    .about__title {
      margin-bottom: 16px;

      font-size: 31px;
      line-height: 46px;
    }

    .who-we-are__text,
    .what-we-do__item,
    .how-we-work__text {
      font-size: 18px;
      line-height: 32px;
    }

    .what-we-do__list-title {
      margin-bottom: 4px;
    }

    .what-we-do__list {
      margin-bottom: 20px;
    }
  }
</style>
