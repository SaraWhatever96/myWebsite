<script lang="ts">
	import { cn } from "$lib/utils";

	let className: string | undefined | null = undefined;
	export { className as class };
</script>

<h2
	class={cn(
		"scroll-m-20 pb-2 text-[2rem] leading-8 font-bold tracking-tight text-primary",
		className
	)}
	{...$$restProps}
>
	<slot />
</h2>
