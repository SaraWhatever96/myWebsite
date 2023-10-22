<script lang="ts">
  import { H2 } from "$components/site/typography";
	import {
    Card,
    CardHeader,
    CardTitle,
    CardContent,
    CustomSeparator
  } from "$components/ui/card";
	import { Icons } from "$components/site/icons";
	import { Button } from "$components/ui/button";
	import { Separator } from "$components/ui/separator";
  import Container from "$components/site/Container.svelte";
  import { balancer } from "svelte-action-balancer";
	import AspectRatio from "$components/ui/aspect-ratio/AspectRatio.svelte";
	import HeroWindow from "$components/site/HeroWindow.svelte";

</script>

<!-- TODO: rivedere da zero la versione tablet di questa pagina, perche ci saranno tanti errori nelle classi tailwindcss -->
<!-- Hero Section -->
<div id="hero-section" class="mb-14 bg-white dark:bg-muted/50 overflow-hidden">
  <Separator class="bg-[#BFF5F6]" />

  <!-- TODO: capire qual è il padding della hero section, soprattutto per la versione mobile. Non credo sia buona cosa mantenere delle altezze fisse. -->
  <Container class="relative lg:py-10 overflow-hidden">
    <div class="relative h-full grid max-lg:py-5 grid-cols-1 grid-rows-[auto_auto] lg:grid-cols-2 lg:grid-rows-1">
      <div class="my-auto">
        <div class="relative w-fit">
          <Icons.shootingStar class="absolute -top-1 -right-6 h-6 w-6 text-primary -rotate-12" />
          <h1 class="scroll-mt-20 w-fit text-4xl leading-[2.7rem] sm:text-5xl md:text-5xl md:leading-[3.6rem] font-bold text-primary tracking-tight">
            May the UX<br>
            be with you
          </h1>
        </div>
        <p class="mt-7 text-muted-foreground text-xl md:text-2xl md:max-w-md md:mt-10">
          I’m Sara, <span class="font-semibold">UI UX Designer</span> with a
          background in <span class="font-semibold">Visual</span> & <span class="font-semibold">Motion Design</span>
        </p>
      </div>
      <div class="max-lg:mt-14 lg:my-auto">
        <AspectRatio ratio={600 / 460} class="hidden md:block">
          <HeroWindow />
        </AspectRatio>
        <AspectRatio ratio={350 / 380} class="md:hidden">
          <HeroWindow />
        </AspectRatio>
      </div>
    </div>
  </Container>

  <Separator class="bg-[#E4DCF9]" />
</div>


<!-- Latest Projects -->
<Container class="mt-20 lg:mt-24">
  <div class="mb-10 md:mb-14">
    <H2 id="latest-projects">Selected projects</H2>
    <p use:balancer={{ enabled: true, ratio: 0.35 }} class="text-muted-foreground text-lg md:text-xl md:max-w-3xl">
      Below you'll be able to checkout some UX/UI projects I've worked on.
    </p>
  </div>

  <!-- Di Barrò Project Card -->
  <Card class="w-full p-0.5 mb-8 rounded-xl bg-gradient-to-b from-accent-green from-30% to-transparent">
    <div class="bg-background rounded-xl">
      <CardHeader class="flex flex-col py-5 px-5 md:pt-12 md:px-12 md:pb-8">
        <CardTitle class="text-accent-green-foreground">
          Designing a Storybrand Website <br class="hidden sm:block">for a family-owned winery
        </CardTitle>
      </CardHeader>

      <CustomSeparator class="w-full h-auto text-accent-green" />

      <CardContent class="relative px-5 pb-6 pt-0 md:p-0">
        <div class="py-5 sm:absolute sm:p-2.5 sm:top-8 sm:right-10 ">
          <div class="grid max-sm:grid-cols-2 max-sm:gap-x-4 sm:grid-rows-2 sm:gap-y-4">
            <!-- Mobile Btn -->
            <Button href="/winery-dibarro" variant="green" class="w-full sm:hidden">
              View project
            </Button>
            <!-- Desktop Btn -->
            <Button href="/winery-dibarro" variant="white" class="hidden sm:block">
              View project
            </Button>
            <Button href="https://www.dibarro.com" target="_blank" variant="outline-green" class="w-full">
              View website
            </Button>
          </div>
        </div>
        <div class="sm:p-2.5">
          <picture>
            <source media="(min-width: 640px)" srcset="/img/dibarro-cover.webp" />
            <img
              class="pointer-events-none rounded-md object-cover h-full w-full sm:h-[290px] "
              src="/img/dibarro-cover-mobile.webp"
              alt="Project Cover - Di Barrò"
            />
          </picture>
        </div>
      </CardContent>
    </div>
  </Card>


  <!-- Vierin Project Card -->
  <Card class="w-full p-0.5 mb-8 rounded-xl bg-gradient-to-b from-accent-rose from-30% to-transparent">
    <div class="bg-background rounded-xl">
      <CardHeader class="flex flex-col py-5 px-5 md:pt-12 md:px-12 md:pb-8">
        <CardTitle class="text-accent-rose-foreground">
          Ideating a “mobile-first”<br class="hidden sm:block">One Page Website for a Dental Clinic
        </CardTitle>
      </CardHeader>

      <CustomSeparator class="w-full h-auto text-accent-rose" />

      <CardContent class="relative px-5 pb-6 pt-0 md:p-0">
        <div class="py-5 sm:absolute sm:p-2.5 sm:top-8 sm:right-10 ">
          <div class="grid max-sm:grid-cols-2 max-sm:gap-x-4 sm:grid-rows-2 sm:gap-y-4">
            <!-- Mobile Btn -->
            <Button href="/dentist-vierin" variant="rose" class="w-full sm:hidden">
              View project
            </Button>
            <!-- Desktop Btn -->
            <Button href="/dentist-vierin" variant="white" class="hidden sm:block w-full">
              View project
            </Button>
            <Button href="https://www.dentista-aosta.com" target="_blank" variant="outline-rose" class="w-full">
              View website
            </Button>
          </div>
        </div>
        <div class="sm:p-2.5">
          <picture>
            <source media="(min-width: 640px)" srcset="/img/vierin-cover.webp" />
            <img
              class="pointer-events-none rounded-md object-cover h-full w-full sm:h-[290px] sm:object-left-top"
              src="/img/vierin-cover-mobile.webp"
              alt="Project Cover - Di Barrò"
            />
          </picture>
        </div>
      </CardContent>
    </div>
  </Card>


  <!-- Alpitude Project Card -->
  <Card class="w-full p-0.5 mb-8 rounded-xl bg-gradient-to-b from-accent-blue from-30% to-transparent">
    <div class="bg-background rounded-xl">
      <CardHeader class="flex flex-col py-5 px-5 md:pt-12 md:px-12 md:pb-8">
        <CardTitle class="text-accent-blue-foreground">
          Creating a Digital Startup’s <br class="hidden sm:block">Design identity and Website
        </CardTitle>
      </CardHeader>

      <CustomSeparator class="w-full h-auto text-accent-blue" />

      <CardContent class="relative px-5 pb-6 pt-0 md:p-0">
        <div class="py-5 sm:absolute sm:p-2.5 sm:top-8 sm:right-10 ">
          <div class="grid max-sm:grid-cols-2 max-sm:gap-x-4 sm:grid-rows-2 sm:gap-y-4">
            <!-- Mobile Btn -->
            <Button href="/alpitude" variant="blue" class="w-full sm:hidden">
              View project
            </Button>
            <!-- Desktop Btn -->
            <Button href="/alpitude" variant="white" class="hidden sm:block w-full">
              View project
            </Button>
            <Button href="https://www.alpitude.it" target="_blank" variant="outline-blue" class="w-full">
              View website
            </Button>
          </div>
        </div>
        <div class="sm:p-2.5">
          <picture>
            <source media="(min-width: 640px)" srcset="/img/alpitude-cover.webp" />
            <img
              class="pointer-events-none rounded-md object-cover h-full w-full sm:h-[290px] sm:object-left-top"
              src="/img/alpitude-cover-mobile.webp"
              alt="Project Cover - Di Barrò"
            />
          </picture>
        </div>
      </CardContent>
    </div>
  </Card>

</Container>
