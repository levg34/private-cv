import { defineConfig } from 'vite'
import solidPlugin from 'vite-plugin-solid'
import suidPlugin from '@suid/vite-plugin'

export default defineConfig({
    plugins: [suidPlugin(), solidPlugin()],
    build: {
        target: 'esnext'
    },
    base: '/private-cv/',
    test: {
        deps: {
            inline: [/solid-js/]
        }
    }
})
