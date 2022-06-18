<script lang="ts">
  export let category: string;
</script>


<div class="max-w-7xl mx-auto pt-20 sm:px-6 lg:px-8">
  <!-- Title -->
  <div>
    <div class="h-full flex flex-col justify-center">
      <div class="text-center w-full">
        <h1 class="text-5xl font-bold text-slate-900 dark:text-white transition-colors duration-150 ease-in-out">Projects</h1>
      </div>
    </div>
  </div>
  <!-- Categories -->
  <nav class="pt-20 px-5 lg:px-0 flex space-x-4" aria-label="Tabs">
    <!-- Current: "bg-gray-100 text-gray-700", Default: "text-gray-500 hover:text-gray-700" -->
    <a sveltekit:prefetch href="/projects/motion-graphic" class="{category === 'motion-graphic' ? 'bg-slate-100' : ''} px-3 py-2 rounded-md text-xl font-medium text-slate-500 dark:text-white transition-colors duration-150 ease-in-out">Motion Graphic</a>
    <a sveltekit:prefetch href="/projects/ui-ux" class="{category === 'ui-ux' ? 'bg-slate-100' : ''} px-3 py-2 rounded-md text-xl font-medium text-slate-500 dark:text-white transition-colors duration-150 ease-in-out">UI & UX</a>
  </nav>

  <!-- Al posto di 'slot' verranno sostituite le pagine 'motion-graphic' e 'ui-ux' -->
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-10 mb-20 mx-5 lg:mx-0">
    <slot />
  </div>

</div>


