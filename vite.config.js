/** @type {import('vite').UserConfig} */
export default defineConfig({
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