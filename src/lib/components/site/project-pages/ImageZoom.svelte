<script lang="ts">
	import { superzoomImgSrc } from "$lib/stores";
	import { onDestroy, onMount } from "svelte";

  let superzoomImg: HTMLImageElement | null;
  let superzoomBtn: HTMLButtonElement | null;
  let moving = false;

  onMount(() => {
    document.body.style.overflow = 'hidden'; // disable body overflow
  });

	function onMouseDown() {
		moving = true;
	}

	function onMouseMove(e: MouseEvent) {
		if (moving) {
      superzoomBtn!.style.transform = `translate3d(${e.movementX}px, ${e.movementY}px, 0px)`;
		}
	}

	function onMouseUp() {
		moving = false;
	}

  function handleMouseMove(e: MouseEvent) {
    if (window.innerWidth < 768) return;

    const y = e.clientY;

    let maxY = superzoomImg!.offsetHeight - window.innerHeight;
    let top = Math.max(-y * (maxY / window.innerHeight), -maxY);

    superzoomBtn!.style.top = top + 'px';
  }

  function handleTouchMove(e: TouchEvent) {
    if (window.innerWidth < 768) return;

    const x = e.touches[0].clientX;
    const y = e.touches[0].clientY;

    let maxY = superzoomBtn!.offsetHeight * 1.3 - window.innerHeight;
    let maxX = superzoomBtn!.offsetWidth * 1.3 - window.innerWidth;

    let left = Math.max(-x, -maxX);
    let top = Math.max(-y, -maxY);

    superzoomBtn!.style.transform = `translate3d(${left}px, ${top}px, 0px)`;
  }

  function exitSuperzoom() {
    superzoomImgSrc.set('');
  }

  onDestroy(() => {
    document.body.style.overflow = 'auto'; // reset body overflow
  });
</script>

<svelte:window on:mouseup={onMouseUp} on:mousemove={onMouseMove} />

<aside class="fixed h-full w-full top-0 overflow-hidden touch-none z-[500] md:left-0">
  <button
    class="absolute w-full h-full max-md:scale-150 md:h-auto"
    bind:this={superzoomBtn}
    on:click={exitSuperzoom}
    on:mousedown={onMouseDown}
    on:mousemove|preventDefault={handleMouseMove}
    on:touchmove|preventDefault={handleTouchMove}
    data-action="exit-superzoom"
  >
    <div class="relative h-full">
      <div class="relative my-0 max-md:h-full mx-auto md:pb-[150%]">
        <img class="absolute w-full max-md:h-full top-0 left-0 object-cover" bind:this={superzoomImg}  src="{$superzoomImgSrc}" alt="">
      </div>
    </div>
  </button>
</aside>