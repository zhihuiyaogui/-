<template>
  <div>
    <header style="height: 80px;background: #0a0582">
      <div>
        <p style="text-align: center;padding-top: 30px;font-size: 32px;color: white">设置界面</p>
        <router-link to="/">
          <img src="./../../assets/images/home.png" style="position: absolute;top:32px;left: 1100px;">
          <div style="color: white;font-size: 26px;text-align: right;position: absolute;top:38px;left: 1140px">返回首页</div>
        </router-link>
      </div>
    </header>
    <div style=" position: absolute;">
      <div style="background-color: #eafcff; height: 675px;">
        <div style="background-color: #ffffff; width: 1238px; height: 277px; ">
          <div style="position: absolute;left: 56px; top:37px; font-size: 20px; font-family: '黑体'" >设备信息配置</div>
          <div id="app">
            <p style="position: absolute; left: 1075px;  top:100px;color: #666666;font-size: 20px;">已绑定药品柜</p>
            <select @change="changeDevice()" v-model="deviceName" style="background:#7ecef4;font-size: 20px;margin-right:20px; width :119px;height: 40px;position: absolute;left: 1080px;top: 140px">
              <option v-for="(table, index) in deviceList" :key="index" >{{table.tableName}}</option>
            </select>
          </div>
          <div style="">
            <div class="row" style="">
              <span style="position: absolute; left: 100px;  top:107px;color: #666666;font-size: 20px;" >设备ID</span>
              <input v-model="tableId" style="position: absolute; left: 258px; top:98px;width: 250px; height: 38px; border: 1px #e6e6e6 solid;font-size: 20px;" />
            </div>
            <div class="row" style="">
              <span style="position: absolute; left: 550px;  top:107px;color: #666666;font-size: 20px;" >设备名称</span>
              <input v-model="tableName" style="position: absolute; left: 690px; top:98px;width: 250px; height: 38px; border: 1px #e6e6e6 solid;font-size: 20px;" />
            </div>
            <div class="row" style="">
              <span style="position: absolute; left: 100px; top:162px; color: #666666; font-size: 20px;">药品柜类型</span>
              <!--            <input style="width: 250px; height: 38px; border: 1px #e6e6e6 solid; margin-left: 10px;" />-->
              <select v-model="tableType" style="position: absolute; left: 258px; top:153px;width: 250px; height: 38px; border: 1px #e6e6e6 solid; font-size: 20px;">
                <option style="font-size: 20px;">单门柜</option>
                <option style="font-size: 20px;">双门柜</option>
                <option style="font-size: 20px;">三门柜</option>
              </select>
              <span style=" color: #666666;position: absolute; left: 550px; top:164px; font-size: 20px;" >MAC地址</span>
              <input v-model="tableMac" style="position: absolute; left: 690px; top:155px; width: 250px; height: 38px; border: 1px #e6e6e6 solid;font-size: 20px; " />
            </div>
            <div class="row" style="">
              <div class="center" @click="addTable" style="position: absolute; left: 250px; top:220px; text-align:center; width: 108px; height: 42px; border-radius: 4px; background-image: linear-gradient(#53c2ff, #1d6fff); display: inline-grid; color: white;font-size: 20px;">
                新增
              </div>
              <div class="center" @click="deleteTable" style="position: absolute; left: 1090px; top:216px; text-align:center; width: 108px; height: 42px; border-radius: 4px; background-image: linear-gradient(#53c2ff, #1d6fff); display: inline-grid; color: white;font-size: 20px;">
                删除
              </div>
            </div>

          </div>

        </div>
        <div style="background-color: #ffffff; width: 1238px; height: 350px;">
          <div style="height: 35px; "><span style="position: absolute; left: 58px; top:331px;font-size: 20px; font-family: '黑体'" >报警策略配置</span></div>
          <div style="height: 1px; background-color: #f6f6f6;"></div>
          <div style="">
            <div class="row" style="">
              <span style="position: absolute; left: 72px; top:403px;color: #666666;font-size: 20px;">温度阈值设置（℃）</span>
              <input v-model="minTemperature" placeholder="0~30"  style="position: absolute; left: 258px; top:403px;width: 166px; height: 38px; border: 1px #e6e6e6 solid; appearance: none; -webkit-appearance: none; -moz-appearance: none;font-size: 20px;
                ">
              </input>
              <div style="position: absolute; left: 460px; top:423px;width: 14px; height: 2px; background-color: #999999; border: 0; display: inline-block; "></div>
              <input v-model="maxTemperature" placeholder="0~30" style="position: absolute; left: 506px; top:403px;width: 166px; height: 38px; border: 1px #e6e6e6 solid; appearance: none; -webkit-appearance: none; -moz-appearance: none;font-size: 20px;
               ">
              </input>
            </div>
            <div class="row" style="">
              <span style="position: absolute; left: 72px; top:462px;color: #666666;font-size: 20px;">湿度阈值设置（%）</span>
              <input v-model="minHumidity" placeholder="0~100" style="position: absolute; left: 258px; top:462px;width: 166px; height: 38px; border: 1px #e6e6e6 solid; appearance: none; -webkit-appearance: none; -moz-appearance: none;font-size: 20px;

               ">
              </input>
              <div style="position: absolute; left: 460px; top:482px;width: 14px; height: 2px; background-color: #999999; border: 0; display: inline-block; "></div>
              <input v-model="maxHumidity" placeholder="0~100" style="position: absolute; left: 506px; top:462px;width: 166px; height: 38px; border: 1px #e6e6e6 solid; appearance: none; -webkit-appearance: none; -moz-appearance: none;font-size: 20px;

                ">
              </input>
            </div>
            <div class="row" style="">
              <span style="position: absolute; left: 35px; top:516px;color: #666666;font-size: 20px;">开门时间阈值设置（秒）</span>
              <select v-model="openTime" style="position: absolute; left: 258px; top:516px;width: 166px; height: 38px; border: 1px #e6e6e6 solid; appearance: none; -webkit-appearance: none; -moz-appearance: none;font-size: 20px;

               ">
                <option value='' disabled selected style='display:none;font-size: 20px;'>选择时间</option>
                <option style="font-size: 20px;">30</option>
                <option style="font-size: 20px;">60</option>
                <option style="font-size: 20px;">120</option>
                <option style="font-size: 20px;">180</option>
                <option style="font-size: 20px;">300</option>
              </select>
            </div>
            <span style="position: absolute; left: 82px; top:565px;color: #666666;font-size: 20px;">选择药品柜</span>
            <select @change="selectDevice()" v-model="selectName" style="position: absolute; left: 258px; top:565px;width: 166px; height: 38px; border: 1px #e6e6e6 solid; appearance: none; -webkit-appearance: none; -moz-appearance: none;font-size: 20px;">
              <option v-for="(table, index) in deviceList" :key="index" >{{table.tableName}}</option>
            </select>
            <div class="row" style="">
              <div @click="addRule" class="center" style="position: absolute; left: 250px; top:620px; width: 108px; height: 42px; border-radius: 4px; background-image: linear-gradient(#53c2ff, #1d6fff); display: inline-grid; color: white;font-size: 20px;">
                保存
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--    <h1>设置</h1>-->
    <!--    <div>唯一标识: {{this.imei}}</div>-->
    <!--    <mt-button type="primary" style="size: 40px" @click="MessageBox2">设备绑定</mt-button>-->
    <!--    <mt-button type="primary" style="size: 40px" >设备ID</mt-button>-->
    <!--    @click="MessageBox3">-->
  </div>
</template>

<script>
  import {MessageBox} from 'mint-ui';

  export default {
    name: 'MyPage',
    inject:['reload'],
    data() {
      return {
        title: this.$store.state.homeTitle,
        imei: '',
        tableId:'',
        tableName:'',
        tableType:'',
        tableMac:'',
        maxTemperature:'',
        minTemperature:'',
        maxHumidity:'',
        minHumidity:'',
        openTime:'',
        deviceList:'',
        deviceId:'',
        deviceName:'',
        deviceInfo:'',
        selectName:'',
        selectId:'',
      }
    },
    methods: {
      changeDevice(){
        var that=this;
        var params={
          IMEI:that.imei,
          tableName:that.deviceName
        }
        that.$http.post('http://114.215.136.150:1847/api/EquipmentInfo/GetDeviceTableId', params).then(function (response) {
          if (response.data.Code >= 0) {
            this.deviceInfo=response.data.Data;
            this.deviceId=this.deviceInfo.tableId;
          }
        })

      },
      MessageBox2() {
        MessageBox.prompt('请输入设备ID', {
          inputValue: '',
          confirmButtonText: '确认',
        }).then(({value, action}) => {
          if (value) {
          }
        })
      },
      addTable(){
        var that=this;
        if(that.tableType==null||that.tableId==null||that.tableMac==null||that.tableName==null){
          that.$toast({message: "输入不能为空", className: 'btn'});
        }
        else {
          var params={
            IMEI:that.imei,
            tableType:that.tableType,
            tableId:that.tableId,
            tableName:that.tableName,
            mac:that.tableMac
          }
          that.$http.post('http://114.215.136.150:1847/api/EquipmentInfo/DeviceBuilding', params).then(function (response){
            if (response.data.Code >= 0) {
              that.$toast({message: "新增成功", className: 'btn'});
              var infos={
                IMEI: this.imei,
              };
              this.$http.post('http://114.215.136.150:1847/api/EquipmentInfo/GetDeviceBuilding', infos).then(function (response) {
                if (response.data.Code >= 0) {
                  this.deviceList=response.data.Data;
                }
              });
            }
            else{
              that.$toast({message: "操作失败，请重试", className: 'btn'});
            }
          })
          that.tableType=null;
          that.tableId=null;
          that.tableMac=null;
          that.tableName=null;

        }
      },
      selectDevice(){
        var that=this;
        var params={
          IMEI:that.imei,
          tableName:that.selectName
        }
        that.$http.post('http://114.215.136.150:1847/api/EquipmentInfo/GetDeviceTableId', params).then(function (response) {
          if (response.data.Code >= 0) {
            this.selectId=response.data.Data.tableId;
          }
        })
      },
      deleteTable(){
        MessageBox.confirm('确认删除此药品柜?').then(action => {
          var params = {
            IMEI: this.imei,
            tableId: this.deviceId
          }
          this.$http.post('http://114.215.136.150:1847/api/EquipmentInfo/DeleteDeviceInfo', params).then(function (response) {
            if (response.data.Code >= 0) {
              this.$toast({message: "删除成功", className: 'btn'});
              var infos={
                IMEI: this.imei,
              };
              this.$http.post('http://114.215.136.150:1847/api/EquipmentInfo/GetDeviceBuilding', infos).then(function (response) {
                if (response.data.Code >= 0) {
                  this.deviceList=response.data.Data;
                }
              });
            }
            else{
              this.$toast({message: "删除失败，请重试", className: 'btn'});
            }
          });
        })
      },
      addRule(){
        var that=this;
        if(that.minTemperature==null||that.maxTemperature==null||that.minHumidity==null||that.maxHumidity==null||that.openTime==null){
          that.$toast({message: "输入不能为空", className: 'btn'});
        }
        else if(that.minTemperature>30||that.minTemperature<0||that.maxTemperature>30||that.maxTemperature<0||that.maxHumidity>100||that.maxHumidity<0||that.minHumidity>100||that.minHumidity<0){
          that.$toast({message: "超出范围，请重新输入", className: 'btn'});
        }
        else if(that.minHumidity>that.maxHumidity||taht.minTemperature>that.maxTemperature){
          that.$toast({message: "输入错误，最小值不能大于最大值", className: 'btn'});
        }
        else {
          var params={
            IMEI:that.imei,
            tableId:that.selectId,
            MinTempc:that.minTemperature,
            MaxTempc:that.maxTemperature,
            MinHUm:that.minHumidity,
            MaxHum:that.maxHumidity,
            Alarmtime:that.openTime,
          }

          that.$http.post('http://114.215.136.150:1847/api/EquipmentInfo/AlarmStrategy', params).then(function (response) {
            if (response.data.Code >= 0) {
              that.$toast({message: "保存成功", className: 'btn'});
              ;
            }
          })
          this.minHumidity=null;
          this.maxHumidity=null;
          this.minTemperature=null;
          this.maxTemperature=null;
          this.openTime=null;
        }
      },


    },
    created() {
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
      var infos={
        IMEI: this.imei,
      };
      this.$http.post('http://114.215.136.150:1847/api/EquipmentInfo/GetDeviceBuilding', infos).then(function (response) {
        if (response.data.Code >= 0) {
          this.deviceList=response.data.Data;
        }
      });
    },
    mounted() {
      this.tableType=null;
      this.tableId=null;
      this.tableMac=null;
      this.tableName=null;
      this.minHumidity=null;
      this.maxHumidity=null;
      this.minTemperature=null;
      this.maxTemperature=null;
      this.openTime=null;
    }

  }
</script>

<style lang="stylus" scoped>
  .center {
    display: flex;
    align-items: center; /*定义父元素的元素垂直居中*/
    justify-content: center; /*定义子元素的里的元素水平居中*/
  }
</style>
