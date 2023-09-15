<script lang="ts">
	import { cn } from "$lib/utils";

	let className: string | undefined | null = undefined;
	export { className as class };

	export let tag: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" = "h3";
</script>

<svelte:element
	this={tag}
	class={cn("text-xl font-semibold tracking-tight md:font-bold md:text-2xl", className)}
	{...$$restProps}
>
	<slot />
</svelte:element>
