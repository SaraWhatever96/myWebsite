<script lang="ts">
	import AspectRatio from "../aspect-ratio/AspectRatio.svelte";

  export let photos: string[] = [];
  export let ratio: number = 1 / 1;
</script>

<div class="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar">
  {#each photos as src}
    <AspectRatio {ratio} class="snap-start snap-always scroll-pl-6" style="flex: 0 0 100vw;">
      <img {src} alt="" class="h-full mx-auto" />
    </AspectRatio>
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