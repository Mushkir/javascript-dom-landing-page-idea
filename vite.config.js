import { defineConfig } from "vite"
import {resolve} from "path"

export default defineConfig({
    base: "/javascript-dom-landing-page-idea/",

    build: {
        rollupOptions: {
            input: {
                index: resolve(__dirname,'index.html'),
                playlist: resolve(__dirname,'playlist.html'),
            }
        }
    }
})