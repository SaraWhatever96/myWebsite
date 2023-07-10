<script lang="ts">
	import { onMount, createEventDispatcher } from 'svelte';
  import { browser } from '$app/environment';
  import lottie from 'lottie-web';

  export let color: 'blue' | 'pink' | 'gold';

  const dispatch = createEventDispatcher();
  let animationContainer: any;
  let lottieAnimation: any;
  let isButtonDisabled = false;
  let totalFrames: number = 182;
  let sealOutOfWaterFrame: number = 75;


  if (browser) {
    onMount(() => {
      lottieAnimation = lottie.loadAnimation({
				container: animationContainer,
				renderer: 'svg',
				loop: false,
				autoplay: false,
				path: `/animations/seal-${color}.json`
			});

      // Small hack to make it work, do not remove!
      lottieAnimation.goToAndStop(totalFrames, true);

      runFirstHalf();
    })
  }

  function runFirstHalf(): void {
    lottieAnimation.playSegments([0, sealOutOfWaterFrame], false);
  }

  function runSecondHalf(): void {
    if (!isButtonDisabled) {
      disableBtnForAnimation();
      lottieAnimation.playSegments([sealOutOfWaterFrame, totalFrames], true);

      // Wait for the animation to finish, then update it's position
      setTimeout(() => {
        updateSealPosition();
      }, 2000);

      // Wait and run the animation again
      setTimeout(() => {
        runFirstHalf();
      }, 3300);
    }
  }

  function disableBtnForAnimation(): void {
    isButtonDisabled = true;
    setTimeout(() => {
      isButtonDisabled = false;
    }, 3000);
  }

  function updateSealPosition(): void {
    dispatch('updateSealPosition', { color });
  }
</script>

<button
  on:click={runSecondHalf}
  disabled={isButtonDisabled}
  aria-label="Seal Animation ({color})"
>
  <span class="sr-only">{color} seal animation</span>
  <div bind:this={animationContainer} id="lottiePlayer-seal-{color}" class="w-20 h-20 md:w-24 md:h-24" />
</button>
