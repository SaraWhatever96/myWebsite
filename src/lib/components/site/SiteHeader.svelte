<script lang="ts">
	import Button from "$components/ui/button/Button.svelte";
	import Container from "$components/site/Container.svelte";
	import { Icons } from "./icons";
</script>


<header>
  <Container class="my-4 sm:my-6">
    <div class="flex justify-between">
      <Button href="/" variant="link">
        <Icons.logo class="w-14 text-primary" />
      </Button>

      <Button variant="default" aria-label="Open resume in another tab">
        Resume
        <Icons.download class="hidden md:block ml-2 h-4 w-4" />
      </Button>
    </div>
  </Container>
</header>