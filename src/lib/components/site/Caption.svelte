<script lang="ts">
	import { Icons } from "./icons";

  let className: string | undefined | null = undefined;
	export { className as class };
  export let text: string;
</script>

<div class="mt-3 flex w-full justify-center text-sm" {...$$restProps}>
  {text}
  <Icons.handTap class="h-4 w-4 ml-2" />
</div>