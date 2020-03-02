<template>
  <footer class="footer">
    <!--    <router-link tag="div" to="/" class="tab-item home is-active">-->
    <div class="foot">
      <p class="foottext" ><i class="iconfont iconwenshiduxinxi"></i>温度<i style="color: #0086b3">    {{this.newTemperature}}℃</i></p>
      <P  class="foottext"><i class="iconfont iconshidu"></i>湿度<i style="color: #0086b3">     {{this.newHumidity}}%</i></P>
      <p class="foottext"><i class="iconfont iconzhuangtai"></i>柜门状态<i v-if="this.status==0" style="color: #0086b3">          关</i><i v-if="this.status==1" style="color: #0086b3">          开</i></p>
      <p class="foottext">{{this.tableName}}</p>
      <!--<mt-button  type="primary" style="width: 100px;display: inline-block;position: absolute;left: 950px"  @click="MessageBox1">存入</mt-button>-->
      <!--<mt-button type="primary" style="width: 100px;display: inline-block;position: absolute;left: 1100px" @click="MessageBox2">取出</mt-button>-->
    </div>
  </footer>
</template>

<script>
  import {MessageBox} from 'mint-ui';
  export default {
    name: 'HomeFooter',
    data(){
      return{
        newTemperature:'',
        newHumidity:'',
        status:'',
        imei:'',
        alertMessage:0,
        alarmInfo:'',
        tableId:'',
        tableName:'',
        alarmInfo:[],
      }
    },
    created(){
      if (window.plus) {
        this.imei = plus.device.imei
        console.log(this.imei)
      } else {// 兼容老版本的plusready事件
        document.addEventListener('plusready', function () {
          // 在这里调用5+ API
          // alert("设备身份码:" + plus.device.imei);
          this.imei = plus.device.imei
          console.log(this.imei)
        }, false);
      };
      this.getData();
      this.fetchData();
    },
    mounted(){
      window.addEventListener("touchmove",this.myTouchMove)
      this.getAlarmInfo();
    },
    watch:{
      alertMessage: 'Box'
    },

    methods:{
      fetchData() {
        setInterval(() => {
          this.tableId=localStorage.getItem('tableId');
          this.tableName=localStorage.getItem('tableName');
          var that = this
          // that.loading = true
          var params = {
            IMEI: that.imei,
          tableId:this.tableId,
          }
          //http://211.87.227.125:1847/api/EquipmentInfo/GetTemAndHumData
          that.$http.post('http://114.215.136.150:1847/api/EquipmentInfo/GetTemAndHumData', params).then(function (response) {
            if (response.data.Code >= 0) {
              that.newTemperature = response.data.Data.tempc
              that.newHumidity=response.data.Data.hum
              that.status=response.data.Data.status
            } else {
              that.$message({
                type: 'info',
                message: response.data.Msg
              })
            }
          }).catch(function (response) {
          })
        }, 2000)
      },
      getData() {
        this.tableId=localStorage.getItem('tableId');
        var that = this
        // that.loading = true
        var params = {
          IMEI: that.imei,
          tableId:this.tableId,
        }
        //http://211.87.227.125:1847/api/EquipmentInfo/GetTemAndHumData
        that.$http.post('http://114.215.136.150:1847/api/EquipmentInfo/GetTemAndHumData', params).then(function (response) {
          if (response.data.Code >= 0) {
            that.newTemperature = response.data.Data.tempc
            that.newHumidity=response.data.Data.hum
            that.status=response.data.Data.status
          } else {
            that.$message({
              type: 'info',
              message: response.data.Msg
            })
          }
        }).catch(function (response) {
        })
      },
      getAlarmInfo(){
        setInterval(() => {
          console.log('tableId'+this.tableId);
          var that = this
          var params = {
            IMEI: that.imei,
          }
          that.$http.post('http://114.215.136.150:1847/api/EquipmentInfo/AlarmInfo', params).then(function (response) {
            console.log(response.data.Code)
            if (response.data.Code >= 0) {
              that.alarmInfo = response.data.Data;
              that.alertMessage = that.alertMessage + 1;
            }
          })
          that.$http.post('http://114.215.136.150:1847/api/EquipmentInfo/AlarmDoorInfo', params).then(function (response) {
            if (response.data.Code >= 0) {
              that.alarmDoorInfo = response.data.Data;
              that.alertDoorMessage = that.alertDoorMessage + 1;
            }
          })
        },30000)
      },
      Box(){
        MessageBox('警告', '<img style="width: 250px; height: 250px; " src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2951236148,1219413469&fm=26&gp=0.jpg"/>'+'</br>'+this.alarmInfo[0].Tag);
      },
      Door(){
        MessageBox('警告', '<img style="width: 250px; height: 250px; " src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2951236148,1219413469&fm=26&gp=0.jpg"/>'+'</br>'+this.alarmDoorInfo[0].tag);
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
          // var that = this;
          // var params = {
          //     Count: value,
          //     mac: '1',
          //     MedicineId:that.MedicineList.MedicineId,
          // }
          // that.$http.post('/api/EquipmentInfo/UpdateMedicineInfo ', params).then(function (response) {
          //     if (response.data.Code >= 0) {
          //         that.$toast({message: "存入成功", className: 'btn'});
          //     } else {
          //         that.$toast({message: "存入失败，请重试", className: 'btn'});
          //     }
          // })
        })
        // .then(action => {
        //     if (action == 'confirm') {
        //         this.$toast({message: "存入成功", className: 'btn'});
        //     }
        // })
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
          that.$http.post('http://114.215.136.150:1847/api/EquipmentInfo/DeleteMedicineInfo', params).then(function (response) {
            if (response.data.Code >= 0) {
              that.$toast({message: "取出成功", className: 'btn'});
            } else {
              that.$toast({message: "取出失败，请重试", className: 'btn'});
            }
          })


        })
      },
      MessageBox2() {
        MessageBox.confirm('', {
          confirmButtonText: '取出',
          cancelButtonText: '存入',
          confirmButtonClass: 'button',
          cancelButtonClass: 'button',
          title: '药品存取',
          message: '<img style="width: 500px; height: 375px; " src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1576810793&di=341eb584b6d814776d2adf0d6e18c48e&imgtype=jpg&er=1&src=http%3A%2F%2Fimg.yaopinnet.com%2Fimg500%2F201604%2F1964005109070416.jpg"/>' + '<br/>药品名称:阿莫西林胶囊<br/>库存数量：15'
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
      myTouchMove: function (evt) {
        if(document.hasFocus){
          // const inputId = document.getElementById('myBox')  // 获取ID
          // inputId.blur()  // input失焦
          document.activeElement.blur();   //  关闭键盘
        }
      },
    }
  }
</script>

<style lang="stylus" scoped>
  @import '~@/assets/style/varibles.styl';
  .footer
    display: flex
    justify-content: space-between
    position: fixed
    right: 0
    left: 0
    bottom: 0
    z-index: 99
    padding-top: .03rem
    border-top: 0.01rem solid #dddddd
    color: #666
    background-color: #c4f3ff;
    font-size 24px
  .foot{
    overflow: auto;
    white-space: nowrap;
    padding-top 22px;
    padding-left 80px
    height 70px
  }
  .foottext{
    display: inline-block;
    padding-left 50px

  }
  .iconfont  {
    font-size 24px
  }
</style>
