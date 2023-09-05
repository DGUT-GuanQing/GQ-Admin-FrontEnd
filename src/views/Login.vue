<template>
    <!-- <div class="backGround"></div> -->
    <el-form :model="loginForm" class="login-container">
        <h3>莞青后台系统登陆</h3>
        <el-form-item >
            <el-input type="input" placeholder="请输入账号" v-model="loginForm.username">
            </el-input>
        </el-form-item>
        <el-form-item>
            <el-input type="input" placeholder="请输入密码" v-model="loginForm.password">
            </el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="login">登录</el-button>
        </el-form-item>

    </el-form>
</template>

<script>
import { ElMessage } from "element-plus";
const NETWORK_ERROP = '网络请求异常，请重试'
import { getCurrentInstance, reactive } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
   export default{
     setup(){
        const store = useStore()
        const router = useRouter()
        // 获取当前组件对象
        const {proxy} = getCurrentInstance()
        // 表单对象
        const loginForm = reactive({
            username:'',
            password:''
        })
        // 登陆函数
        const login=async ()=>{
            const res =await proxy.$api.login(loginForm)
            console.log("登陆结果：",res)
            if(res.code==200){
                ElMessage.success("登陆成功~")
                 // 添加token
                store.commit('setToken',res.data)
                // 路由跳转
                router.push({
                    name:'home'
                })
            }else{
                console.log("请求失败")
                ElMessage.error("密码或账号错误")
            }
        }
        return {
            loginForm,
            login
        }
     }
   }
</script>

<style lang="less" scoped>
.backGround{
    height: 100%;
    width: 100%;
    background-image: url("../../src/assets/images/backGround3.png");
    background-size: cover;
    position:absolute;
    top:0;
    z-index: -100;

}
.login-container{
    width: 350px;
    background-color: #fff;
    border:1px solid #eaeaea;
    border-radius: 15px;
    padding:35px 35px 15px 35px;
    box-shadow: 0 0 25px #cacaca;
    margin: 300px auto;
    h3{
        text-align: center;
        margin-bottom: 20px;
        font-weight: 600;
        color: #575f57;
    }
    :deep(.el-form-item__content){
        justify-content: center;
    }

}
</style>