<script lang="ts">
  import { cn } from "$lib/utils";


  let className: string | undefined | null = undefined;
	export { className as class };
</script>

<ul class={cn("grid grid-cols-1 md:grid-cols-2 divide-y divide-border", className)} {...$$restProps}>
  <slot />
</ul>