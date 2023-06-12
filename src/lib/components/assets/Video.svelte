<script lang="ts">
  import { inview, type Options } from 'svelte-inview';

  export let name: string;

  let viewportWidth: number;
  let paused: boolean = true;
  const options: Options = {
    rootMargin: '50px',
    unobserveOnEnter: false,
  };
</script>

<svelte:window bind:innerWidth={viewportWidth}/>

<video
  class="absolute inset-0"
  id="{name}-video"
  use:inview={options}
  on:inview_enter={() => paused = false}
  on:inview_leave={() => paused = true}
  bind:paused
  autoplay
  muted
  playsinline
  loop
  aria-label="Animation {name}"
  src="/video/{name}{viewportWidth && viewportWidth < 768 ? '-mobile' : ''}.mp4"
/>