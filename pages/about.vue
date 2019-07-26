<template lang="pug">
  .page-gradient.about
    .gradient
    .content
      .who-we-are
        .container
          h2.about__title
            | Who we are
          .who-we-are__text.text
            | We are team of young and enthusiastic designers and developers. Core team members graduated from Southern Federal University's department of Mathematics, Mechanics and Computer Science. We have background in applied math, financial math methods, machine learning and computer vision.
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
            p
              | We specialize in building highly interactive web services and also writing and auditing non-standard distributed applications and blockchain systems. We quickly iterate from design to development. Speed and simplicity are our top priorities. In our process we utilize cutting edge technologies, adopt best practices and follow lean development approach.
            p
              | Started working as freelancers and employees of local startups we gained experience and united for bigger projects. During last years we participated in numerous projects as complete and capable outsource squad.
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
