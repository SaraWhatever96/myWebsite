<script lang="ts">
	import { browser } from '$app/env';
	import lottie from 'lottie-web';
	import { onDestroy, onMount } from 'svelte';
	import { fly } from 'svelte/transition';
  import { cubicOut } from 'svelte/easing';


	export let path: string;
	export let delay: number = 600;
  export let duration: number = 700;
  export let easing: any = cubicOut;
  export let y: number = 50;

	let animationContainer;
	let lottieAnimation;

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

<div in:fly={{ delay, duration, easing, y }}>
	<!-- Lottie animation -->
	<div bind:this={animationContainer} id="lottiePlayer-[{path}]" class="w-full" />
</div>
