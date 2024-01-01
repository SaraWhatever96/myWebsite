<script lang="ts">
	import { cn } from "$lib/utils";

  export let tag: 'h1' | 'h2'| 'h3' | 'h4' | 'h5' | 'h6';
  export let color: string = 'text-gray-900 dark:text-white';
  export let font: 'default' | 'nunito' = 'default';
  export let customSize: string = '';

  const textSizes = {
    h1: 'text-4xl font-extrabold',
    h2: 'text-3xl font-bold',
    h3: 'text-2xl font-bold',
    h4: 'text-xl font-bold',
    h5: 'text-lg font-bold',
    h6: 'text-base font-bold'
  };

  const fontTypes = {
    default: '',
    
  }
</script>


<svelte:element this={tag} {...$$restProps} class={cn(customSize ? customSize : textSizes[tag], color, 'w-full scroll-mt-20 tracking-tight', $$props.class)}>
  <slot />
</svelte:element>