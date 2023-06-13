<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { animate, stagger, inView } from 'motion';
	import SplitType from 'split-type';
	import debounce from 'lodash/debounce';

	export let type: 'lines' | 'words';
	export let target: string | HTMLElement | HTMLElement[];
	export let duration: number = 0.8;
	export let y: number[] = [24, 0];
	export let opacity: number[] = [0, 1];
	export let staggerDelay: number = 0.075;
	export let amount: number = 0.75;

	// Reference to the container element
	let containerElement: any;
	// Resizer observer
	let resizeObserver: ResizeObserver;
	// Stores the width of the container element
	let previousContainerWidth: number;
	// SplitType instance
	let instance: SplitType;

	onMount(() => {
		instance = new SplitType(target, { types: type });

		inView(
			target,
			(info) => {
				info.target.classList.remove('opacity-0');
				animate(instance[type]!, { y, opacity }, { duration, delay: stagger(staggerDelay) });
			},
			{ amount }
		);

		// If supported, create a resize observer for the container element
		if (window.ResizeObserver !== undefined) {
			resizeObserver = new ResizeObserver(debounce(handleResize, 100));
			resizeObserver.observe(containerElement);
		}
	});

	/*
	 * When text is split into lines, the text will not reflow naturally if the container is resized.
	 * When the container width changes, we need to re-split text.
	 */
	function handleResize(entry): void {
		let width: number = null;

		// Only proceed if we are splitting text into lines
		if (type === 'lines') {
			const [{ contentRect }] = entry;
			width = Math.floor(contentRect.width);
			// Only proceed if 1) previousContainerWidth has been set (this avoids
			// calling the split method when the resize observer is triggered on the
			// initial render) and 2) if the width of the container element has
			// changed.
			if (previousContainerWidth && previousContainerWidth !== width) {
				instance.split();
			}
		}

		// Store the width of the contentRect
		previousContainerWidth = width;
	}

	onDestroy(() => {
		instance && instance.revert();
		resizeObserver && resizeObserver.disconnect();
	});
</script>

<div bind:this={containerElement}>
	<slot />
</div>
