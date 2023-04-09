/** @type {import('vite').UserConfig} */
import { defineConfig } from 'vite';
export default defineConfig({
    base: './',
    plugins: [
        laravel({
            input: [
                'src/JqueryV3.js',
                'src/main.js',
                'src/Particles.js', 
            ],
            refresh: true,
        }),
    ],
});  