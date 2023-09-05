<!-- <template>
    <div>
        <el-button  class="addbutton" @click="openaddDepartment">增加部门</el-button>
        <el-input class="addinput" v-if="showInputIndex2 ===1" type="text" v-model="newPositionName2" @keydown.enter="addDepartment(newPositionName2)" @blur="cancelInput" />
        <el-row class="row1">
            <el-col :span="8">
                <div class="grid-content ep-bg-purple" >
                    <el-button class="depart_button" size="large" >
                        {{ allDepartment.length > 0 ? allDepartment[0].departmentName : 'NULL' }}
                    </el-button>
                    <el-table :data="jobTable[0]" style="width: 400px;margin-left: 150px;">
                        <el-table-column  prop="positionName"  width="150" />
                        <el-table-column
                        width="150">
                        <template style="height:100px" v-slot="scope">
                            <el-button type="danger" size="small" @click="delPosition(jobTable[0][scope.$index].id)">删除</el-button>
                            <el-button size="small" @click="showInput(scope.$index)">修改</el-button>
                            <el-input v-if="showInputIndex === scope.$index" type="text" v-model="newPositionName" @keydown.enter="updatePositionName(jobTable[0][scope.$index], newPositionName)" @blur="cancelInput" />
                        </template>
                        </el-table-column>
                    </el-table>
                    <el-button class="addbutton" @click="addposition">新增职位</el-button>
                    <el-input class="addinput" v-if="showInputIndex1 ===1" type="text" v-model="newPositionName1" @keydown.enter="addpos(allDepartment[0].id,newPositionName1)" @blur="cancelInput" />
                </div>
            </el-col>
            <el-col :span="8">
                <div class="grid-content ep-bg-purple" >
                    <el-button class="depart_button" size="large" >
                        {{ allDepartment.length > 1 ? allDepartment[1].departmentName : 'NULL' }}
                    </el-button>
                    <el-table :data="jobTable[1]" style="width: 400px;margin-left: 150px;">
                        <el-table-column  prop="positionName"  width="150" />
                        <el-table-column
                        width="150">
                        <template style="height:100px" v-slot="scope">
                            <el-button type="danger" size="small" @click="delPosition(jobTable[1][scope.$index].id)">删除</el-button>
                            <el-button size="small" @click="showInput(scope.$index)">修改</el-button>
                            <el-input v-if="showInputIndex === scope.$index" type="text" v-model="newPositionName" @keydown.enter="updatePositionName(jobTable[1][scope.$index], newPositionName)" @blur="cancelInput" />
                        </template>
                        </el-table-column>
                    </el-table>
                    <el-button class="addbutton" @click="addposition">新增职位</el-button>
                    <el-input class="addinput" v-if="showInputIndex1 ===1" type="text" v-model="newPositionName1" @keydown.enter="addpos(allDepartment[1].id,newPositionName1)" @blur="cancelInput" />
                </div>
            </el-col>
            <el-col :span="8">
                <div class="grid-content ep-bg-purple" >
                    <el-button class="depart_button" size="large" >
                        {{ allDepartment.length > 2 ? allDepartment[2].departmentName : 'NULL' }}
                    </el-button>
                    <el-table :data="jobTable[2]" style="width: 400px;margin-left: 150px;">
                        <el-table-column  prop="positionName"  width="150" />
                        <el-table-column
                        width="150">
                        <template style="height:100px" v-slot="scope">
                            <el-button type="danger" size="small" @click="delPosition(jobTable[2][scope.$index].id)">删除</el-button>
                            <el-button size="small" @click="showInput(scope.$index)">修改</el-button>
                            <el-input v-if="showInputIndex === scope.$index" type="text" v-model="newPositionName" @keydown.enter="updatePositionName(jobTable[2][scope.$index], newPositionName)" @blur="cancelInput" />
                        </template>
                        </el-table-column>
                    </el-table>
                    <el-button class="addbutton" @click="addposition">新增职位</el-button>
                    <el-input class="addinput" v-if="showInputIndex1 ===1" type="text" v-model="newPositionName1" @keydown.enter="addpos(allDepartment[2].id,newPositionName1)" @blur="cancelInput" />
                </div>
            </el-col>
        </el-row>
        <el-row class="row1">
            <el-col :span="8">
                <div class="grid-content ep-bg-purple" >
                    <el-button class="depart_button" size="large" >
                        {{ allDepartment.length > 3 ? allDepartment[3].departmentName : 'NULL' }}
                    </el-button>
                    <el-table :data="jobTable[3]" style="width: 400px;margin-left: 150px;">
                        <el-table-column  prop="positionName"  width="150" />
                        <el-table-column
                        width="150">
                        <template style="height:100px" v-slot="scope">
                            <el-button type="danger" size="small" @click="delPosition(jobTable[3][scope.$index].id)">删除</el-button>
                            <el-button size="small" @click="showInput(scope.$index)">修改</el-button>
                            <el-input v-if="showInputIndex === scope.$index" type="text" v-model="newPositionName" @keydown.enter="updatePositionName(jobTable[3][scope.$index], newPositionName)" @blur="cancelInput" />
                        </template>
                        </el-table-column>
                    </el-table>
                    <el-button class="addbutton" @click="addposition">新增职位</el-button>
                    <el-input class="addinput" v-if="showInputIndex1 ===1" type="text" v-model="newPositionName1" @keydown.enter="addpos(allDepartment[3].id,newPositionName1)" @blur="cancelInput" />
                </div>
            </el-col>
            <el-col :span="8">
                <div class="grid-content ep-bg-purple" >
                    <el-button class="depart_button" size="large" >
                        {{ allDepartment.length > 4 ? allDepartment[4].departmentName : 'NULL' }}
                    </el-button>
                    <el-table :data="jobTable[4]" style="width: 400px;margin-left: 150px;">
                        <el-table-column  prop="positionName"  width="150" />
                        <el-table-column
                        width="150">
                        <template style="height:100px" v-slot="scope">
                            <el-button type="danger" size="small" @click="delPosition(jobTable[4][scope.$index].id)">删除</el-button>
                            <el-button size="small" @click="showInput(scope.$index)">修改</el-button>
                            <el-input v-if="showInputIndex === scope.$index" type="text" v-model="newPositionName" @keydown.enter="updatePositionName(jobTable[4][scope.$index], newPositionName)" @blur="cancelInput" />
                        </template>
                        </el-table-column>
                    </el-table>
                    <el-button class="addbutton" @click="addposition">新增职位</el-button>
                    <el-input class="addinput" v-if="showInputIndex1 ===1" type="text" v-model="newPositionName1" @keydown.enter="addpos(allDepartment[4].id,newPositionName1)" @blur="cancelInput" />
                </div>
            </el-col>
            <el-col :span="8">
                <div class="grid-content ep-bg-purple" >
                    <el-button class="depart_button" size="large" >
                        {{ allDepartment.length > 5 ? allDepartment[5].departmentName : 'NULL' }}
                    </el-button>
                    <el-table :data="jobTable[5]" style="width: 400px;margin-left: 150px;">
                        <el-table-column  prop="positionName"  width="150" />
                        <el-table-column
                        width="150">
                        <template style="height:100px" v-slot="scope">
                            <el-button type="danger" size="small" @click="delPosition(jobTable[5][scope.$index].id)">删除</el-button>
                            <el-button size="small" @click="showInput(scope.$index)">修改</el-button>
                            <el-input v-if="showInputIndex === scope.$index" type="text" v-model="newPositionName" @keydown.enter="updatePositionName(jobTable[5][scope.$index], newPositionName)" @blur="cancelInput" />
                        </template>
                        </el-table-column>
                    </el-table>
                    <el-button class="addbutton" @click="addposition">新增职位</el-button>
                    <el-input class="addinput" v-if="showInputIndex1 ===1" type="text" v-model="newPositionName1" @keydown.enter="addpos(allDepartment[5].id,newPositionName1)" @blur="cancelInput" />
                </div>
            </el-col>
        </el-row>
        <el-row class="row1">
            <el-col :span="8">
                <div class="grid-content ep-bg-purple" >
                    <el-button class="depart_button" size="large" >
                        {{ allDepartment.length > 6 ? allDepartment[6].departmentName : 'NULL' }}
                    </el-button>
                    <el-table :data="jobTable[6]" style="width: 400px;margin-left: 150px;">
                        <el-table-column  prop="positionName"  width="150" />
                        <el-table-column
                        width="150">
                        <template style="height:100px" v-slot="scope">
                            <el-button type="danger" size="small" @click="delPosition(jobTable[6][scope.$index].id)">删除</el-button>
                            <el-button size="small" @click="showInput(scope.$index)">修改</el-button>
                            <el-input v-if="showInputIndex === scope.$index" type="text" v-model="newPositionName" @keydown.enter="updatePositionName(jobTable[6][scope.$index], newPositionName)" @blur="cancelInput" />
                        </template>
                        </el-table-column>
                    </el-table>
                    <el-button class="addbutton" @click="addposition">新增职位</el-button>
                    <el-input class="addinput" v-if="showInputIndex1 ===1" type="text" v-model="newPositionName1" @keydown.enter="addpos(allDepartment[6].id,newPositionName1)" @blur="cancelInput" />
                </div>
            </el-col>
        </el-row>
    </div>
</template>
<script>
import { ElMessage } from "element-plus";
import { onMounted } from 'vue';
import { getCurrentInstance, reactive ,ref} from 'vue'
export default{
    setup(){
        const {proxy}=getCurrentInstance()
        const jobTable=reactive([])
        const allDepartment=reactive([])
        const showInputIndex = ref(-1);
        const newPositionName = ref('');
        const showInputIndex1 = ref(-1);const showInputIndex2 = ref(-1);
        const newPositionName1 = ref('');const newPositionName2 = ref('');
        const getAllDep=async()=>{
            const res=await proxy.$api.getAllDepartment()
            console.log(res)
            if(res.code==200){
                allDepartment.splice(0,allDepartment.length,...res.data)
                // console.log(allDepartment)
                async function executeSequentially() {
                    for (let i = 0; i < 7; i++) {
                        await getjob(allDepartment[i].id);
                    }
                    // 在这里执行下一个语句
                    }
                executeSequentially();
            }
            else{
                ElMessage.error("获取部门失败")
            }
        }
        const getjob=async(id)=>{
            const res=await proxy.$api.getJob(id)
            console.log(res)
            if(res.code==200){
                // ElMessage.success("获取职位成功")
                // console.log(res.data[0].departmentId)
                if(res.data[0]==null){
                    const data3=Array({
                        "id":111111111111,
                        "positionName":"请及时填写修改",
                        "departmentId":id
                    })
                    // console.log(data3)
                    jobTable.push(data3)
                }
                else if(id==res.data[0].departmentId){
                    // console.log(res.data)
                    jobTable.push(res.data)
                    // console.log(jobTable)
                }
                else{
                    console.log('error')
                }
            }else{
                ElMessage.error("获取职位失败")
            }
        }
        //删除职位
        const delPosition=async(id)=>{
            const res=await proxy.$api.deletePosition(id)
              console.log(res)
              if(res.code==200){
                getAllDep()
              }else{
                ElMessage.error("删除失败")
              }
        }
        //修改职位名称
        const acPositionName=async(data)=>{
            console.log(data)
            const res=await proxy.$api.addChangePosition(data)
            console.log(res)
            if(res.code==200){
                getAllDep()
              }else{
                ElMessage.error("修改失败")
              }
        }
        function showInput(index) {
            showInputIndex.value = index;
            newPositionName.value = jobTable[0][index].positionName;
        }
        function updatePositionName(data, newPositionName) {
            console.log(`Updating position name for id ${data.id} to ${newPositionName}`);
            const data1=reactive({
                "id":data.id,
                "departmentId":data.departmentId,
                "positionName":newPositionName
            })
            acPositionName(data1)
            cancelInput();
        }
        function cancelInput() {
            showInputIndex.value = -1;
            newPositionName.value = '';
            showInputIndex1.value = -1;
            newPositionName1.value = '';
            showInputIndex2.value = -1;
            newPositionName2.value = '';
        }
        //增加职位
        function addposition(){
            showInputIndex1.value=1;
        }
        function addpos(id,newPositionName1){
            console.log(id)
            const data2=reactive({
                "departmentId":id,
                "positionName":newPositionName1,
            })
            acPositionName(data2)
            cancelInput();
        }
        //新增部门
        function openaddDepartment(){
            showInputIndex2.value=1
        }
        function addDepartment(newPositionName2){
            openaddDepartment()
            const data=reactive({
                "departmentName":newPositionName2
            })
            // cancelInput()
            console.log(data)
            addDep(data)
        }
        const addDep=async(data)=>{
            const res=await proxy.$api.addChangeDepartment(data)
            console.log(res)
            if(res.code==200){
                getAllDep()
                ElMessage.success("修改成功")
            }else{
                ElMessage.error("添加失败")
            }
        }
        onMounted(()=>{
            getAllDep()
        })
        return{
            allDepartment,getAllDep,getjob,
            jobTable,
            delPosition,
            showInputIndex,newPositionName,
            showInputIndex1,showInputIndex2,newPositionName1,newPositionName2,
            showInput,
            updatePositionName,
            cancelInput,
            acPositionName,
            addposition,
            addpos,
            addDepartment,openaddDepartment
        }
    }
}
</script>
<style scoped>
.el-row {
  margin-bottom: 20px;
}
.el-row:last-child {
  margin-bottom: 0;
}
.el-col {
  border-radius: 4px;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.depart_button{
    width: 200px;
    position: relative;
    left: 50%;
    transform: translate(-50%);
}
.row1{
    height: 300px;
    /* border: solid 1px black; */
}
.addbutton{
    margin-left: 150px;margin-top: 20px;
}
.addinput{
    width:150px;
    position: relative;
    margin-left: 20px;
    margin-top: 20px;
}
</style> -->

<template>
    <div>
      <div v-for="department in allDepartment" :key="department.id">
        <div class="department-item">
            <el-popconfirm
                confirm-button-text="是"
                cancel-button-text="否"
                icon-color="#626AEF"
                title="确认删除整个组"
                @confirm="deleteDep(department.id)"
            >
                <template #reference>
                    <el-button>-</el-button>
                </template>
            </el-popconfirm>
          
          <div class="department-name">{{ department.departmentName }}</div>
          <div class="job-duty">       
                    <div class="jobName" v-for="job in groupedJobs[department.id]" :key="job.id">
                    {{ job.positionName }}
                        <el-popconfirm title="Are you sure to delete or change it?"
                            confirmButtonText="删除"
                            cancelButtonText="修改"
                         @confirm="handleConfirm(job.id)" @cancel="handleCancel(department.id,job.id)">
                            <template #reference>
                            <el-button class="deletePos">-</el-button>
                            </template>
                        </el-popconfirm>
                    </div>
                <el-button   @click="addposition(department.id)">+</el-button>
                <!-- <button  icon="fas fa-minus" class="custom-red-button"></button> -->
                <input class="input" v-if="showInput[department.id]" type="text" v-model="newPositionName" />
                <el-button v-if="showInput[department.id]" @click="addPos(newPositionName,department.id)">新增</el-button>
                <el-button v-if="showInput[department.id]" @click="changePos(newPositionName,department.id,jobIdToChange)">修改</el-button>
          </div>
        </div>
      </div>
      <el-button @click="addDepartment()">+</el-button>
      <el-input v-if="departmentInput==true" v-model="newDepartmentName"></el-input>
      <el-button v-if="departmentInput==true" @click="addDep(newDepartmentName)">新增部门</el-button>
    </div>
  </template>
  
  <script setup>

  import { getCurrentInstance,computed,ref, onMounted,reactive } from 'vue';
  import { ElMessage } from "element-plus";
  const {proxy} = getCurrentInstance()
  const allDepartment = ref([]);
  const jobTable = ref([]);
  const showInput = reactive({});
  const newPositionName = ref("");
  const newDepartmentName=ref("");
  const jobIdToChange = ref(null);
  const departmentInput = ref(false);
  onMounted(async () => {
    await getAllDep();
  });
  
  const getAllDep = async () => {
    const res = await proxy.$api.getAllDepartment();
    if (res.code == 200) {
      allDepartment.value.splice(0, allDepartment.value.length, ...res.data);
      const promises = allDepartment.value
        .slice(0, allDepartment.length)
        .map((department) => getjob(department.id));
      await Promise.all(promises);
    } else {
      ElMessage.error("获取部门失败");
    }
  };
  
  const getjob = async (id) => {
    jobTable.value.length = 0;
    const res = await proxy.$api.getJob(id);
    if (res.code == 200) {
      if (res.data[0] == null) {
        const data3 = {
          id: 111111111111,
          positionName: "请及时填写修改",
          departmentId: id,
        };
        jobTable.value.push(data3);
      } else if (id == res.data[0].departmentId) {
        jobTable.value.push(...res.data);
        console.log(jobTable)
      }
    } else {
      ElMessage.error("获取职位失败");
    }
  };
  const groupedJobs = computed(() => {
        const grouped = {};
        jobTable.value.forEach((job) => {
            if (!grouped[job.departmentId]) {
            grouped[job.departmentId] = [];
            }
            grouped[job.departmentId].push(job);
        });
        return grouped;
    });
    const addposition = (departmentId) => {
        showInput[departmentId] = true;
    };
   const addPos=async (newPositionName,departmentId)=>{
        const data=reactive({
            "departmentId":departmentId,
            "positionName":newPositionName,
        })
        const res=await proxy.$api.addChangePosition(data);
        console.log(res)
        if(res.code==200){
            getAllDep()
        }else{
            ElMessage.error("新增失败")
        }
        showInput[departmentId]=false;
   }
   //删除职员
   const handleConfirm=async(id)=>{
    console.log(id)
    console.log('用户点击了yes操作！')
    const res=await proxy.$api.deletePosition(id)
    if(res.code==200){
        getAllDep()
    }else{
        ElMessage.error("删除失败")
    }
   }
   //修改职员
   const handleCancel=(departmentId,id)=>{
    console.log('用户点击了no操作！')
    jobIdToChange.value = id;
    showInput[departmentId] = true;
   }
   const changePos=async (newPositionName,departmentId,id)=>{
    const data=reactive({
            "id":id,
            "departmentId":departmentId,
            "positionName":newPositionName,
        })
        const res=await proxy.$api.addChangePosition(data);
        console.log(res)
        if(res.code==200){
            getAllDep()
        }else{
            ElMessage.error("修改失败")
        }
        showInput[departmentId]=false;
   }

   const addDepartment=()=>{
    departmentInput.value=true;
   }
   const addDep=async(newDepartmentName)=>{
    const data=reactive({
        "departmentName":newDepartmentName
    })
    const res=await proxy.$api.addChangeDepartment(data);
    console.log(res)
    if(res.code==200){
        getAllDep()
    }else{
        ElMessage.error("新增失败")
    }
    departmentInput.value=false;
   }
   const deleteDep=async(id)=>{
    const res=await proxy.$api.deleteDepartment(id)
    console.log(res)
    if(res.code==200){
        getAllDep()
    }else{
        ElMessage.error("删除失败")
    }
   }
  </script>
  
  <style>
  .department-item {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
  }
  
  .department-name {
    font-weight: bold;
    margin-right: 10px;
    margin-left: 20px;
    margin-right: 40px;
  }
  
  .job-duty {
    display: flex;
  }
  
  .job-duty > div {
    margin-right: 10px;
  }

.deletePos{
    width: 20px !important; 
    height: 20px;
    border-radius: 50px;
}
.jobName{
    position: relative;
    width: 150px;
    margin-right: 30px;
}
.input{
    margin-left: 20px;
    margin-right: 20px;
}
  </style>
  