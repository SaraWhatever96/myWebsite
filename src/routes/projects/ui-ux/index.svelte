<script context="module" lang="ts">
	export async function load() {
    const projects = await Promise.all(
      Object.entries(import.meta.glob(`/src/routes/projects/ui-ux/*.svx`)).map(
        async ([path, page]) => {
          const { metadata } = await page();
          const filename = path.split("/").pop();
          return { ...metadata, filename };
        }
      )
    );
    projects.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    return {
      props: {
        category: 'ui-ux',
        projects,
      },
    }
  }
</script>

<script lang="ts">
  import ProjectCard from "$lib/components/projects/ProjectCard.svelte";
  import ProjectsGrid from "$lib/components/projects/ProjectsGrid.svelte";

  export let category: string;
  export let projects;
</script>

<ProjectsGrid {category}>
  {#each projects as { title, filename, coverImage, createdAt }, i}
    <ProjectCard slug={filename.replace('.svx', '')} {title} {createdAt} {coverImage} {category} delay="{i * 100}" />
  {/each}
</ProjectsGrid>