<script lang="ts">
  throw new Error("@migration task: Add data prop (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292707)");

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