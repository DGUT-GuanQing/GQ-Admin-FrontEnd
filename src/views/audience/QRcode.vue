<template>
    <img class="imgQR" :src="imageInData" alt="Image">
    
</template>
<script>
import { ElMessage } from "element-plus";
import { getCurrentInstance ,ref,onMounted} from 'vue'
export default({
    setup(){
        const {proxy}=getCurrentInstance()  
        const imageInData=ref("") 
        const imageOutData=ref("") 
        onMounted(()=>{
          generateInQrcode()
        })
        const generateInQrcode = async () => {
          try {
            const res = await proxy.$api.generateCheckinQrcode();
            console.log(res);

            const blobData = await res.arrayBuffer();
            const blob = new Blob([blobData], { type: 'image/png' });
            const imageUrl = URL.createObjectURL(blob);
            imageInData.value = imageUrl;
            
            ElMessage.success('生成成功~');
            console.log(imageInData);
          } catch (error) {
            console.log(error);
            ElMessage.error('生成失败~');
          }
        };
        const generateOutQrcode = async () => {
          try {
            const res = await proxy.$api.generateCheckoutQrcode();
            console.log(res);

            const blobData = await res.arrayBuffer();
            const blob = new Blob([blobData], { type: 'image/png' });
            const imageUrl = URL.createObjectURL(blob);
            imageOutData.value = imageUrl;
            
            ElMessage.success('生成成功~');
            console.log(imageOutData);
          } catch (error) {
            console.log(error);
            ElMessage.error('生成失败~');
          }
        };
        return{
          generateInQrcode,imageInData,generateOutQrcode,imageOutData
        }
        
    }
})
</script>

<style scoped >
.imgQR{
        width: 700px;
        height: 700px;
        position: relative;
        left: 50%;
        transform: translateX(-50%);
    }
</style>