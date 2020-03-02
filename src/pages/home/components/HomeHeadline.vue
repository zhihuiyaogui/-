<template>
  <div class="home-headline">
    <div class="caption">
      <div class="title">
        <img src="../../../assets/images/caption.png" alt="">
      </div>
    </div>
    <p class="line"></p>
    <div class="content">
      <swiper class="headline-scroll" :options="headlineSwiper">
        <!-- slides -->
        <swiper-slide class="headline-item" v-for="item in headlines" :key="item.headlineId">
          <a href="#">
            {{item.headlineInfo}}
          </a>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>

export default {
  name: 'HomeHeadline',
  props: {
    headlines: Array
  },
  data () {
    return {
      headlineSwiper: {
        direction: 'vertical',
        loop: true,
        autoplay: 2000,
        speed: 500,
        autoplayDisableOnInteraction: false
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~@/assets/style/varibles.styl'
  .home-headline
    overflow: hidden
    padding-top: .02rem
    padding-bottom: .02rem
    border-top: 1px solid #e6e6e6
    border-radius: 6px
    background-color: #fff
    flexbox()
    .caption
      position: relative
      padding-left: .2rem
      padding-right: .1rem
      .title
        overflow: hidden
        width: 1.5rem
        height: .755rem
        img 
          width: 100%
    .line
      display: inline-block;
      margin: .2rem
      width: 2px
      height: .355rem
      background-color: #dcdcdc
    .content
      overflow: hidden
      padding: 0 .2rem 0 .1rem
      .headline-scroll
        overflow: hidden
        height: .755rem
        .headline-item
          line-height: .76rem
          textWrap()
          a
            color: $themeTextColor
</style>
