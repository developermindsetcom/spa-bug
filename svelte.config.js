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
        adapter: adapter({
            fallback: 'app.html',
            strict: true
        }),
        prerender: {
            crawl: false,
            entries: []
        }
    }
};
export default config;
