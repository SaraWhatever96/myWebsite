<script lang="ts">
	import Button from "$components/ui/button/Button.svelte";
	import Container from "$components/site/Container.svelte";
	import { Icons } from "./icons";
</script>


<header>
  <Container class="py-4 sm:py-6">
    <div class="flex justify-between">
      <Button href="/" variant="link" class="px-0" style="text-decoration: none">
        <!-- <Icons.logo class="w-14 text-primary" /> -->
        Sara Cosmai
      </Button>

      <Button variant="default" aria-label="Open resume in another tab">
        Resume
      </Button>
    </div>
  </Container>
</header>