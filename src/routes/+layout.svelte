<script lang="ts">
	import '../app.css';
	import PageTransitions from '$lib/components/PageTransitions.svelte';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';

	export let data;
</script>

<main>
	<Header />

	<PageTransitions pathname={data.pathname}>
		<slot />
	</PageTransitions>

	<Footer />
</main>