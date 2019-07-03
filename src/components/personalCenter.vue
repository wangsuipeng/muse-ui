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
                style="display: inline-block;color: #C8C8C8;font-size: 18px"
            >发布</mu-button>
        </mu-appbar>
        <div class="content">
            <mu-flex class="flex-wrapper" justify-content="start">
                <mu-flex class="flex-demo" justify-content="center"></mu-flex>
            </mu-flex>
            <div class="content-text">
                <input type="text" placeholder="请输入标题..." class="input-text">
                <textarea name id cols="30" rows="10" class="textarea-text" placeholder="说点什么..."></textarea>
                <!-- <span></span> -->
                <span class="upload-btn">
                    <img src="../assets/images/add-pload.png" alt="">
                </span>
            </div>
            <mu-flex class="flex-wrapper" justify-content="start">
                <mu-flex class="flex-demo" justify-content="center"></mu-flex>
            </mu-flex>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
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
    },
    methods: {
        outPage() {
            this.$router.push("/layout/myHome");
        },
        getData() {
            axios({
                url: '/api/admin/article/publishMsg',
                method: 'post',
                headers: {
                    'Authorization': '25922515-2e92-4ca3-a4a0-dd372ff92b3d'
                },
                data: this.formPost
            }).then((result) => {
                console.log(result)
            }).catch((err) => {
                console.log(err)
            });
        }
    }
};
</script>
<style scoped>
.flex-demo {
    width: 100%;
    height: 18px;
    background-color: #f8f8f8;
}
.top-nav {
    background-color: #2196f3;
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
    border: 2px solid #EAEAEA;
    box-shadow: 0 3px -1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12); 
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
    border-top: 1px solid #EAEAEA;
    border-bottom: 1px solid #EAEAEA;
    outline: none;
}
</style>
