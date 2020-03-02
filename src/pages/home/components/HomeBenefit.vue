<template>
  <div class="home-benefit">
    <div class="floor-top">
			<div class="title">
				<p class="line"></p>
				<h3>购实惠</h3>
				<p class="line"></p>
			</div>
		</div>
		<div class="floor-main">
			<div class="cont-left">
				<a href="#">
					<img :src="benefit.left.imgUrl" key="benefit.left.benefitId" alt="left">
				</a>
			</div>
			<div class="cont-right">
				<a href="#" v-for="item in benefit.right" :key="item.benefitId">
					<img :src="item.imgUrl" alt="right">
				</a>
			</div>
		</div>
		<div class="floor-bottom">
			<a href="#" v-for="item in benefit.bottom" :key="item.benefitId">
				<img :src="item.imgUrl" alt="bottom">
			</a>
		</div>
  </div>
</template>

<script>
export default {
  name: 'HomeBenefit',
  props: {
    benefit: Object
  },
  data () {
    return {
      title: "a",
      titColor: "#ccc"
    }
  },
  computed: {
    
  }
}
</script>

<style lang="stylus" scoped>
  
  .home-benefit
    margin-top: .1rem
    font-size: 0
    background-color: #fff
    a
      display: block
      img 
        width: 100%
    .floor-top
      position: relative;
      text-align: center;
      color: #333;
      .title
        display: flex
        justify-content: center
        align-items: center
        box-sizing: border-box
        width: 100%
        padding: .15rem 0.2rem
        text-align: center
        font-size: 16px
        color: #9362de
        .line
          width: .5rem
          height: 1px
          padding: 0 .2rem
          border-top: 1px solid
          border-color: inherit
          vertical-align: middle
        h3
          position: relative
          z-index: 2
          padding: 0 .2rem
    .floor-main
      display: flex
      .cont-left
        width: 50%
      .cont-right
        width: 50%
        
    .floor-bottom
      display: flex
</style>
