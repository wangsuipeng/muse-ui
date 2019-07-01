<template>
  <div class="hello">
    <mu-container style="padding: 50px 0;">
      <mu-row justify-content="center">
        <mu-avatar :size="size">
          <img src="../../src/assets/325681.jpg">
        </mu-avatar>
      </mu-row>
    </mu-container>
    <mu-container>
      <mu-form ref="form" :model="validateForm" class="mu-demo-form">
        <mu-form-item prop="username" :rules="usernameRules">
          <mu-text-field
            class="userWord"
            v-model="validateForm.username"
            placeholder="请输入账户"
            prop="username"
          ></mu-text-field>
        </mu-form-item>
        <mu-form-item prop="password" :rules="passwordRules">
          <mu-text-field
            class="userWord"
            type="password"
            placeholder="请输入密码"
            v-model="validateForm.password"
            prop="password"
          ></mu-text-field>
        </mu-form-item>
        <mu-form-item prop="isAgree" :rules="argeeRules">
          <mu-checkbox label="同意用户协议" v-model="validateForm.isAgree"></mu-checkbox>
        </mu-form-item>
        <!-- <mu-form-item>
          <mu-button color="primary" @click="submit">提交</mu-button>
          <mu-button @click="clear">重置</mu-button>
        </mu-form-item>-->
      </mu-form>
    </mu-container>
    <div class="btn-sign">
      <mu-button class="btn" color="error" v-ripple @click="backgrounds">登 录</mu-button>
      <div>
        <span class="right" @click="clickBtn">注册新用户</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      size: 100,
      usernameRules: [
        { validate: val => !!val, message: "必须填写用户名" },
        { validate: val => val.length >= 3, message: "用户名长度大于3" }
      ],
      passwordRules: [
        { validate: val => !!val, message: "必须填写密码" },
        {
          validate: val => val.length >= 3 && val.length <= 10,
          message: "密码长度大于3小于10"
        }
      ],
      argeeRules: [{ validate: val => !!val, message: "必须同意用户协议" }],
      validateForm: {
        username: "",
        password: "",
        isAgree: false
      }
    };
  },
  mounted() {
    this.backgrounds();
  },
  methods: {
    backgrounds() {
      setTimeout(() => {
        if (window.plus) {
          plus.navigator.setStatusBarStyle("dark");
        }
      },1000)
    },
    clickBtn() {
      this.$router.push("/layout");
    },
    submit() {
      this.$refs.form.validate().then(result => {
        console.log("form valid: ", result);
      });
    },
    clear() {
      this.$refs.form.clear();
      this.validateForm = {
        username: "",
        password: "",
        isAgree: false
      };
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  position: fixed;
  top: 0;
  width: 100%;
  bottom: 0;
  padding: 0 8px;
  box-sizing: border-box;
}
.userWord {
  font-size: 14px;
}
.btn-sign {
  box-sizing: border-box;
}
.btn {
  width: 100%;
  height: 46px;
}
.right {
  float: right;
  margin-top: 10px;
  padding-right: 3px;
  color: brown;
}
</style>
