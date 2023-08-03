<script lang="ts">
	import AspectRatio from "../aspect-ratio/AspectRatio.svelte";

  export let photos: string[] = [];
  export let ratio: number = 1 / 1;

  let scrollableEl: any;
  let imgInViewportPosition = 0;

  function handleScroll() {
		imgInViewportPosition = scrollableEl ? Math.round(scrollableEl.scrollLeft / window.innerWidth) : 0;
  }
</script>

<div bind:this={scrollableEl} on:scroll={handleScroll} class="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar">
  {#each photos as src}
    <AspectRatio {ratio} class="snap-start snap-always scroll-pl-6" style="flex: 0 0 100vw;">
      <img {src} alt="" class="h-full mx-auto" />
    </AspectRatio>
  {/each}
</div>

<div class="flex mt-6 justify-center space-x-3">
  {#each photos as _, index (index)}
    <div class:bg-foreground={imgInViewportPosition === index} class="h-4 w-4 rounded-full border-2 border-foreground transition-colors"></div>
  {/each}
</div>

<style>
  /* Hide scrollbar for Chrome, Safari and Opera */
  .hide-scrollbar::-webkit-scrollbar {
    display: none;
  }

  /* Hide scrollbar for IE, Edge and Firefox */
  .hide-scrollbar {
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
  }
</style>