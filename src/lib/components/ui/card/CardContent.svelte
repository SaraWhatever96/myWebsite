<script lang="ts">
	import { cn } from "$lib/utils";

	let className: string | undefined | null = undefined;
	export { className as class };
</script>

<div class={cn("px-5 pb-6 pt-0 md:p-0", className)} {...$$restProps}>
	<slot />
</div>
