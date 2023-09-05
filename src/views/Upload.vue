<template>
    <div>
        <el-select v-model="value" class="m-2" placeholder="Select">
            <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
            />
        </el-select>
        <div v-if="value=='讲座'">
        <el-form :model="upNewChairData">
          <el-form-item label="讲座名" :label-width="formLabelWidth">
            <el-input v-model="upNewChairData.lectureName" autocomplete="off" />
          </el-form-item>
          <el-form-item label="讲座导语" :label-width="formLabelWidth">
            <el-input v-model="upNewChairData.introduction" autocomplete="off" />
          </el-form-item>
          <el-form-item label="期数" :label-width="formLabelWidth">
            <el-input v-model="upNewChairData.term" autocomplete="off" />
          </el-form-item>
          <el-form-item label="讲座预告图片地址" :label-width="formLabelWidth">
              <!-- <el-input v-model="upNewTextData.image" autocomplete="off" /> -->
              <input type="file" @change="handleFileChange" />
              <el-button type="primary" @click="upload">上传</el-button>
                <div class="el-upload__tip">
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  jpg/png files with a size less than 1MB
                </div>
              <!-- <img style="width:50px height:35px" :src="imageUrl" v-if="imageUrl" /> -->
          </el-form-item>
          <el-form-item label="嘉宾" :label-width="formLabelWidth">
            <el-input v-model="upNewChairData.guestName" autocomplete="off" />
          </el-form-item>
          <el-form-item label="地点" :label-width="formLabelWidth">
            <el-input v-model="upNewChairData.place" autocomplete="off" />
          </el-form-item>
          <el-form-item label="开放票数" :label-width="formLabelWidth">
            <el-input v-model="upNewChairData.ticketNumber" autocomplete="off" />
          </el-form-item>
          <el-form-item label="微信公众号链接" :label-width="formLabelWidth">
            <el-input v-model="upNewChairData.officialAccountUrl" autocomplete="off" />
          </el-form-item>
          <el-form-item label="讲座回顾主题" :label-width="formLabelWidth">
            <el-input v-model="upNewChairData.reviewName" autocomplete="off" />
          </el-form-item>
          <el-form-item label="讲座回顾公众号地址" :label-width="formLabelWidth">
            <el-input v-model="upNewChairData.reviewOfficialAccountUrl" autocomplete="off" />
          </el-form-item>
          <el-form-item label="讲座回顾图片路径" :label-width="formLabelWidth">
            <input type="file" @change="handleFileChange1" />
              <el-button type="primary" @click="upload1">上传</el-button>
              <div class="el-upload__tip">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  jpg/png files with a size less than 1MB
              </div>
          </el-form-item>
          <el-form-item label="抢票开始时间" :label-width="formLabelWidth">
            <!-- <el-input v-model="upNewChairData.grabTicketsStart" autocomplete="off" /> -->
            <div class="block">
              <el-date-picker
                v-model="upNewChairData.grabTicketsStart"
                type="datetime"
                placeholder="Select Ticket Starttime"
                value-format="YYYY-MM-DD HH:mm:ss"
              />
            </div>
          </el-form-item>
          <el-form-item label="抢票结束时间" :label-width="formLabelWidth">
            <!-- <el-input v-model="upNewChairData.grabTicketsEnd" autocomplete="off" /> -->
            <div class="block">
              <el-date-picker
                v-model="upNewChairData.grabTicketsEnd"
                type="datetime"
                placeholder="Select Ticket endtime"
                value-format="YYYY-MM-DD HH:mm:ss"
              />
            </div>
          </el-form-item>
          <el-form-item label="讲座开始时间" :label-width="formLabelWidth">
            <!-- <el-input v-model="upNewChairData.grabTicketsStart" autocomplete="off" /> -->
            <div class="block">
              <el-date-picker
                v-model="upNewChairData.startTime"
                type="datetime"
                placeholder="Select Chair Starttime"
                value-format="YYYY-MM-DD HH:mm:ss"
              />
            </div>
          </el-form-item>
          <el-form-item label="讲座结束时间" :label-width="formLabelWidth">
            <!-- <el-input v-model="upNewChairData.grabTicketsStart" autocomplete="off" /> -->
            <div class="block">
              <el-date-picker
                v-model="upNewChairData.endTime"
                type="datetime"
                placeholder="Select Chair Starttime"
                value-format="YYYY-MM-DD HH:mm:ss"
              />
            </div>
          </el-form-item>
        </el-form>
        <el-popconfirm
              confirm-button-text="是"
              cancel-button-text="否"
              icon-color="#626AEF"
              title="上传确认"
              @confirm="upNewChair"
            >
              <template #reference>
                <el-button >上传新讲座</el-button>
              </template>
          </el-popconfirm>
        </div>
        <div v-if="value=='推文'">
            <el-form :model="upNewTextData">
              <el-form-item label="标题" :label-width="formLabelWidth">
                    <el-input v-model="upNewTextData.title" autocomplete="off" />
                </el-form-item>
                <el-form-item label="图片" :label-width="formLabelWidth">
                    <!-- <el-input v-model="upNewTextData.image" autocomplete="off" /> -->
                    <input type="file" @change="handleFileChange" />
                    <el-button type="primary" @click="upload">上传</el-button>
                      <div class="el-upload__tip">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  jpg/png files with a size less than 1MB
                      </div>
                    <!-- <img style="width:50px height:35px" :src="imageUrl" v-if="imageUrl" /> -->
                </el-form-item>
                <el-form-item label="类型" :label-width="formLabelWidth">
                    <!-- <el-input v-model="upNewTextData.type" autocomplete="off" /> -->
                    <el-select v-model="upNewTextData.type" class="m-2" placeholder="Select">
                      <el-option
                      v-for="item in type"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                      />
                    </el-select>
                </el-form-item>
                <el-form-item label="微信公众号链接" :label-width="formLabelWidth">
                    <el-input v-model="upNewTextData.officialAccountUrl" autocomplete="off" />
                </el-form-item>
              </el-form>
            
            <el-popconfirm
              confirm-button-text="是"
              cancel-button-text="否"
              icon-color="#626AEF"
              title="上传确认"
              @confirm="upNewText"
            >
              <template #reference>
                <el-button >上传新推文</el-button>
              </template>
          </el-popconfirm>
        </div>
    </div>
</template>
<script>
import { ElMessage } from "element-plus";
import { getCurrentInstance, reactive ,ref} from 'vue'
import usePictureUpload from '../common/upLoadPicture'
export default({
    setup(){
        const formLabelWidth = '140px'
        const {proxy} = getCurrentInstance()
        const file = ref(null)
        const file1 = ref(null)
        const imageUrl = ref('')
        const imageUrl1 = ref('')
        const { upload, picture,pic_url_name } = usePictureUpload()
        const { upload1, picture1,pic_url_name1 } = usePictureUpload()
        const value = ref('')
        const options = [
        {
            value: '讲座',
            label: '讲座',
        },
        {
            value: '推文',
            label: '推文',
        }
        ]
        const type=[{
            value: 0,
            label: "活动",
        },
        {
            value: 1,
            label: "招新",
        }]
        const upNewChairData=reactive({
            "lectureName":'',
            "term":'',
            "image":'',
            "guestName":'',
            "place":'',
            "ticketNumber":'',
            "grabTicketsStart":'',
            "grabTicketsEnd":'',
            "startTime":'',
            "endTime":'',
            "officialAccountUrl":'',
            "introduction":"",
            "reviewName":"",
            "reviewUrl":"",
            "reviewOfficialAccountUrl":"",
        })
        const upNewTextData=reactive({
            "image":'',
            "type":"",
            "officialAccountUrl":'',
            'title':''
        })
        //新增讲座
        const upNewChair=async()=>{
            console.log(upNewChairData)
            upNewChairData.image=pic_url_name.value
            upNewChairData.reviewUrl=pic_url_name1.value
            const res=await proxy.$api.editChairInfo(JSON.stringify(upNewChairData))
            console.log(res)
            if(res.code==200){
                ElMessage.success('上传成功')
            }else{
                console.log('上传失败')
                ElMessage.error("上传失败")
            }
        }
        //新增推文
        const upNewText=async()=>{
            console.log(upNewTextData)
            upNewTextData.image=pic_url_name.value
            const res=await proxy.$api.editTextInfo(JSON.stringify(upNewTextData))
            console.log(res)
            if(res.code==999){
                ElMessage.success('上传成功')
            }else{
                console.log('上传失败')
                ElMessage.error("上传失败")
            }
        }
        //上传照片
        const handleFileChange = (event) => {
          file.value = event.target.files[0]
          picture.value = file.value
          imageUrl.value = URL.createObjectURL(file.value)
        }
        const handleFileChange1 = (event) => {
              file1.value = event.target.files[0]
              picture1.value = file1.value
              imageUrl1.value = URL.createObjectURL(file1.value)
            }
        return{
            value,options,type,
            upNewChairData,formLabelWidth,upNewChair,
            upNewTextData,upNewText,
            handleFileChange,handleFileChange1,
            upload,upload1,
            picture,picture1,
            imageUrl,pic_url_name,imageUrl1,pic_url_name1
        }
    }
})
</script>
<style scoped>
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

.demo-datetime-picker {
  display: flex;
  width: 100%;
  padding: 0;
  flex-wrap: wrap;
}
.demo-datetime-picker {
  display: flex;
  width: 100%;
  padding: 0;
  flex-wrap: wrap;
}
.demo-datetime-picker .block {
  padding: 30px 0;
  text-align: center;
  border-right: solid 1px var(--el-border-color);
  flex: 1;
}
.demo-datetime-picker .block:last-child {
  border-right: none;
}
.demo-datetime-picker .demonstration {
  display: block;
  color: var(--el-text-color-secondary);
  font-size: 14px;
  margin-bottom: 20px;
}
</style>