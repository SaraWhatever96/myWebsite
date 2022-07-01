<script lang="ts">
  export let category: string;
</script>


<div class="max-w-7xl mx-auto pt-8 md:pt-12 lg:pt-14 px-6 lg:px-8">

  <!-- Categories -->
  <div class="flex justify-center max-w-lg mx-auto">
    <nav class="grid grid-cols-2 pb-8 w-full" aria-label="Tabs">
      <!-- Current: "bg-gray-100 text-gray-700", Default: "text-gray-500 hover:text-gray-700" -->
      <a sveltekit:prefetch href="/projects/motion-design" class="{category === 'motion-design' ? 'bg-amber-200' : 'bg-amber-100'} flex justify-center py-2 px-4 rounded-l-lg items-center text-xl font-medium text-amber-600 dark:text-white transition-colors duration-150 ease-in-out">Motion Design</a>
      <a sveltekit:prefetch href="/projects/ui-ux" class="{category === 'ui-ux' ? 'bg-amber-200' : 'bg-amber-100'} flex justify-center py-2 px-4 rounded-r-lg items-center text-xl font-medium text-amber-600 dark:text-white transition-colors duration-150 ease-in-out">UI & UX</a>
    </nav>
  </div>

  <!-- Al posto di 'slot' verranno sostituite le pagine 'motion-design' e 'ui-ux' -->
  <div class="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-6">
    <slot />
  </div>

</div>


