<script lang="ts">
	import { cn } from "$lib/utils";

	let className: string | undefined | null = undefined;
	export { className as class };
</script>

<h2
	class={cn(
		"scroll-m-20 pb-4 text-4xl font-bold tracking-tight text-primary",
		className
	)}
	{...$$restProps}
>
	<slot />
</h2>
