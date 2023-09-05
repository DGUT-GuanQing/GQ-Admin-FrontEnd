<template>
    <div>
        <el-dialog v-model="dialogFormVisible" title="修改推文信息">
            <el-form :model="rowData">
                <el-form-item label="标题" :label-width="formLabelWidth">
                    <el-input v-model="rowData.title" autocomplete="off" ></el-input>
                </el-form-item>
                <el-form-item label="图片" :label-width="formLabelWidth">
                    <!-- <el-input v-model="upNewTextData.image" autocomplete="off" /> -->
                    <input type="file" @change="handleFileChange" />
                    <el-button type="primary" @click="handleUpload()">上传</el-button>
                    <div class="el-upload__tip">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  jpg/png files with a size less than 1MB
                    </div>
                    <!-- <img style="width:50px height:35px" :src="imageUrl" v-if="imageUrl" /> -->
                </el-form-item>
                <el-form-item label="类型" :label-width="formLabelWidth">
                    <!-- <el-input v-model="rowData.type" autocomplete="off" ></el-input> -->
                    <el-select  v-model="rowData.type" class="m-2" placeholder="Select">
                        <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                        />
                    </el-select>
                </el-form-item>
                <el-form-item label="微信公众号链接" :label-width="formLabelWidth">
                    <el-input v-model="rowData.officialAccountUrl" autocomplete="off" ></el-input>
                </el-form-item>
            </el-form>
            <template #footer>
                <span class="dialog-footer">
                    <el-button @click="dialogFormVisible = false">Cancel</el-button>
                    <el-popconfirm
                        confirm-button-text="是"
                        cancel-button-text="否"
                        icon-color="#626AEF"
                        title="提交确认"
                        @confirm="confirm"
                    >
                        <template #reference>
                        <el-button type="primary">
                            Confirm
                        </el-button>
                        </template>
                    </el-popconfirm>
                </span>
            </template>
        </el-dialog>
        <el-table
            :data="tweetInfo"
            style="width:1000px">
            <el-table-column
            fixed="left"
            prop="title"
            label="标题"
            width="200">
            </el-table-column>
            <el-table-column
            prop="image"
            label="图片"
            width="200"
            >
                <!-- <template #default="scope">
                    <el-image
                        v-if="scope.row.pictureUrl" 
                        preview-teleported="true"
                        style="width: 100px; height: 100px"
                        :src="scope.row.pictureUrl"
                        :preview-src-list="[scope.row.pictureUrl]"
                        alt=""                      fit="cover" 
                    ></el-image>
                </template> -->
                <template #default="scope">
                <el-image
                    v-if="tweetInfo[scope.$index].pictureUrl" 
                    :preview-teleported="Boolean(tweetInfo[scope.$index].pictureUrl)"
                    style="width: 100px; height: 100px"
                    :src="tweetInfo[scope.$index].pictureUrl"
                    :preview-src-list="[tweetInfo[scope.$index].pictureUrl]"
                    alt=""                        fit="cover" 
                ></el-image>
              </template>
            </el-table-column>
            <el-table-column
            prop="type"
            label="类型"
            width="200">
            <template v-slot="scope">
                <span v-if="tweetInfo[scope.$index].type==0">活动</span>
                <span v-if="tweetInfo[scope.$index].type==1">招新</span>
            </template>
            </el-table-column>
            <el-table-column
            prop="officialAccountUrl"
            label="微信公众号链接"
            width="200">
            </el-table-column>
            <el-table-column
            fixed="right"
            label="操作"
            width="200">
            <template style="height:100px" v-slot="scope">
                <el-button  size="small" @click="getRowInfo(scope.$index)">编辑</el-button>
            </template>
            </el-table-column>
        </el-table>
    </div>
</template>
<script>
import { ElMessage } from "element-plus";
import { getCurrentInstance, reactive ,ref,onMounted} from 'vue'
import usePictureUpload from '../common/upLoadPicture'
export default({
    setup(){
        const formLabelWidth='140px'
        const {proxy}=getCurrentInstance()
        const { upload, picture,pic_url_name } = usePictureUpload()
        const tweetInfo=reactive([])
        const dialogFormVisible = ref(false)
        const rowData = reactive({
            "image":'',
            "type":"",
            "officialAccountUrl":'',
            "id":'',
            "title":''
        })
        const file = ref(null)
        const imageUrl = ref('')
        const value = ref('')
        const options = [
        {
            value: 0,
            label: '活动',
        },
        {
            value: 1,
            label: '招新',
        },
        ]
        const getAllTweet0=async()=>{
            const res=await proxy.$api.getAllTweetInfo(0)
            console.log(res)
            if(res.code==200){
                ElMessage.success("获取成功")
                // tweetInfo.splice(0,tweetInfo.length,...(Array.isArray(res.data) ? res.data : [res.data]))
                let isDuplicate = false
                for (let i = 0; i < tweetInfo.length; i++) {
                    if (JSON.stringify(tweetInfo[i]) === JSON.stringify(res.data)) {
                        isDuplicate = true
                        break
                    }
                }
                if (!isDuplicate) {
                    tweetInfo.push(res.data)
                }
                console.log(tweetInfo)
                tweetInfo.forEach(async (item, index) => {
                    if (item.image) {
                      const res = await proxy.$api.downloadPicture(item.image, 0);
                      let blob = new Blob([res], { type: 'image/png' });
                      let imageUrl = URL.createObjectURL(blob);
                      // 将图片URL添加到allChair的对应元素中
                      item.pictureUrl = imageUrl;
                      // console.log(allChair)
                    }
                  });
            }else{
                console.log("请求失败")
                ElMessage.error("获取信息失败！")
            }
        }
        const getAllTweet1=async()=>{
            const res=await proxy.$api.getAllTweetInfo(1)
            console.log(res)
            console.log(res.data)
            if(res.code==200){
                ElMessage.success("获取成功")
                let isDuplicate = false
                for (let i = 0; i < tweetInfo.length; i++) {
                    if (JSON.stringify(tweetInfo[i]) === JSON.stringify(res.data)) {
                        isDuplicate = true
                        break
                    }
                }

                if (!isDuplicate) {
                    tweetInfo.push(res.data)
                }
                tweetInfo.forEach(async (item, index) => {
                    if (item.image) {
                      const res = await proxy.$api.downloadPicture(item.image, 0);
                      let blob = new Blob([res], { type: 'image/png' });
                      let imageUrl = URL.createObjectURL(blob);
                      // 将图片URL添加到allChair的对应元素中
                      item.pictureUrl = imageUrl;
                      // console.log(allChair)
                    }
                  });
                console.log(tweetInfo)
            }else{
                console.log("请求失败")
                ElMessage.error("获取信息失败！")
            }
        }
        onMounted(()=>{
            getAllTweet0()
            getAllTweet1()
        })
        const handleUpload = async () => {
            try {
                await upload(); 
                rowData.image=pic_url_name.value
            } catch (error) {
                console.error('上传失败:', error);
            }
            };
        //获取当行信息
        function getRowInfo(row) {
                rowData.value = { ...tweetInfo[row] }
                    rowData.image=tweetInfo[row].image
                    rowData.type=tweetInfo[row].type
                    rowData.officialAccountUrl=tweetInfo[row].officialAccountUrl
                    rowData.id=tweetInfo[row].id
                    rowData.title=tweetInfo[row].title
                dialogFormVisible.value = true
                console.log(rowData)
        }
        //提交
        const confirm=async()=>{
                console.log(rowData.value)
                if(!rowData.image){
                    rowData.image=pic_url_name.value
                }
                const res=await proxy.$api.editTextInfo(JSON.stringify(rowData))
                console.log(res)
                if(res.code==999){
                    ElMessage.success("修改成功")
                    getAllTweet0()
                    getAllTweet1()
                    dialogFormVisible.value=false
                }else{
                    console.log('修改失败')
                    ElMessage.error("修改信息失败~")
                }
            }
        const handleFileChange = (event) => {
          file.value = event.target.files[0]
          picture.value = file.value
          imageUrl.value = URL.createObjectURL(file.value)
        }
        
        return {
            formLabelWidth,
            tweetInfo,
            getAllTweet0,getAllTweet1,
            dialogFormVisible,getRowInfo,rowData,confirm,
            handleFileChange,
            upload,
            picture,
            imageUrl,pic_url_name,
            options,value,handleUpload
        }
    }
})
</script>
<style scoped lang="less">
.el-button--text {
  margin-right: 15px;
}
.el-select {
  width: 300px;
}
.el-input {
  width: 300px;
}
.dialog-footer button:first-child {
  margin-right: 10px;
}

</style>