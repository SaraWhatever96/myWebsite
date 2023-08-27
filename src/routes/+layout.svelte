<script lang="ts">
  import "../styles/global.css";
	import { dev } from "$app/environment";
	import TailwindIndicator from "$components/site/TailwindIndicator.svelte";
	import SiteHeader from "$components/site/SiteHeader.svelte";
  import SiteFooter from "$components/site/SiteFooter.svelte";
	import Meta from "$components/site/Meta.svelte";
</script>


<Meta
  title="Portfolio Sara Cosmai"
  description="Hi I'm Sara, a UI UX Designer based in Aosta, Italy"
  imageUrl=""
/>


<div class="relative min-h-screen bg-background">
  <SiteHeader />
  <main>
    <slot />
  </main>
  <SiteFooter />

  {#if dev}
    <TailwindIndicator />
  {/if}
</div>