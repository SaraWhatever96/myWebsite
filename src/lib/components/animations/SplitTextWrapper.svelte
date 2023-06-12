<script lang="ts">
	import { onMount } from "svelte";
  import { animate, stagger, inView } from 'motion';
  import SplitType from 'split-type';

  export let type: 'lines' | 'words';
  export let target: string | HTMLElement | HTMLElement[];
  export let duration: number = 0.8;
  export let y: number[] = [24, 0];
  export let opacity: number[] = [0, 1];
  export let staggerDelay: number = 0.075;
  export let amount: number = 0.75;


  onMount(() => {
    const paragraph: SplitType = new SplitType(target, { types: type });

		inView(
      target,
      (info) => {
        info.target.classList.remove('opacity-0');
        animate(paragraph[type], { y, opacity }, { duration, delay: stagger(staggerDelay) });
      },
      { amount })
  })
</script>

<slot />