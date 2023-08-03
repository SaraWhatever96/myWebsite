<script lang="ts">
	import { cn } from "$lib/utils";

	let className: string | undefined | null = undefined;
	export { className as class };
	export let ratio = 1 / 1;
	export let style = '';
</script>

<div class={cn("relative w-full", className)} style="padding-bottom: {100 / ratio}%;{style}" {...$$restProps}>
	<div class="absolute inset-0">
		<slot />
	</div>
</div>
