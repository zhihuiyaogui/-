<template >
  <div class="find-page" >
    <div style="margin-top:0px;height:56px;">
      <mt-search v-model="value" autofocus :result="filterResult"  @keyup.enter.native="search()" >
      </mt-search>
    </div>
    <mt-button type="default" @click="clear()" style="float:right;margin:0px;">清除历史搜索</mt-button>
    <!--    <mt-cell-->
    <!--      :title=goods-->
    <!--      to="./home/HomePage"-->
    <!--      is-link-->
    <!--      value="取出">-->
    <!--    </mt-cell>-->
    <div class="card">
      <div class="listItemList" v-for="item in tourList">
        <div>
          <div class="leftImgList">
            <!--        <img :src= "item.img">-->
            <img src= "../../assets/images/amxl.jpg">
          </div>
          <div class="rightContentList">
            <!--        <div style=" color:black;font-size: large">药品名称</div>-->
            <div class="name" style=" color:black;font-size: large;width: 300px">

              {{ item.name}}
            </div>
            <div class="desc">
              库存数量:
              {{ item.intro}}
            </div>
            <div class="btn" >
              <mt-button  type="primary" style="size: 40px" @click="MessageBox1">取出</mt-button>
            </div>
            <!--        <router-link to="/Remove" class="btn" >-->
            <!--          <mt-button  type="primary" style="size: 40px" @click="">取出</mt-button>-->
            <!--        </router-link>-->
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
    import { MessageBox } from 'mint-ui';
    import { Toast } from 'mint-ui';
    export default {
        name: 'Manage',
        data () {

            return {
                title: this.$store.state.homeTitle,
                tourList: [
                    {image:"./../../assets/images/caption.png",name:'阿司匹林暗杀教室挂号费看见俺师傅哈萨克金凤凰科汇',intro:132},
                    {image:"./../../assets/images/caption.png",name:'阿司匹林阿萨德户口卡话费卡灰色空间好看是订婚',intro:132},
                    {image:"./../../assets/images/caption.png",name:'阿司匹林',intro:132},
                    {image:"./../../assets/images/caption.png",name:'阿司匹林',intro:132},
                    {image:"./../../assets/images/caption.png",name:'阿司匹林',intro:132},
                    {image:"./../../assets/images/caption.png",name:'阿司匹林',intro:132},
                    {image:"./../../assets/images/caption.png",name:'阿司匹林',intro:132},
                    {image:"./../../assets/images/caption.png",name:'感冒药',intro:15},
                    {image:"./../../assets/images/caption.png",name:'感冒药',intro:15},
                    {image:"./../../assets/images/caption.png",name:'感冒药',intro:15},
                    {image:"./../../assets/images/caption.png",name:'感冒药',intro:15},

                ],
            }
        },

        methods: {
            MessageBox1(){
                // MessageBox.Prompt('',{
                //     title: '提示',
                //     message: '请输入取出数量',
                //     inputValue:'1',
                //     showCancelButton: true
                MessageBox.prompt('请输入取出数量', {
                    inputValue: '1',
                    confirmButtonText:'下一步'
                }).then(({ value, action})=> {
                    var numReg = /^[0-9]+$/
                    var numRe = new RegExp(numReg)
                    if(value<1||!numRe.test(value)){
                        this.$toast({ message: "请输入正确的数量" ,className:'btn'});
                    };
                    if(value>this.tourList.intro){
                        this.$toast({ message: "数量不足" ,className:'btn'});
                    }
                })


            },
            search() {
                var tourname = this.value;
                var _this = this;
                _this.addSearch();
                GET(
                    urlApi + "app/findTour",
                    { name: tourname },
                    function(res) {
                        if (res.length > 0) {
                            var id = res[0].id;
                            _this.$router.push({ path: "/detail", query: { id: id } });
                        } else {
                            _this.$toast({ message: "景点不存在" });
                        }
                    },
                    function(err) {
                        console.log(err);
                    }
                );
            },
            getSearch() {
                this.result = JSON.parse(localStorage.getItem("search"));
            },
            addSearch() {
                this.tourArr.push(this.value);
                localStorage.setItem("search", JSON.stringify(this.tourArr));
            },
            clear() {
                localStorage.removeItem("search");
                this.$toast({ message: "已清除" });
            }
        }
    }
</script>

<style lang="stylus" scoped>
  .find-page {
    height 70%
    margin-bottom  70px

  }
  .card {
    position: relative;

    margin-left:50px
    width 100%
    overflow hidden
    padding 10px 0px
    display flex
    flex-wrap: wrap
  }
  .listItemList {
    height: 150px;
    width 500px;
    border-bottom: 1px solid #eee;
    margin-top: 5px;

  }
  .leftImgList {
    height: 80%;
    width: 20%;
    float: left;
    line-height: 100px;
  }
  .leftImgList img {
    margin-left: 10px;
    width: 180px;
    height: 140px;
    vertical-align: middle;
  }
  .rightContentList {
    position: relative;
    left: 100px;
    top:10px;
    height: 100%;
    width: 70%;
    padding-right: 20px;
    float: left;
    text-align: left;
    line-height: 28px;
  }
  .name {
    font-size: 16px;
    color: #909090;
    display: block;
  }
  .desc {
    font-size: 14px;
    color: #55a532;
    display: block;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    .btn {
      position: relative;
      top:50px;
    }
  }
</style>
