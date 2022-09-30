<script lang="ts">
	import { fly, fade } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';

	export let slug: string;
	export let title: string;
	export let coverImage: string;
	export let createdAt: string;
	export let category: string;
	export let delay: number = 0;

	function parseDate(strDate: string): string {
		return strDate.split('-').reverse().join('/');
	}
</script>

<a href="/projects/{category}/{slug}" class="space-y-4">
	<div class="rounded-xl shadow-lg shadow-slate-800/5 md:hover:scale-105 md:hover:rotate-1 md:transition-all md:duration-300 md:ease-in-out">
		<img loading="lazy" class="rounded-xl aspect-1 object-cover" src={coverImage} alt="Motion Design Projects" />
	</div>
	<div class="text-gray-700 dark:text-slate-100 text-2xl font-title font-medium transition-colors duration-150 ease-in-out">
		{title}
	</div>
</a>
