<template>
    <div class="container-main">
        <div :style="{height: `${height}px`}" class="top-nav"></div>
        <mu-appbar style="width: 100%;" color="#fff" z-depth="0">
            <mu-button icon slot="left" @click="outPage">
                <mu-icon value="clear" :size="size" color="#434343"></mu-icon>
            </mu-button>
            <span style="color: #1A1A1A">新帖子</span>
            <mu-button
                flat
                slot="right"
                @click="replace"
                style="display: inline-block;color: #C8C8C8;font-size: 18px"
            >发布</mu-button>
        </mu-appbar>
        <div class="content">
            <mu-flex class="flex-wrapper" justify-content="start">
                <mu-flex class="flex-demo" justify-content="center"></mu-flex>
            </mu-flex>
            <div class="content-text">
                <input type="text" placeholder="请输入标题..." class="input-text" />
                <textarea name id cols="30" rows="10" class="textarea-text" placeholder="说点什么..."></textarea>
                <!-- <span></span> -->
                <span class="upload-btn">
                    <img src="../assets/images/add-pload.png" alt />
                </span>
                <mu-flex class="flex-wrapper toolbar-box" justify-content="start">
                    <mu-flex class="flex-demo" justify-content="center"></mu-flex>
                </mu-flex>
            </div>
            <div class="comment">
                <div class="avatia">
                    <img src="../assets/325681.jpg" alt />
                </div>
                <div class="comment-text">
                    <input type="text" placeholder="评论" id="inputText"/>
                    <span>发送</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from "axios";
export default {
    data() {
        return {
            size: "36",
            labelPosition: "top",
            form: {
                input: "",
                select: "",
                date: "",
                radio: "",
                checkbox: [],
                switch: false,
                slider: 30,
                textarea: ""
            },
            height: 0,
            formPost: {
                title: "223333322",
                content: "33333",
                authorId: 15,
                category: "22244442"
            }
        };
    },
    mounted() {
        if (window.plus) {
            this.height = plus.navigator.getStatusbarHeight();
        }
        this.getData();
        // document.addEventListener("plusready", this.plusReady());
    },
    methods: {
        plusReady() {
            var webview = plus.webview.currentWebview();
            plus.key.addEventListener("backbutton", function() {
                webview.canBack(function(e) {
                    if (e.canBack) {
                        webview.back(); //这里不建议修改自己跳转的路径
                    } else {
                        webview.close(); //hide,quit
                        //plus.runtime.quit();
                    }
                });
            });
        },
        outPage() {
            this.$router.push("/layout/myHome");
        },
        replace() {
            document.getElementById("inputText").focus();
        },
        getData() {
            axios({
                url: "/api/admin/article/publishMsg",
                method: "post",
                headers: {
                    Authorization: "25922515-2e92-4ca3-a4a0-dd372ff92b3d"
                },
                data: this.formPost
            })
                .then(result => {
                    console.log(result);
                })
                .catch(err => {
                    console.log(err);
                });
        }
    }
};
</script>
<style scoped>
.flex-demo {
    width: 100%;
    height: 12px;
    background-color: #f8f8f8;
}
.top-nav {
    background-color: #2196f3;
}
.toolbar-box {
    margin-top: 10px;
}
.content {
    /* padding-left: 10px; */
    height: calc(100vh - 56px);
}
.container-main {
    background-color: #fff;
}
.content-text {
    width: 100%;
    height: 46vh;
    background-color: #fff;
}
.textarea-text {
    width: 100%;
    height: 20vh;
    outline: none;
    padding: 5px 10px;
}
.upload-btn {
    display: inline-block;
    width: 100px;
    height: 100px;
    margin-left: 15px;
    border-radius: 5px;
    text-align: center;
    line-height: 135px;
    border: 2px solid #eaeaea;
    box-shadow: 0 3px -1px -2px rgba(0, 0, 0, 0.2),
        0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
}
.upload-btn img {
    display: inline-block;
    width: 50px;
    height: 50px;
}
.input-text {
    width: 100%;
    height: 46px;
    padding-left: 10px;
    border-top: 1px solid #eaeaea;
    border-bottom: 1px solid #eaeaea;
    outline: none;
}
.comment {
    width: 100%;
    border-top: 0.5px solid #e9e9e9;
    position: fixed;
    line-height: 0 !important;
    padding: 2.8%;
    bottom: 0;
    left: 0;
}
.avatia {
    float: left;
    width: 10%;
}
.comment-text {
    float: left;
    width: 90%;
}
.comment img {
    display: block;
    /* float: left; */
    width: 2.2rem;
    height: 2.2rem;
    border-radius: 50%;
}
.comment input {
    display: block;
    /* float: left; */
    width: 98%;
    height: 2.5rem;
    border-radius: 1.25rem;
    margin-left: 1%;
    background-color: #fefbfa;
    border: 1px solid #e9e9e9;
    /* box-shadow:inset 0 0 2px 2px #E9E9E9; */
    border-color: #e9e9e9;
    /* outline: 0;
    -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px #e9e9e9;
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px #e9e9e9; */
    padding: 0 6% 0 3%;
    position: relative;
    background-color: white;
    caret-color: red;
}
.comment input:after {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: #d9d9d9;
    content: " ";
    display: block;
    transform: scaley(0.5);
}
.comment span {
    display: inline-block;
    position: absolute;
    color: red;
    top: 28px;
    right: 26px;
}
</style>
