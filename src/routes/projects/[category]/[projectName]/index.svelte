<script context="module" lang="ts">
	export async function load({ params }) {
    // TODO: mettere il controllo degli url

    try {
      // todo: capire come leggere il contenuto di un file md in svelte
      const project = await import(`$lib/projects/${params.category}/${params.projectName}.md`);

      return {
        props: {
          mdFilecontent: project.default,
          meta: { ...project.metadata },
          slug: params.projectName ,
          category: params.category
        },
      }
    } catch (err) {
      console.log(err);
    }
  }
</script>

<script lang="ts">
  export let mdFilecontent: string;
  export let slug: string;
  export let category: string;
  export let meta;

  $: console.log({mdFilecontent}, {slug}, {category}, {meta})
</script>


<article>
  <!-- Pre Title -->
  <h2 class="mb-4 text-xl font-medium text-slate-500 dark:text-white transition-colors duration-150 ease-in-out">
    {category === 'motion-graphic' ? 'Motion Graphic' : 'UI & UX'}
  </h2>

  <!-- Title -->
  <div class="flex flex-col-reverse md:flex-row md:justify-between">
    <h1 class="text-5xl font-bold text-slate-900 dark:text-white transition-colors duration-150 ease-in-out">
      Nashi Argan Redesign
    </h1>
    <div class="flex space-x-4">
      <a sveltekit:prefetch href="/skills/ae" class="w-12 h-12 bg-slate-200 dark:bg-slate-900 border-2 border-slate-200 dark:border-white rounded-lg transition-all duration-300 ease-in-out">
        <div class="h-full w-full flex flex-row justify-center items-center">
          <img class="h-8 w-8" src="/svg/ae.svg" alt="">
        </div>
      </a>
      <a sveltekit:prefetch href="/skills/figma" class="w-12 h-12 bg-slate-200 dark:bg-slate-900 border-2 border-slate-200 dark:border-white rounded-lg transition-all duration-300 ease-in-out">
        <div class="h-full w-full flex flex-row justify-center items-center">
          <img class="h-8 w-8" src="/svg/figma.svg" alt="">
        </div>
      </a>
    </div>
  </div>

  <!-- Project Description -->
  <div class="prose">
    {mdFilecontent}
  </div>
</article>