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
      repeatDelay: 4
    });

    textAnimationTl.to('.text', {
      duration: 2,
      text: 'Showreel in progress'
    });

    repeatInfiniteTl.add(textAnimationTl)
  });
</script>


<div class="h-full flex justify-center items-center sm:px-6 lg:px-8 bg-pink-100 dark:bg-slate-800 rounded-xl">
  <h1 class="text-slate-700 dark:text-slate-50 text-3xl md:text-5xl font-medium font-title">
    <span class="text"></span>
    <span class="cursor text-amber-500 dark:text-amber-400">_</span>
  </h1>
</div>