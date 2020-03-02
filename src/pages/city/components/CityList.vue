<template>
  <div class="city-list" ref="scrollWraper">
    <div class="city-content">
      <div class="current-city">
        <span class="city-babel">当前城市：</span>
        <span class="city-name">{{currenyCity.name}}</span>
      </div>
      <div class="city-area" v-if="isShowHostory">
        <h3 class="title">历史访问城市</h3>
          <ul class="button-list">
            <li
              class="button-item"
              v-for="historyCity of localHistoryCities"
              :key="historyCity.id"
              @click="handleCityClick(historyCity)"
            >
              {{historyCity.name}}
            </li>
          </ul>
      </div>
      <div class="city-area hot-citys">
        <h3 class="title">国内热门城市</h3>
        <ul class="button-list">
          <li
            class="button-item"
            v-for="hotCity of hotCities"
            :key="hotCity.id"
            @click="handleCityClick(hotCity)"
          >
            {{hotCity.name}}
          </li>
        </ul>
      </div>
      <div class="all-city">
        <div
          class="char"
          v-for="(charCity, key) of allCities"
          :key="key"
          :ref="key"
        >
          <h3>{{key}}</h3>
          <ul class="char-citys">
            <li
              v-for="innerCity of charCity"
              :key="innerCity.id"
              @click="handleCityClick(innerCity)"
            >
              {{innerCity.name}}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import { mapState } from 'vuex'

export default {
  name: 'CityList',
  data () {
    return {
      localHistoryCities: []
    }
  },
  props: {
    cityData: Object,
    character: String
  },
  computed: {
    hotCities () {
      return this.cityData.hotCities
    },
    allCities () {
      return this.cityData.cities
    },
    isShowHostory () {
      return this.localHistoryCities.length > 0 ? true : false
    },
    ...mapState([
      "currenyCity"
    ])
  },
  methods: {
    handleCityClick(city) {
      this.selectedCity(city)
    }
  },
  created () {
    this.localHistoryCities = this.getHistoryCity()
  },
  mounted () {
    this.cityScroll = new BScroll(this.$refs.scrollWraper)
  },
  watch: {
    character() {
      if (this.character) {
        const element = this.$refs[this.character][0]
        this.cityScroll.scrollToElement(element)
      } else {
        this.cityScroll.scrollTo(0, 0)
      }
    }
  },
}
</script>

<style lang="stylus" scoped>
  @import '~@/assets/style/varibles.styl';
  .city-list
    overflow: hidden
    position: absolute
    top: $headerHeight
    right: 0
    bottom: 0
    left: 0
    .current-city
      height: .66rem
      padding: .1rem .2rem
      border-bottom: .02rem solid #cccccc
      line-height: .66rem
      font-weight: bold
      background-color: #fff
      .city-name
        color: $themeColor
    .city-area
      padding: .2rem .6rem 0 .2rem
      background-color: #fff
      .title
        font-size: .12rem
        color: #666666
      .button-list
        display: flex
        flex-wrap: wrap
        justify-content: space-between
        margin-top: .2rem
        .button-item
          box-sizing: border-box
          height: .56rem
          width: 30%
          margin: .1rem 0
          border: .01rem solid #cccccc
          text-align: center
          line-height: .56rem
          cursor: pointer
    .hot-citys
      padding-bottom: .2rem
    .all-city
      padding: 0 .6rem 0 .2rem
      background-color: #fff
      .char
        padding: .1rem 0
        h3
          height: .6rem
          line-height: .6rem
          color: #999999
        li
          height: .76rem
          line-height: .76rem
          border-bottom: .01rem solid #ddd
          cursor: pointer
</style>
