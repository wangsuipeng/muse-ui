<template>
    <div style="height:100vh;" class="content">
        <content-main></content-main>
        <footer-nav></footer-nav>
    </div>
</template>
<script>
import footerNav from "../footerNav";
import contentMain from "./contentMain";
export default {
    name: "index",
    data() {
        return {};
    },
    components: {
        footerNav,
        contentMain
    }
};
</script>
<style scoped>
.content {
    overflow: hidden;
    position: relative;
}
</style>
