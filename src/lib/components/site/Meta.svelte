<script lang="ts">
	import { page } from '$app/stores';

  export let title: string;
  export let description: string;
  export let imageUrl: string;
</script>


<svelte:head>
	<!-- To prevent all search engines from indexing
		<meta name="robots" content="noindex">
	-->

	<!-- Primary Meta Tags -->
	<title>{title}</title>
	<meta name="title" content={title} />
	<meta name="description" content={description} />
	<meta name="keywords" content="Valle d'Aosta, Di Barrò, agenzia del vino, degustazione di vino, vigneti, wine bar" />

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta
		property="og:url"
		content="{$page.url.origin}{$page.url.pathname}"
	/>
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content={imageUrl} />

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta
		property="twitter:url"
		content="{$page.url.origin}{$page.url.pathname}"
	/>
	<meta property="twitter:title" content={title} />
	<meta property="twitter:description" content={description} />
	<meta property="twitter:image" content={imageUrl} />
</svelte:head>
