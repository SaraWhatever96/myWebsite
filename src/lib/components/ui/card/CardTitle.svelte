<script lang="ts">
	import { cn } from "$lib/utils";

	let className: string | undefined | null = undefined;
	export { className as class };

	export let tag: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" = "h3";
</script>

<svelte:element
	this={tag}
	class={cn("text-2xl font-semibold tracking-tight mb-4 md:text-3xl", className)}
	{...$$restProps}
>
	<slot />
</svelte:element>
