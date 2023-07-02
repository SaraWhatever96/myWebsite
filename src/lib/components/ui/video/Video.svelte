<script lang="ts">
	import { onMount } from 'svelte';
  import { inview, type Options } from 'svelte-inview';

  let className: string | undefined | null = undefined;
	export { className as class };
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
  id="{name}-video"
  class="{className}"
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