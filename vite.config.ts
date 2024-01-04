import { defineConfig } from 'vite'
import  {resolve} from 'path'
import vue from '@vitejs/plugin-vue'
import dts from "vite-plugin-dts";
// import dts from "rollup-plugin-dts";
import typescript2 from 'rollup-plugin-typescript2'
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";

import typescript from '@rollup/plugin-typescript';

export default defineConfig({
     plugins: [vue(),
        cssInjectedByJsPlugin(),
        dts({
            insertTypesEntry: true,
        }),
        typescript2({
            check: false,
            include: ["src/components/**/*.vue"],
            tsconfigOverride: {
              compilerOptions: {
                outDir: "dist",
                sourceMap: true,
                declaration: true,
                declarationMap: true,
              },
            },
            exclude: ["vite.config.ts"]
          })
    ],
    build:{
        lib: {
            // Could also be a dictionary or array of multiple entry points
            entry: [resolve(__dirname, 'src/index.ts')],
            name: 'myVuePackage',
            fileName: 'myVuePackage',
          },
        rollupOptions: {
            // make sure to externalize deps that shouldn't be bundled
            // into your library
            external: ['vue','src/example', /node_modules/,'.storybook', 'src/stories'],
            plugins: [typescript()],
            output: [
                {
                    format: 'cjs',
                    globals: {
                        vue: 'Vue'
                    }
                },
                {
                    format: 'esm',
                    globals: {
                        vue: 'Vue'
                    }
                },
            ]
        },
    },
})