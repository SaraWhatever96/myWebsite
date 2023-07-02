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

  <MarginWrapper class="py-5">
    <div class="flex flex-col space-y-10">
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
  </MarginWrapper>

  <Separator />
</div>

<!-- About Me -->
<MarginWrapper class="mt-20">
  <H2>Get to know me</H2>
  <p class="text-muted-foreground text-xl">Ask me some questions</p>

  <div class="mt-6 grid grid-cols-1 md:grid-cols-2">
    <div class="relative max-md:w-[calc(100vw-2rem)] max-sm:h-[calc(100vw-2rem)] min-sm:max-md:w-[calc(100vw-3rem)] min-sm:max-md:h-[calc(100vw-3rem)] md:h-[min(40vw,35rem)] md:w-[min(40vw,35rem)]">
      <Video class="absolute inset-0" name="illustration-1" />
    </div>

    <Accordion type="single" collapsible class="w-full">
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
