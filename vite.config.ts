import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
export default defineConfig({
	server: {
		port: 3000,
		watch: {
			usePolling: true,
		},
		fs: {
			// Allow serving files from one level up to the project root
			allow: ['..'],
		}
	},
	build: {
		sourcemap: true,
	},
	appType: 'spa',
	plugins: [
		sveltekit()
	]
});
