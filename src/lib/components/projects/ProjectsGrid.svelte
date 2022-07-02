<script lang="ts">
  export let category: string;
</script>


<div class="max-w-7xl mx-auto pt-8 md:pt-12 lg:pt-14 px-6 lg:px-8">

  <!-- Categories -->
  <div class="flex justify-center max-w-lg mx-auto">
    <nav class="grid grid-cols-2 pb-8 w-full" aria-label="Tabs">
      <a sveltekit:prefetch href="/projects/motion-design" class="bg-slate-200 flex justify-center p-1.5 rounded-l-full">
        <div class="{category === 'motion-design' ? 'bg-white shadow' : ''} py-1.5 px-4 rounded-full w-full flex justify-center">
          Motion Design
        </div>
      </a>
      <a sveltekit:prefetch href="/projects/ui-ux" class="bg-slate-200 flex justify-center p-1.5 rounded-r-full">
        <div class="{category === 'ui-ux' ? 'bg-white shadow' : ''} py-1.5 px-4 rounded-full w-full flex justify-center">
          UI & UX
        </div>
      </a>
    </nav>
  </div>

  <!-- Al posto di 'slot' verranno sostituite le pagine 'motion-design' e 'ui-ux' -->
  <div class="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-6">
    <slot />
  </div>

</div>


