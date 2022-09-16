<script lang="ts">
  import { onMount } from "svelte";

  let element;
  let elBounds;
  let glowEffect;

  onMount(() => {
    elBounds = element.getBoundingClientRect();
  });

  function rotateToMouse(event) {
    const mouseX = event.clientX;
    const mouseY = event.clientY;
    const leftX = mouseX - elBounds.x;
    const topY = mouseY - elBounds.y;
    const center = {
      x: leftX - elBounds.width / 2,
      y: topY - elBounds.height / 2
    }
    const distance = Math.sqrt(center.x**2 + center.y**2);
    
    element.style.transform = `
      rotate3d(
        ${center.y / 100},
        ${-center.x / 100},
        0,
        ${Math.log(distance)* 2}deg
      )
    `;
    
    glowEffect.style.backgroundImage = `
      radial-gradient(
        circle at
        ${center.x * 2 + elBounds.width/2}px
        ${center.y * 2 + elBounds.height/2}px,
        #ffffff55,
        #0000000f
      )
    `;
  }

  function handleMouseLeave() {
    element.style.transform = '';
    element.style.background = '';
  }
</script>

<style>
  .glow {
    background-image: radial-gradient(circle at 50% -20%, #ffffff22, #0000000f);
  }
</style>

<div class="relative transition-all duration-300 ease-out transform-gpu hover:duration-150"
  bind:this="{element}"
  on:mousemove="{rotateToMouse}"
  on:mouseleave="{handleMouseLeave}"
>
  <div class="z-50 absolute w-full h-full left-0 top-0 glow" bind:this="{glowEffect}"></div>
  <slot />
</div>