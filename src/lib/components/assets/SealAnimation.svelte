<script lang="ts">
  import { browser } from '$app/environment';
  import lottie from 'lottie-web';
	import { createEventDispatcher, onMount } from 'svelte';

  export let color: 'blue' | 'pink';
  export let coords: { x: number, y: number }; // Coordinates of the seals

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
    dispatch('updateSealPosition');
  }
</script>

<button
  on:click={runSecondHalf}
  class="absolute w-28 h-w-28 {color === 'pink' && 'scale-x-[-1]'}"
  disabled={isButtonDisabled}
  style="right: {coords?.x || 0}px; top: {coords?.y || 0}px"
>
  <div bind:this={animationContainer} id="lottiePlayer-seal-{color}" class="w-full" />
</button>
