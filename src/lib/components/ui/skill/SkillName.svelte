<script lang="ts">
  import { cn } from "$lib/utils";

  let className: string | undefined | null = undefined;
	export { className as class };
</script>

<h3 class={cn("text-2xl font-bold", className)}>
  <slot />
</h3>