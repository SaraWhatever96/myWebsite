<script lang="ts">
	import '../app.css';
	import Header from '$lib/components/Header.svelte';
	import WorkInProgress from '$lib/components/WorkInProgress.svelte';
</script>

<Header />

<main>
	{#if false}
		<WorkInProgress />
	{:else}
		<!-- Qui vedrai le varie pagine del sito -->
		<slot />
	{/if}
</main>
