<script lang="ts">
  import { cn } from "$lib/utils";

  let className: string | undefined | null = undefined;
	export { className as class };
</script>

<li class={cn("py-6 sm:py-8", className)} {...$$restProps}>
  <slot />
</li>