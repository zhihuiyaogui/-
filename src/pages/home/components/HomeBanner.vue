<template>
  <div class="home-banner">
    <swiper :options="swiperOption" ref="mySwiper" v-if="bannerShow">
      <!-- slides -->
      <swiper-slide v-for="bannerItem in bannerLists" :key="bannerItem.bannerId">
        <a href="#">
          <img class="swiper-img" :src="bannerItem.bannerImgUrl" alt="banner img">
        </a>
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeBanner',
  props: {
    bannerLists: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        preloadImages: false, //不加载全部照片
        loop: true,
        autoplay: 2000,
        autoplayDisableOnInteraction: false
      }
    }
  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.swiper
    },
    bannerShow () {
      return this.bannerLists.length > 0 ? true : false
    }
  },
  mounted () {
    // current swiper instance
    // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
    // this.swiper.slideTo(3, 1000, false)
  }
}
</script>

<style lang="stylus" scoped>
  @import '~@/assets/style/varibles.styl'
  .home-banner >>> .swiper-pagination-bullets
    bottom: 5px
  .home-banner >>> .swiper-pagination-bullet
    background-color: #fff
    opacity: 1
  .home-banner >>> .swiper-pagination-bullet-active
    background-color: $themeColor
  .home-banner
    overflow: hidden
    width: 100%
    height: 0
    padding-bottom: 36.27%
    .swiper-img
      width: 100%
</style>
