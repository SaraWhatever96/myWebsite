<script lang="ts">
	import Button from "$components/ui/button/Button.svelte";
	import MarginWrapper from "$components/site/MarginWrapper.svelte";
	import { Icons } from "./icons";
</script>


<header>
  <MarginWrapper class="my-4 sm:my-6">
    <div class="flex justify-between">
      <Button variant="link">
        <Icons.logo class="w-14 text-primary" />
      </Button>

      <Button variant="default">
        Resume
        <Icons.download class="hidden md:block ml-2 h-4 w-4" />
      </Button>
    </div>
  </MarginWrapper>
</header>