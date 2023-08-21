<script lang="ts">
	import { cn } from "$lib/utils";
	import { onMount } from "svelte";
  import lottie from 'lottie-web';


  let className: string | undefined | null = undefined;
	export { className as class };
  export let jsonAnimationName: string;
  let animationContainer: any;

  onMount(() => {
    lottie.loadAnimation({
      container: animationContainer,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: `/animations/dentist-vierin/${jsonAnimationName}.json`
    });
  })
</script>

<div class="bg-white rounded-md border-2 border-slate-700 w-[100px] md:w-[80px] lg:w-[100px]">
  <div bind:this={animationContainer} id="lottiePlayer-{jsonAnimationName}" class={cn("w-full", className)} />
</div>