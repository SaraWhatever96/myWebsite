<script lang="ts">
	import { cn } from "$lib/utils";

	let className: string | undefined | null = undefined;
	export { className as class };
	export let variant: 'default' | 'project-page' = 'default';
</script>

<h1
	class={cn(`scroll-m-20 ${variant === 'default' ? 'text-5xl leading-[3.5rem]' : 'text-3xl md:text-4xl md:leading-tight'} font-bold text-primary tracking-tight`, className)}
	{...$$restProps}
>
	<slot />
</h1>
