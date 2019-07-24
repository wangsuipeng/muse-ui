<template>
    <div class="home">
        <mu-appbar style="width: 100%;text-align: center" color="primary">
            <mu-button icon slot="left">
                <mu-icon value="menu"></mu-icon>
            </mu-button>个人中心
            <mu-button flat slot="right" @click="personalCenter">LOGIN</mu-button>
        </mu-appbar>
        <div class="content-main">
            <div class="upload-images">
                <!-- <div class="img-box" v-for="(item,index) in uploadImages" :key="index">
                    <div class="icon-po">
                        <img class="image" :src="item" />
                        <div class="icon-close" @click="imgclose(index)">×</div>
                    </div>
                </div>-->
                <van-uploader
                    :after-read="onRead"
                    @delete="imgclose"
                    v-model="fileList"
                    multiple
                    :max-count="9"
                />
                <button @click="add">按钮</button>
                <!-- <van-uploader
                    
                    accept="image/jpg, image/jpeg"
                    multiple
                    class="icon-add"
                ></van-uploader>-->
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            fileList: [],
            postData: [],
            deleteImgs: [],
            uploadImages: [],
            fd: []
        };
    },
    mounted() {
        document.addEventListener("plusready", this.plusReady());
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
        personalCenter() {
            this.$router.push("/personalCenter");
        },
        onRead(e) {
            console.log(e);
            if (e.constructor == Object) {
                console.log("对象");
                this.postData.push(e);
            } else if (e.constructor == Array) {
                console.log("数组");
                this.postData = this.postData.concat(e);
            }
            console.log(this.postData);
            //注意，我们这里没有使用form表单提交文件，所以需要用new FormData来进行提交
            // this.fd = new FormData();
            // if (e && e.length) {
            //     // 判断是否是多图上传 多图则循环添加进去
            //     e.forEach(item => {
            //         this.fd.append("files", item.file); //第一个参数字符串可以填任意命名，第二个根据对象属性来找到file
            //     });
            // } else {
            //     this.fd.append("files", e.file);
            // }
            // console.log(this.fd);
            // this.$axios
            //     .post("/file/multiUpload", fd) //url是服务器的提交地址
            //     //成功回调
            //     .then(res => {
            //         this.uploadImages = [...this.uploadImages, ...res.Result];
            //     }); //将服务器返回的图片链接添加进img数组，进行预览展示
        },
        add() {
            let imgData = this.postData.filter(
                item =>
                    !this.deleteImgs.some(
                        ele => ele.file.lastModified === item.file.lastModified
                    )
            );
            console.log("zheli ");
            console.log(imgData);
            let fd = new FormData();
            fd.append("file");
            imgData.forEach(item => {
                fd.append("file", item.file); //第一个参数字符串可以填任意命名，第二个根据对象属性来找到file
            });
        },
        //删除预览图片按钮
        imgclose(index) {
            console.log(index);
            console.log(index.file.lastModified);
            this.deleteImgs.push(index);
            console.log(this.deleteImgs);
            // this.uploadImages.splice(e, 1);
        },
        // onRead(file) {
        //     // 上传图片到图片服务器
        //     // this.$refs.clothImg.src = file.content
        //     console.log(file);
        //     this.postData.push(file); // postData是一个数组
        //     // let url = API + "/upload?type=99";
        //     let fd = new FormData();
        //     fd.append("upImgs", file.file);
        //     console.log(fd);
        //     // this.axios
        //     //     .post(url, fd, {
        //     //         headers: {
        //     //             "Content-Type": "multipart/form-data"
        //     //         }
        //     //     })
        //     //     .then(res => {
        //     //         this.imgUrlListValue.push(res.data.urls[0].image); //这里上传到指定的图片服务器，成功后会返回图片的url
        //     //     })
        //     //     .catch(err => {
        //     //         alert(err);
        //     //     });
        // },
        deleteImg(file) {
            console.log(file);
        }
    }
};
</script>
<style scoped>
.content-main {
    padding: 10px 0px 0 11px;
}
</style>
<style lang="less" scoped>
.upload-images {
    padding: 0 20px;
    .img-box {
        display: inline-block;
    }
    .image {
        width: 60px;
        height: 80px;
    }
    .icon-add {
        width: 40px;
        height: 40px;
        border: 1px solid #9a9ba3;
        border-radius: 50%;
        overflow: hidden;
        display: inline-block;
        margin-top: 20px;
    }

    .icon-add:before {
        content: "";
        position: absolute;
        width: 50px;
        height: 2px;
        left: 50%;
        top: 50%;
        margin-left: -25px;
        margin-top: -1px;
        background-color: #aaabb2;
    }
    .icon-add:after {
        content: "";
        position: absolute;
        width: 2px;
        height: 50px;
        left: 50%;
        top: 50%;
        margin-left: -1px;
        margin-top: -25px;
        background-color: #aaabb2;
    }
    .icon-po {
        position: relative;
        width: 60px;
        height: 80px;
        margin-right: 20px;
        margin-top: 20px;
    }
    .icon-close {
        position: absolute;
        right: -8px;
        top: -8px;
        width: 16px;
        height: 16px;
        border-radius: 50%;
        background-color: red;
        color: #fff;
        font-size: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
}
</style>
