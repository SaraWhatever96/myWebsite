<script lang="ts">
	import { browser } from '$app/env';
	import lottie from 'lottie-web';
	import { onDestroy, onMount } from 'svelte';
	import { fly } from 'svelte/transition';
  import { cubicOut } from 'svelte/easing';


	let clazz;
	export { clazz as class };

	export let path: string;
	export let animateEnteringViewport: boolean = false;
	export let delay: number = 600;
  export let duration: number = 700;
  export let easing: any = cubicOut;
  export let y: number = 50;

	let animationContainer;
	let lottieAnimation;

	const flyOnCondition = (node, args) => {
		if (animateEnteringViewport) {
			return fly(node, args);
		}
	}

	if (browser) {
		onMount(() => {
			lottieAnimation = lottie.loadAnimation({
				container: animationContainer,
				renderer: 'svg',
				loop: true,
				autoplay: true,
				path
			});
		});
	}

	onDestroy(() => {
		if (lottieAnimation) {
			lottieAnimation.destroy();
		}
	})
</script>

<div class="{clazz || ''}" in:flyOnCondition={{ delay, duration, easing, y }}>
	<!-- Lottie animation -->
	<div bind:this={animationContainer} id="lottiePlayer-[{path}]" class="w-full" />
</div>
