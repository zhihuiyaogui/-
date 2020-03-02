<template>

<!--  <div class="main">-->
<!--    <p>信息录入</p>-->
<!--    <div class="list">-->
<!--  <mt-field label="药品名称" placeholder="请输入药品名称" v-model="username"></mt-field>-->
<!--  <mt-field label="条形码" placeholder="请输入条形码" type="email" v-model="email"></mt-field>-->
<!--  <mt-field label="药品数量" placeholder="请输入药品数量" type="tel" v-model="phone"></mt-field>-->
<!--  </div>-->
<!--  </div>-->

  <div class="from_box">
    <form class="form" action="">
      <ul>
        <li>
          药品名称：
          <input class="input" type="text" placeholder="请输入药品名称" v-model="formMess.MedicineName">
        </li>
        <li>
          药品条码：
          <input class="input" type="number" placeholder="请输入药品条码" v-model="formMess.MedicineId">
        </li>
        <li>
          药品价格：
          <input class="input" type="number"  placeholder="请输入药品价格" v-model="formMess.MedicinePrice">
        </li>
        <li>
          药品图片：
          <input class="input" type="phone" v-model="formMess.phone">
        </li>
      </ul>
      <div class=btn1 style="text-align:center; font-size: 30px;">
      <mt-button @click="inspect" class="but" >确认添加</mt-button>
      </div>
    </form>
  </div>
</template>

<script>
    import axios from 'axios';
    import { Toast } from 'mint-ui';
    export default {
        name: "from",
        data() {
            return {
                mac:'02',
                formMess: {
                    MedicineName: '',
                    MedicineId: '',
                    MedicinePrice: '',
                    phone: '',
                },
                checkdata:[
                    {
                        inspect: "", // 待检测的字段
                        msg: '药品名称', // 空值返回的提示
                    },
                    {
                        inspect: "",
                        msg: '药品条码',
                        reg:'^[0-9]*$'
            },
                    {
                        inspect: "",
                        msg: '药品价格',
                        reg:'^[1-9]\\d*$'
        },

                ]
            };
        },
        methods: {
            // 判定是否合规
            have_empty(arr) {
                for (let key in arr) {
                    if(arr[key].inspect && arr[key].reg){ // 有值并且有规则执行验证
                        let reg = new RegExp(arr[key].reg)
                        var red_end = reg.test(arr[key].inspect)
                        if( !red_end ){
                            Toast('请输入正确的' + arr[key].msg)
                            return false
                        }
                    }else if(!arr[key].inspect){
                        Toast('请输入' + arr[key].msg)
                        return false
                    }
                }
                return true
            },
            // 判定规则前传入参数
            inspect() {
                this.assignData();
                var end = this.have_empty(this.checkdata);
                if (!end) return // 判定验证结果
                this.onSubmit();

            },
            onSubmit(){
                var that = this
              var info={
                MedicineName: that.formMess.MedicineName,
                  MedicineId: that.formMess.MedicineId,
                  MedicinePrice:that.formMess.MedicinePrice,
                  mac:that.mac,
                  // mac:'mac'
              }
              //http://localhost:1847/api/EquipmentInfo/AddMedicineInfo
              that.$http.post('/api/EquipmentInfo/AddMedicineInfo',info).then(function (response) {
                  if (response.data.Code >= 0){
                      Toast('添加成功')
                  }
              })

            },
            assignData() {//赋值
                var arrForm = [];
                for(let key in this.formMess){
                    arrForm.push(key);
                }
                for(let i = 0;i<this.checkdata.length;i++){
                    var key = arrForm[i];
                    this.checkdata[i].inspect = this.formMess[arrForm[i]];
                }
            }
        },
        mounted() {

        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped >
  .from_box{
    font-size: 20px;}
  .form{
      padding:5%;
      width:90%;
      margin: auto;
      border:.01rem solid gray;

      flex-wrap: wrap;}
      .input{
        width:80%;
        height:.5rem;
        margin-bottom: .2rem;
        border:.01rem solid black;
        height:.5rem;
      }
    .but{
      margin: 0 auto;

      background: #0086b3;
      padding:6px;
      color: #fff;
    }
  .btn1{

  }

</style>

