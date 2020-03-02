<template>
  <div class="home-rush-buy">
		<div class="lb-title">
			<p class="title">限时抢购</p>
			<h3 class="tag"><span>{{tagTime}}</span>点场</h3>
			<div class="timeout">
				<span class="hour-node">{{intHours}}</span>
				<span class="time-separator">:</span>
				<span class="minnte-node">{{intMinutes}}</span>
				<span class="time-separator">:</span>
				<span class="second-node">{{intSeconds}}</span>
			</div>
			<a class="lb-more" href="#">
				好货限时抢<i class="iconfont icon-arrow-right"></i>
			</a>
		</div>
    <swiper class="lb-wraper" :options="lbEwiperOption">
        <swiper-slide class="lb-item" v-for="goodsItem in lbGoods" :key="goodsItem.goodsId">
          <a href="#">
            <div class="goods-info">
              <div class="picture">
                <img :src="goodsItem.imgUrl">
              </div>
              <div class="details">
                <p class="price">￥{{goodsItem.price}}</p>
                <p class="inventory">仅剩:{{goodsItem.surplus}}件</p>
              </div>
            </div>
          </a>
        </swiper-slide>
    </swiper>
	</div>
</template>

<script>
export default {
  name: 'HomeRushBuy',
  props: {
    lbGoods: Array
  },
  data () {
    return {
      intHours: '00',
      intMinutes: '00',
      intSeconds: '00',
      tagTime: 10,
      endTime: 11,
      lbEwiperOption: {
        slidesPerView: 4,
        freeMode: true,
        freeModeSticky: true
      }
    }
  },
  computed: {
    
  },
  methods: {
    setNum: function(num) {
      num = (num<10)?'0'+num : num
      return num
    },
    initTimer: function() {
      let _this = this
      window.setInterval(function(){
        let curTime = new Date(),				//当前时间
          curYear = curTime.getFullYear(), 	//当前年份
          curMonth = curTime.getMonth() + 1, 	//当前月份
          curDay = curTime.getDate(),			//当前天
          curHour = curTime.getHours(),		//当前的小时
          intervals = Date.parse(_this.endTime) - curTime.getTime();	//间隔毫秒数

        if(curHour >=8 && curHour < 14){
          _this.tagTime = 8
          _this.endTime = curYear + "/" + curMonth + "/" + curDay + " 14:00"		//8点场结束时间
        }else if(curHour >=14 && curHour < 20){
          _this.tagTime = 14
          _this.endTime = curYear + "/" + curMonth + "/" + curDay + " 20:00"		//14点场结束时间
        }else if(curHour >=20){
          _this.tagTime = 20
          _this.endTime = curYear + "/" + curMonth + "/" + (curDay+1) + " 08:00"		//20点场结束时间
        }

        _this.intHours = parseInt(intervals/(60*60*1000));			//间隔小时
        _this.intMinutes = _this.intHours?parseInt((intervals % (_this.intHours*60*60*1000))/(60*1000)):parseInt(intervals/(60*1000));					//间隔分钟
        _this.intSeconds = _this.intMinutes?parseInt((intervals % (_this.intHours*60*60*1000 + _this.intMinutes*60*1000))/1000):parseInt(intervals/1000);	//间隔秒数
        _this.intHours = _this.$options.methods.setNum(_this.intHours);		//重设间隔小时
        _this.intMinutes = _this.$options.methods.setNum(_this.intMinutes);	//重设间隔分钟
        _this.intSeconds = _this.$options.methods.setNum(_this.intSeconds);	//重设间隔秒数
      },200);
    }
  },
  created: function() {
    this.initTimer()
  }
}
</script>

<style lang="stylus" scoped>
  @import '~@/assets/style/varibles.styl';
  .home-rush-buy
    margin-top: .22rem
    padding-top: .12rem
    background-color: #fff
    .lb-title
      position: relative
      overflow: hidden
      line-height: 24px
      .title
        float: left;
        padding-left: .15rem;
        font-weight: 700;
        font-size: 16px;
        color: #262C32;
      .tag
        float: left
        padding-left: .1rem
        vertical-align: baseline
        font-size: 14px
      .timeout
        float: left
        overflow: hidden
        margin-left: .1rem
        vertical-align: middle
        font-size: 12px
        color: #ff5c5c
      .lb-more
        position: absolute
        right: 0
        font-size: 14px
        overflow: hidden
        padding-right: .15rem
        color: #333
        .icon-arrow-right
          font-size: 13px
          color: #ff5c5c
    .lb-wraper
      display: flex
      margin-top: .26rem
      padding-bottom: .24rem
      .goods-info
        overflow: hidden
        padding-left: .12rem
        padding-right: .12rem
        text-align: center
        .picture
          margin: 0 auto
          width: 1.4rem
          height: 1.4rem
          img
            width: 100%
        .details
          margin-top: .08rem
          .price
            font-size: 14px
            color: #333333
          .inventory
            margin-top: .04rem
            font-size: 12px
            color: #999999
            textWrap()
</style>
