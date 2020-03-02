<template>
  <div class="login-page">
    <header class="header">
      <div class="header-left" @click="goBack">
        <i class="iconfont icon-xiangzuo1"></i>
      </div>
    </header>
    <div class="content">
      <div class="logo-box">
        <img src="@/assets/images/iocn-login.svg" alt="">
      </div>
      <div class="input-box">
        <div class="input-item">
          <div class="input-babel">账号</div>
          <div class="user_code input-cont">
            <input
              type="text"
              name="userCode"
              placeholder="手机号/邮箱/用户名"
              v-model="user.userCode"
              ref="userCodeInput"
            >
            <i class="iconfont icon-guanbi2"
              v-show="userClear"
              @click="clearValue('userCode')"
            ></i>
          </div>
        </div>
        <div class="input-item">
          <div class="input-babel">密码</div>
          <div class="pwd_code input-cont">
            <input
              type="password"
              name="password"
              placeholder="请输入密码"
              v-model="user.password"
              ref="passwordInput"
            >
            <i class="iconfont icon-guanbi2 clear-pwd"
              v-show="passwordClear"
              @click="clearValue('password')"
            ></i>
            <i class="iconfont icon-buxianshimima"
              v-if="togglePassword"
              @click="togglePasswodType"
            ></i>
            <i class="iconfont icon-guanbi"
              v-else
              @click="togglePasswodType"
            ></i>
          </div>
        </div>
        <div class="more">
          <div class="registor">立即注册</div>
          <div class="find-password">找回密码</div>
        </div>
        <div class="submit-btn">
          <button @click="login">登录</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginPage',
  data () {
    return {
      user: {
        userCode: "",
        password: ""
      },
      togglePassword: true
    }
  },
  computed: {
    userClear () {
      return this.toggleClearIcon("userCodeInput", "userCode")
      // let hasFocus = this.$refs.userCodeInput == document.activeElement
      // return this.userCode != "" && hasFocus
    },
    passwordClear () {
      return this.toggleClearIcon("passwordInput", "password")
      // let hasFocus = this.$refs.passwordInput == document.activeElement
      // return this.password != "" && hasFocus
    }
  },
  methods: {
    togglePasswodType () {
      if (this.$refs.passwordInput.type == "password") {
        this.$refs.passwordInput.type = "text"
        this.togglePassword = false
      } else {
        this.$refs.passwordInput.type = "password"
        this.togglePassword = true
      }
    },
    clearValue (data) {
      this.user[data] = ""
    },
    toggleClearIcon (dom, data) {
      let result;
      let hasFocus = this.$refs[dom] == document.activeElement
      if (this.user[data] != "" && hasFocus) {
        result = true
      } else {
        result = false
      }
      return result
    },
    login() {

    },
    goBack () {
      this.$router.goBack()
    }
  },

}
</script>

<style lang="stylus" scoped>
  @import '~@/assets/style/varibles.styl';
  .login-page
    position: absolute
    top: 0
    right: 0
    bottom: 0
    left: 0
    background-color: #ffffff
    .header
      height: $headerHeight
      width: 100%
      .header-left
        display: flex
        justify-content: center
        width: 1rem
        line-height $headerHeight
        text-align: center
        color: #ffffff
        .iconfont
          display: block
          font-size: .56rem
          color: #333333
    .content
      padding: 0 .65rem
      .logo-box
        width: 30%;
        margin: 15% auto;
      .input-box
        font-size: .32rem
        .input-item
          display: flex
          justify-content: space-between
          align-items: center
          box-sizing: border-box
          padding: .2rem 0
          border-bottom: 1px solid #ddd
          .input-babel
            width: 20%
          .input-cont
            flex: 1
            position: relative
            input
              display: block
              width: 100%
            .iconfont
              position: absolute
              right: 0
              top: 50%
              width: .26rem
              height: .26rem
              margin-top: -.13rem
              font-size: .36rem !important
              color: #aaa
            i.clear-pwd
              right: .48rem
            i.icon-guanbi
              color: $themeColor
        .more
          display: flex
          justify-content: space-between
          margin-top: .4rem
          font-size: .32rem
          color: $themeColor
        .submit-btn
          overflow: hidden
          margin-top: .5rem
          height: $headerHeight
          line-height: $headerHeight
          border-radius: .1rem
          button
            display: block
            width: 100%
            line-height: $headerHeight
            background-color: $themeColor
            color: #ffffff

</style>
