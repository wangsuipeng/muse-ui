<template>
    <div style="height:100vh;">
        <!-- <div :style="{height: `${height}px`,overflow: 'hidden'}" class="top-nav"></div> -->
        <content-main></content-main>
        <footer-nav></footer-nav>
    </div>
</template>
<script>
import footerNav from "./footerNav";
import contentMain from "./main/contentMain";
export default {
    name: "index",
    data() {
        return {
            height: 0
        };
    },
    components: {
        footerNav,
        contentMain
    },
    created () {
        
    },
    mounted () {
        if(window.plus){
            this.height = plus.navigator.getStatusbarHeight();
        }
    }
};
</script>
<style scoped>
.top-nav {
    background-color: #2196f3;
}
</style>