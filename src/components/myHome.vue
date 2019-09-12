<template>
  <div class="home">
    <mu-appbar style="width: 100%;text-align: center" color="primary">
      <mu-button icon slot="left">
        <mu-icon value="menu"></mu-icon>
      </mu-button>个人中心
      <mu-button flat slot="right" @click="personalCenter">LOGIN</mu-button>
    </mu-appbar>
    <div class="content-main">
      <div class="upload"></div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["uploadUrl"],
  data() {
    return {
      picavalue: "",
      imgUrl: null,
      isEnlargeImage: false,
      styleColor: {
        color: "red"
      },
      styleSize: {
        fontSize: "30px"
      },
      height: 0
    };
  },
  created() {},
  mounted() {
    if (plus.navigator.isImmersedStatusbar()) {
      // 判斷当前是否支持沉浸式状态栏
      this.height = plus.navigator.getStatusbarHeight();
    }
    //首页返回键处理
    //处理逻辑：1秒内，连续两次按返回键，则退出应用；
    var first = null;
    mui.back = function() {
      //首次按键，提示 再按一次退出应用
      if (!first) {
        first = new Date().getTime(); //记录第一次按下回退键的时间
        mui.toast("再按一次退出虎扑"); //给出提示
        // history.go(-1); //回退到上一页面
        setTimeout(function() {
          //1s中后清除
          first = null;
        }, 1000);
      } else {
        if (new Date().getTime() - first < 1000) {
          //如果两次按下的时间小于1s，
          plus.runtime.quit(); //那么就退出app
        }
      }
    };
    // document.addEventListener("plusready", this.plusReady());
  },
  methods: {
    uploadIMG(e) {
      let files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      this.picavalue = files[0];
      console.log(this.picavalue.size / 1024);
      if (this.picavalue.size / 1024 > 5000) {
        this.$message({
          message: "图片过大不支持上传",
          type: "warning"
        });
      } else {
        this.imgPreview(this.picavalue);
      }
    },
    //获取图片
    imgPreview(file, callback) {
      let self = this;
      //判断支不支持FileReader
      if (!file || !window.FileReader) return;
      if (/^image/.test(file.type)) {
        //创建一个reader
        let reader = new FileReader();

        //将图片转成base64格式
        reader.readAsDataURL(file);
        //读取成功后的回调
        reader.onloadend = function() {
          let result = this.result;
          let img = new Image();
          img.src = result;
          console.log("********未压缩前的图片大小********");
          console.log(result.length);
          img.onload = function() {
            let data = self.compress(img);
            self.imgUrl = result;

            let blob = self.dataURItoBlob(data);

            console.log("*******base64转blob对象******");
            console.log(blob);

            var formData = new FormData();
            formData.append("file", blob);
            console.log("********将blob对象转成formData对象********");
            console.log(formData.get("file"));
            let config = {
              headers: { "Content-Type": "multipart/form-data" }
            };
            // 发送请求;
            self.axios.post(self.uploadUrl.url, formData, config).then(res => {
              // console.log(res);
              // console.log(res.data.data.resultftphost)
              // console.log(res.data.data.resulturl)
              // this.$emit('')
              if (res.data.code == 200) {
                self.$emit(
                  "getImgsrc",
                  res.data.data.resultftphost,
                  res.data.data.resulturl
                );
              } else {
                self.$message({
                  message: "图片上传失败，请重试",
                  type: "warning"
                });
              }
            });
          };
        };
      }
    },
    // 压缩图片
    compress(img) {
      let canvas = document.createElement("canvas");
      let ctx = canvas.getContext("2d");
      let initSize = img.src.length;
      let width = img.width;
      let height = img.height;
      canvas.width = width;
      canvas.height = height;
      // 铺底色
      ctx.fillStyle = "#fff";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0, width, height);

      //进行最小压缩
      let ndata = canvas.toDataURL("image/jpeg", 0.1);
      console.log("*******压缩后的图片大小*******");
      console.log(ndata);
      console.log(ndata.length);
      return ndata;
    },
    // base64转成bolb对象
    dataURItoBlob(base64Data) {
      var byteString;
      if (base64Data.split(",")[0].indexOf("base64") >= 0)
        byteString = atob(base64Data.split(",")[1]);
      else byteString = unescape(base64Data.split(",")[1]);
      var mimeString = base64Data
        .split(",")[0]
        .split(":")[1]
        .split(";")[0];
      var ia = new Uint8Array(byteString.length);
      for (var i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
      }
      return new Blob([ia], { type: mimeString });
    },
    //删除事件
    delImg() {
      this.imgUrl = null;
    },
    // plusReady() {
    //     var webview = plus.webview.currentWebview();
    //     plus.key.addEventListener("backbutton", function() {
    //         webview.canBack(function(e) {
    //             if (e.canBack) {
    //                 webview.back();
    //             } else {
    //                 //webview.close(); //hide,quit
    //                 //plus.runtime.quit();
    //                 //首页返回键处理
    //                 //处理逻辑：1秒内，连续两次按返回键，则退出应用；
    //                 var first = null;
    //                 plus.key.addEventListener(
    //                     "backbutton",
    //                     function() {
    //                         //首次按键，提示‘再按一次退出应用’
    //                         if (!first) {
    //                             first = new Date().getTime();
    //                             plus.nativeUI.toast(
    //                                 '<font style="font-size:14px">再按一次返回键退出</font>',
    //                                 {
    //                                     type: "richtext",
    //                                     duration: "long",
    //                                     richTextStyle: { align: "center" }
    //                                 }
    //                             );
    //                             setTimeout(function() {
    //                                 first = null;
    //                             }, 1000);
    //                         } else {
    //                             if (new Date().getTime() - first < 1500) {
    //                                 plus.runtime.quit();
    //                             }
    //                         }
    //                     },
    //                     false
    //                 );
    //             }
    //         });
    //     });
    // },
    personalCenter() {
      this.$router.push("/personalCenter");
    }
  }
};
</script>
<style lang="scss" scoped>
.upload {
  position: relative;
  width: 200px;
  height: 220px;
  // 图片展示
  .cha {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 6px;
    border: 1px dashed #cccccc;
    overflow: hidden;
    box-sizing: border-box;
    .layer {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 2;
      width: 100%;
      height: 200px;
      background-color: rgba(0, 0, 0, 0.3);
      text-align: center;
      line-height: 200px;
      opacity: 0;
      color: #ffffff;
      border: none;
    }
    .del {
      position: absolute;
      bottom: 0;
      right: 0;
      opacity: 0;
      z-index: 2;
      border: none;
    }
    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 200px;
      border: none;
    }
  }
  //鼠标放上时显示删除和放大
  .cha:hover .layer,
  .cha:hover .del {
    opacity: 1;
  }

  //点击上传
  .load {
    position: absolute;
    top: 0;
    left: 0;
    width: 200px;
    height: 200px;
    border: 1px dashed #cccccc;
    input {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: 0;
    }
  }
  .load::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%);
    width: 1px;
    height: 80%;
    border-right: 1px solid #cccccc;
  }
  .load:after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%);
    width: 80%;
    height: 1px;
    border-top: 1px solid #cccccc;
  }
}
.footer {
  position: fixed;
  bottom: 65px;
  right: 10px;
  button {
    width: 60px;
    height: 60px;
    outline: none;
    color: #ffffff;
    border-radius: 50%;
    background-color: #c22435;
    box-shadow: inset 0px 0px 1px #ccc;
  }
}
.iconfont {
  display: block;
  font-size: 25px;
  margin-left: -5px;
  // margin-bottom: -5px;
}
.word {
  display: inline-block;
  font-size: 14px;
}
.top-nav {
  background-color: #2196f3;
}
</style>
