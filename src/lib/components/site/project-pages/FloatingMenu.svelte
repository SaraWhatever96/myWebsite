<script lang="ts">
	import { Icons } from "$lib/components/site/icons";

  export let project: 'dentist-vierin' | 'dibarro'; //NOTE - Use to change text, border and bg color across projects
</script>


<div class="sticky top-4 z-50 -mb-[4.5rem] mt-6">
  <div class="w-full flex justify-center">
    <div class="relative w-full text-[#345556] sm:w-fit p-2.5 rounded backdrop-blur bg-gradient-to-t from-[#BEF2F4]/80 to-background/80 border-2 border-[#345556] supports-backdrop-blur:bg-white/60">
      <div class="grid grid-cols-4 gap-x-5">
        <a href="/dentist-vierin" class="col-span-1 flex font-bold items-center">
          <Icons.chevronLeft class="w-5 h-5 mr-1" />
          Prev
        </a>
        <a href="https://www.dibarro.com" class="col-span-2 flex font-bold items-center justify-center">
          <Icons.externalLink class="w-5 h-5 mr-1" />
          View website
        </a>
        <a href="/dentist-vierin" class="col-span-1 flex font-bold items-center">
          Next
          <Icons.chevronRight class="w-5 h-5 ml-1" />
        </a>
      </div>
    </div>
  </div>
</div>