<script lang="ts">
	import { browser } from "$app/environment";
	import { onMount } from "svelte";
  import lottie from 'lottie-web';
  import { inview, type Options } from 'svelte-inview';


  export let animationName: string;
  let animationContainer: any;
  let lottieAnimation: any;
  const options: Options = {
    rootMargin: '50px',
    unobserveOnEnter: false,
  };

  if (browser) {
    onMount(() => {
      lottieAnimation = lottie.loadAnimation({
				container: animationContainer,
				renderer: 'svg',
				loop: true,
				autoplay: false,
				path: `/animations/${animationName}.json`
			});
    })
  }
</script>

<div
  bind:this={animationContainer}
  use:inview={options}
  on:inview_enter={() => lottieAnimation.play()}
  on:inview_leave={() => lottieAnimation.pause()}
  id="lottiePlayer-{animationName}"
  class="w-full"
/>


