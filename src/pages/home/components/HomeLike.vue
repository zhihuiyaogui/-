<template>
  <div class="home-like">
		<div class="floor-top">
			<div class="title">
				<span class="line"></span>
				<h3>猜您喜欢</h3>
				<span class="line"></span>
			</div>
		</div>
		<ul class="product-list">
			<li v-for="goods in likeGoods" :key="goods.goodsId">
				<div class="content">
					<a href="#">
						<div class="img-box">
							<img :src="goods.imgUrl" alt="">
						</div>
						<div class="info">
							<p class="title">{{goods.description}}</p>
							<p class="price">
								<span>￥</span>{{goods.price}}
							</p>
						</div>
					</a>
				</div>
			</li>
		</ul>
		<div class="no-more">
			<img src="images/footertips.png" alt="">
		</div>
	</div>
</template>

<script>
export default {
  name: 'HomeLike',
  props: {
    likeGoods: Array
  }
}
</script>

<style lang="stylus" scoped>
  .home-like
    margin-top: .1rem
    font-size: 0
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
        color: #ff5c5c
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
          font-weight: 600
    .product-list
      display: flex
      flex-wrap: wrap
      zoom: 1
      li:nth-child(odd)
        padding-right: .05rem
        padding-left: 0
      li:nth-child(even)
        padding-left: .05rem
        padding-right: 0
      li
        width: 50%
        box-sizing: border-box
        margin-bottom: .1rem
        .content
          background-color: #fff
          a
            display: block
            .img-box
              width: 100%
              height: 0
              padding-bottom: 100%
              margin-bottom: .12rem
            .info
              padding: 0 .2rem
              .title
                overflow: hidden;
                height: 36px;
                margin-bottom: .08rem
                line-height: 18px
                font-size: 12px
                color: #333
              .price
                height: 18px
                line-height: 18px
                text-align: center
                font-size: 14px
                color: #ff5c5c
</style>
