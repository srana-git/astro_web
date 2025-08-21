import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel/static';

// https://astro.build/config
export default defineConfig({
	site: 'https://jumshaidzee.com',
	base: '/',
	output: 'static',
	adapter: vercel({
		webAnalytics: {
			enabled: true,
		},
		speedInsights: {
			enabled: true,
		},
	}),
	vite: {
		plugins: [tailwindcss()],
	},
});
