<script context="module" lang="ts">
	export async function load({ params }) {
    const projects = [];

    return {
      props: {
        category: 'ui-ux',
        projects,
      },
    }
  }
</script>

<script lang="ts">
  import Card from "$lib/components/projects/Card.svelte";
  import ProjectsGrid from "$lib/components/projects/ProjectsGrid.svelte";

  export let category: string;
  export let projects;
</script>



<ProjectsGrid {category}>
  <Card />
</ProjectsGrid>