<template>
    <div class="shopping">
        <div :style="{height: `${height}px`,overflow: 'hidden'}" class="top-nav"></div>
        <mu-appbar color="#2196f3" style="margin-bottom: 10px">
            <mu-button icon slot="left">
                <mu-icon value="menu"></mu-icon>
            </mu-button>Menus
        </mu-appbar>
        <div class="shop-content" :style="{height:`calc(100vh-112px-${plusHeight}px)`}">
            <div class="content">
                <div v-ripple="{class: 'red--text'}" class="flex-box" @click="upload">
                    <mu-icon size="56" value="favorite" color="red"></mu-icon>
                    <div>告白气球</div>
                </div>
                <div v-ripple="{class: 'red--text'}" class="flex-box">
                    <mu-icon size="56" value="favorite" color="red"></mu-icon>
                    <div>告白气球</div>
                </div>
                <div v-ripple="{class: 'red--text'}" class="flex-box">
                    <mu-icon size="56" value="favorite" color="red"></mu-icon>
                    <div>告白气球</div>
                </div>
            </div>
            <div class="content">
                <div v-ripple="{class: 'red--text'}" class="flex-box">
                    <mu-icon size="56" value="favorite" color="red"></mu-icon>
                    <div>告白气球</div>
                </div>
                <div v-ripple="{class: 'red--text'}" class="flex-box">
                    <mu-icon size="56" value="favorite" color="red"></mu-icon>
                    <div>告白气球</div>
                </div>
                <div v-ripple="{class: 'red--text'}" class="flex-box">
                    <mu-icon size="56" value="favorite" color="red"></mu-icon>
                    <div>告白气球</div>
                </div>
            </div>
            <mu-flex class="flex-wrapper" justify-content="start">
                <mu-flex class="flex-demo" justify-content="center"></mu-flex>
            </mu-flex>
            <mu-container>
                <mu-row>
                    <mu-col span="24" offset="24">
                        <mu-paper>
                            <mu-list>
                                <mu-sub-header>Today</mu-sub-header>
                                <mu-list-item avatar @click.native="changeValue" v-ripple class="muse-list">
                                    <mu-list-item-action avatar>
                                        <mu-avatar>
                                            <img src="../assets/images/avatar1.jpg" />
                                        </mu-avatar>
                                    </mu-list-item-action>
                                    <mu-list-item-content>
                                        <mu-list-item-title>Mike Li</mu-list-item-title>
                                    </mu-list-item-content>
                                    <mu-list-item-action>
                                        <mu-icon value="chat_bubble"></mu-icon>
                                    </mu-list-item-action>
                                </mu-list-item>
                                <mu-list-item avatar v-ripple class="muse-list">
                                    <mu-list-item-action avatar>
                                        <mu-avatar>
                                            <img src="../assets/images/avatar2.jpg" />
                                        </mu-avatar>
                                    </mu-list-item-action>
                                    <mu-list-item-content>
                                        <mu-list-item-title>Maco Mai</mu-list-item-title>
                                    </mu-list-item-content>
                                    <mu-list-item-action>
                                        <mu-icon value="chat_bubble"></mu-icon>
                                    </mu-list-item-action>
                                </mu-list-item>
                                <mu-list-item avatar v-ripple class="muse-list">
                                    <mu-list-item-action avatar>
                                        <mu-avatar>
                                            <img src="../assets/images/avatar3.jpg" />
                                        </mu-avatar>
                                    </mu-list-item-action>
                                    <mu-list-item-content>
                                        <mu-list-item-title>Alex Qin</mu-list-item-title>
                                    </mu-list-item-content>
                                    <mu-list-item-action>
                                        <mu-icon value="chat_bubble"></mu-icon>
                                    </mu-list-item-action>
                                </mu-list-item>
                                <mu-list-item avatar v-ripple class="muse-list">
                                    <mu-list-item-action avatar>
                                        <mu-avatar>
                                            <img src="../assets/images/avatar4.jpg" />
                                        </mu-avatar>
                                    </mu-list-item-action>
                                    <mu-list-item-content>
                                        <mu-list-item-title>Allen Qun</mu-list-item-title>
                                    </mu-list-item-content>
                                    <mu-list-item-action>
                                        <mu-icon value="chat_bubble"></mu-icon>
                                    </mu-list-item-action>
                                </mu-list-item>
                                <mu-list-item avatar v-ripple class="muse-list">
                                    <mu-list-item-action avatar>
                                        <mu-avatar>
                                            <!-- <img src="../assets/images/uicon.jpg"> -->
                                        </mu-avatar>
                                    </mu-list-item-action>
                                    <mu-list-item-content>
                                        <mu-list-item-title>Myron Liu</mu-list-item-title>
                                    </mu-list-item-content>
                                    <mu-list-item-action>
                                        <mu-icon value="chat_bubble"></mu-icon>
                                    </mu-list-item-action>
                                </mu-list-item>
                            </mu-list>
                            <!-- <mu-divider></mu-divider> -->
                            <mu-list>
                                <mu-sub-header>History</mu-sub-header>
                                <mu-list-item avatar>
                                    <mu-list-item-action avatar>
                                        <mu-avatar>
                                            <img src="../assets/images/avatar5.jpg" />
                                        </mu-avatar>
                                    </mu-list-item-action>
                                    <mu-list-item-content>
                                        <mu-list-item-title>Gaia Zhou</mu-list-item-title>
                                    </mu-list-item-content>
                                    <mu-list-item-action>
                                        <mu-icon value="chat_bubble"></mu-icon>
                                    </mu-list-item-action>
                                </mu-list-item>
                                <mu-divider></mu-divider>
                                <mu-list-item avatar>
                                    <mu-list-item-action avatar>
                                        <mu-avatar>
                                            <img src="../assets/images/avatar6.jpg" />
                                        </mu-avatar>
                                    </mu-list-item-action>
                                    <mu-list-item-content>
                                        <mu-list-item-title>Miller Wang</mu-list-item-title>
                                    </mu-list-item-content>
                                    <mu-list-item-action>
                                        <mu-icon value="chat_bubble"></mu-icon>
                                    </mu-list-item-action>
                                </mu-list-item>
                                <mu-divider></mu-divider>
                                <mu-list-item avatar>
                                    <mu-list-item-action avatar>
                                        <mu-avatar>
                                            <img src="../assets/images/avatar6.jpg" />
                                        </mu-avatar>
                                    </mu-list-item-action>
                                    <mu-list-item-content>
                                        <mu-list-item-title>Miller Wang</mu-list-item-title>
                                    </mu-list-item-content>
                                    <mu-list-item-action>
                                        <mu-icon value="chat_bubble"></mu-icon>
                                    </mu-list-item-action>
                                </mu-list-item>
                                <mu-divider></mu-divider>
                            </mu-list>
                        </mu-paper>
                    </mu-col>
                </mu-row>
            </mu-container>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            plusHeight: 0,
            height: 0
        };
    },
    created () {
    },
    mounted() {
        if(plus.navigator.isImmersedStatusbar()){// 判斷当前是否支持沉浸式状态栏
            this.height = plus.navigator.getStatusbarHeight();
        }
        //首页返回键处理
        //处理逻辑：1秒内，连续两次按返回键，则退出应用；
        var first = null;
        mui.back = function () {
            //首次按键，提示 再按一次退出应用
            if (!first) {
                first = new Date().getTime(); //记录第一次按下回退键的时间
                mui.toast("再按一次退出虎扑"); //给出提示
                // history.go(-1); //回退到上一页面
                setTimeout(function () {
                    //1s中后清除
                    first = null;
                }, 1000);
            } else {
                if (new Date().getTime() - first < 1000) {
                    //如果两次按下的时间小于1s，
                    plus.runtime.quit(); //那么就退出app
                }
            }
        };
        if (window.plus) {
            this.plusHeight = plus.navigator.getStatusbarHeight();
        }
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
        changeValue(e) {
            console.log(e.target.innerHTML);
        },
        upload() {
            this.$router.push("/upload");
        }
    }
};
</script>

<style scoped>
.top-nav {
    background-color: #2196f3;
}
.content {
    width: 100%;
}
.flex-box {
    float: left;
    width: 33.33%;
    text-align: center;
}
.flex-wrapper {
    width: 100%;
    height: 25px;
    margin-top: 8px;
}
.flex-demo {
    width: 200px;
    height: 15px;
    background-color: #e0e0e0;
    text-align: center;
    line-height: 32px;
    margin-top: 10px;
    /* margin-left: 8px; */
}
.container {
    padding: 0 !important;
}
.shopping {
    /* overflow-y: auto; */
}
.shop-content {
    height: calc(100vh - 112px);
    overflow-y: auto;
}
.muse-list {
    position: relative;
}
@media screen and (-webkit-min-device-pixel-ratio: 2){
    .muse-list:before{
        content: "";
        pointer-events: none; /* 防止点击触发 */
        box-sizing: border-box;
        position: absolute;
        width: 200%;
        height: 200%;
        left: 0;
        top: 0;
        /* border-radius: 8px; */
        border-bottom:1px solid #DCDCDC;
        -webkit-transform:scale(0.5);
        -webkit-transform-origin: 0 0;
        transform:scale(0.5);
        transform-origin: 0 0;
    }
}
</style>
