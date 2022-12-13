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


<div class="h-full flex justify-start items-end bg-gradient-to-r from-[#BBDDF4] via-[#FFE7D0] to-[#F2E0DE] dark:bg-slate-800 rounded-xl">
  <div class="dark:border-white dark:border-b-2 dark:border-x-2 h-1/6 bg-slate-900 w-full rounded-b-xl text-left flex items-center">
    <svg class="hidden sm:block sm:w-9 sm:h-9 md:w-16 md:h-16 lg:w-20 lg:h-20 sm:mx-2" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" xmlns="http://www.w3.org/2000/svg">
      <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      <path stroke-linecap="round" stroke-linejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
    </svg>
    <h1 class="px-2 sm:px-0 md:px-2 text-white text-2xl md:text-4xl lg:text-5xl font-semibold font-title">
      <span class="text"></span>
      <span class="cursor text-amber-500 dark:text-amber-400">_</span>
    </h1>
  </div>

</div>