<script>
  import "../app.css";
  import Header from "$lib/components/Header.svelte";
	import Footer from "$lib/components/Footer.svelte";
	import { dev } from "$app/environment";
	import TailwindIndicator from "$lib/components/TailwindIndicator.svelte";
</script>


<main class="relative bg-slate-50 min-h-screen">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <Header />
    <slot />
    <Footer />
  </div>
  
  {#if dev}
    <TailwindIndicator />
  {/if}
</main>