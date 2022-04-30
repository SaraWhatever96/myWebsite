<script context="module" lang="ts">
  export async function load({ params }) {
    return {
      props: {
        skillName: params.skillName,
      }
    }
  }
</script>

<script lang="ts">
  import { skills } from "$lib/stores/skills";

  export let skillName: string;

  $: selectedSkill = $skills.find(skill => skill.icon === skillName);
</script>



<div class="max-w-7xl mx-auto pt-20 sm:px-6 lg:px-8">
  <!-- Skills section -->
  <div class="mx-20 lg:mx-40">
    <div class="lg:flex lg:flex-row lg:justify-around">
      <!-- Skills grid programs -->
      <div class="lg:h-96 lg:w-96">
          <div class="text-slate-900 dark:text-white transition-colors duration-150 ease-in-out">
              <div class="grid grid-cols-3 grid-rows-3 gap-5 px-auto lg:gap-10">
                {#each $skills as skill}
                <a sveltekit:prefetch href="/skills/{skill.icon}" class="aspect-w-1 aspect-h-1 bg-slate-200 dark:bg-slate-900 border-2 border-slate-200 dark:border-white rounded-lg transition-all duration-300 ease-in-out">
                  <div class="h-full w-full flex flex-row justify-center items-center">
                    <img class="h-10 w-10" src="/svg/{skill.icon}.svg" alt="">
                  </div>
                </a>
                {/each}
            </div>
          </div>
      </div>
      <!-- Skills titles -->
      <div class="text-center lg:text-left mt-20 lg:mt-5 lg:w-96">
        <h1 class="text-5xl font-bold text-slate-900 dark:text-white transition-colors duration-150 ease-in-out">Skills</h1>
        <div>
          <h2 class="mt-5 text-3xl font-bold text-slate-900 dark:text-white transition-colors duration-150 ease-in-out">
            {selectedSkill.title}
          </h2>
          <h3 class="text-2xl font-normal text-slate-900 dark:text-white transition-colors duration-150 ease-in-out">
            {selectedSkill.subTitle}
          </h3>
        </div>
      </div>
    </div>
  </div>
  <!-- Video section -->
  <div class="my-32 h-showreel bg-slate-100 dark:bg-gray-800 rounded-lg transition-colors duration-150 ease-in-out"></div>
</div>

