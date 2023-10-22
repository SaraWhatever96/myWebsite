<script lang="ts">
	import Button from "$components/ui/button/Button.svelte";
	import { Separator } from "$components/ui/separator";
	import Container from "./Container.svelte";
	import { Icons } from "./icons";

  const year: number = new Date().getFullYear();

  function openResume() {
    window.open('/cv-sara-cosmai.pdf', '_blank');
  }
</script>


<footer class="pt-6 pb-12">
  <Container>
    <Separator />

    <div class="mt-16">
      <div class="flex flex-col-reverse md:flex-row md:justify-between">
        <!-- Content -->
        <div class="font-light space-y-5 max-md:text-center">
          <h3 class="text-lg">Sara Cosmai</h3>
          <div class="text-sm">
            <p>UI-UX Designer based in Aosta, Italy</p>
            <p>Background in visual design, motion design</p>
          </div>
          <button on:click={openResume} class="block w-fit text-lg font-medium max-md:mx-auto underline">Resume</button>
          <p class="text-sm font-normal">&copy; {year} Sara Cosmai</p>
        </div>

        <!-- Social Links -->
        <div class="flex flex-row justify-center space-x-6 pb-12 md:flex-col md:space-x-0 md:space-y-4 md:pb-0">
          <Button size="square" variant="blue" href="https://www.linkedin.com/in/sara-cosmai-243997150/" target="_blank">
            <Icons.linkedin className="h-4 w-4" />
          </Button>
          <Button size="square" variant="rose" href="https://dribbble.com/WhatEverSara" target="_blank">
            <Icons.dribbble className="h-4 w-4" />
          </Button>
          <Button size="square" variant="green" href="https://www.instagram.com/saracosmai/" target="_blank">
            <Icons.instagram className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  </Container>
</footer>