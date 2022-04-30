<script lang="ts">
  import { skills } from "$lib/stores/skills";


  // Logica Javascript
</script>



<div class="max-w-7xl mx-auto pt-20 sm:px-6 lg:px-8">
  <!-- Showreel section -->
  <div class="bg-slate-100 dark:bg-slate-700 transition-colors duration-150 ease-in-out h-showreel rounded-lg shadow-mdspecial">
    <div class="h-full flex flex-col justify-center">
      <div class="text-center w-full">
        <h1 class="text-5xl font-bold text-slate-900 dark:text-white transition-colors duration-150 ease-in-out">Welcome Anonymous User</h1>
        <h2 class="text-3xl pt-3 text-slate-900 dark:text-white transition-colors duration-150 ease-in-out">Showreel</h2>
      </div>
    </div>
  </div>

  <!-- Who section -->
  <div class="bg-white dark:bg-slate-900 dark:border-white transition-colors duration-150 ease-in-out border-2 border-slate-200 h-80 rounded-lg my-10 lg:mt-36 lg:mx-0 mx-5 shadow-mdspecial">
    <div class="flex flex-col justify-center">
      <div class="text-left max-w-prose mx-auto my-10">
        <h1 class="text-5xl font-bold text-slate-900 dark:text-white transition-colors duration-150 ease-in-out">Who I am</h1>
        <p class="text-base lg:text-xl pt-10 text-slate-900 dark:text-white transition-colors duration-150 ease-in-out">
          Information about me a little text long about 5-10 lines.Information about me a
          little text long about 5-10 lines. Information about me a little text long about 5-10
          lines. Information about me a little text long about 5-10 lines. Information about
          me a little text long about 5-10 lines.
        </p>
      </div>
    </div>
  </div>

  <!-- Illustration section -->
  <div class="transition-colors duration-150 ease-in-out h-illustration rounded-lg sm:my-2 md:my-14 lg:my-20">
    <div class="w-full flex flex-col justify-center">
      <img loading="lazy" src="/img/light-mode.png" alt="">
    </div>
  </div>

  <!-- Skills section -->
  <div class="my-20 lg:mt-32 lg:mb-16 mx-5 lg:mx-0">
  <div class="flex flex-col justify-center">
    <div class="text-center lg:text-left w-full">
      <h1 class="text-5xl font-bold text-slate-900 dark:text-white transition-colors duration-150 ease-in-out">The skills</h1>
    </div>
    <div class="mt-10 h-32 bg-gradient-to-r from-white via-slate-100 to-white flex flex-col dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 justify-center">
      <div class=" overflow-x-scroll overflow-y-hidden text-slate-900 dark:text-white transition-colors duration-150 ease-in-out">
        <div class="lg:grid grid-cols-9 lg:gap-x-8 flex flex-row justify-items-center min-w-max lg:min-w-full space-x-5 lg:space-x-0">
          {#each $skills as skill}
          <div class="h-20 w-20 lg:h-24 lg:w-24 bg-slate-200 dark:bg-slate-900 border-2 border-slate-200 dark:border-white rounded-lg flex flex-row justify-center items-center transition-all duration-300 ease-in-out">
            <a sveltekit:prefetch href="/skills/{skill.icon}">
              <button type="button">
                <img class="h-10 w-10 " src="/svg/{skill.icon}.svg" alt="">
              </button>
            </a>
          </div>
          {/each}
        </div>
      </div>
    </div>
  </div>
  </div>

  <!-- Prj types -->
  <div class="my-20 lg:mt-40">
  <div class="flex flex-col justify-center">
      <div class="text-center lg:text-left w-full">
      <h1 class="text-5xl font-bold text-slate-900 dark:text-white transition-colors duration-150 ease-in-out">Projects type</h1>
      </div>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-20 mt-20 mb-20">
      <div class="h-illustration bg-slate-100 dark:bg-slate-700 transition-colors duration-150 ease-in-out rounded-lg shadow-mdspecial">
          <div class="h-full flex flex-col justify-center"><h2 class="text-center text-2xl font-normal text-slate-900 dark:text-white transition-colors duration-150 ease-in-out">Motion graphic contents</h2></div>
      </div>
      <div class="h-illustration bg-slate-100 dark:bg-slate-700 transition-colors duration-150 ease-in-out rounded-lg shadow-mdspecial">
          <div class="h-full flex flex-col justify-center"><h2 class="text-center text-2xl font-normal text-slate-900 dark:text-white transition-colors duration-150 ease-in-out">UI & UX contents</h2></div>
      </div>
      </div>

  </div>

  </div>


</div>
