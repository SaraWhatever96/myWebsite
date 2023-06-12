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
  poster="https://images.unsplash.com/photo-1508515053963-70c7cc39dfb5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1760&q=80"
  src="/video/{name}{viewportWidth && viewportWidth < 768 ? '-mobile' : ''}.mp4"
/>