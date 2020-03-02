<template>
  <div class="message-page">
    <header class="header">
      <div class="header-left" @click="goBack">
        <i class="iconfont icon-xiangzuo1"></i>
        <span>消息盒子</span>
      </div>
    </header>
    <div class="content">
      <ul>
        <li class="info-item" v-for="infoItem in infoList" :key="infoItem.id">
          <div class="left-icon">
            <div class="img-box">
              <img :src="infoItem.imgSrc" >
            </div>
          </div>
          <div class="right-desc">
            <div class="title">
              <div class="name">{{infoItem.name}}</div>
              <div class="time">{{infoItem.time}}</div>
            </div>
            <div class="desc">
              <p class="info">{{infoItem.desc}}</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

export default {
  name: 'MessagePage',
  data () {
    return {
      infoList: [{id :1,name:'温度预警',time:'10:10',desc:'警告,冰柜温度过高',imgSrc:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1576474707896&di=536c3e1b5094f506c2bcac8d27108b5a&imgtype=0&src=http%3A%2F%2Fwww.51yuansu.com%2Fpic2%2Fcover%2F00%2F31%2F02%2F58109ef8da88f_610.jpg"},
          {id:2,name:'温度控制',time:'15:10',desc:'警告，冰柜温度过低',imgSrc:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1576474707896&di=536c3e1b5094f506c2bcac8d27108b5a&imgtype=0&src=http%3A%2F%2Fwww.51yuansu.com%2Fpic2%2Fcover%2F00%2F31%2F02%2F58109ef8da88f_610.jpg"},
          {id:3,name:'温度控制',time:'15:10',desc:'警告，冰柜门长时间未关闭',imgSrc:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1576474707896&di=536c3e1b5094f506c2bcac8d27108b5a&imgtype=0&src=http%3A%2F%2Fwww.51yuansu.com%2Fpic2%2Fcover%2F00%2F31%2F02%2F58109ef8da88f_610.jpg"},
      ]
    }
  },
  computed: {

  },
  methods: {
    getMac () {
        var that = this;
        // that.loading = true
        var params = {
            imei: that.imei
        };
        that.$http.post('/api/EquipmentInfo/GetTemAndHumData', params).then(function (response) {
            if (response.data.Code >= 0) {
                let mac1=mac;
                that.mac = response.data.Data.mac
                if(mac1!=taht.mac){
                    this.fetchData()
                }
            };
        })
    },
      fetchData(){
          var that = this;
          // that.loading = true
          var params = {
              mac: that.mac
          };
          that.$http.post('/api/EquipmentInfo/GetTemAndHumData', params).then(function (response) {
              if (response.data.Code >= 0) {
                  that.infoList=response.data.Data
              }

          })
      },
    goBack () {
      this.$router.goBack()
    }
  },
  created () {
    let _this = this
    this.getData().then(function(result){
      console.log(result)
      if (result && result.success) {
        const messageData = result.data
        _this.infoList = messageData
      }
    })
  }
}
</script>

<style lang="stylus" scoped>
  @import '~@/assets/style/varibles.styl';

  .header
    position: fixed
    top: 0
    right: 0
    left: 0
    z-index: 99
    height: $headerHeight
    line-height: $headerHeight
    background-color: #fff
    box-shadow: 0 2px 5px #cccccc
    .header-left
      display: flex
      text-align: center
      .iconfont
        display: block
        padding: 0 .14rem
        font-size: .42rem
        color: #333333
  .content
    margin-top: 0.2rem
    padding: 0 .2rem
    background-color: #ffffff
    .info-item
      position: relative
      display: flex
      height: 1.2rem
      width: 100%
      padding: .12rem 0
      border-bottom: 1px solid #cccccc
      .left-icon
        position: relative
        .img-box
          width: 1.2rem
          height: 1.2rem
          img
            width: 100%
            height: 100%
      .right-desc
        flex: 1
        padding-left: .2rem
        line-height: .6rem
        .title
          display: flex
          justify-content: space-between
          height: .6rem
          .name
            width: 1.8rem
            textWrap()
        .desc
          display: flex
          width: 100%
          overflow: hidden
        .info
          height: .6rem
          font-size: .26rem

</style>
