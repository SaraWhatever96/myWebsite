<script lang="ts">
	import { onMount } from 'svelte';
  import { inview, type Options } from 'svelte-inview';

  export let name: string;

  let viewportWidth: number;
  let paused: boolean = true;
  let video: HTMLMediaElement;
  const options: Options = {
    rootMargin: '50px',
    unobserveOnEnter: false,
  };

  onMount(() => {
    video.load();
  })
</script>

<svelte:window bind:innerWidth={viewportWidth}/>

<video
  bind:this={video}
  class="absolute inset-0"
  id="{name}-video"
  use:inview={options}
  on:inview_enter={() => paused = false}
  on:inview_leave={() => paused = true}
  bind:paused
  autoplay="{false}"
  preload="none"
  muted
  playsinline
  loop
  width="100%"
  height="100%"
  aria-label="Animation {name}"
  poster="/video/{name}.webp"
  src="/video/{name}{viewportWidth && viewportWidth < 768 ? '-mobile' : ''}.mp4"
/>