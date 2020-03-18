<template lang="pug">
  .page-gradient.team
    .gradient
    .content
      .gradient-container
        .text-block
          .title
            | Our team
          .text
            | 42 was built to be different. An alternative to the large agency. We are a collective of design-obsessed digital junkies, based in Rostov-on-Don. Our focus is to create new interactive experiences for users; striking the perfect balance between usability and aesthetic. We seek to push creative and developmental boundaries, while bringing ambitious ideas to life.
      .gradient-container
        .team-list
          ul
            li(v-for="member in team")
              Member(:member="member")


</template>

<script>
import Member from '~/components/Member'

export default {
  name: 'Team',
  layout: 'item-page',

  components: {
    Member
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
</style>
