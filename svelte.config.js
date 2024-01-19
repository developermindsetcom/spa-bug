import adapter from '@sveltejs/adapter-static';
import sveltePreprocess from "svelte-preprocess";

/**
 config {import('@sveltejs/kit').Config}
 **/
const config = {
    preprocess: sveltePreprocess(),
    compilerOptions: {
        sourcemap: true
    },
    kit: {
        outDir: './dist',
        adapter: adapter({
            fallback: 'app.html',
            strict: true
        }),
        prerender: {
            crawl: false,
            entries: ['/', '/about', '/sverdle/how-to-play']
        }
    }
};
export default config;
