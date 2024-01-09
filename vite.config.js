import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
//import 'vite/modulepreload-polyfill'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build:
    {modulePreload:
      {polyfill:true}
    }
})
