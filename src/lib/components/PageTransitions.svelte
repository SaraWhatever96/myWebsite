<script>
	import { quadOut } from 'svelte/easing';
	import { fly } from 'svelte/transition';
	export let pathname = '';
</script>

{#key pathname}
	<div in:fly={{ y: -20, duration: 500, easing: quadOut }}>
		<slot />
	</div>
{/key}