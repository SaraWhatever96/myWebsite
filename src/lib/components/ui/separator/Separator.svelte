<script lang="ts">
	import { createSeparator } from "@melt-ui/svelte";

	let className: string | undefined | null = undefined;
	export { className as class };

	const { root: horizontalSeparator } = createSeparator({
		orientation: 'horizontal',
		decorative: true,
	});
</script>

<div {...$horizontalSeparator} class="flex-shrink-0 h-[1px] w-full bg-border" />