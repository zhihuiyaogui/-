<template>
  <div class="city-page">
    <city-header :cities="cityData.cities"></city-header>
    <city-list
      :cityData = "cityData"
      :character = "character"
    ></city-list>
    <city-character
      :cities = "cityData.cities"
      @changeCharacter="handleCharacterChange"
    ></city-character>
  </div>
</template>

<script>
import CityHeader from './components/CityHeader'
import CityList from './components/CityList'
import CityCharacter from './components/CityCharacter'
import Axios from './../../http/httpService.js'
import APIConfig from './../../http/APIConfig.js'

export default {
  name: 'CityPage',
  data () {
    return {
      cityData: {},
      character: ""
    }
  },
  methods: {
    getCity() {
      let httpConfig = {}
      Object.assign(httpConfig, APIConfig.CITY_CONFIG)
      return Axios.get(httpConfig)
    },
    doSearchCity(value) {
      let len = this.searchHistory.length;
      for( let i = 0; i < len; i++ ){
        if(this.searchHistory[i] == value){
          this.searchHistory.splice(i,1);
        }
      }
      this.searchHistory.unshift(searchStr);
    },
    handleCharacterChange (char) {
      this.character = char
    }
  },
  created () {
    if (!this.$store.state.cityData) {
      this.getCity().then( result => {
        console.log(result)
        if (result && result.success) {
          const data = result.data
          this.cityData = data
          this.$store.commit('SET_CITY_DATA', data)
        }
      }, error => {
        console.log(error)
      })
    }else {
      this.cityData = this.$store.state.cityData
    }
  },
  activated () {
    this.character = ""
  },
  components: {
    CityHeader,
    CityList,
    CityCharacter
  }
}
</script>

<style lang="stylus" scoped>

</style>
