<template>
    <div class="notic">
        <v-touch v-on:swipeleft="onSwipeLeft" v-on:swiperight="onSwipeRight">
            <mu-container class="main-content">
                <mu-tabs :value.sync="active" color="green" indicator-color="yellow" full-width>
                    <mu-tab>TAB ITEM 1</mu-tab>
                    <mu-tab>TAB ITEM 2</mu-tab>
                    <mu-tab>TAB ITEM 3</mu-tab>
                </mu-tabs>
                <div class="demo-text" v-if="active === 0">
                    <p>“……是的，我承认从很早以前我都害怕死亡，在医院里被人研究的时候，以前做出布局的时候，其实我很怕死的，因为除了死以外，我没有值得珍惜的东西，很奇怪是吧？恰好是这样我真的很怕死，因为我想要有值得珍惜的东西之后，死亡之后才会不寂寞，我才能够安然的面对死亡……88888888888888999999999999”</p>
                </div>
                <div class="demo-text" v-if="active === 1">
                    <div :class="postData.length>4?'upload-img-5':'upload-img-1'">
                        <p class="p-header">上传需要找的面料照片：</p>
                        <p style="font-size: 12px">请上传要找的完整图案、细节图、尺寸参照图、正反面对比等。(最多5张)</p>
                        <div class="posting-uploader">
                            <div
                                class="posting-uploader-item"
                                v-for="(item,nn) in postData"
                                :key="nn"
                            >
                                <img :src="item.content" alt="图片" class="imgPreview" />
                                <van-icon name="close" @click="delImg(nn)" class="delte" />
                            </div>
                            <van-uploader
                                :after-read="onRead"
                                :accept="'image/*'"
                                multiple
                                v-show="postData.length<=4"
                            >
                                <img
                                    src="../assets/images/avatar1.jpg"
                                    alt="等待传图"
                                    class="imgPreview"
                                />
                            </van-uploader>
                        </div>
                    </div>
                </div>
                <div class="demo-text" v-if="active === 2">
                    <div class="img-files flex">
                        <div v-if="imgs.length>0" class="flex">
                            <div class="img-box" v-for="(item, i) in imgs" :key="i">
                                <img :src="item" alt />
                                <span @click="del(i)">
                                    <i class="icon-Group- iconfont"></i>
                                </span>
                            </div>
                        </div>
                        <div class="img-file" v-if="imgs.length < size">
                            <input type="file" multiple id="files" @change="fileChange" />
                            <label for="files">上传图片</label>
                        </div>
                    </div>
                </div>
            </mu-container>
        </v-touch>
    </div>
</template>
<script>

export default {
    data() {
        return {
            active: 0,
            a: true,
            imgs: [], // 图片预览地址
            imgfiles: [], // 图片原文件，上传到后台的数据
            size: 5 ,// 限制上传数量
            postData: []
        };
    },
    mounted () {
        // document.addEventListener("plusready", this.plusReady());
    },
    methods: {
         plusReady() {
            // 监听“返回”按钮事件
            var first = null;
            plus.key.addEventListener("backbutton", function() {
                //首次按键，提示‘再按一次退出应用’
                if (!first) {
                    first = new Date().getTime();
                    // plus.nativeUI.alert("再按一次退出应用");
                    plus.nativeUI.toast(
                        '<font style="font-size:14px">再按一次返回键退出</font>',
                        {
                            type: "richtext",
                            duration: "long",
                            richTextStyle: { align: "center" }
                        }
                    );
                    setTimeout(function() {
                        plus.nativeUI.closeToast();
                    }, 500);
                    setTimeout(function() {
                        first = null;
                    }, 1000);
                } else {
                    if (new Date().getTime() - first < 1000) {
                        plus.runtime.quit();
                        // plus.nativeUI.alert("退出成功");
                    }
                }
            }); // 在这里调用plus api
        },
        delImg(index) {
            console.log(index)
            // 删除指定下标的图片对象
            if (isNaN(index) || index >= this.postData.length) {
                return false;
            }
            let tmp = [];
            for (let i = 0, len = this.postData.length; i < len; i++) {
                if (this.postData[i] !== this.postData[index]) {
                    tmp.push(this.postData[i]);
                }
            }
            this.postData = tmp;
            console.log(this.postData)
        },
        onRead(file) {
            console.log(file)
            // 上传图片到图片服务器
            // this.$refs.clothImg.src = file.content
            this.postData.push(file); // postData是一个数组
            console.log(this.postData)
            // let url = API + "/upload?type=99";
            let fd = new FormData();
            // fd.append("upImgs", file.file);
            this.postData.forEach(item => {
                this.fd.append("files", item.file); //第一个参数字符串可以填任意命名，第二个根据对象属性来找到file
            });
            // this.axios
            //     .post(url, fd, {
            //         headers: {
            //             "Content-Type": "multipart/form-data"
            //         }
            //     })
            //     .then(res => {
            //         this.imgUrlListValue.push(res.data.urls[0].image); //这里上传到指定的图片服务器，成功后会返回图片的url
            //     })
            //     .catch(err => {
            //         alert(err);
            //     });
        },
        outPage() {
            this.$router.goBack();
        },
        // 左滑动
        onSwipeLeft() {
            if (this.active >= 2) {
                this.active = 2;
            } else {
                this.active++;
            }
        },
        // 右滑动
        onSwipeRight() {
            if (this.active > 0) {
                this.active--;
            }
        },
        fileChange() {
            // 加入图片
            var _this = this;
            var event = event || window.event;
            var file = event.target.files;
            var leng = file.length;
            for (var i = 0; i < leng; i++) {
                var reader = new FileReader(); // 使用 FileReader 来获取图片路径及预览效果
                _this.imgfiles.push(file[i]);
                reader.readAsDataURL(file[i]);
                reader.onload = function(e) {
                    _this.imgs.push(e.target.result); // base 64 图片地址形成预览
                };
            }
        },
        del(i) {
            console.log(i);
            // 根据下标删除
            this.imgfiles.splice(i, 1);
            this.imgs.splice(i, 1);
            console.log(this.imgs);
            console.log(this.imgfiles);
        }
    }
};
</script>
<style scoped>
.upload-img-5 {
    margin: 5px 0 90px 0;
}
.upload-img-1 {
    margin: 5px 0 15px 0;
}
.imgPreview {
    width: 100px;
    height: 100px;
}
</style>

<style lang="less">
.demo-text {
    padding: 16px;
    background: #fff;
    p {
        margin: 8px 0;
    }
}
</style>
<style scoped>
.notic {
    width: 100%;
    height: 100%;
}
.main-content {
    width: 100%;
    height: 100%;
    padding: 0 !important;
}
</style>

<style scoped lang="scss" rel="stylesheet/scss">
.img-files {
    width: 600px;
    margin: 0 auto;
}
.img-box {
    width: 160px;
    position: relative;
    border: 1px solid #e6e6e6;
    margin-right: 20px;
    background: #f6f6f6;
    img {
        width: 160px;
    }
    span {
        position: absolute;
        top: 5px;
        right: 10px;
        color: red;
        display: none;
    }
    &:hover span {
        display: block;
    }
}
.img-file {
    height: 160px;
    width: 160px;
    display: flex;
    align-items: center;
    font-size: 30px;
    text-align: center;
    border: 1px #333 dashed;
    justify-content: center;
    margin: 0;
    position: relative;
    > input {
        width: 100%;
        height: 100%;
        opacity: 0;
    }
    > label {
        position: absolute;
        font-size: 18px;
        color: #333;
    }
}
</style>
