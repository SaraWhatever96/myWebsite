<script lang="ts">
	import { browser } from "$app/environment";
	import { onMount } from "svelte";
  import lottie from 'lottie-web';


  export let animationName: string;
  let animationContainer: any;
  let lottieAnimation: any;

  if (browser) {
    onMount(() => {
      lottieAnimation = lottie.loadAnimation({
				container: animationContainer,
				renderer: 'svg',
				loop: true,
				autoplay: true,
				path: `/animations/${animationName}.json`
			});
    })
  }
</script>

<div bind:this={animationContainer} id="lottiePlayer-{animationName}" class="w-full" />


