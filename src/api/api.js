/**
 * 整个项目的管理
 */

import Cookies from "js-cookie";
import request from "./request";
export default{
    // 根据不同用户名返回不同的菜单列表
    login(params){
        // console.log("logining ")
        return request({
            url:`/backend/login?password=${params.password}&userName=${params.username}`,
            method:'POST'
        })
    },
    // 获取未审核的创作
    getCreateData(params){
        return request({
            url:`/backend/unAudited?page=${params.page}&pageSize=${params.pageSize}`,
            method:'GET',
            headers: { 
                'token':Cookies.get('token')
            }
            
        })
    },
    // 获取未审核用户信息
    getUnAudited(params){
        console.log("getUnAudited ")
        return request({
            url:`/backend/UnExamineUserMessage?page=${params.page}&pageSize=${params.pageSize}`,
            method:'GET',
            headers: { 
                'token':Cookies.get('token')
            }
        })
    },
    // 请求图片
    getPicture(name){
        return request({
            url:`/picture/download?name=${name}`,
            method:'GET',
            responseType: 'blob',
            headers: { 
                'token':Cookies.get('token')
            }
        })
        
    },
    //审核创作
    examineLiterary(litId,type){
        return request({
            url:`/backend/examine/literary?litId=${litId}&type=${type}`,
            method:'PUT',
            headers: { 
                'token':Cookies.get('token')
            }
        })
    },
    //审核用户
    examineUser(openid,type){
        return request({
            url:`/backend/examine/userMessage?openid=${openid}&type=${type}`,
            method:'PUT',
            headers: { 
                'token':Cookies.get('token')
            }
        })
    },
    // 提交导入
    uploadArticle(params,type){
        return request({
            url:`/backend/uploadArticle`,
            method:'POST',
            data:{
                "appreciation":params.appreciate||"",
                "author":params.author|| "",
                "content": params.content||"",
                "title": params.title||"",
                "type": type
            },
            headers: { 
                'token':Cookies.get('token')
            }
        })
    },
    //获取全部讲座信息
    getAllChair(name,page,pageSize){
        return request({
            url:`/backend/allLecture?name=${name}&page=${page}&pageSize=${pageSize}`,
            method:'GET',
            headers: { 
                'token':Cookies.get('token')
            }
        })
    },
    //获取讲座成员信息
    getChairMember(id,page,pageSize,status){
        return request({
            url:`/backend/alluser?id=${id}&page=${page}&pageSize=${pageSize}&status=${status}`,
            method:'GET',
            headers: { 
                'token':Cookies.get('token')
            }
        })
    },
    //编辑讲座信息
    editChairInfo(form){
        return request({
            url:'/backend/updateSaveLecture',
            method:'POST',
            data:form,
            headers:{
                'token':Cookies.get('token'),
                "Content-Type": "application/json" ,
            }
            
        })
    },
    //编辑推文信息
    editTextInfo(form){
        return request({
            url:'/backend/updatePosterTweet',
            method:'POST',
            data:form,
            headers:{
                'token':Cookies.get('token'),
                "Content-Type": "application/json" ,
            }
            
        })
    },
    //获取全部推文信息
    getAllTweetInfo(type){
        return request({
            url:`/common/posterTweet/${type}`,
            method:'GET'
        })
    },
    //上传图片
    upLoadPicture(data){
        const formData = new FormData()
        formData.append('file', data.value)  // 将文件数据添加到 FormData 对象中
        const boundary = '--------------------------' + Math.random().toString(36).slice(2) + Math.random().toString(36).slice(2) + Math.random().toString(36).slice(2)
        return request({
        url: '/common/upload',
        method: 'post',
        data: formData,  // 将 FormData 对象作为请求的 data 参数
        headers: {
            'token': Cookies.get('token'),
            'Content-Type': `multipart/form-data; boundary=${boundary}`
        }
        })
    },
    //图片文件下载
    downloadPicture(data,type){
        return request({
            url:`/common/download?name=${data}&type=${type}`,
            method:'GET',
            headers:{
                'token':Cookies.get('token')
            },
            responseType: 'blob'
        })
    },
    //获取全部简历
    getAllResumes(department,page,pageSize,term){
        return request({
            url:`/recruitment/getAllCurriculumVitae?departmentId=${department}&page=${page}&pageSize=${pageSize}&term=${term}`,
            method:'POST',
            headers:{
                'token':Cookies.get('token')
            }
        })
    },
    //生成签到二维码
    generateCheckinQrcode(){
        return request({
            url:`/backend/checkinCode?token=${Cookies.get('token')}`,
            method:"GET",
            headers:{
                'token':Cookies.get('token')
            },
            responseType: 'blob',
        })
    },
    //生成签退二维码
    generateCheckoutQrcode(){
        return request({
            url:`/backend/checkoutCode?token=${Cookies.get('token')}`,
            method:"GET",
            headers:{
                'token':Cookies.get('token')
            },
            responseType: 'blob',
        })
    },
    //获取全部部门
    getAllDepartment(){
        return request({
            url:`/recruitment/getDepartment`,
            method:"POST",
            headers:{
                "token":Cookies.get('token')
            }
        })
    },
    //获取职位
    getJob(id){
        return request({
            url:`/recruitment/getPosition?departmentId=${id}`,
            method:"POST",
            headers:{
                'token':Cookies.get('token')
            }
        })
    },
    //删除讲座
    deleteChair(id){
        return request({
            url:`/backend/deleteLecture/${id}`,
            method:"DELETE",
            headers:{
                'token':Cookies.get('token')
            }
        })
    },
    //删除职位
    deletePosition(id){
        return request({
            url:`/backend/deletePosition/${id}`,
            method:"DELETE",
            headers:{
                'token':Cookies.get('token')
            }
        })
    },
    //删除部门
    deleteDepartment(id){
        return request({
            url:`/backend/deleteDepartment/${id}`,
            method:"DELETE",
            headers:{
                'token':Cookies.get('token')
            }
        })
    },
    //新增或修改职位
    addChangePosition(data){
        return request({
            url:`/backend/saveAndUpdatePos`,
            method:"POST",
            data:data,
            headers:{
                'token':Cookies.get('token')
            }
        })
    },
    //新增或修改部门
    addChangeDepartment(data){
        return request({
            url:`/backend/saveAndUpdateDep`,
            method:"POST",
            data:data,
            headers:{
                'token':Cookies.get('token')
            }
        })
    }
}