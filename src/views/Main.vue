<template>
    <div class="common-layout">
        <el-container>
            <el-aside :width="!$store.state.isCollapse?'180px':'64px'">
                <common-aside></common-aside>
            </el-aside>
            <el-container>
                <el-header>
                    <CommonHeader></CommonHeader>
                </el-header>
                <el-main>
                    <div class="commonTab">
                        <CommonTab></CommonTab>
                    </div>
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>


<script>
import {defineComponent} from 'vue'
import CommonHeader from '../components/CommonHeader.vue'
import CommonAside from '../components/CommonAside.vue'
import CommonTab from '../components/CommonTab.vue'
export default defineComponent({
    components:{
        CommonAside,
        CommonHeader,
        CommonTab
    }
})
</script>

<style lang="less" scoped>
.common-layout{
    height: 100%;
    .commonTab{
        margin-bottom: 20px;
    }
    & > .el-container{
        .el-main{
            width: 100%;
        }
        height: 100%;
        .el-header{
            width: 100%;
            padding: 0;
        }
        & > .el-aside{
            height: 100%;
            background: #545c64;
        }
    }

}
   
</style>