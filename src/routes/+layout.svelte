<script lang="ts">
  import "../styles/global.css";
  import "../styles/project-content.css";
	import { dev } from "$app/environment";
	import TailwindIndicator from "$components/site/TailwindIndicator.svelte";
	import SiteHeader from "$components/site/SiteHeader.svelte";
  import SiteFooter from "$components/site/SiteFooter.svelte";
  import ImageZoom from "$components/site/project-pages/ImageZoom.svelte";
	import Meta from "$components/site/Meta.svelte";
	import { superzoomImgSrc } from "$lib/stores";
</script>


<Meta
  title="Portfolio Sara Cosmai"
  description="Hi I'm Sara, UI UX Designer based in Aosta, Italy."
  imageUrl=""
/>


<div class="relative min-h-screen bg-background">
  <SiteHeader />
  <main>
    <slot />
  </main>
  <SiteFooter />

  <!-- Opened by opening an image to fullscreen -->
  {#if $superzoomImgSrc && $superzoomImgSrc !== ''}
    <ImageZoom />
  {/if}

  {#if dev}
    <TailwindIndicator />
  {/if}
</div>