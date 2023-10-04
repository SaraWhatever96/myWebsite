<script lang="ts">
  import { cn } from "$lib/utils";

  let className: string | undefined | null = undefined;
	export { className as class };
</script>

<li class={cn("pb-12", className)} {...$$restProps}>
  <div class="w-14 h-3 rounded-full bg-black/5 shadow-md mb-3"></div>
  <slot />
</li>