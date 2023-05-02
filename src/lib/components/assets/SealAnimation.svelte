<script lang="ts">
  import { browser } from '$app/environment';
  import lottie from 'lottie-web';
	import { onMount } from 'svelte';

  export let color: 'blue' | 'pink';
  export let coords: number[][]; // Coordinates of the seals

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
      }, 1650)

      // Wait and run the animation again
      setTimeout(() => {
        runFirstHalf();
      }, 3000);
    }
  }

  function disableBtnForAnimation(): void {
    isButtonDisabled = true;
    setTimeout(() => {
      isButtonDisabled = false;
    }, 3000);
  }

  function updateSealPosition(): void {
    // read from an array (?) and get the new coordinates
  }
</script>


<button on:click={runSecondHalf} class="absolute w-28 h-w-28 {color === 'blue' ? 'top-36 left-96' : 'top-96 left-72 scale-x-[-1]'}" disabled={isButtonDisabled}>
  <div bind:this={animationContainer} id="lottiePlayer-seal-{color}" class="w-full" />
</button>


