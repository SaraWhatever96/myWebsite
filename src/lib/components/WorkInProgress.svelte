<script lang="ts">
  import { onMount } from "svelte";
  import { gsap }  from "gsap/dist/gsap.js";
  import { TextPlugin } from "gsap/dist/TextPlugin.js";

  onMount(() => {
    gsap.registerPlugin(TextPlugin);

    gsap.to('.cursor', {
      opacity: 0,
      duration: 0.6,
      ease: "power2.inOut",
      repeat: -1
    });

    let repeatInfiniteTl = gsap.timeline({
      repeat: -1
    });

    let textAnimationTl = gsap.timeline({
      delay: 1,
      repeat: 1,
      yoyo: true,
      repeatDelay: 2
    });

    textAnimationTl.to('.text', {
      duration: 1,
      text: 'Work in progress'
    });

    repeatInfiniteTl.add(textAnimationTl)
  })

</script>


<div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
  <div class="h-[calc(100vh-200px)] md:h-[calc(100vh-68px)] flex justify-center items-center">
    <h1 class="text-slate-500 dark:text-slate-50 text-3xl md:text-5xl font-bold">
      <span class="text"></span>
      <span class="cursor">_</span>
    </h1>
  </div>
</div>