import { createRouter,createWebHashHistory } from "vue-router";

// 路由配置对象
const routes=[
    {
        path:'/',
        component:()=>import('../views/Main.vue'), //导入主页面
        redirect:'/home',
        children:[
            // 子路由导入子页面
            {
                path:'/home',
                name:'home',
                component:()=>import('../views/home/Home.vue')
            },
            {
                path:'/QRcode',
                name:'QRcode',
                component:()=>import('../views/audience/QRcode.vue')
            },
            {
                path:'/signIn',
                name:'signIn',
                component:()=>import('../views/audience/signIn.vue')
            },
            {
                path:'/BookMessage',
                name:'BookMessage',
                component:()=>import('../views/BookMessage.vue')
            },
            {
                path:'/Resume',
                name:'Resume',
                component:()=>import('../views/Resume.vue')
            },
            {
                path:'/Upload',
                name:'Upload',
                component:()=>import('../views/Upload.vue')
            },
            {
                path:'/chairMember',
                name:'ChairMember',
                component:()=>import('../views/chairMember.vue')
            },
            {
                path:'/tweet',
                name:'tweet',
                component:()=>import('../views/tweet.vue')
            },
            {
                path:'/departmentManagement',
                name:'departmentManagement',
                component:()=>import('../views/departmentManagement.vue')
            }
        ]
    },
    {
        path:'/login',
        name:'login',
        component:()=>import('../views/Login.vue')

    }
]

// 创建路由对象
const router = createRouter({
    history:createWebHashHistory(),
    routes
})

// 导出路由
export default router