<script lang="ts">
	import Button from "$components/ui/button/Button.svelte";
	import { Separator } from "$components/ui/separator";
	import MarginWrapper from "./MarginWrapper.svelte";
	import { Icons } from "./icons";

  const year: number = new Date().getFullYear();
</script>


<footer class="pt-6 pb-12">
  <MarginWrapper>
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
          <a href="/" class="block text-lg font-medium underline">Resume</a>
          <p class="text-sm font-normal">&copy; {year} Sara Cosmai</p>
        </div>

        <!-- Social Links -->
        <div class="flex flex-row justify-center space-x-6 pb-12 md:flex-col md:space-x-0 md:space-y-4 md:pb-0">
          <Button size="square" href="/">
            <Icons.linkedin className="h-4 w-4" />
          </Button>
          <Button size="square" href="/">
            <Icons.dribbble className="h-4 w-4" />
          </Button>
          <Button size="square" href="/">
            <Icons.instagram className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  </MarginWrapper>
</footer>