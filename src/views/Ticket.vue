<template>
    <div>
        <h2 class="title">派票绑定</h2>
        <div class="ticket">
            <el-form  :model="formInline" class="demo-form-inline">
                <el-form-item label="学号">
                    <el-input class="input" @input="validateNumber1"  v-model="formInline.StudentNumber" placeholder="请输入学号" clearable />
                </el-form-item>
                <el-form-item label="票号">
                    <el-input class="input" @input="validateNumber"  v-model="formInline.TicketNumber" placeholder="请输入票号" clearable />
                </el-form-item>
                <el-form-item>
                    <el-button style="position: relative; left: 8%;" type="primary" @click="onSubmit">绑定</el-button>
                </el-form-item>
            </el-form>
        </div>
        <div class="search">
            <el-input style="width: 200px;" v-model="section.left" placeholder="请输入左区间" />~
            <el-input style="width: 200px;" v-model="section.right" placeholder="请输入右区间" />
            <el-button style="position: relative; left: 50px;" type="primary" @click="exportToExcel"> 查找导出</el-button>
        </div>
    </div>
</template>
<script>
import {onMounted,ref,reactive,getCurrentInstance} from 'vue' ;
import { ElMessage } from "element-plus";
import XLSX from 'xlsx'
export default({
    setup(){
        const {proxy}=getCurrentInstance()
        const formInline = reactive({
            StudentNumber: '',
            TicketNumber: '',
        })
        const section=reactive({
            left:'',
            right:''
        })
        const Ticket=reactive([])
        const onSubmit =async () => {
            console.log('submit!',formInline.StudentNumber,formInline.TicketNumber)
            const res= await proxy.$api.BoundTicket(formInline.StudentNumber,formInline.TicketNumber)
            console.log(res)
            if(res.code==200){
                ElMessage.success('绑定成功')
            }
            else
                ElMessage.error(res.message)
            formInline.StudentNumber=''
            formInline.TicketNumber=''
        }
        const validateNumber = () => {
        // 使用正则表达式检查输入是否为数字
        const isNumber = /^\d+$/.test(formInline.TicketNumber);
        if (!isNumber) {
            formInline.TicketNumber = ''; 
            ElMessage.error('请输入数字')
        }
        };
        const validateNumber1 = () => {
        // 使用正则表达式检查输入是否为数字
        const isNumber = /^\d+$/.test(formInline.StudentNumber);
        if (!isNumber) {
            formInline.StudentNumber = ''; 
            ElMessage.error('请输入数字')
        }
        };
        const exportToExcel=async ()=>{
            const res=await proxy.$api.exportBound(section.left,section.right)
            console.log(res)
            if(res.code==200){
                Ticket.splice(0,Ticket.length,...res.data)
                console.log(Ticket)
                const filteredData = Ticket.map((item) => ({
                    学号: item.studentId,
                    票号: item.ticketId,
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
                a.download = section.left+"号到"+section.right+"号票务信息.xlsx";
                a.click();
                URL.revokeObjectURL(url);
            }
                else
                    ElMessage.error(res.message)
            }
        return{
            formInline,onSubmit,validateNumber,validateNumber1,
            section,exportToExcel,
        }
    }
})

</script>

<style lang="less" scoped>

.demo-form-inline .el-input {
  --el-input-width: 220px;
}
.ticket{
    position: relative;
    left: 38%;
    top: 20px;
}
.input{
    width: 250px;
}
.title{
    font-size: 24px;
    position: relative;
    left: 45%;
}
.search{
    position: relative;
    left: 34%;
    top: 50px;
}
</style>