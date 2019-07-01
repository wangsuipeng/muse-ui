<template>
    <div class="center">
        <div :style="{height: `${height}px`}" class="top-nav"></div>
        <mu-appbar style="width: 100%;text-align: center" color="primary">
            <mu-button icon slot="left" @click="outPage">
                <mu-icon value="keyboard_arrow_left" :size="size"></mu-icon>
            </mu-button>个人中心
            <mu-button flat slot="right">LOGIN</mu-button>
        </mu-appbar>
        <div class="content">
            <mu-form
                :model="form"
                class="mu-demo-form"
                :label-position="labelPosition"
                label-width="100"
            >
                <mu-form-item prop="input" label="Input">
                    <mu-text-field v-model="form.input" placeholder="请输入标题"></mu-text-field>
                </mu-form-item>
                <mu-form-item prop="textarea" label="Textarea">
                    <mu-text-field multi-line :rows="3" :rows-max="6" v-model="form.textarea" placeholder="请输入内容"></mu-text-field>
                </mu-form-item>
            </mu-form>
        </div>
    </div>
</template>
<script>
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
            height: 0
        };
    },
    mounted () {
        if(window.plus){
            this.height = plus.navigator.getStatusbarHeight();
        }
    },
    methods: {
        outPage() {
            this.$router.push("/layout/myHome");
        }
    }
};
</script>
<style scoped>
.top-nav {
    background-color: #2196f3;
}
.content {
    padding-left: 10px;
}
</style>
