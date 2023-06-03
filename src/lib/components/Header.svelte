<script lang="ts">
	import LogoIcon from "$lib/components/assets/icons/LogoIcon.svelte";
	import DownloadIcon from "./assets/icons/DownloadIcon.svelte";


</script>

<div class="flex w-full justify-between py-4 lg:py-6">
  <a href="/" class="block">
    <h1>
      <LogoIcon />
    </h1>
  </a>

  <!-- Resume link-->
  <a href="/" class="inline-flex items-center space-x-2 text-xl font-semibold text-slate-600 hover:text-slate-500 transition group">
    <div>My Resume</div>
    <DownloadIcon className="h-6 w-6 animate-bounce" />
  </a>
</div>