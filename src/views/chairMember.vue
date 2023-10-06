<template>
    <el-select v-model="value" class="m-2" placeholder="抢到票成员信息" @change="exchange">
            <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
            />
    </el-select>
    <el-button v-show="value==0" class="button1"  @click="exportToExcel(value,id)">抢到票成员Excel</el-button>
    <el-button v-show="value==1" class="button1"  @click="exportToExcel(value,id)">看完讲座成员Excel</el-button>
    <el-table
        :data="chairMember"
        style="width: 100%">
        <el-table-column
        fixed="left"
        prop="name"
        label="姓名"
        width="150">
        </el-table-column>
        <el-table-column
        prop="college"
        label="学院"
        width="120">
        </el-table-column>
        <el-table-column
        prop="studentId"
        label="学号"
        width="120">
        </el-table-column>
        <el-table-column
        prop="naturalClass"
        label="班级"
        width="300">
        </el-table-column>
        <el-table-column
        prop="vip"
        label="会员"
        width="120">
            <template v-slot="scope">
                <span v-if="chairMember[scope.$index].vip==0">否</span>
                <span v-if="chairMember[scope.$index].vip==1">是</span>
            </template>
        </el-table-column>
        <el-table-column
        prop="raceNumber"
        label="参加讲座次数"
        width="200">
        </el-table-column>
        <el-table-column
        fixed="right"
        label="操作"
        width="200">
        <template style="height:100px" v-slot="scope">
            <el-button size="small">编辑(暂不用实现)</el-button>
            <!-- <el-button size="small">查看</el-button> -->
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
import { getCurrentInstance, reactive ,ref,onMounted,computed} from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import XLSX from 'xlsx'
    export default({
        setup() {
            const value = ref('')
            const options = [
            {
                value: '0',
                label: '抢到票成员信息',
            },
            {
                value: '1',
                label: '看完讲座成员信息',
            },
            ]
            const router = useRouter()
            const chairMember=reactive([])
            const userdata=reactive([])
            const page = ref(1);
            const pageSize = ref(10);
            const status=ref(0)
            const {proxy} = getCurrentInstance()
            const id=router.currentRoute.value.query.id
            const total=ref(0)
            onMounted(() => {
                console.log(id)
                getChairMember()
                exportUserdata()
                // console.log(chairMember)
            })
            const getChairMember=async()=>{
                const res=await proxy.$api.getChairMember(id,page.value,pageSize.value,status.value)
                console.log(res)
                if(res.data.count%5!=0)
                      total.value=(res.data.count-res.data.count%5)/5+1
                    else
                      total.value=res.data.count/5
                if(res.code==200){
                    ElMessage.success('获取成功')
                    chairMember.splice(0,chairMember.length,...res.data.list)
                }else{
                    console.log('请求失败')
                    ElMessage.error("获取信息失败~")
                }
            }
            const getChairMember1=async()=>{
                const res=await proxy.$api.getChairMember(id,page.value,pageSize.value,1)
                console.log(res)
                if(res.data.count%5!=0)
                      total.value=(res.data.count-res.data.count%5)/5+1
                    else
                      total.value=res.data.count/5
                if(res.code==200){
                    ElMessage.success('获取成功')
                    chairMember.splice(0,chairMember.length,...res.data.list)
                }else{
                    console.log('请求失败')
                    ElMessage.error("获取信息失败~")
                }
            }
            const exportUserdata=async()=>{
                const res=await proxy.$api.exportUser(id,status.value)
                console.log(res)
                if(res.code==200)
                    userdata.splice(0,userdata.length,...res.data.list)
                else
                    console.log("获取失败")
            }
            function handlePage(val){
                page.value=val
                getChairMember()
            }
            function exchange(val){
                console.log(val)
                if(val==0){
                    const getChairMember=async()=>{
                        const res=await proxy.$api.getChairMember(id,page.value,pageSize.value,0)
                        console.log(res)
                        if(res.code==200){
                            ElMessage.success('获取成功')
                            chairMember.splice(0,chairMember.length,...res.data.list)
                        }else{
                            console.log('请求失败')
                            ElMessage.error("获取信息失败~")
                        }
                    }
                    getChairMember()  
                    status.value=0
                    exportUserdata()
                }
                else if(val==1){
                    status.value=1
                    getChairMember1()
                    exportUserdata()
                }
            }
            const exportToExcel = (value) => {
                const filteredData = userdata.map((item) => ({
                    姓名: item.name,
                    学号: item.studentId,
                }));
            const sheet = XLSX.utils.json_to_sheet(filteredData);
            const workbook = XLSX.utils.book_new();
            XLSX.utils.book_append_sheet(workbook, sheet, "Sheet1");
            const excelBuffer = XLSX.write(workbook, { type: "array" });
            const blob = new Blob(
                [excelBuffer],
                { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" }
            );
            const url = URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            if (value == 0)
                a.download = id + "抢到票成员信息.xlsx";
            else
                a.download = id + "看完讲座成员信息.xlsx";
            a.click();
            URL.revokeObjectURL(url);
            };

            return {
            id,
            handlePage,
            chairMember,
            value,options,
            exchange,
            exportToExcel,total,
            exportUserdata,userdata
            }
        }
    })
</script>

<style lang="less" >
.button1{
    position: relative;
    float: right;
    right: 340px;
}
</style>