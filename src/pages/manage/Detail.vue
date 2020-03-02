<template>
  <div>
    <header style="height: 80px;background: #0a0582">
      <div >
        <p style="text-align: center;padding-top: 30px;font-size: 32px;color: white">药品详细信息</p>
        <router-link to="/manage">
          <img src="./../../assets/images/home.png" style="margin-top: -64px;margin-left: 1060px;">
          <div style="color: white;font-size: 26px;text-align: right;margin-top: -54px;margin-right: 20px">返回药品列表</div>
        </router-link>
      </div>
    </header>
    <div style="background-color: #eafcff;height:700px">
      <div class="main">
        <img v-bind:src= "medicineInfo.Image" class="img">
        <div style="position: absolute;top:460px;left: 170px">药品位置:{{Math.floor(medicineInfo.CabintId/10)}}行{{medicineInfo.CabintId%10}}列</div>
        <div class="introdetail">
          <p style="margin:15px auto">药品名称：{{medicineInfo.MedicineName}}</p>
          <p style="margin:15px auto" v-model="medicineCount">药品数量：{{medicineCount}}盒</p>
          <p style="margin:15px auto">药品价格：{{medicineInfo.MedicinePrice}}元</p>
          <p style="margin:15px auto">药品规格：{{medicineInfo.spec}}</p>
          <p style="margin:15px auto">生产厂商：{{medicineInfo.manuName}}</p>
          <p style="margin:15px auto">适用症状：</p>
          <p style="margin:15px auto">注意事项：</p>
          <p style="margin:15px auto">保质期：12个月</p>
          <br>
          <br>
          <br>
          <br>

          <br>
          <mt-button  type="primary" style="width: 100px;display: inline-block;"  @click="MessageBox2">存入</mt-button>
          <mt-button type="primary" style="width: 100px;display: inline-block;margin-left: 40px" @click="MessageBox1">取出</mt-button>

          <!--      <mt-button type="primary" @click="back">返回药品列表</mt-button>-->

        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {MessageBox} from 'mint-ui';
  export default {
    name: "Detail",
    data(){
      return{
        medicineInfo:'',
        imei:'',
        medicineList:'',
        row:'',
        column:'',
        medicineCount:'',
        tableId:'',
      }
    },
    created() {
      this.$emit('footer', false);
      this.medicineInfo=this.$route.query.medicineInfo;
      this.row=this.$route.query.row;
      this.column=this.$route.query.column;
      this.tableId=localStorage.getItem('tableId');
      this.getImei();
      this.getMedicine();

    },
    mounted(){
      this.medicineCount=this.medicineInfo.Count;
    },
    methods:{
      MessageBox2() {
        MessageBox.prompt('请输入存入数量', {
          inputValue: '1',
          confirmButtonText: '确认',

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
            IMEI:that.imei,
            MedicineId:that.medicineInfo.MedicineId,
            CabintId:that.medicineInfo.CabintId,
            tableId:this.tableId,
          }
          that.$http.post('http://114.215.136.150:1847/api/EquipmentInfo/UpdateMedicineInfo', params).then(function (response) {
            if (response.data.Code >= 0) {
              that.medicineCount=parseInt(that.medicineCount)+parseInt(value);
              that.$toast({message: "存入成功", className: 'btn'});
            } else {
              that.$toast({message: "存入失败，请重试", className: 'btn'});
            }
          })


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
          } else if (value > this.medicineCount) {
            this.$toast({message: "数量不足", className: 'btn'});
            return;
          }
          var that = this;
          var params = {
            Count: value,
            IMEI:that.imei,
            CabintId:that.medicineInfo.CabintId,
            MedicineId:that.medicineInfo.MedicineId,
            tableId:this.tableId,
          }
          that.$http.post('http://114.215.136.150:1847/api/EquipmentInfo/DeleteMedicineInfo', params).then(function (response) {
            if (response.data.Code >= 0) {
              that.medicineCount=parseInt(that.medicineCount)-parseInt(value);
              that.$toast({message: "取出成功", className: 'btn'});
            } else {
              that.$toast({message: "取出失败，请重试", className: 'btn'});
            }
          })

        })
      },

      getImei() {
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
      },
      getMedicine() {
        var that = this
        var params = {
          imei: that.imei,
          medicineId: that.medicineId,
          tableId:this.tableId,
        }
        that.$http.post('http://114.215.136.150:1847/api/EquipmentInfo/GetTemAndHumData', params).then(function (response) {
          if(response.data.Code>=0){
            that.medicineList=response.data.Data
          }
        })


      },
      back(){
        this.$router.go(-1);
      },
    }
  }
</script>

<style scoped>
  .main{
    height: 500px;
    width: 1120px;
    position: relative;
    top:50px;
    left: 60px;
  }
  .img{
    width: 568px;
    height: 438px;
  }
  .introdetail{
    position: relative;
    top:-440px;
    left: 650px;
    font-size: 22px;

  }
</style>
