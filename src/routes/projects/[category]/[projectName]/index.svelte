<script context="module" lang="ts">
	export async function load({ params }) {
    // TODO: mettere il controllo degli url

    return {
      props: {
        category: params.category,
        projectName: params.projectName,
      },
    }
  }
</script>

<script lang="ts">
  export let category: string;
  export let projectName: string;
</script>


<div></div>