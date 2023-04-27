<script>
  import "../app.css";
  import Header from "$lib/components/Header.svelte";
	import Footer from "$lib/components/Footer.svelte";
</script>


<main class="bg-slate-50 min-h-screen">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <Header />
    <slot />
    <Footer />
  </div>
</main>