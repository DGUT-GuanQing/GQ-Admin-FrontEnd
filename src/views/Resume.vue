<template>
    <el-select v-model="value" class="m-4" multiple 
      collapse-tags
      collapse-tags-tooltip
      :max-collapse-tags="2"
       placeholder="Select" 
       @change="exchange">
       <el-option-group
            v-for="group in options"
            :key="group.label"
            :label="group.label"
        >
            <el-option
            v-for="item in group.options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
            />
        </el-option-group>
    </el-select>
    <el-button class="button1"  @click="exportToExcel">对应组对应期数成员Excel</el-button>
    <!-- <el-button class="button1" @click="getallresumes()">查询全部</el-button> -->
    <el-table
        :data="allResumes"
        style="width:100%">
        <el-table-column
            fixed="left"
            prop="name"
            label="姓名"
            width="125">
        </el-table-column>
        <el-table-column
            prop="term"
            label="第几期成员"
            width="125">
        </el-table-column>
        <el-table-column
            prop="college"
            label="学院"
            width="125">
        </el-table-column>
        <el-table-column
            prop="studentId"
            label="学号"
            width="125">
        </el-table-column>
        <el-table-column
            prop="naturalClass"
            label="班级"
            width="125">
        </el-table-column>
        <el-table-column
            prop="departmentName"
            label="应聘部门"
            width="125">
        </el-table-column>
        <el-table-column
            prop="positionName"
            label="岗位"
            width="125">
        </el-table-column>
        <el-table-column
            prop="isAdjust"
            label="是否同意调剂"
            width="125">
            <template v-slot="scope">
                <span v-if="allResumes[scope.$index].isAdjust==1">同意</span>
                <span v-if="allResumes[scope.$index].isAdjust==0">不同意</span>
            </template>
        </el-table-column>
        <el-table-column
            prop="campus"
            label="校区"
            width="125">
            <template v-slot="scope">
                <span v-if="allResumes[scope.$index].campus==0">松山湖</span>
                <span v-if="allResumes[scope.$index].campus==1">莞城</span>
            </template>
        </el-table-column>
        <el-table-column
            prop="phone"
            label="电话"
            width="125">
        </el-table-column>
        <el-table-column
            prop="wechat"
            label="微信"
            width="125">
        </el-table-column>
        <el-table-column
            prop="fileUrl"
            label="文件"
            width="125">
            <template style="height:100px" v-slot="scope">
                <el-button size="small" @click="downloadFile(allResumes[scope.$index].fileUrl,allResumes[scope.$index].name)">下载</el-button>
            </template>
        </el-table-column>
    </el-table>
    <div class="block">
        <el-pagination
            layout="prev, pager, next"
            :page-count="total"
            @current-change="handlePage">
        </el-pagination>
    </div>
</template>
<script>
import { ElMessage } from "element-plus";
import { onMounted } from 'vue';
import { getCurrentInstance, reactive ,ref,watch} from 'vue'
import XLSX from 'xlsx'
export default({
    setup(){
        const value=ref([])
        const allDepartment=reactive([])
        const options = ref([
            {
                label: '部门',
                options:[]
            },
            {
                label: '第几期',
                options: [
                {
                    value: 11,
                    label: '11',
                },
                {
                    value: 12,
                    label: '12',
                },
                {
                    value: 13,
                    label: '13',
                },
                ],
            },
            ])
        const allResumes=reactive([])
        const {proxy}=getCurrentInstance()
        const department = ref('');
        const term=ref('')
        const page = ref(1);
        const pageSize = ref(10);
        const group=ref("")
        const groupnum=ref("")
        const num=ref("")
        const total=ref(0)
<<<<<<< HEAD
        const CurriculumVitae=reactive([])
=======
>>>>>>> 6e11c8e96e786ff7f892ac097dc50e8e40b461d8
        const getallresumes=async()=>{
            const res=await proxy.$api.getAllResumes(groupnum.value,page.value,pageSize.value,num.value)
            console.log(res)
            console.log(res.data.list)
            if(res.code==200){
                ElMessage.success("获取成功")
                if(res.data.count%10!=0)
                    total.value=(res.data.count-res.data.count%10)/10+1
                else
                    total.value=res.data.count/10
                allResumes.splice(0,allResumes.length,...res.data.list)
            }else{
                console.log('请求失败')
                ElMessage.error("获取信息失败~")
            }
        }
        onMounted(()=>{
            getallresumes()
            getAllDep()
            console.log("------------")
            console.log(allResumes)
        })
        //监听新的options
        watch(allDepartment, (newVal) => {
        options.value[0].options = newVal.map(item => ({
            value: item.id,
            label: item.departmentName
        }));
        });
        const downloadFile =async (fileId,name) => {
                if(fileId==null){
                    ElMessage.error("该文件为空")
                    return  
                }
                const res=await proxy.$api.downloadPicture(fileId,1)
                const url = window.URL.createObjectURL(new Blob([res]))
                const link = document.createElement('a')
                link.style.display = 'none'
                link.href = url
                link.download = name+'.pdf';
                document.body.appendChild(link)
                link.click()
                window.URL.revokeObjectURL(url)
                document.body.removeChild(link)
            
            };
        function exchange(val){
            if(val[0]=="2213141412"){
                groupnum.value="2213141412"
                group.value="技术组"
            }
            else if(val[1]=="2341412413sdaqed")
                {group.value="行政组"
                groupnum.value="2341412413sdaqed"}
            else if(val[2]=="dafdafmalmf")
                {group.value="节目组"
                groupnum.value="dafdafmalmf"}
            else if(val[3]=="eqfdrewfffffqf")
                {group.value="摄制组"
                groupnum.value="eqfdrewfffffqf"}
            else if(val[4]=="sadadqfggggfadad")
                {group.value="新媒体组"
            groupnum.value="sadadqfggggfadad"}
            else
                {group.value="设计组"
                groupnum.value="weqqqqqqqqdfqfazfafa"}
            num.value=val[1]
            const getallresumes=async()=>{
                const res=await proxy.$api.getAllResumes(val[0],page.value,pageSize.value,val[1])
                console.log(res)
                console.log(res.message)
                if(res.code==200){
                    ElMessage.success("获取成功")
                    allResumes.splice(0,allResumes.length,...res.data.list)
                }else{
                    console.log('请求失败')
                    ElMessage.error("获取信息失败~")
                }
            }
            const exportVitae=async()=>{
                const res=await proxy.$api.exportCurriculumVitae(val[0],val[1])
                console.log(res)
                if(res.code==200){
                    CurriculumVitae.splice(0,CurriculumVitae.length,...res.data.list)
                }else{
                    console.log("获取对应全部简历失败")
                }
            }
            if(/\d/.test(val[1])&&typeof val[1] === 'number'){
                console.log('yes')
                getallresumes();
                exportVitae();
            }else if(typeof val[0]==='number'&&typeof val[1]==='string'){
                const temp=val[1];
                val[1]=val[0];
                val[0]=temp;
                getallresumes();
            }else if(val[2]){
                ElMessage.error("请注意选择")
            }else{
                console.log('error')
            }
        }
        const getAllDep=async()=>{
            const res=await proxy.$api.getAllDepartment()
            console.log(res)
            if(res.code==200){
                allDepartment.splice(0,allDepartment.length,...res.data)
                console.log(allDepartment)
            }
            else{
                ElMessage.error("获取部门失败")
            }
        }
        const exportToExcel=(value)=>{
                const filteredData = CurriculumVitae.map((item) => ({
                        姓名: item.name,
                        学号: item.studentId,
                        学院:item.college,
                        班级:item.naturalClass,
                        校区:(item.campus==0?"松山湖":"莞城"),
                        电话:item.phone,
                        应聘部门:item.departmentName,
                        岗位:item.positionName,
                        是否同意调剂:(item.isAdjust==1?"是":"否")
                    }));
                const sheet = XLSX.utils.json_to_sheet(filteredData);
                const workbook = XLSX.utils.book_new();
                XLSX.utils.book_append_sheet(workbook, sheet, "Sheet1");
                const excelBuffer = XLSX.write(workbook, { type: "array" });
                const blob = new Blob([excelBuffer], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" });
                const url = URL.createObjectURL(blob);
                const a = document.createElement("a");
                a.href = url;
                if(!group.value)
                    a.download="全部成员.xlsx";
                else
                    a.download = group.value+"第"+num.value+"期.xlsx";
                a.click();
                URL.revokeObjectURL(url);
            }
        function handlePage(val){
            page.value=val
            getallresumes()
        }
        return{
            allResumes,
            page,
            pageSize,total,handlePage,
            getallresumes,
            downloadFile,
            value,options,exchange,getAllDep,
            exportToExcel,group,num,groupnum,
            CurriculumVitae,
        }
    }
})
</script>
<style scoped>
.m-4{
    width: 250px;
}
.button1{
    position: relative;
    float: right;
    right: 50px;
}
</style>