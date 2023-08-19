<script lang="ts">
	import { cn } from "$lib/utils";
	import { Icons } from "./icons";

  let className: string | undefined | null = undefined;
	export { className as class };
  export let text: string;
</script>

<div class={cn("mt-3 flex w-full justify-center text-base", className)} {...$$restProps}>
  {text}
  <Icons.handTap class="h-5 w-5 ml-2" />
</div>