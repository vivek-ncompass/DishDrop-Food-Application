import { defineConfig, loadEnv } from "vite"
import react from "@vitejs/plugin-react"
import million from "million/compiler"

// const env = loadEnv(mode, process.cwd(), '');
// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],

// })
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "")
  return {
    define: {
      "process.env.REACT_APP_API_URL": JSON.stringify(env.REACT_APP_API_URL),
    },
    plugins: [
      million.vite({
        auto: {
          threshold: 0.05,
          skip: ["useBadHook", /badVariable/g],
        },
      }),
      react(),
    ],
  }
})
