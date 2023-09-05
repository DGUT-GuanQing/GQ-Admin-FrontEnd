import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 5173,
    host: '0.0.0.0',
    open: true,
    // proxy:{
    //   '/api':{
    //     target:'http://172.31.61.234:8084/',
    //     changeOrigin:true,//开启跨域
    //     ws:true,
    //     rewrite:(path)=>path.replace(/^\/api/,''),
    //     //地址重写
    //   }
    // }
  },
  plugins: [vue()],
  build: {
    chunkSizeWarningLimit:1500,
    rollupOptions: {
        output:{
            manualChunks(id) {
              if (id.includes('node_modules')) {
                  return id.toString().split('node_modules/')[1].split('/')[0].toString();
              }
    
        }
    }}
  }
})
