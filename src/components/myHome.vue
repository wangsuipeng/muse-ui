<template>
    <div class="home">
        <mu-appbar style="width: 100%;text-align: center" color="primary">
            <mu-button icon slot="left">
                <mu-icon value="menu"></mu-icon>
            </mu-button>
                个人中心
            <mu-button flat slot="right" @click="personalCenter">LOGIN</mu-button>
        </mu-appbar>
    </div>
</template>
<script>
export default {
    data() {
        return {

        }
    },
    methods: {
        personalCenter() {
            this.$router.push('/personalCenter')
        },
        
    }
};
</script>
<style scoped>

</style>
