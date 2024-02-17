<script lang="ts">
	import { Icons } from "$lib/components/site/icons";

  export let project: 'dentist-vierin' | 'dibarro'; //NOTE - Use to change text, border and bg color across projects
</script>


<div class="sticky top-0 z-50 -mb-8 mt-2 sm:top-4 sm:-mb-[4.5rem] sm:mt-6">
  <div class="w-full flex justify-center">
    <div class="relative w-full text-[#345556] px-5 py-3 sm:w-fit sm:p-2 border-b-2 border-[#345556] sm:rounded backdrop-blur bg-[#BEF2F4]/60 sm:bg-gradient-to-t sm:from-[#BEF2F4]/80 sm:to-background/80 sm:border-2 sm:supports-backdrop-blur:bg-white/60">
      <div class="grid grid-cols-4 gap-x-5">
        <div class="col-span-1 justify-self-start">
          <a href="/dentist-vierin" class="flex font-bold items-center">
            <Icons.chevronLeft class="w-5 h-5 mr-1" />
            Prev
          </a>
        </div>
        <div class="col-span-2 justify-self-center">
          <a href="https://www.dibarro.com" class="flex font-bold items-center justify-center">
            <Icons.externalLink class="w-5 h-5 mr-1.5" />
            View website
          </a>
        </div>
        <div class="col-span-1 justify-self-end">
          <a href="/dentist-vierin" class="flex font-bold items-center ">
            Next
            <Icons.chevronRight class="w-5 h-5 ml-1" />
          </a>
        </div>
      </div>
    </div>
  </div>
</div>