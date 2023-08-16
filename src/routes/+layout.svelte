<script lang="ts">
  import "../styles/global.css";
	import { dev } from "$app/environment";
	import TailwindIndicator from "$components/site/TailwindIndicator.svelte";
	import SiteHeader from "$components/site/SiteHeader.svelte";
  import SiteFooter from "$components/site/SiteFooter.svelte";
</script>

<div class="relative min-h-screen bg-[#f9fafb]">
  <SiteHeader />
  <main>
    <slot />
  </main>
  <SiteFooter />

  {#if dev}
    <TailwindIndicator />
  {/if}
</div>