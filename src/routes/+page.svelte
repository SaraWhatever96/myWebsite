<script lang="ts">
	import MarginWrapper from "$components/site/MarginWrapper.svelte";
	import { Icons } from "$components/site/icons";
  import {
    H1,
    H2
  } from "$components/site/typography";
  import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger
  } from "$components/ui/accordion";
	import { Button } from "$components/ui/button";
	import { Separator } from "$components/ui/separator";
  import { Video } from "$components/ui/video"
</script>


<!-- Hero Section -->
<div class="my-14 bg-muted">
  <Separator />

  <MarginWrapper class="py-5 h-[600px]">
    <div class="flex flex-col h-full">
      <div class="flex flex-col space-y-10 my-auto">
        <H1 id="hero-message">
          May <br />
          design be <br />
          with you <br />
        </H1>
        <Button class="w-fit">
          <Icons.playCircle class="h-5 w-5 mr-2" />
          Watch Showreel
        </Button>
      </div>

      <!-- Waves Grid -->
      <div class="grid"></div>
    </div>
  </MarginWrapper>

  <Separator />
</div>

<!-- About Me -->
<MarginWrapper class="mt-20 lg:mt-24">
  <H2>Get to know me</H2>
  <p class="text-muted-foreground text-xl">Ask me some questions</p>

  <div class="mt-6 grid grid-cols-1 gap-x-6 md:grid-cols-2 h-full">
    <!-- TODO: adjust the height which is incorrect at the moment !!! -->
    <div class="relative max-md:w-[calc(100vw-2rem)] max-md:h-[calc(100vw-2rem)] md:h-[calc(40rem-1.5rem)]">
      <Video class="absolute left-0 top-0 w-full" name="illustration-1" />
    </div>

    <Accordion type="single" collapsible class="w-full border-t border-border max-md:mt-6">
      <AccordionItem value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Is it styled?</AccordionTrigger>
        <AccordionContent>
          Yes. It comes with default styles that matches the other components'
          aesthetic.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Is it animated?</AccordionTrigger>
        <AccordionContent>
          Yes. It's animated by default, but you can disable it if you prefer.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  </div>
</MarginWrapper>


<!-- Skills -->
<MarginWrapper class="mt-20 lg:mt-24">
  <H2>Growing skillset</H2>
  <p class="text-muted-foreground text-xl">Ask me some questions</p>


</MarginWrapper>
