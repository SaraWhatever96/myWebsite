<script lang="ts">
	import Button from "$components/ui/button/Button.svelte";
	import Container from "$components/site/Container.svelte";
	import { Separator } from "$components/ui/separator";

  function openResume() {
    window.open('/cv-sara-cosmai.pdf', '_blank');
  }
</script>


<header>
  <Container class="py-4 sm:py-6">
    <div class="flex justify-between">
      <Button href="/" variant="link" class="px-0" style="text-decoration: none">
        <!-- <Icons.logo class="w-14 text-primary" /> -->
        Sara Cosmai
      </Button>

      <div class="space-x-2">
        <Button href="about" variant="outline">
          About
        </Button>

        <Button on:click={openResume} variant="default" aria-label="Open resume in another tab">
          Resume
        </Button>
      </div>
    </div>
  </Container>
</header>

<Separator />