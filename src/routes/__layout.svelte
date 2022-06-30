<script lang="ts">
	import '../app.css';
	import { onMount } from 'svelte';
	import Header from '$lib/components/Header.svelte';
	import WorkInProgress from '$lib/components/WorkInProgress.svelte';

	let reference;

	onMount(async () => {
		// We need to wait for the document to load in order to import the scroll library
		/*
		const module = await import('locomotive-scroll');
		const LocomotiveScroll = module.default;
		const scrollElement = new LocomotiveScroll({
			el: reference,
			smooth: true,
		});
		*/

		/*
		scrollElement.on('scroll', (obj) => {
			// Find distance between scroll updates
			scroll.current = obj.scroll.y;
			const distance = scroll.current - scroll.cache;
			scroll.cache = scroll.current;
			leftColumnRef.style.transform = `skewY(${clamp(distance, -10, 10)}deg)`;
			rightColumnRef.style.transform = `skewY(${clamp(distance, -10, 10)}deg)`;
			middleColumnRef.style.transform = `skewY(${clamp(-distance, -10, 10)}deg)`;
		});
		// Preload images
		Promise.all([preloadImages('.grid-item-media')]).then(() => {
			scrollElement.update();
		});
		// scrollElement.update();
		*/
	})
</script>

<div class="scroll-wrapper" data-scroll-container bind:this="{reference}">
	<main>
		<Header />
		{#if false}
			<WorkInProgress />
		{:else}
			<!-- Qui vedrai le varie pagine del sito -->
			<slot />
		{/if}
	</main>
</div>