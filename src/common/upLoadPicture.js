import { ref, getCurrentInstance, reactive } from 'vue'
import { ElMessage } from "element-plus";
export default function usePictureUpload() {
  const picture = ref('')  
  const picture1 = ref('')  
  const { proxy } = getCurrentInstance()
  const pic_url_name=ref('')
  const pic_url_name1=ref('')
    const upload = async () => {
      const res = await proxy.$api.upLoadPicture(picture)
      console.log(res)
      if (res.code === 200) {
        ElMessage.success('上传成功')
        pic_url_name.value=res.data
        console.log(pic_url_name.value)
      } else {
        ElMessage.error('上传失败')
        console.log('上传失败')
      }
    }
    const upload1 = async () => {
      const res = await proxy.$api.upLoadPicture(picture1)
      console.log(res)
      if (res.code === 200) {
        ElMessage.success('上传成功')
        pic_url_name1.value=res.data
      } else {
        ElMessage.error('上传失败')
        console.log('上传失败')
      }
    }
  return {
    upload,upload1,
    picture,picture1,
    pic_url_name,pic_url_name1
  }
}
