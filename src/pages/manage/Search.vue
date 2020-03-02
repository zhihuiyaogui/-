<template>
<div>
  <header style="height: 80px;background: #0a0582">
    <div >
      <p style="text-align: center;padding-top: 30px;font-size: 32px;color: white">药品搜索结果</p>
      <router-link to="/manage">
        <img src="./../../assets/images/home.png" style="position: absolute;top:32px;left: 1050px">
        <div style="color: white;font-size: 26px;text-align: right;position: absolute;top:38px;left: 1090px">返回药品列表</div>
      </router-link>
    </div>
  </header>
  <div style="margin-top: 20px">
  <div class="listItemList"  v-for="item in  searchList">
    <div>
      <div class="leftImgList">
        <router-link :to="{
        path: '/detail',
        query:{medicineInfo:item,
        }
                          }">
          <img v-bind:src= "item.Image">
        </router-link>
<!--          <img v-bind:src= "item.Image">-->
      </div>
      <div class="rightContentList">
        <!--        <div style=" color:black;font-size: large">药品名称</div>-->
        <!--        <div class="name" style=" color:black;font-size: medium;width: 130px">-->

        <!--          {{ item.name}}-->
        <!--        </div>-->
        <div class="desc">
          名称：{{item.MedicineName}}
        </div>
        <div class="desc">
          数量:
          {{item.Count}}
        </div>
      </div>
    </div>
  </div>
  </div>
</div>
</template>

<script>
    export default {
        name: "Search",
        data () {

            return {
                title: this.$store.state.homeTitle,
                list:{},
                medicineList: [],
                name: '',
                MedicineName: '',
                mac: '',
                modal_loading: false,
                selectCurriculums: '',
                curriculums: ['药柜1', '药柜2', '药柜3'],
                IMEI:'',
                medicineInfo:'',
                searchList:[],
                imei:'',
                tableId:'',
            }
        },
        created() {
            this.$emit('footer', false);
          this.tableId=localStorage.getItem('tableId');
            this.getSearchList();
        },
        methods:{
            getSearchList(){
                this.searchList=this.$route.query.searchList;
            },
        }
    }
</script>

<style lang="stylus" scoped>

  .find-page {
    height 70%
    margin-bottom  70px

  }
  .changetable{
    text-align right;
    height 10px

  }
  .floor{
    width 48px;
    font-size :16px;
    text-align center;
    word-wrap: break-word;
    letter-spacing: 20px;
    color white;
    padding-top 20px


  }
  .floor1{
    background-image :url("./../../assets/images/floor.png");
    margin-left 10px

  }
  .card {
    position absolute;
    top:200px
    left :15px
    margin-left:45px
    width 1200px
    overflow hidden
    padding 10px 0px
    display flex
    flex-wrap: wrap
  }
  .listItemList {
    height: 300px;
    width 260px;
    padding-left 35px
    display: inline-block;

  }
  .leftImgList {
    height: 100%;
    width: 20%;
    line-height: 100px;
  }
  .leftImgList img {
    margin-left: 10px;
    width 250px
    height: 160px;
    vertical-align: middle;
  }
  .rightContentList {
    position: relative;
    left 10px
    top 20px
    bottom 5px
    background #deefff
    padding-right: 20px;
    text-align: left;
    line-height: 28px;

  }
  .name {
    font-size: 16px;
    color: #909090;
    display: block;
  }
  .desc1{
    padding-left 235px;

  }
  .desc {

    font-size: 14px;
    font-weight:bold
    display: block;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;

    .btn {
      position: relative;
      top:50px;
    }
  }
  .container {
    width: 1000px;
    height: 50px;
    margin: 0px auto;
  }

  .parent {
    position relative;
    left -108px
  }

  .search1 {
    /*输入框高度设置为40px, border占据2px，总高度为42px*/
    width: 644px;
    height: 48px;
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
    width: 110px;
    height: 48px;
    position: absolute;
    background: #317ef3;
    border: 1px solid #317ef3;
    color: #fff;
    font-size: 20px;
    outline: none;
    margin-top :1px;
    margin-left 10px
  }
  .back{
    width 10%
  }
  .footer
    display: flex
    justify-content: space-between
    position: fixed
    right: 0
    left: 0
    bottom: 0
    z-index: 99
    padding-top: .04rem
    border-top: 0.01rem solid #dddddd
    color: #666
    background: #fff

</style>
