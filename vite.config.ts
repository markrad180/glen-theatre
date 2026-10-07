import adapter from '@sveltejs/adapter-cloudflare';
import { sveltekit } from '@sveltejs/kit/vite';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [
		sveltekit({
			adapter: adapter(),
			prerender: {
				// Image slots start empty (static/images/.gitkeep) — the prerendered
				// HTML references /images/* that 404 until real photos land. The
				// client falls back to the filmstrip placeholder, so tolerate those.
				handleHttpError: ({ status, path, message }) => {
					if (status === 404 && path.startsWith('/images/')) return;
					throw new Error(message);
				}
			}
		}),
		tailwindcss()
	]
});
