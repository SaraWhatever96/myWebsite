<script lang="ts">
  import { browser } from '$app/environment';
  import lottie from 'lottie-web';
	import { onMount } from 'svelte';
	import GreenWave from './GreenWave.svelte';
	import BlueWave from './BlueWave.svelte';
	import RoseWave from './RoseWave.svelte';


  let animationContainer: any;

  if (browser) {
    onMount(() => {
      // lottie.loadAnimation({
			// 	container: animationContainer,
			// 	renderer: 'svg',
			// 	loop: true,
			// 	autoplay: true,
			// 	path: `/animations/waves.json`
			// });
    })
  }
</script>

<!--
  <div class="absolute h-[600px]">
    <div bind:this={animationContainer} id="lottiePlayer-waves" class="w-full" />
  </div>
-->

<GreenWave className="absolute will-change-transform h-[1800px] animate-green-wave -translate-x-44" />
<BlueWave className="absolute will-change-transform h-[1800px] animate-blue-wave -translate-x-12" />
<RoseWave className="absolute will-change-transform h-[1800px] animate-rose-wave" />
