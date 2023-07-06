<script lang="ts">
  import { cn } from "$lib/utils";

  let className: string | undefined | null = undefined;
	export { className as class };
  export let size: 'lg' | 'sm' = 'lg';

  const wrapperVariants = {
    'lg': 'rounded-md p-2.5',
    'sm': 'rounded-sm p-2'
  }
</script>

<div class={cn("dark:bg-muted", wrapperVariants[size], className)} {...$$restProps}>
  <slot />
</div>