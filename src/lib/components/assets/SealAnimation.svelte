<script lang="ts">
  import { browser } from '$app/environment';
  import lottie from 'lottie-web';
	import { onMount } from 'svelte';

  export let color: 'blue' | 'rose';

  let animationContainer: any;
  let lottieAnimation: any;
  let state: 'play' | 'stop' = 'stop';


  if (browser) {
    onMount(() => {
      lottieAnimation = lottie.loadAnimation({
				container: animationContainer,
				renderer: 'svg',
				loop: true,
				autoplay: true,
				path: `/animations/seal-blue.json`
			});

      lottieAnimation.onComplete = () => {
				console.log('animation complete');
				state = 'stop';
        // TODO: here we have to move the seal to another position (randomly?)
			};
    })
  }

  function playAnimation() {
		if (state !== 'play') {
			lottieAnimation.playSegments([0, lottieAnimation.totalFrames], true);
			state = 'play';
		}
	}
</script>


<div class="absolute w-28 h-w-28 {color === 'blue' ? 'top-36 left-96' : 'top-96 left-72 scale-x-[-1]'}">
  <div bind:this={animationContainer} id="lottiePlayer-seal-{color}" class="w-full" />
</div>
