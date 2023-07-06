<script lang="ts">
	import { cn } from "$lib/utils";

	let className: string | undefined | null = undefined;
	export { className as class };
</script>

<h1
	class={cn("scroll-m-20 text-5xl font-bold text-primary tracking-tight leading-[3.5rem]", className)}
	{...$$restProps}
>
	<slot />
</h1>
