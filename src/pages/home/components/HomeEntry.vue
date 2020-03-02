<template>
  <div class="home-entry">
    <swiper :options="entryEwiperOption">
      <!-- slides -->
      <swiper-slide v-for="(entryPage, index) of entryPages" :key="index">
        <ul>
          <li 
            v-for="entryItem in entryPage" 
            :key="entryItem.entryId"
            >
            <a href="#">
              <div class="nav-icon">
                <img :src="entryItem.entryIconUrl" alt="">
              </div>
              <p class="nav-title">{{entryItem.entryTitle}}</p>
            </a>
          </li>
        </ul>
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination entry-swiper-pagination" slot="pagination"></div>
    </swiper>
    
    
  </div>
</template>

<script>
export default {
  name: 'HomeEntry',
  props: {
    entryList: Array
  },
  data () {
    return {
      entryEwiperOption: {
        pagination: '.swiper-pagination',
        autoplay: false
      }
    }
  },
  computed: {
    entryPages () {
      const pages = []
      this.entryList.forEach((item, index) => {
        const page = Math.floor(index / 10)
        if(!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~@/assets/style/varibles.styl'
  .home-entry >>>  .entry-swiper-pagination
    bottom: .08rem
  .home-entry
    overflow: hidden
    width: 100%
    padding-top: .2rem
    background-color: #fff
    ul
      display: flex
      flex-wrap: wrap
      padding-bottom: .36rem
      li
        position: relative
        overflow: hidden
        width: 20%
        height: 0
        padding-bottom: 20%
        a
          display: block
          height: 0;
          padding-bottom: 100%;
          .nav-icon
            position: absolute
            top: 0
            right: 0
            bottom: .4rem
            left: 0
            box-sizing: border-box
            padding: .05rem .1rem
            img
              display: block
              height: 100%
              margin: 0 auto
          .nav-title
            position: absolute
            right: 0
            bottom: 0
            left: 0
            height: .4rem
            line-height: .4rem
            text-align: center
            font-size: 14px
            color: $themeTextColor
            textWrap()

</style>
