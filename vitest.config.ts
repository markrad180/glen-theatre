import { svelte } from '@sveltejs/vite-plugin-svelte';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	plugins: [svelte()],
	// Resolve svelte's client build in tests (its default export is the server build)
	resolve: {
		conditions: ['browser']
	},
	test: {
		environment: 'jsdom',
		globals: true, // enables @testing-library/svelte auto-cleanup between tests
		include: ['src/**/*.test.ts']
	}
});
