<script lang="ts">
  import { cn } from "$lib/utils";
	import { Icons } from "./icons";

  let className: string | undefined | null = undefined;
	export { className as class };
  export let twTopLeftCornerColor: string = 'text-foreground';
  export let twBottomLeftCornerColor: string = 'text-foreground';
  export let twTopRightCornerColor: string = 'text-foreground';
  export let twBottomRightCornerColor: string = 'text-foreground';
  /*
    Animations explanation:
    img-hover-zoom: animates the chevron icons and zooms-in the image
    img-hover-scroll: animates the chevron icons and scrolls the image
  */
  export let animation: 'img-hover-zoom' | 'img-hover-scroll' = 'img-hover-zoom';
</script>


<div class={cn("relative group overflow-hidden", className, animation)}>
  <Icons.chevronLeft class="absolute z-10 w-14 h-14 rotate-45 top-0 left-0 group-hover:top-2 group-hover:left-2 transition-all duration-500 {twTopLeftCornerColor}" />
  <Icons.chevronUp class="absolute z-10 w-14 h-14 rotate-45 top-0 right-0 group-hover:top-2 group-hover:right-2 transition-all duration-500 {twTopRightCornerColor}" />
  <Icons.chevronDown class="absolute z-10 w-14 h-14 rotate-45 bottom-0 left-0 group-hover:bottom-2 group-hover:left-2 transition-all duration-500 {twBottomLeftCornerColor}" />
  <Icons.chevronRight class="absolute z-10 w-14 h-14 rotate-45 bottom-0 right-0 group-hover:bottom-2 group-hover:right-2 transition-all duration-500 {twBottomRightCornerColor}" />

  <slot />
</div>
