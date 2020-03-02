<template>
  <div class="city-character">
    <ul>
      <li
        v-for="item of charactersArr"
        :key="item"
        :ref="item"
        @click="handleClickChar"
        @touchstart="handleTouchStart"
        @touchmove="handleTouchMove"
        @touchend="handleTouchEnd"
      >
        {{item}}
      </li>
    </ul>
  </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
  name: 'CityCharacter',
  data () {
    return {
      touchStatus: false,
      charHeight: 0,    //单个字母的高度
      startY: 0,        //字母距离顶部的高度
      timer: null
    }
  },
  props: {
    cities: Object
  },
  computed: {
    charactersArr () {
      let characters = []
      for (let item in this.cities) {
        characters.push(item)
      }
      return characters
    }
  },
  updated () {
    const ADom = this.$refs["A"][0]
    const headerHeight = document.querySelector(".city-character").offsetTop
    this.charHeight = ADom.clientHeight
    this.startY = ADom.offsetTop + headerHeight
  },
  methods: {
    handleClickChar (event) {
      let character = event.target.innerText
      this.$emit("changeCharacter", character)
    },
    handleTouchStart () {
      this.touchStatus = true
    },
    handleTouchMove (event) {
      if (this.touchStatus) {
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          const touchY = event.touches[0].clientY
          const index = Math.floor((touchY - this.startY) / this.charHeight)
          console.log(index)
          if (index > 0 && index < this.charactersArr.length) {
            let character = this.charactersArr[index]
            this.$emit("changeCharacter", character)
          }
        }, 16)
      }
    },
    handleTouchEnd () {
      this.touchStatus = false
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~@/assets/style/varibles.styl';
  .city-character
    display: flex
    flex-direction: column
    justify-content: center
    position: absolute
    top: $headerHeight
    right: 0
    bottom: 0
    width: .6rem
    li
      height: .4rem
      line-height: .38rem
      text-align: center
      font-weight: bold
      color: $themeColor
      cursor: pointer
</style>
