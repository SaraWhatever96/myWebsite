import { defineMDSveXConfig as defineConfig } from 'mdsvex';

const config = defineConfig({
	extensions: ['.svelte.md', '.md', '.svx'],
	layout: {
		'ui-ux': './src/lib/components/projects/ProjectsLayout.svelte',
		'motion-design': './src/lib/components/projects/ProjectsLayout.svelte',
	},
	smartypants: {
		dashes: 'oldschool'
	},
	remarkPlugins: [],
	rehypePlugins: []
});

export default config;
