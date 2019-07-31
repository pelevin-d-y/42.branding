<template lang="pug">
  .page.portfolio()
    .slider-dots(ref="dots")
      .slider-dots__dot(
        @click="setSlide(i)"
        v-for="dot, i in slides")
      .slider-dots__dot.active(:style="{width: oneDotWidth / slides.length + 'px', transform: 'translateX(' + (oneDotWidth / slides.length * slideIndex) + 'px)'}")
    .slider-navigation
      //- .slider__btn-left(@click="onSlide(prev, slides)")
        sliderBtnLeft
      .slider__digits
        span.slider__digits-current
          | {{ slideIndex + 1 }} /
        span.slider__digits-length
          |  {{ slides.length }}
      //- .slider__btn-right(@click="onSlide(next, slides)")
        sliderBtnRight
    .slider-container(@click="sidesClick" ref="container", :class="{'cursorLeft': cursorLeft, 'cursorRight': cursorRight}")
      .slider(ref="slider")
        .slider-content(:class="sliderTransition && 'transition-enabled'" :style="{width: slidesWidth + 'px', transform: 'translate3d(' + translateOffset  + 'px,0,0)'}"
          ref="sliderContent"
          @mousedown="sliderScrollStart"
          @mouseup="sliderScrollFinish"
          @mouseleave="sliderMouseLeave"
          )
          .slider-item(
            ref="slideWidth"
            v-for="slide, index in slides",
            :class="{'previous': index < slideIndex, 'active': index === slideIndex, 'next': index > slideIndex }")
            .slider-item__inner(@click="eventStopPropagation")
              nuxt-link(:to="'/project/' + slide.index" no-prefetch draggable="false" :event="sliderLinkActive ? 'click' : ''")
                .slider-item__name
                  | {{ slide.title }}
                .slider-item__description
                  | {{ slide.subtitle }}
                picture
                  source(:srcset="slide.srcWebp" type="image/webp")
                  source(:srcset="slide.src" type="image/jpg")
                  img(:src="slide.src")

</template>

<script>
import sliderBtnLeft from '~/assets/images/slider-btn-left.svg?inline'
import sliderBtnRight from '~/assets/images/slider-btn-right.svg?inline'

export default {
  layout: 'item-page',
  name: 'Projects',

  components: {
    sliderBtnLeft,
    sliderBtnRight
  },

  data () {
    return {
      slides: [
        {
          index: 1,
          title: 'Mixfit',
          subtitle: 'Full stack development',
          src: require('~/assets/images/projects-jpg/Mixfit.jpg'),
          srcWebp: require('~/assets/images/projects-webp/Mixfit.webp')
        },
        {
          index: 2,
          title: 'Matter',
          subtitle: 'Full stack development',
          src: require('~/assets/images/projects-jpg/matter.jpg'),
          srcWebp: require('~/assets/images/projects-webp/matter.webp')
        },
        {
          index: 3,
          title: 'IAMIP',
          subtitle: 'Frontend development',
          src: require('~/assets/images/projects-jpg/iMap.jpg'),
          srcWebp: require('~/assets/images/projects-webp/iMap.webp')
        },
        {
          index: 4,
          title: 'Hammer for Mac',
          subtitle: 'Development',
          src: require('~/assets/images/projects-jpg/hammer.jpg'),
          srcWebp: require('~/assets/images/projects-webp/hammer.webp')
        },
        {
          index: 5,
          title: 'Forge',
          subtitle: 'Full stack development',
          src: require('~/assets/images/projects-jpg/forge.jpg'),
          srcWebp: require('~/assets/images/projects-webp/forge.webp')
        },
        {
          index: 6,
          title: 'Chisel',
          subtitle: 'Frontend development',
          src: require('~/assets/images/projects-jpg/chisel.jpg'),
          srcWebp: require('~/assets/images/projects-webp/chisel.webp')
        },
        {
          index: 7,
          title: 'Statebird creative',
          subtitle: 'Full stack development',
          src: require('~/assets/images/projects-jpg/statebird.jpg'),
          srcWebp: require('~/assets/images/projects-webp/statebird.webp')
        },
        {
          index: 8,
          title: 'Uptime connect',
          subtitle: 'Full stack development',
          src: require('~/assets/images/projects-jpg/uptime.jpg'),
          srcWebp: require('~/assets/images/projects-webp/uptime.webp')
        },
        {
          index: 9,
          title: 'Bitcannery',
          subtitle: 'Blockchain',
          src: require('~/assets/images/projects-jpg/bitcannery.jpg'),
          srcWebp: require('~/assets/images/projects-webp/bitcannery.webp')
        },
        {
          index: 10,
          title: 'Smartomato',
          subtitle: 'Full stack development',
          src: require('~/assets/images/projects-jpg/smartomato.jpg'),
          srcWebp: require('~/assets/images/projects-webp/smartomato.webp')
        }
      ],
      buttonsBlocked: false,
      direction: 'left',
      canSlide: true,
      slideIndex: 0,
      slidesWidth: null,
      cursorLeft: false,
      cursorRight: false,
      oneDotWidth: 0,

      // data for scrollSlider
      scrollSlider: false,
      mouseOffset: 0,
      lastSliderMouseOffset: 0,
      sliderTransition: true,
      mouseOffsetStart: 0,
      mouseOffsetFinish: 0,
      sliderLinkActive: true
    }
  },

  computed: {
    translateOffset () {
      if (this.scrollSlider) {
        return this.mouseOffset
      }
      return this.getSliderPosition()
    }
  },

  mounted () {
    setTimeout(() => {
      this.oneDotWidth = (window.getComputedStyle(this.$refs.dots).width).replace('px', '')
      this.slidesWidth = this.getSlidesWidth()
    }, 300)

    window.addEventListener('keydown', this.slideOnKey)
    window.addEventListener('mousemove', this.changeCursorOnMove)

    if (window.outerWidth > 768) {
      window.onresize = () => {
        this.oneDotWidth = (window.getComputedStyle(this.$refs.dots).width).replace('px', '')
        this.slidesWidth = this.getSlidesWidth()
      }

      const hash = Number(location.hash.substr(1))
      hash && this.setSlide(hash - 1)

      window.addEventListener('keydown', this.slideOnKey)
      window.addEventListener('mousemove', this.changeCursorOnMove)
    }

    if (window.outerWidth < 768) {
      window.removeEventListener('keydown', this.slideOnKey)
      window.removeEventListener('mousemove', this.changeCursorOnMove)
    }
  },

  destroyed () {
    window.onresize = null

    window.removeEventListener('keydown', this.slideOnKey)
    window.removeEventListener('mousemove', this.changeCursorOnMove)
  },

  methods: {
    eventStopPropagation (e) {
      e.preventDefault()
      e.stopPropagation()
    },

    slideOnKey (e) {
      if (e.keyCode === 37) {
        this.onSlide(this.prev, this.slides)
      }

      if (e.keyCode === 39) {
        this.onSlide(this.next, this.slides)
      }
    },

    changeCursorOnMove (e) {
      this.cursorRight = window.innerWidth / 2 < e.clientX
      this.cursorLeft = window.innerWidth / 2 > e.clientX
    },

    sidesClick () {
      if (this.cursorRight) {
        this.onSlide(this.next, this.slides)
      }

      if (this.cursorLeft) {
        this.onSlide(this.prev, this.slides)
      }
    },

    getSlideWidth () {
      return this.$refs.slideWidth[0].clientWidth
    },

    getSlidesWidth () {
      return (this.getSlideWidth() * this.slides.length) - 2
    },

    blockButtons () {
      this.buttonsBlocked = true
    },

    unblockButtons () {
      this.buttonsBlocked = false
    },

    onSlide (func, slides) {
      if (this.canSlide) {
        this.canSlide = false
        func(slides)
        this.setHash()
        setTimeout(() => {
          this.canSlide = true
        }, 400)
      }
    },

    next (slides) {
      if (this.buttonsBlocked) {
        return
      }

      if (this.slideIndex + 1 === this.slides.length) {
        this.slideIndex = -1
      }

      this.slideIndex = Math.min(this.slideIndex + 1, slides.length - 1)
    },

    prev (slides) {
      if (this.buttonsBlocked) {
        return
      }

      if (this.slideIndex === 0) {
        this.slideIndex = this.slides.length
      }

      this.slideIndex = Math.max(this.slideIndex - 1, 0)
    },

    setHash (hash) {
      window.location.hash = hash + 1 || this.slideIndex + 1
    },

    setSlide (i) {
      this.setHash(i)
      this.slideIndex = i
    },

    getSliderPosition() {
      return -(this.slidesWidth / this.slides.length) * this.slideIndex
    },

    getSliderMouseOffset(evt) {
      if (this.lastSliderMouseOffset) {
        this.mouseOffset = this.getSliderPosition() - (this.lastSliderMouseOffset - evt.clientX)
      } else {
        this.lastSliderMouseOffset = evt.clientX
      }
    },

    sliderScrollStart() {
      this.sliderTransition = false
      this.mouseOffset = this.getSliderPosition()
      this.scrollSlider = true
      this.mouseOffsetStart = this.getSliderPosition()
      this.$refs.sliderContent.addEventListener('mousemove', this.getSliderMouseOffset)
    },

    sliderScrollFinish() {
      this.$refs.sliderContent.removeEventListener('mousemove', this.getSliderMouseOffset)

      this.mouseOffsetFinish = this.mouseOffset
      this.sliderTransition = true
      this.scrollSlider = false
      this.lastSliderMouseOffset = 0
      this.sliderLinkActive = true
      const scrollInterval = Math.abs(this.mouseOffsetStart - this.mouseOffsetFinish)

      if (scrollInterval > 100) {
        this.sliderLinkActive = false
        if ((this.mouseOffsetStart > this.mouseOffsetFinish)) {
          return this.onSlide(this.next, this.slides)
        }

        if (this.mouseOffsetStart < this.mouseOffsetFinish) {
          return this.onSlide(this.prev, this.slides)
        }
      }
    },

    sliderMouseLeave() {
      this.scrollSlider = false
      this.lastSliderMouseOffset = 0
      this.$refs.sliderContent ?
        this.$refs.sliderContent.removeEventListener('mousemove', this.getSliderMouseOffset) :
        null
    }
  }
}
</script>

<style lang="scss" scoped>
  .page {
    height: calc(100vh - 84px);
    width: 100%;
    min-height: 500px;
  }

  .portfolio {
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
  }

  .slider {
    height: 100%;
    width: 100%;
    max-width: 55%;
    margin: 0 auto;
    padding-bottom: 60px;
    text-align: center;

    display: flex;
    flex-flow: column nowrap;
    justify-content: center;

    span {
      height: 70vh;
      width: 100%;
      display: block;
    }
  }

  .slider-container {
    height: 100%;
    width: 100%;
    padding: 0;
    padding-bottom: 30px;
    margin: 0;
    position: relative;
    overflow: hidden;

    &--sliding {
      pointer-events: none;
    }
  }

  .slider-dots {
    width: calc(55vw - 200px);
    background: rgba(11, 30, 38, 0.2);

    position: absolute;
    bottom: 84px;
    left: 50%;
    transform: translateX(-50%);

    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    border-radius: 2px;

    z-index: 11;
  }

  .slider-navigation {
    position: absolute;
    bottom: 40px;
    left: 50%;
    transform: translateX(-50%);

    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    width: 304px;

    z-index: 11;
  }

  .slider__digits {
    padding-top: 9px;
    margin: 0 auto;

    font-size: 18px;
    line-height: 18px;
  }

  .slider__digits-length {
    color: rgba(11, 30, 38, 0.2);
  }

  // .slider__btn-left,
  // .slider__btn-right {
  //   display: block;
  //   cursor: pointer;

  //   &:hover .btn-hover {
  //     fill: #3431DC;
  //   }

  //   &:hover .btn-hover-stroke {
  //     stroke: #ffffff;
  //   }
  // }

  .slider-dots__dot {
    cursor: pointer;
    flex: 1;
    height: 3px;
    transition: background .2s ease, transform 1s ease;
    will-change: background, transform;

    &:hover {
      background: rgba(11, 30, 38, 0.4);
    }

    &.active {
      position: absolute;
      left: 0;
      top: 0;
      border-radius: 2px;
      background: #3431DC;
    }
  }

  .slider-content {
    display: block;
    transform: translate3d(0, 0, 0);
    will-change: transform;
    white-space: nowrap;
  }

  .transition-enabled {
    transition: transform 0.8s ease;
  }

  .slider-item {
    display: inline-block;
    width: 55vw;
    padding: 0 100px;

    transition: transform 0.5s ease, opacity 1s ease;
    will-change: opacity, transform;

    &:last-child {
      margin-right: 0;
    }

    a {
      text-decoration: none;

      display: flex;
      flex-flow: column nowrap;
      justify-content: center;
      align-items: center;
    }

    &.previous {
      pointer-events: none;
      opacity: 0.5;
    }

    &.next {
      pointer-events: none;
      opacity: 0.5;
    }
  }

  .slider-item img {
    pointer-events: none;
    width: 100%;
    transition: box-shadow 0.5s ease;
  }

  .slider-item__inner {
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
  }



  .slider-item__margin {
    margin-bottom: 40px;
  }

  .slider-item__name {
    align-self: flex-start;
    margin-bottom: 8px;

    letter-spacing: 0.01em;
    color: #000105;
    font-size: 40px;
    font-weight: bold;
    line-height: 46px;
    transition: border-color 0.3s ease;
  }

  .slider-item__description {
    align-self: flex-start;
    margin-bottom: 30px;

    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 26px;
    letter-spacing: 0.01em;

    color: rgba(0, 1, 5, 0.25);
  }

  .slider-prev,
  .slider-next {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 999;
    cursor: pointer;

    height: 11px;
    width: 23px;
  }

  .slider-prev {
    // background: url('../assets/images/left.svg') no-repeat center / contain;
    left: 30px;
  }

  .slider-next {
    // background: url('../assets/images/right.svg') no-repeat center / contain;
    right: 30px;
  }

  .cursorLeft {
    cursor: url("../assets/images/cursor-left.svg"), auto;
  }

  .cursorRight {
    cursor: url("../assets/images/cursor-right.svg"), auto;
  }

  @media (max-width: 1024px) {
    .slider-item__name {
      font-size: 30px;
      line-height: 40px;
    }

    .slider-item__description {
      font-size: 16px;
      line-height: 24px;
    }
  }

  @media (max-width: 768px) {
    .page {
      height: auto;
    }

    .slider-dots {
      display: none;
    }

    .slider-navigation {
      display: none;
    }

    .slider-item__description {
      margin-left: auto;
      margin-right: auto;
    }

    .slider-container {
      padding: 90px 0 80px 0;
      height: initial;
    }

    .slider {
      max-width: 100%;
    }

    .slider-content {
      width: 100% !important;
      transform: translate3d(0,0,0) !important;

      display: flex;
      flex-flow: column nowrap;
      justify-content: center;
      align-items: center;
    }

    .slider-item {
      margin-bottom: 48px;
      width: 100%;
      display: block;
      padding: 0;

      &.next,
      &.previous {
        opacity: 1;
        pointer-events: auto;
      }

      &:last-child {
        margin-bottom: 0;
      }
    }

    .slider-item a {
      padding: 0 20px;
      width: 100%;
    }

    .slider-item__inner {
      width: 100%;
    }

    .slider-item__name {
      margin-bottom: 5px;
      width: 100%;

      white-space: pre-wrap;
      text-align: left;
      font-size: 48px;
      line-height: 52px;
    }

    .slider-item__description {
      margin-bottom: 20px;
      margin-left: 0;
      white-space: pre-wrap;
      line-height: 20px;
    }

    .slider-item img {
      height: initial;
    }

    .slider-item__margin {
      margin-bottom: 20px;
    }
  }
</style>
