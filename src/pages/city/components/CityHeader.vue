<template>
  <div>
    <header class="city-header">
      <div class="header-left" @click="goBack">
        <i class="iconfont icon-guanbi2"></i>
      </div>
      <div class="header-center">
        <input
          class="search-input"
          type="text"
          placeholder="输入城市名查询"
          v-model="searchText"
        >
        <i class="iconfont icon-sousuo-m"></i>
      </div>
    </header>
    <div
      class="search-content"
      v-if="isContentShow"
      v-bind:style="{top: headerHeight + 'px'}"
    >
      <ul>
        <li
          v-for="innerCity of searchTesult"
          :key="innerCity.id"
          @click="handleCityClick(innerCity)"
        >
          {{innerCity.name}}
        </li>
        <li v-if="isShowResult">没有找到匹配城市，请重新查询</li>
      </ul>
    </div>
  </div>

</template>

<script>
export default {
  name: 'CityHeader',
  data () {
    return {
      headerHeight: this.$store.state.headerHeight,
      searchText: "",
      searchTesult: [],
      timer: null
    }
  },
  props: {
    cities: Object
  },
  computed: {
    isContentShow () {
      return this.searchText != "" ? true : false
    },
    isShowResult () {
      return this.searchTesult.length > 0 ? false : true
    }
  },
  methods: {
    goBack () {
      this.$router.goBack()
    },
    handleCityClick(city) {
      this.selectedCity(city)
      this.searchText = ""
    }
  },
  watch: {
    searchText () {
      let searchText = this.searchText
      if (this.timer) {
        clearTimeout(this.timer)
      }
      this.timer = setTimeout(() => {
        let result = []
        for (const charCities in this.cities) {
          this.cities[charCities].forEach(city => {
            if (city.name.indexOf(searchText) > -1 || city.spell.indexOf(searchText) > -1) {
              result.push(city)
            }
          })
        }
        this.searchTesult = result
      }, 100)
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~@/assets/style/varibles.styl';
  .city-header
    display: flex
    height: $headerHeight
    background-color: $themeColor
    color: #ffffff
    .header-left
      width: .86rem
      line-height $headerHeight
      text-align: center
      color: #ffffff
      .iconfont
        font-size: .36rem
        font-weight: bold
    .header-center
      position: relative
      flex: 1
      height: .52rem
      margin: .13rem .8rem .13rem 0
      padding: 0 .2rem
      border-radius: .06rem
      background-color #ffffff
      color: #666666
      .search-input
        height: .52rem
        width: 100%
        padding-left: .45rem
        line-height: .52rem
        box-sizing: border-box
      .iconfont
        position: absolute
        top: .12rem
        left: .2rem
        width: .2rem
        height: .52rem
        font-size: .26rem
  .search-content
    overflow: hidden
    position: absolute
    top: 0
    right: 0
    bottom: 0
    left: 0
    z-index: 9
    background-color #ffffff
    ul
      padding: 0 .2rem
      li
        height: .76rem
        line-height: .76rem
        border-bottom: .01rem solid #ddd
        cursor: pointer
</style>
