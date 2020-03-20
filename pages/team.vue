<template lang="pug">
  .page-gradient.team
    .gradient
    .content
      .team-block
        .gradient-container
          .text-block
            h2.title
              | Our team
            .text
              | 42 was built to be different. An alternative to the large agency. We are a collective of design-obsessed digital junkies, based in Rostov-on-Don. Our focus is to create new interactive experiences for users; striking the perfect balance between usability and aesthetic. We seek to push creative and developmental boundaries, while bringing ambitious ideas to life.
      .gradient-container
        .team-list
          ul
            li.team-member(v-for="member in team")
              Member(:member="member")
      Mail


</template>

<script>
import Member from '~/components/Member'
import Mail from '~/components/Mail'

export default {
  name: 'Team',
  layout: 'item-page',

  components: {
    Member,
    Mail
  },

  data() {
    return {
      team: [
        {
          image: 'image.png',
          name: 'Name Namename',
          position: 'Mega Director'
        },
        {
          image: 'image.png',
          name: 'Name Namename',
          position: 'Mega Director'
        },
        {
          image: 'image.png',
          name: 'Name Namename',
          position: 'Mega Director'
        },
        {
          image: 'image.png',
          name: 'Name Namename',
          position: 'Mega Director'
        },
        {
          image: 'image.png',
          name: 'Name Namename',
          position: 'Mega Director'
        },
        {
          image: 'image.png',
          name: 'Name Namename',
          position: 'Mega Director'
        },
        {
          image: 'image.png',
          name: 'Name Namename',
          position: 'Mega Director'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  .content {
    padding-top: 200px;
  }

  .team-block {
    padding-bottom: 100px;
    border-bottom: 0.5px solid #DBDBDB;
  }

  .title {
    margin-bottom: 24px;
    font-size: 40px;
    line-height: 56px;
    color: #000000;
  }

  .text {
    font-size: 21px;
    line-height: 40px;
    letter-spacing: 0.01em;
    color: rgba(0, 1, 5, 0.6);
    font-weight: lighter;
  }

  .team-list {
    padding-top: 94px;
  }

  .team-list ul {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;

    max-width: 498px;
    width: 100%;
    margin-left: -10px;
  }

  .team-member {
    display: inline-block;
    margin-bottom: 70px;
    padding-left: 10px;
    padding-right: 10px;
  }

  @media (max-width: 768px) {
    .content {
      padding-top: 60px;
    }

    .team-block {
      padding-bottom: 60px;
    }

    .team-list {
      padding-top: 60px;
      margin-bottom: 60px;
    }

    .team-list ul {
      justify-content: space-around;
    }

    .title {
      margin-bottom: 16px;
      font-size: 31px;
      line-height: 46px;
    }

    .text {
      font-size: 18px;
      line-height: 32px;
    }
  }
</style>
