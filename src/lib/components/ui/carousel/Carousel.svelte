<script lang="ts">
	import { fade } from "svelte/transition";
	import AspectRatio from "../aspect-ratio/AspectRatio.svelte";

  export let photos: string[] = [];
  export let ratio: number = 1 / 1;

  let index = 0;
  const nextPhoto = () => {
		index = (index + 1) % photos.length;
	}
</script>

<div class="flex overflow-x-auto snap-x snap-mandatory">
  <div class="relative snap-start snap-always scroll-pl-6 bg-red-200" style="padding-bottom: 100%; flex: 0 0 100vw"></div>
  <div class="relative snap-start snap-always scroll-pl-6 bg-red-300" style="padding-bottom: 100%; flex: 0 0 100vw"></div>
  <div class="relative snap-start snap-always scroll-pl-6 bg-red-400" style="padding-bottom: 100%; flex: 0 0 100vw"></div>
  <div class="relative snap-start snap-always scroll-pl-6 bg-red-500" style="padding-bottom: 100%; flex: 0 0 100vw"></div>
  <div class="relative snap-start snap-always scroll-pl-6 bg-red-600" style="padding-bottom: 100%; flex: 0 0 100vw"></div>
  <!-- {#each photos as src (index)}
    <AspectRatio {ratio} class="snap-start snap-always scroll-pl-6 w-screen">
      <img transition:fade {src} alt="" class="h-full w-full" />
    </AspectRatio>
  {/each} -->
</div>

<!-- <button on:click={nextPhoto} aria-label="Show next photo">Next</button> -->