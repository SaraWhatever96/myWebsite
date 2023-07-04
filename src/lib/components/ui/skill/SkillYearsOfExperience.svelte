<script lang="ts">
  import { cn } from "$lib/utils";

  let className: string | undefined | null = undefined;
	export { className as class };
</script>

<p class={cn("text-xl font-semibold", className)} {...$$restProps}>
  <slot />
</p>