<script lang="ts">
  import { cn } from "$lib/utils";

  let className: string | undefined | null = undefined;
	export { className as class };
</script>

<div class={cn("max-w-7xl mx-auto px-6 lg:px-8", className)} {...$$restProps}>
  <slot />
</div>