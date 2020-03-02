<template>

<!--  <div class=guage>-->
<!--    <div class="first">-->
<!--      <div id="gaugeContainer" style="width:550px; height:550px;float:left;"></div>-->

<!--    </div>-->
<!--    <div class="second">-->
<!--      <div id="temperature" style="width:550px; height:550px;float:left;"></div>-->
<!--    </div>-->
<!--    <div class="three">-->
<!--      <mt-cell title="冷柜实时温湿度">-->
<!--      </mt-cell>-->
<!--    </div>-->
<!--    <div class="four">-->
<!--      <mt-button class="mint-button1" type="primary" style="margin-right: 350px;margin-left: 40px" @click="temControl" >温度调控</mt-button>-->
<!--      &lt;!&ndash;        <mt-button type="primary">药品存放</mt-button>&ndash;&gt;-->
<!--      &lt;!&ndash;        <mt-button type="danger">药品取出</mt-button>&ndash;&gt;-->
<!--      <mt-button class="mint-button1" type="primary"   @click="manageDrup" >药品查询</mt-button>-->
<!--    </div>-->
<!--  </div>-->
  <div class="home" :style="backgroundDiv">
    <p class="title" >泰凯英智能药品柜（单开门)</p>
    <div class="timetitle" >
      {{nowWeek }}
      <br>
      {{ nowDate + ' ' + nowTime }}
    </div>
    <div class="intro" :style="backgroundDiv1">
      <div style="padding-right: 10px;padding-left: 10px;padding-top: 40px">
      <p style="text-align: center;font-size: 25px">泰凯英智能药品柜介绍</p>
      <p style="font-size: 18px;text-indent:20px;letter-spacing:2px; line-height:35px">泰凯英智能药品柜是泰凯英医疗科技公司在智慧药房理念下研发的新一代产品。该产品提供全新的药品监督、管理、销售模式，结合物联网技术，实现端对端的管理。产品支持移动3/4G、NB-IoT等在内的多种物联网协议接入和路由交换能力，能够通过MQTT、AMQP等协议对接阿里云物联网平台。</p>
    </div>
      <div style="position: absolute;left: 15px;top: 267px">
      <router-link to="/manage">
      <div :style="backgroundDiv2" style="width: 345px;height: 202px;position: relative;top:-265px;left: 360px">
<!--        <img src="./../../assets/images/list.png" style="width: 55px;height: 52px;color: white;">-->
        <p style="font-size: 25px;text-align: center;padding-top: 80px;color: white">药品列表信息</p>
      </div>
      </router-link>
      <router-link to="/my">
        <div :style="backgroundDiv3" style="width: 345px;height: 202px;position: relative;top:-250px;left: 360px">
          <!--        <img src="./../../assets/images/list.png" style="width: 55px;height: 52px;color: white;">-->
          <p style="font-size: 25px;text-align: center;padding-top: 80px;color: white">设置界面</p>
        </div>
      </router-link>
      <router-link to="/data">
        <div :style="backgroundDiv4" style="width: 345px;height: 202px;position: relative;top:-670px;left: 730px">
          <!--        <img src="./../../assets/images/list.png" style="width: 55px;height: 52px;color: white;">-->
          <p style="font-size: 25px;text-align: center;padding-top: 80px;color: white">温湿度界面</p>
        </div>
      </router-link>
      <router-link to="/">
        <div :style="backgroundDiv5" style="width: 345px;height: 202px;position: relative;top:-655px;left: 730px">
          <!--        <img src="./../../assets/images/list.png" style="width: 55px;height: 52px;color: white;">-->
          <p style="font-size: 25px;text-align: center;padding-top: 80px;color: white">宣传界面</p>
        </div>
      </router-link>
      </div>
    </div>
<!--  <div>-->
<!--    <router-link to="/manage"><p>药品列表</p></router-link>-->
<!--  <router-link to="/my"><p>设置页面</p></router-link>-->
<!--  <router-link to="/temperature"><p>温湿度信息</p></router-link>-->
<!--  </div>-->
  </div>
</template>

<script>
    const echarts = require('echarts');
    import { MessageBox } from 'mint-ui';
    export default {
        name: 'Home',
        data() {
            return {
                backgroundDiv: {
                    backgroundImage:'url(' + require('./../../assets/images/newbackground.png') + ')',
                    backgroundSize:'100% 100%',
                },
                backgroundDiv1:{
                    backgroundImage:'url(' + require('./../../assets/images/homebackground1.png') + ')',
                },
                backgroundDiv2:{
                    backgroundImage:'url(' + require('./../../assets/images/yellow.png') + ')',
                },
                backgroundDiv3:{
                    backgroundImage:'url(' + require('./../../assets/images/blue.png') + ')',
                },
                backgroundDiv4:{
                    backgroundImage:'url(' + require('./../../assets/images/green.png') + ')',
                },
                backgroundDiv5:{
                    backgroundImage:'url(' + require('./../../assets/images/red.png') + ')',
                },
                title: this.$store.state.homeTitle,
                temperature: '',
                humidity: '',
                data: {tempc: '0', hum: '50', status: '', mac: ''},
                temp: '',
                mac: '',
                imei:'',
                nowDate: "",    // 当前日期
                nowTime: "",    // 当前时间
                nowWeek: ""     // 当前星期
            }
        },
        created() {
            this.$emit('footer', false);
        },
        mounted() {
            this.currentTime();
            this.drawChart();

        },
        beforeDestroy: function() {
            if (this.getDate) {
                console.log("销毁定时器")
                clearInterval(this.getDate); // 在Vue实例销毁前，清除时间定时器
            }
        },
        methods: {
            currentTime() {
                setInterval(this.getDate, 500);
            },
            getDate: function() {
                var _this = this;
                let yy = new Date().getFullYear();
                let mm = new Date().getMonth() + 1;
                let dd = new Date().getDate();
                let week = new Date().getDay();
                let hh = new Date().getHours();
                let mf =
                    new Date().getMinutes() < 10
                        ? "0" + new Date().getMinutes()
                        : new Date().getMinutes();
                if (week == 1) {
                    this.nowWeek = "星期一";
                } else if (week == 2) {
                    this.nowWeek = "星期二";
                } else if (week == 3) {
                    this.nowWeek = "星期三";
                } else if (week == 4) {
                    this.nowWeek = "星期四";
                } else if (week == 5) {
                    this.nowWeek = "星期五";
                } else if (week == 6) {
                    this.nowWeek = "星期六";
                } else {
                    this.nowWeek = "星期日";
                }
                _this.nowTime = hh + ":" + mf;
                _this.nowDate = yy + "/" + mm + "/" + dd;
            },
            // getImei() {
            //     if (window.plus) {
            //         // 在这里调用5+ API
            //         this.imei = plus.device.imei
            //     } else {// 兼容老版本的plusready事件
            //         document.addEventListener('plusready', function () {
            //             // 在这里调用5+ API
            //             // alert("设备身份码:" + plus.device.imei);
            //             this.imei = plus.device.imei
            //         }, false);
            //     }
            // },
            MessageBox2() {
                MessageBox.confirm('请扫描药品包装上的条形码', {
                    confirmButtonText: '取出',
                    cancelButtonText: '存入',

                })
            },
            MessageBox1() {
                // MessageBox.Prompt('',{
                //     title: '提示',
                //     message: '请输入取出数量',
                //     inputValue:'1',
                //     showCancelButton: true
                MessageBox.prompt('请输入取出数量', {
                    inputValue: '1',
                    confirmButtonText: '下一步'
                }).then(({value, action}) => {
                    var numReg = /^[0-9]+$/
                    var numRe = new RegExp(numReg)
                    if (value < 1 || !numRe.test(value)) {
                        this.$toast({message: "请输入正确的数量", className: 'btn'});
                    }
                    ;
                    if (value > this.tourList.intro) {
                        this.$toast({message: "数量不足", className: 'btn'});
                    }
                })
            },
            temControl: function () {
                this.$router.push('Temperature');
            },
            manageDrup() {
                this.$router.push('Manage');
            },
            fetchData() {
                setInterval(() => {
                    var that = this
                    // that.loading = true
                    var params = {
                        mac: '1458208'
                    }
                    //http://211.87.227.125:1847/api/EquipmentInfo/GetTemAndHumData
                    that.$http.post('/api/EquipmentInfo/GetTemAndHumData', params).then(function (response) {
                        // that.loading = false
                        console.log("response" + response.data.Data.tempc)
                        if (response.data.Code >= 0) {
                            that.data = response.data.Data
                            this.drawChart()
                        } else {
                            that.$message({
                                type: 'info',
                                message: response.data.Msg
                            })
                        }
                    }).catch(function (response) {
                    })
                }, 1000)
            }
        }
    }
</script>

<style lang="stylus" scoped>
  .home{
    width 1280px;
    height 800px;
  }
    .intro{
      width :344.68px;
      height:422px;
      position: relative;
      top:100px;
      left  91px;
      color white;


    }
    .title{
      font-size 37.78px;
      color: white;
      position: relative;
      top: 73px;
      left:29px;
    }
      .timetitle{
        position: relative;
        top:35px;
        right 10px;
        text-align right;
        font-size 24px;
        color white
      }
  .btn {
    position: relative;
    top:50px;
  }
  .gaugeContainer{width:100px;height:30px;}
  .temperature{position:absolute;z-index:1;float:left;margin-left:100px;}
  .first{
    position: absolute;
    top: 15%;
    left: 0%;
  }
  .second{
    position: absolute;
    top: 18%;
    left: 50%;

  }
  .three{
    position: absolute;
    top: 10%;
    left: 0%;
    font-style:normal;
    font-weight:bold;
  }
  .four{

    position: absolute;
    top: 75%;
    left:12%;
    font-style:normal;
    font-weight:bold;
    margin: 0 auto;
    display flex;
    flex-wrap: wrap

  }
  .mint-button1 {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border-radius: 25px 25px 25px 25px;
    border: 0;
    box-sizing: border-box;
    color: inherit;
    display: block;
    font-size: 18px;
    height: 100px;
    width 200px;
    outline: 0;
    overflow: hidden;
    position: relative;
    text-align: center

  }
</style>

