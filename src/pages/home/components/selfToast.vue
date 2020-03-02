<template>
      <transition name="main-bg-fade">
          <div class="toastMain" v-show="showToast">
              <transition name="content-slide-fade">
                  <div class="contentMain" v-show="showToast">
                      <x-icon type="ios-close-empty" size="30" v-on:click="closeModel()" class="closeModel"></x-icon>
                      <div class="title">请扫描药品包装上的条形码</div>
                      <div class="message textCenter">
                          请扫描药品包装上的条形码
                      </div>
                      <div class="btns">
                          <div class="buttonSubmit" @click="toastSubmit()">
                           {{toastModelOptions.btnSubmitText || "确定"}}
                          </div>
                          <div class="buttonSubmit" @click="toastCancel()">
                              {{toastModelOptions.btnCancelText || "取消"}}
                          </div>
                      </div>
                  </div>
              </transition>    
          </div>
      </transition>    
</template>

<script>
    export default {
        props: ["toastModelOptions"],
        data() {
            return {
                showToast: false,   // 是否显示模态框
            }
        },
        methods: {
            closeModel: function () {
                this.showToast = false;
            },
            showModel: function () {
                this.showToast = true;
            },
            confirmSubmit: function () {
                this.showToast = false;
                if(typeof (this.toastModelOptions.btnSubmitFunction)==='function'){
                    this.toastModelOptions.btnSubmitFunction()
                }
            },
            confirmCancel: function () {
                this.showToast = false;
                if(typeof (this.toastModelOptions.btnCancelFunction)==='function'){
                    this.toastModelOptions.btnCancelFunction()
                }
            },
        }
    }
</script>

<style scoped>

</style>
