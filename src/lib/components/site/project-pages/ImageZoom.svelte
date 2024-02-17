<script lang="ts">
  import { onDestroy, onMount } from "svelte";
  import { superzoomImgSrc } from "$lib/stores";
  import { Icons } from "$lib/components/site/icons"
  import Button from "$components/ui/button/Button.svelte";

  let superzoomImg: HTMLImageElement | null;
  let superzoomBtn: HTMLButtonElement | null;
  let startX: number = 0;
  let startY: number = 0;
  let offsetX: number = 0;
  let offsetY: number = 0;
  let moving = false;
  let zoomed = false;

  onMount(() => {
    document.body.style.overflow = 'hidden'; // disable body overflow
  });

  function onPointerDown(e: MouseEvent | TouchEvent) {
    moving = true;

    // Get the current position of the image
    let superzoombtnStyles = getComputedStyle(superzoomBtn!);
    const transformMatrix = new DOMMatrix(superzoombtnStyles.transform);

    const currentTranslateX = transformMatrix.m41;
    const currentTranslateY = transformMatrix.m42;

    startX = ('touches' in e ? e.touches[0].clientX : e.clientX) - currentTranslateX;
    startY = ('touches' in e ? e.touches[0].clientY : e.clientY) - currentTranslateY;

    // Check if the image is not zoomed, and then zoom it
    if (!zoomed) {
      zoomed = true;
    }
  }

  function onPointerUp(e: MouseEvent | TouchEvent) {
    moving = false;
  }

  function onPointerMove(e: MouseEvent | TouchEvent) {
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;

    if (window.innerWidth < 768) {
      // Mobile version: move the image within the viewport. The image is zoomed by 1.5
      if (moving) {
        offsetX = clientX - startX;
        offsetY = clientY - startY;

        // Limit the offsetX and offsetY to keep the image within the viewport
        const maxX = Math.abs((window.innerWidth - superzoomBtn!.offsetWidth * 1.5) / 2);
        const maxY = Math.abs((window.innerHeight - superzoomBtn!.offsetHeight * 1.5) / 2);

        if (offsetX > maxX) offsetX = maxX;
        else if (offsetX < -maxX) offsetX = -maxX;

        if (offsetY > maxY) offsetY = maxY;
        else if (offsetY < -maxY) offsetY = -maxY;

        superzoomBtn!.style.transform = `translate3d(${offsetX}px, ${offsetY}px, 0px) scale(1.5)`;
      }
    } else {
      // Desktop version: move the image vertically
      const y = clientY;
      let maxY = superzoomImg!.offsetHeight - window.innerHeight;
      let top = Math.max(-y * (maxY / window.innerHeight), -maxY);
      superzoomBtn!.style.top = top + 'px';
    }
  }

  function exitSuperzoom() {
    superzoomImgSrc.set('');
  }

  onDestroy(() => {
    document.body.style.overflow = 'auto'; // reset body overflow
  });
</script>

<aside class="fixed h-full w-full top-0 overflow-hidden touch-none z-[500] md:left-0">
  <button
    class="absolute w-full h-full max-md:scale-150 md:h-auto"
    bind:this={superzoomBtn}
    on:mousedown={onPointerDown}
    on:mouseup={onPointerUp}
    on:mousemove|preventDefault={onPointerMove}
    on:touchstart={onPointerDown}
    on:touchend={onPointerUp}
    on:touchmove|preventDefault={onPointerMove}
    data-action="exit-superzoom"
  >
    <div class="relative h-full">
      <div class="relative my-0 max-md:h-full mx-auto md:pb-[150%]">
        <img class="absolute w-full max-md:h-full {!moving && 'top-0 left-0'} object-cover" bind:this={superzoomImg} src="{$superzoomImgSrc}" alt="">
      </div>
    </div>
  </button>

  <!-- TODO qui mettere un bottone in posizion absolute contente una x per chiudere lo zoom sull'immagine -->
  <Button class="absolute top-4 left-4" on:click={exitSuperzoom} variant="link">
    <Icons.x class="w-8 h-8" />
  </Button>
</aside>
