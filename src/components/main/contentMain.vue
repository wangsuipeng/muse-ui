<template>
    <div :style="{height: `calc(100vh - ${plusHeight}px - 56px)`}" class="box">
        <transition :name="transitionName">
            <keep-alive>
                <router-view :key="key" class="Router"/>
            </keep-alive>
        </transition>
    </div>
</template>
<script>
export default {
    name: "contentMain",
    data() {
        return {
            transitionName: "slide-right", // 默认动态路由变化为slide-right
            plusHeight: 0,
        };
    },
    computed: {
        key() {
            return this.$route.fullPath;
        }
    },
    mounted () {
        if (window.plus) {
            this.plusHeight = plus.navigator.getStatusbarHeight();
        }
    },
    watch: {
        $route(to, from) {
            let isBack = this.$router.isBack; //  监听路由变化时的状态为前进还是后退
            if (isBack) {
                this.transitionName = "slide-right";
            } else {
                this.transitionName = "slide-left";
            }
            this.$router.isBack = false;
        }
    }
};
</script>
<style scoped>
.Router {
  position: absolute;
  width: 100%;
  transition: all 0.4s ease;
}

.slide-left-enter,
.slide-right-leave-active {
  opacity: 0;
  /* -webkit-transform: translate(100%, 0); */
  transform: translate(100%, 0);
}

.slide-left-leave-active,
.slide-right-enter {
  opacity: 0;
  /* -webkit-transform: translate(-100%, 0); */
  transform: translate(-100%,0);
}
.box {
    overflow-y: auto;
    /* overflow-x: hidden; */
}
</style>
