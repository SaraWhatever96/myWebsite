<script lang="ts">
  export let category: string;
</script>


<div class="max-w-7xl mx-auto pt-8 md:pt-12 lg:pt-14 px-6 lg:px-8">

  <!-- Categories -->
  <div class="flex justify-center max-w-lg mx-auto mb-8">
    <div class="text-slate-600 dark:text-slate-100 bg-slate-200 dark:bg-slate-800 rounded-full w-full">
      <nav class="grid grid-cols-2 w-full p-1.5" aria-label="Tabs">
        <a sveltekit:prefetch href="/projects/motion-design" class="{category === 'motion-design' ? 'bg-white dark:bg-slate-700 shadow dark:shadow-none' : ''} py-1.5 px-4 rounded-full w-full flex justify-center transition duration-150 ease-in-out">
          Motion Design
        </a>
        <a sveltekit:prefetch href="/projects/ui-ux" class=" {category === 'ui-ux' ? 'bg-white dark:bg-slate-700 shadow dark:shadow-none' : ''} py-1.5 px-4 rounded-full w-full flex justify-center transition duration-150 ease-in-out">
          <div class="">
            UI & UX
          </div>
        </a>
      </nav>
    </div>
  </div>

  <!-- Al posto di 'slot' verranno sostituite le pagine 'motion-design' e 'ui-ux' -->
  <div class="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-6">
    <slot />
  </div>

</div>


