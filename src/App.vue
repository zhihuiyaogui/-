<template>
  <div id="app">
<!--    <le-header/>-->
<!--    <keep-alive>-->
<!--      <router-view v-if="$route.meta.keepAlive"></router-view>-->
<!--    </keep-alive>-->
<!--    <router-view v-if="!$route.meta.keepAlive"></router-view>-->
<!--    <mt-button type="primary" style="size: 40px;float:right " @click="MessageBox2">药品存取</mt-button>-->
    <!--    <mt-button  type="primary" style="size: 40px" @click="informationIn">药品信息录入</mt-button>-->
    <!--    <le-toast v-show="s"></le-toast>-->
    <router-view v-on:footer="footer"></router-view>
    <le-footer v-if="footer_show" ></le-footer>
  </div>
</template>
<script>
    import Header from './pages/home/components/HomeHeader'
    import Footer from './pages/home/components/HomeFooter'
    // import selfToast from "./pages/home/components/selfToast";
    import {MessageBox} from 'mint-ui';
    export default {
        name: 'App',
        provide () {
            return {
                reload: this.reload
            }
        },
        components: {
            'le-header': Header,
            'le-footer': Footer,
            // 'le-toast':selfToast

        },
        data() {
            return {
                docmHeight: '0',  //默认屏幕高度
                showHeight:  '0',  //实时屏幕高度
                hidshow:true  ,//显示或者隐藏footer,
                isResize:false ,//默认屏幕高度是否已获取
                transitionName: 'slide-right',
                show: false,
                message: '药品',
                isBind: true,
                isRouterAlive: true,
                mac:'',
                footer_show:false,

                MedicineList:
                // {image:"./../../assets/images/caption.png",name:'阿司匹林暗杀教室挂号费看见俺师傅哈萨克金凤凰科汇',intro:132},
                // {image:"./../../assets/images/caption.png",name:'阿司匹林阿萨德户口卡话费卡灰色空间好看是订婚',intro:132},
                    {image: "./assets/images/caption.png", MedicineName: '阿司匹林', MedicineId: 123456456,MedicinePrice:15,Count:2000},
                // {image:"./../../assets/images/caption.png",name:'阿司匹林',intro:132},
                // {image:"./../../assets/images/caption.png",name:'阿司匹林',intro:132},
                // {image:"./../../assets/images/caption.png",name:'阿司匹林',intro:132},
                // {image:"./../../assets/images/caption.png",name:'阿司匹林',intro:132},
                // {image:"./../../assets/images/caption.png",name:'感冒药',intro:15},
                // {image:"./../../assets/images/caption.png",name:'感冒药',intro:15},
                // {image:"./../../assets/images/caption.png",name:'感冒药',intro:15},
                // {image:"./../../assets/images/caption.png",name:'感冒药',intro:15},


            }
        },
        // watch:{
        //
        //     show:{
        //         handler(show) {
        //             if (show = true) {
        //                 this.MessageBox2();
        //                 alert('66666');
        //             }
        //
        //         },
        //         // immediate: true
        //         }
        // },
        beforeRouteUpdate(to, from, next) {
            let isBack = this.$router.isBack;
            console.log("****" + isBack)
            if (isBack) {
                this.transitionName = 'slide-right'
            } else {
                this.transitionName = 'slide-left'
            }
            this.$router.isBack = false;
        },
        created() {

            // this.getId();　
            if (this.isBind === false) {
                this.BindMessage();
            }
            // this.queryStatus();
        },
        mounted() {

            // window.onresize监听页面高度的变化

            window.onresize = ()=>{

                return(()=>{

                    if (!this.isResize) {

                        //默认屏幕高度

                        this.docmHeight=document.documentElement.clientHeight

                        this.isResize = true

                    }

                    //实时屏幕高度

                    this.showHeight = document.body.clientHeight

                })()

            }

        },
        watch: {
            showHeight() {
                if(this.docmHeight >= this.showHeight){
                    this.hidshow = false
                }else{
                    this.hidshow = true
                }
                console.log(this.hidshow);
            }
        },
        methods: {
            footer:function (bool) {
                this.footer_show = bool;
            },
            queryStatus() {

            },
            reload () {
                this.isRouterAlive = false
                this.$nextTick(function () {
                    this.isRouterAlive = true
                })
            },
            BindMessage() {
                console.log("bindMessage");
                MessageBox.prompt('请输入设备ID', {
                    inputValue: '',
                    confirmButtonText: '确认',
                })
            },
            MessageBox2() {
                MessageBox.confirm('', {
                    confirmButtonText: '取出',
                    cancelButtonText: '存入',
                    confirmButtonClass: 'button',
                    cancelButtonClass: 'button',
                    title: '药品存取',
                    message: '<img style="width: 500px; height: 375px; " src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1576810793&di=341eb584b6d814776d2adf0d6e18c48e&imgtype=jpg&er=1&src=http%3A%2F%2Fimg.yaopinnet.com%2Fimg500%2F201604%2F1964005109070416.jpg"/>' + '<br/>药品名称:' + this.MedicineList.MedicineName + '<br/>库存数量：' + this.MedicineList.Count
                })
                    .then(action => {
                        if (action == 'confirm') {
                            this.MessageBox1()
                        }
                        ;
                    })
                    .catch(err => {
                        if (err == 'cancel') {     //取消的回调
                            this.MessageBox3()
                        }

                    })
            },
            MessageBox1() {
                MessageBox.prompt('请输入取出数量', {
                    inputValue: '1',
                    confirmButtonText: '确认',

                }).then(({value, action}) => {
                    var numReg = /^[1-9]\d*$/
                    var numRe = new RegExp(numReg)
                    if (value < 1 || !numRe.test(value)) {
                        this.$toast({message: "请输入正确的数量", className: 'btn'});
                        return;
                    } else if (value > this.MedicineList.Count) {
                        this.$toast({message: "数量不足", className: 'btn'});
                        return;
                    }
                    var that = this;
                    var params = {
                        Count: value,
                        mac: '1',
                        MedicineId:that.MedicineList.MedicineId,
                    }
                    that.$http.post('/api/EquipmentInfo/DeleteMedicineInfo', params).then(function (response) {
                        if (response.data.Code >= 0) {
                            that.$toast({message: "取出成功", className: 'btn'});
                        } else {
                            that.$toast({message: "取出失败，请重试", className: 'btn'});
                        }
                    })


                })
            },

            MessageBox3() {
                MessageBox.prompt('请输入存入数量', {
                    inputValue: '1',
                    confirmButtonText: '确认'
                }).then(({value, action}) => {
                    var numReg = /^[1-9]\d*$/
                    var numRe = new RegExp(numReg)
                    if (value < 1 || !numRe.test(value)) {
                        this.$toast({message: "请输入正确的数量", className: 'btn'});
                        return;
                    }
                    var that = this;
                    var params = {
                        Count: value,
                        mac: '1',
                        MedicineId:that.MedicineList.MedicineId,
                    }
                    that.$http.post('/api/EquipmentInfo/UpdateMedicineInfo ', params).then(function (response) {
                        if (response.data.Code >= 0) {
                            that.$toast({message: "存入成功", className: 'btn'});
                        } else {
                            that.$toast({message: "存入失败，请重试", className: 'btn'});
                        }
                    })
                })
                // .then(action => {
                //     if (action == 'confirm') {
                //         this.$toast({message: "存入成功", className: 'btn'});
                //     }
                // })
            },

            show1() {
                var show1 = this.show;
                show1 = true;
            },
            informationIn() {

            }
        }

    }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: #f2f2f2;
  }

  .slide-left-enter, .slide-right-leave-active {
    opacity: 0;
    -webkit-transform: translate(50px, 0);
    transform: translate(50px, 0);
  }

  .slide-left-leave-active, .slide-right-enter {
    opacity: 0;
    -webkit-transform: translate(-50px, 0);
    transform: translate(-50px, 0);
  }

  .button {

    font-size: 30px;
    color: black;
    background: #25a4bb;

  }

  .btn {
    transform: scale(2) !important;
    margin-left: -.6rem !important;
  }


</style>
