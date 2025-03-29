import { resolve } from 'path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/maplibre-gl-logo.ts'),
      name: 'maplibre-gl-logo',
      fileName: 'maplibre-gl-logo',
    },
  },
  plugins: [dts()],
})
