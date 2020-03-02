<template>
  <div class="Manage-page" style="background-color: #ddf5fb;">
    <header style="height: 80px;background: #0a0582">
      <div >
        <p style="text-align: center;padding-top: 30px;font-size: 32px;color: white">温湿度信息</p>
        <router-link to="/">
          <img src="./../../assets/images/home.png" style="position: absolute;top:32px;left: 1100px">
          <p style="color: white;font-size: 26px;text-align: right;position: absolute;top:38px;left: 1140px">返回首页</p>
        </router-link>
      </div>
    </header>
    <div >
      <div>
        <div style="position: absolute;top:50px;left: 30px">
          <div class="date-time-input" @click="show">开始时间:<textarea readonly="readonly" style="width: 250px;height: 40px">{{this.startDate}}</textarea></div>
          <date-time ref="dateTime"
                     type="noMinute"
                     @confirm="select">
          </date-time>
          <div class="date-time-input1" @click="show2">结束时间:<textarea readonly="readonly" style="width: 250px;height: 40px">{{this.endDate}}</textarea></div>
          <date-time ref="dateTime1"
                     type="noMinute"
                     @confirm="endSelect">
          </date-time>
        </div>
        <mt-button type="primary" @click="dateSubmit" style="width:100px;position:absolute;left: 840px;top:90px;">温度查询</mt-button>
        <mt-button type="primary" @click="dateSubmit1" style="width:100px;position:absolute;left: 960px;top:90px;">湿度查询</mt-button>
        <!--<mt-button type="primary" style=" width:100px;display: inline-block;position: absolute;left: 1000px;top:90px" @click="temperatureChange">温度设置</mt-button>-->
        <p style="background:#7ecef4;font-size: 20px;margin-right:20px; text-align:center;font-size:24px;line-height: 40px;width :100px;height: 40px;position:absolute;left: 1100px;top:90px">{{this.tableName}}</p>
      </div>
      <div >
        <div  id="lineChart" class="mychart"></div>
      </div>

      <!--    <br/>-->
      <!--    <br/>-->
      <!--    <br/>-->
      <!--    <br/>-->
      <!--    <br/>-->
    </div>
  </div>
</template>

<script>
  // require("@/plugins/time/css/daterangepicker.css");
  // require("@/plugins/time/css/htmleaf-demo.css");
  // require("@/plugins/time/js/daterangepicker.js");
  // import $ from "jquery";
  import { MessageBox } from 'mint-ui';
  const echarts = require('echarts');
  import DateTime from 'vue-date-time-m'
  import { DatetimePicker } from 'mint-ui';
  import DataPicker from './DatePicker';
  export default {
    name: 'Manage',
    components:{DataPicker},
    data () {
      return {
        title: this.$store.state.homeTitle,
        xData:  [],
        yData: [],
        x1Data:[],
        y1Data:[],
        startDate:'',
        endDate:'',
        mac:'',
        imei:'',
        deviceList: '',
        tableId:'',
        tableName:'',
      }
    },
    components: {
      DateTime
    },
    // mounted() {
    //     this.$nextTick(function () {
    //         this.drawLine();
    //
    //     });
    // },
    created(){
      this.$emit('footer', false);
      if (window.plus) {
        // 在这里调用5+ API
        this.imei = plus.device.imei
        console.log(this.imei)
      } else {// 兼容老版本的plusready事件
        document.addEventListener('plusready', function () {
          // 在这里调用5+ API
          // alert("设备身份码:" + plus.device.imei);
          this.imei = plus.device.imei
          console.log(this.imei)
        }, false);
      }
      this.tableId=localStorage.getItem('tableId');
      this.tableName=localStorage.getItem('tableName');
    },
    mounted() {
    },
    methods:{
      temperatureChange(){
        MessageBox.prompt('请输入预设温度', {
          inputValue: '',
          confirmButtonText: '确认',
        }).then(({value, action}) => {
          var numReg = /^[0-9]*$/
          var numRe = new RegExp(numReg)
          if( !numRe.test(value)){
            this.$toast({message: "请输入正确的数值", className: 'btn'});
            return;
          }

          this.$toast({message: "设置成功", className: 'btn'});
        })

      },
      dateSubmit(){
        var that=this;
        console.log(that.startDate)
        console.log(that.endDate)
        var params={
          StartDateTime:that.startDate,
          EndDateTime:that.endDate,
          IMEI:that.imei,
          tableId:that.tableId,
        }
        that.$http.post('http://114.215.136.150:1847/api/EquipmentInfo/GetTemChart', params).then(function (response) {
          console.log(response.data)
          that.xData=response.data.time
          that.yData=response.data.tempc
          that.lineChartMethod();

        })
      },
      dateSubmit1(){
        var that=this;
        var params={
          StartDateTime:that.startDate,
          EndDateTime:that.endDate,
          IMEI:that.imei,
          tableId:that.tableId,
        }
        that.$http.post('http://114.215.136.150:1847/api/EquipmentInfo/GetHumChart', params).then(function (response) {
          console.log(response.data)
          that.x1Data=response.data.time
          that.y1Data=response.data.hum
          that.lineChartMethod1();

        })
      },
      show () {
        this.$refs.dateTime.show()
      },
      show2() {

        this.$refs.dateTime1.show()
      },

      select (val1) {
        this.startDate = val1
        console.log(val)
      },
      endSelect(val2){
        this.endDate=val2
      },
      openPicker() {
        this.$refs.picker.open();
      },


      lineChartMethod() {
        console.log("========================")
        console.log(this.yData);
        let myChart = echarts.init(document.getElementById('lineChart'))
        var option = {
          title:{
            text:'温度历史数据',
            x:'center'
          },
          legend: {},
          tooltip: {},
          xAxis: {
            type: 'category',
            data: this.xData,
            axisLabel: {interval:0,rotate:40 }
          },
          yAxis: {
            type: 'value',
            name:'温度（℃）',
            min: function(value) {return value.min-1;},
            max: function(value) {return value.max+1;}
          },
          series: [{
            data: this.yData,
            type: 'line',

          }]
        }
        myChart.setOption(option);
        //根据窗口的大小变动图表 --- 重点
        /*窗口自适应，关键代码*/
        setTimeout(function (){
          window.onresize = function () {
            myChart.resize();

          }
        },200)

      },
      lineChartMethod1() {
        let myChart = echarts.init(document.getElementById('lineChart'))
        var option = {
          title:{
            text:'湿度历史数据',
            x:'center'
          },
          legend: {},
          tooltip: {},
          xAxis: {
            type: 'category',
            data: this.x1Data,
            axisLabel: {interval:0,rotate:40 }
          },
          yAxis: {
            type: 'value',
            name:'湿度（%）',
            min: function(value) {return value.min-1;},
            max: function(value) {return value.max+1;}
          },
          series: [{
            data: this.y1Data,
            type: 'line',

          }]
        }
        myChart.setOption(option);
        //根据窗口的大小变动图表 --- 重点
        /*窗口自适应，关键代码*/
        setTimeout(function (){
          window.onresize = function () {
            myChart.resize();

          }
        },200)

      },
      MessageBox1(){
        MessageBox.confirm('',{
          title:'药品存取',
        })
          .then(action => {
            if (action == 'confirm') {
              this.drawLine()
            }
          })
      },
      drawLine () {
        var _this = this;
        // 1.1 require 可直接从node_modules引入需要的
        let echarts = require('echarts/lib/echarts');// 引入基本模板
        require('echarts/lib/chart/bar');// 引入柱状图组件
        require('echarts/lib/component/tooltip');// 引入提示框和title组件
        require('echarts/lib/component/legend');// 引入分类
        document.getElementById('myChart').style.width = document.getElementById('main').clientWidth + 'px';
        document.getElementById('myChart').style.height = '410px';
        var myChart = echarts.init(document.getElementById('myChart'));

        myChart.setOption(option)
      },
    }
  }
</script>

<style lang="stylus" scoped>
  .mychart{
    width: 1200px;
    height: 600px;
    position absolute;
    top:150px;
  }
  .date-time-input{
    display:inline ;
    font-size 24px;
    background: white;
  }
  .date-time-input1{
    display:inline ;
    font-size 24px
  }
</style>
