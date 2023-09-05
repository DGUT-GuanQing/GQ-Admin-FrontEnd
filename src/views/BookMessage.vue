<template>
    <div class="el-ui1">
      <el-dialog v-model="dialogFormVisible" title="修改讲座信息" draggable>
      <el-form :model="rowData">
        <el-form-item label="讲座名" :label-width="formLabelWidth">
          <el-input v-model="rowData.lectureName" autocomplete="off" />
        </el-form-item>
        <el-form-item label="讲座导语" :label-width="formLabelWidth">
          <el-input v-model="rowData.introduction" autocomplete="off" />
        </el-form-item>
        <el-form-item label="期数" :label-width="formLabelWidth">
          <el-input v-model="rowData.term" autocomplete="off" />
        </el-form-item>
        <el-form-item label="讲座预告图片路劲" :label-width="formLabelWidth">
            <!-- <el-input v-model="upNewTextData.image" autocomplete="off" /> -->
            <input type="file" @change="handleFileChange" />
            <el-button type="primary" @click="handleUpload()">上传</el-button>
            <div class="el-upload__tip">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  jpg/png files with a size less than 1MB
            </div>
            <!-- <img style="width:50px height:35px" :src="imageUrl" v-if="imageUrl" /> -->
        </el-form-item>
        <el-form-item label="讲座预告公众号地址" :label-width="formLabelWidth">
          <el-input v-model="rowData.officialAccountUrl" autocomplete="off" />
        </el-form-item>
        <el-form-item label="嘉宾" :label-width="formLabelWidth">
          <el-input v-model="rowData.guestName" autocomplete="off" />
        </el-form-item>
        <el-form-item label="地点" :label-width="formLabelWidth">
          <el-input v-model="rowData.place" autocomplete="off" />
        </el-form-item>
        <el-form-item label="讲座回顾主题" :label-width="formLabelWidth">
          <el-input v-model="rowData.reviewName" autocomplete="off" />
        </el-form-item>
        <el-form-item label="讲座回顾公众号链接" :label-width="formLabelWidth">
          <el-input v-model="rowData.reviewOfficialAccountUrl" autocomplete="off" />
        </el-form-item>
        <el-form-item label="讲座回顾图片链接" :label-width="formLabelWidth">
          <input type="file" @change="handleFileChange1" />
            <el-button type="primary" @click="handleUpload1()">上传</el-button>
            <div class="el-upload__tip">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  jpg/png files with a size less than 1MB
            </div>
        </el-form-item>
        <el-form-item label="开放票数" :label-width="formLabelWidth">
          <el-input v-model="rowData.ticketNumber" autocomplete="off" />
        </el-form-item>
        <el-form-item label="抢票开始时间" :label-width="formLabelWidth">
          <!-- <el-input v-model="rowData.grabTicketsStart" autocomplete="off" /> -->
          <div class="block">
            <el-date-picker
              v-model="rowData.grabTicketsStart"
              type="datetime"
              placeholder="Select Starttime"
              value-format="YYYY-MM-DD HH:mm:ss"
            />
          </div>
        </el-form-item>
        <el-form-item label="抢票结束时间" :label-width="formLabelWidth">
          <!-- <el-input v-model="rowData.grabTicketsEnd" autocomplete="off" /> -->
          <div class="block">
            <el-date-picker
              v-model="rowData.grabTicketsEnd"
              type="datetime"
              placeholder="Select endtime"
              value-format="YYYY-MM-DD HH:mm:ss"
            />
          </div>
        </el-form-item>
        <el-form-item label="讲座开始时间" :label-width="formLabelWidth">
          <!-- <el-input v-model="rowData.grabTicketsStart" autocomplete="off" /> -->
          <div class="block">
            <el-date-picker
              v-model="rowData.startTime"
              type="datetime"
              placeholder="Select Starttime"
              value-format="YYYY-MM-DD HH:mm:ss"
            />
          </div>
        </el-form-item>
        <el-form-item label="讲座结束时间" :label-width="formLabelWidth">
          <!-- <el-input v-model="rowData.grabTicketsStart" autocomplete="off" /> -->
          <div class="block">
            <el-date-picker
              v-model="rowData.endTime"
              type="datetime"
              placeholder="Select endTime"
              value-format="YYYY-MM-DD HH:mm:ss"
            />
          </div>
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
            :data="allChair"
            style="width: 1700px;height:auto">
            <el-table-column
            fixed
            property="lectureName"
            label="讲座名"
            width="100">
            </el-table-column>
            <el-table-column
            prop="term"
            label="期数"
            width="50">
            </el-table-column>
            <el-table-column
            prop="image"
            label="讲座预告图片信息"
            width="120">
              <template #default="scope">
                <el-image
                    v-if="allChair[scope.$index].pictureUrl" 
                    :preview-teleported="Boolean(allChair[scope.$index].pictureUrl)"
                    style="width: 100px; height: 100px"
                    :src="allChair[scope.$index].pictureUrl"
                    :preview-src-list="[allChair[scope.$index].pictureUrl]"
                    alt=""                        fit="cover" 
                ></el-image>
              </template>
            </el-table-column>
            <el-table-column
            prop="guestName"
            label="嘉宾"
            width="100">
            </el-table-column>
            <el-table-column
            prop="introduction"
            label="讲座导语"
            width="200">
            </el-table-column>
            <el-table-column
            prop="officialAccountUrl"
            label="讲座预告微信公众号地址"
            width="200">
            </el-table-column>
            <el-table-column
            prop="place"
            label="地点"
            width="100">
            </el-table-column>
            <el-table-column
            prop="ticketNumber"
            label="票数"
            width="100">
            </el-table-column>
            <el-table-column
            prop="reviewName"
            label="讲座回顾主题"
            width="100">
            </el-table-column>
            <el-table-column
            prop="reviewOfficialAccountUrl"
            label="讲座回顾公众号链接"
            width="100">
            </el-table-column>
            <el-table-column
            prop="reviewUrl"
            label="讲座回顾图片路径"
            width="120">
            <template #default="scope">
                <el-image
                    v-if="allChair[scope.$index].pictureUrl1" 
                    :preview-teleported="Boolean(allChair[scope.$index].pictureUrl1)"
                    style="width: 100px; height: 100px"
                    :src="allChair[scope.$index].pictureUrl1"
                    :preview-src-list="[allChair[scope.$index].pictureUrl1]"
                    alt=""                        fit="cover" 
                ></el-image>
              </template>
            </el-table-column>
            <el-table-column
            prop="startTime"
            label="讲座开始时间"
            width="150">
            </el-table-column>
            <el-table-column
            prop="endTime"
            label="讲座结束时间"
            width="150">
            </el-table-column>
            <el-table-column
            prop="grabTicketsStart"
            label="抢票开始时间"
            width="150">
            </el-table-column>
            <el-table-column
            prop="grabTicketsEnd"
            label="抢票结束时间"
            width="150">
            </el-table-column>
            <el-table-column
            fixed="right"
            label="操作"
            width="250">
                <template style="height:100px" v-slot="scope">
                    <el-button  size="small" @click="getRowInfo(scope.$index)">编辑</el-button>
                    <el-button @click="findAllMember(allChair[scope.$index].id)" size="small">查看</el-button>
                    <el-popconfirm
                      confirm-button-text="是"
                      cancel-button-text="否"
                      icon-color="#626AEF"
                      title="你确定要删除它吗"
                      @confirm="delChair(allChair[scope.$index].id)"
                    >
                      <template #reference>
                        <el-button type="danger" size="small" >删除</el-button>
                      </template>
                    </el-popconfirm>
                  </template>
              </el-table-column>
        </el-table>
        <el-button @click="exportToExcel">导出为Excel</el-button>
        <div class="block">
          <el-pagination
              layout="prev, pager, next"
              :page-count="total"
              @current-change="handlePage">
          </el-pagination>
      </div>
    </div>
</template>
<script>
// import {cloneDeep} from '../../node_modules/lodash'
import { ElMessage } from "element-plus";
import { onMounted } from 'vue';
import { getCurrentInstance, reactive ,ref} from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import router from "../router";
import usePictureUpload from '../common/upLoadPicture.js';
import { export_json_to_excel } from '../common/excel'
import { saveAs } from 'file-saver';
// import * as XLSX from 'xlsx';
import XLSX from 'xlsx'
export default({
    setup(){   
            const { upload, picture,pic_url_name } = usePictureUpload()
            const { upload1, picture1,pic_url_name1 } = usePictureUpload()
            const router = useRouter()
            // 获取当前组件对象
            const allChair=reactive([])
            const name = ref('');
            const page = ref(1);
            const pageSize = ref(5);
            const rowData = reactive({
              "lectureName":'',
              "term":'',
              "image":'',
              "guestName":'',
              "place":'',
              "ticketNumber":'',
              "grabTicketsStart":'',
              "grabTicketsEnd":'',
              "officialAccountUrl":'',
              "id":'',
              "startTime":'',
              "endTime":"",
              "introduction":"",
              "reviewName":"",
              "reviewOfficialAccountUrl":"",
              "reviewUrl":""
            })
            const dialogFormVisible = ref(false)
            const formLabelWidth = '140px'
            const file = ref(null)
            const file1 = ref(null)
            const imageUrl = ref('')
            const imageUrl1 = ref('')
            const {proxy} = getCurrentInstance()
            const total=ref(0)
            const exportToExcel = () => {
               // 将数据转换为XLSX的工作表
                  const sheet = XLSX.utils.json_to_sheet(allChair);

                // 创建XLSX工作簿并将工作表添加进去
                const workbook = XLSX.utils.book_new();
                XLSX.utils.book_append_sheet(workbook, sheet, "Sheet1");

                // 生成包含Excel文件的Blob对象
                const excelBuffer = XLSX.write(workbook, { type: "array" });
                const blob = new Blob([excelBuffer], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" });

                // 创建一个临时链接并触发下载
                const url = URL.createObjectURL(blob);
                const a = document.createElement("a");
                a.href = url;
                a.download = "全部讲座数据.xlsx";
                a.click();

                // 清理临时链接
                URL.revokeObjectURL(url);
            };
            const getAllChair=async()=>{
                const res=await proxy.$api.getAllChair(name.value,page.value,pageSize.value)
                console.log(res)
                if(res.code==200){
                    ElMessage.success("获取成功")
                    console.log(res.data.count)
                    if(res.data.count%5!=0)
                      total.value=(res.data.count-res.data.count%5)/5+1
                    else
                      total.value=res.data.count/5
                    allChair.splice(0, allChair.length, ...res.data.list)
                    // res.data.list.forEach(item=>allChair.push(item))
                    allChair.forEach(async (item, index) => {
                    if (item.image) {
                      const res = await proxy.$api.downloadPicture(item.image, 0);
                      let blob = new Blob([res], { type: 'image/png' });
                      let imageUrl = URL.createObjectURL(blob);
                      // 将图片URL添加到allChair的对应元素中
                      item.pictureUrl = imageUrl;
                      // console.log(allChair)
                    }
                    if (item.reviewUrl) {
                      const res = await proxy.$api.downloadPicture(item.reviewUrl, 0);
                      let blob = new Blob([res], { type: 'image/png' });
                      let imageUrl1 = URL.createObjectURL(blob);
                      // 将图片URL添加到allChair的对应元素中
                      item.pictureUrl1 = imageUrl1;
                      // console.log(allChair)
                    }
                  });
                  console.log(allChair)
                }else{
                    console.log('请求失败')
                    ElMessage.error("获取信息失败~")
                }
            }
            onMounted(()=>{
                getAllChair()
                console.log(allChair)
            })
            function handlePage(val){
                page.value=val
                getAllChair()
            }
            function findAllMember(id){
                console.log(id)
                router.push({name:'ChairMember',query: {id}},)
            }
            //获取当行信息
            function getRowInfo(row) {
                console.log(allChair[row])
                rowData.value={...allChair[row]}
                  rowData.lectureName = allChair[row].lectureName
                  rowData.term=allChair[row].term
                  rowData.image=allChair[row].image
                  rowData.guestName=allChair[row].guestName
                  rowData.place=allChair[row].place
                  rowData.ticketNumber=allChair[row].ticketNumber
                  rowData.grabTicketsStart=allChair[row].grabTicketsStart
                  rowData.grabTicketsEnd=allChair[row].grabTicketsEnd
                  rowData.officialAccountUrl=allChair[row].officialAccountUrl
                  rowData.id=allChair[row].id
                  rowData.startTime=allChair[row].startTime
                  rowData.endTime=allChair[row].endTime
                  rowData.introduction=allChair[row].introduction
                  rowData.reviewName=allChair[row].reviewName
                  rowData.reviewOfficialAccountUrl=allChair[row].reviewOfficialAccountUrl
                  rowData.reviewUrl=allChair[row].reviewUrl
                dialogFormVisible.value = true
            }
            //提交表单修改讲座信息
            const confirm=async()=>{
                rowData.id=rowData.value.id
                if(!rowData.image){
                  rowData.image=pic_url_name.value
                }
                if(!rowData.reviewUrl){
                  rowData.reviewUrl=pic_url_name1.value
                }
                // console.log(rowData.image)
                // console.log(rowData)
                // Object.assign(rowData.value, rowData);
                // console.log(rowData)
                // const clonedData = cloneDeep(rowData.value);
                // console.log(cloneDeep)
                const res = await proxy.$api.editChairInfo(JSON.stringify(rowData));
                console.log(res)
                if(res.code==200){
                    ElMessage.success("修改成功")
                    getAllChair()
                    dialogFormVisible.value=false
                }else{
                    console.log('修改失败')
                    ElMessage.error("修改信息失败~")
                }
            }
            //上传照片1
            const handleFileChange = (event) => {
              file.value = event.target.files[0]
              picture.value = file.value
              imageUrl.value = URL.createObjectURL(file.value)
            }
            //上传照片2
            const handleFileChange1 = (event) => {
              file1.value = event.target.files[0]
              picture1.value = file1.value
              imageUrl1.value = URL.createObjectURL(file1.value)
            }
            //删除讲座
            const delChair=async(id)=>{
              const res=await proxy.$api.deleteChair(id)
              console.log(res)
              if(res.code==200){
                getAllChair()
              }else{
                ElMessage.error("删除失败")
              }
            }
            const handleUpload = async () => {
            try {
                await upload(); 
                console.log(rowData.image)
                rowData.image=pic_url_name.value
                console.log(rowData.image)
            } catch (error) {
                console.error('上传失败:', error);
            }
            };
            const handleUpload1 = async () => {
            try {
                await upload1(); 
                console.log(rowData.image)
                rowData.reviewUrl=pic_url_name1.value
                console.log(rowData.image)
            } catch (error) {
                console.error('上传失败:', error);
            }
            };
        return{
            allChair,
            handlePage,
            findAllMember,

            dialogFormVisible,
            formLabelWidth,
            getRowInfo,rowData,confirm,
            handleFileChange,handleFileChange1,
            upload,upload1,
            picture,picture1,
            imageUrl,imageUrl1,pic_url_name,pic_url_name1,
            delChair,total,

            exportToExcel,handleUpload,handleUpload1
        }
    }
})
</script>
<style lang="less" scoped>
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