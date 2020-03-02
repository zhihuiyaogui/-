<template>
  <header class="home-header">
<!--    <router-link to="/city">-->
      <div class="header-left">
<!--        <span class="city-name">{{city.name}}</span>-->
<!--        <span v-on:click="back"><i v-on:click="back" class="iconfont icon-fanhui">返回</i></span>-->
        <i v-on:click="back" class="iconfont icon-fanhui">返回</i>
<!--        <i class="iconfont icon-xiajiantou"></i>-->
      </div>
<!--    </router-link>-->
<!--    <div class="header-center">-->

<!--      <div class="container">-->

<!--        <form action="" class="parent">-->
<!--          &lt;!&ndash;          <input type="button" value="返回">&ndash;&gt;-->
<!--          <mt-button type="primary" @click="backList">返回列表</mt-button>-->
<!--          <input type="text" v-model="MedicineName" class="search1">-->
<!--          <input type="submit" @click="searchSubmit()"  value="搜索" class="search2">-->

<!--        </form>-->
<!--      </div>-->
<!--    </div>-->

    <router-link to="/message">
      <div class="header-right">
        <i class="iconfont icon-xiaoxi1"></i>

      </div>
    </router-link>
  </header>
</template>

<script>
export default {
  name: 'HomeHeader',
  data () {
    return {

    }
  },
  computed: {
    city () {
      return this.$store.state.currenyCity
    }
  },
  mounted () {
    const headerHeight = document.querySelector(".home-header").clientHeight
    this.$store.commit('GET_HEADER_HEIGHT', headerHeight)
  },
    methods:{
        back(){
            this.$router.go(-1);//返回上一层
        },
        backList() {
            this.fetchData();
        },
        searchSubmit(){
            var that = this
            var info={
                MedicineName: that.MedicineName,
                mac:'1458208',
                // mac:'mac'
            }
            that.$http.post('/api/EquipmentInfo/GetMedicineInfo', info).then(function (response) {
                if (response.data.Code >= 0) {
                    console.log(response.data)
                    that.medicineList=response.data.Data
                }
            })
        },
    },
}
</script>

<style lang="stylus" scoped>
  @import '~@/assets/style/varibles.styl';



  .home-header
    display: flex
    height: $headerHeight
    background-color: $themeColor
    color: #ffffff
    .header-left
      display: flex
      justify-content: center
      width: 1rem
      line-height $headerHeight
      text-align: center
      color: #ffffff
      .city-name
        display: block
        max-width: 1.1rem
        textWrap()
      .iconfont
        display: block
    .header-center
      flex: 1
      height: .52rem
      margin: .13rem 0
      padding: 0 .2rem
      border-radius: .14rem
      line-height: .52rem

      /*color: #666666*/

      .iconfont
        width: .2rem
        height: .52rem
    .header-right
      width: 1rem
      line-height $headerHeight
      text-align: center
      .iconfont
        font-size: 30px
        color: #fff
  .container {
    width: 1000px;
    height: 50px;
    margin: 0px auto;
  }

  .parent {
    width: 100%;
    height: 42px;
    top: 4px;
    position: relative;
  }

  .search1 {
    /*输入框高度设置为40px, border占据2px，总高度为42px*/
    width: 80%;
    height: 40px;
    border: 1px solid #ccc;
    font-size: 16px;
    outline: none;

  }

  .parent>input:first-of-type:focus {
    border: 1px solid #317ef3;
    padding-left: 10px;
  }

  .search2 {
    /*button按钮border并不占据外围大小，设置高度42px*/
    width: 100px;
    height: 44px;
    position: absolute;
    background: #317ef3;
    border: 1px solid #317ef3;
    color: #fff;
    font-size: 16px;
    outline: none;
  }

</style>
