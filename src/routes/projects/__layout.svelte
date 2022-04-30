<script lang="ts">


</script>



<div class="max-w-7xl mx-auto pt-20 sm:px-6 lg:px-8">
  <!-- Title -->
  <div class="">
    <div class="h-full flex flex-col justify-center">
      <div class="text-center w-full">
        <h1 class="text-5xl font-bold text-slate-900 dark:text-white transition-colors duration-150 ease-in-out">Projects</h1>
      </div>
    </div>
  </div>
  <!-- Categories -->
  <div class="flex flex-row px-5 lg:px-0">
    <a sveltekit:prefetch href="/projects/motion-graphic" class="text-xl pt-20 pr-4 font-bold text-slate-500 dark:text-white transition-colors duration-150 ease-in-out">
      Motion Graphic
    </a>
    <a sveltekit:prefetch href="/projects/ui-ux" class="text-xl pt-20  text-slate-500 dark:text-white transition-colors duration-150 ease-in-out">

      UI & UX
    </a>
  </div>

  <!-- Al posto di 'slot' verranno sostituite le pagine 'motion-graphic' e 'ui-ux' -->
  <slot />

</div>