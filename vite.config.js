import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode, ssrBuild }) => {

  const env = loadEnv(mode, process.cwd(), '')

  console.log(env)

  return {
    plugins: [react()],
    define: {
      // ...env
    },
    base: '/sandbox_react_algorithms/',
    json: {
      stringify: true
    },
    build: {
      outDir: 'docs'
    }
  }
})
