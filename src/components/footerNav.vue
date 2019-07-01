<template>
    <div class="content">
        <div style="height:56px">
            <mu-bottom-nav :value.sync="bottomNav1" @change="handle">
                <mu-bottom-nav-item value="notice" title="公告" icon="thumb_up" v-ripple></mu-bottom-nav-item>
                <mu-bottom-nav-item value="shoppingCart" title="功能" icon="shopping_cart" v-ripple></mu-bottom-nav-item>
                <mu-bottom-nav-item value="myHome" title="我的" icon="person" v-ripple></mu-bottom-nav-item>
            </mu-bottom-nav>
        </div>
    </div>
</template>
<script>
export default {
    name: "footerNav",
    data() {
        return {
            shift: "movies",
            bottomNav1: "notice"
        };
    },
    mounted() {
        this.bottomNav1 = this.$store.getters.bottomNav;
    },
    methods: {
        outPage() {
            this.$router.goBack();
        },
        handle(val) {
            this.$store.dispatch("CHANGE_NAV", val);
            this.$router.push(`/layout/${val}`);
        }
    }
};
</script>
<style lang="less" scoped>
.mu-ripple-demo {
    position: relative;
    width: 200px;
    height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 16px;
    background-color: #fff;
    border-radius: 4px;
    &.demo-1 {
        color: #2196f3;
        border: 1px solid #2196f3;
    }
    &.demo-2 {
        background-color: #2196f3;
        color: #fff;
    }
    &.demo-3 {
        background-color: #4caf50;
        color: #fff;
    }
}
</style>
<style scoped>
body {
    background-color: rgba(204, 204, 204, 0.479);
}
</style>

