<script lang="ts">
	import Button from "$components/ui/button/Button.svelte";
	import Container from "$components/site/Container.svelte";

  function openResume() {
    window.open('/cv-sara-cosmai.pdf', '_blank');
  }
</script>

<header>
  <Container class="py-4 sm:py-6">
    <div class="flex justify-between">
      <Button href="/" variant="header-link" class="px-0 sm:px-0">
        Sara Cosmai
      </Button>

      <!-- TODO: I bottoni devono avere degli stati di hover. Chiedere a Sara se li ha previsti altrimenti improvviso. -->
      <div class="space-x-2">
        <Button href="about" variant="header-link">
          About
        </Button>

        <Button on:click={openResume} variant="header-link" aria-label="Open resume in another tab">
          Resume
        </Button>
      </div>
    </div>
  </Container>
</header>