<script lang="ts">
	import { cn } from "$lib/utils";
	import { createSeparator } from "@melt-ui/svelte";

	let className: string | undefined | null = undefined;
	export { className as class };

	const {
    elements: { root: horizontal },
  }  = createSeparator({
		orientation: 'horizontal',
		decorative: true,
	});
</script>

<div {...$horizontal} use:horizontal class={cn("flex-shrink-0 h-[2px] w-full bg-border", className)} />