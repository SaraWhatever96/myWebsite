<script lang="ts">
	import '../app.css';
	import Header from '$lib/components/Header.svelte';
</script>

<Header />

<main>
	<!-- Qui vedrai Le varie pagine del sito -->
	<slot />
</main>
