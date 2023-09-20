<script lang="ts">
  import { H2 } from "$components/site/typography";
	import {
    Card,
    CardHeader,
    CardTitle,
    CardContent,
  } from "$components/ui/card";
	import { Icons } from "$components/site/icons";
	import { Button } from "$components/ui/button";
	import { Separator } from "$components/ui/separator";
  import Container from "$components/site/Container.svelte";
  import { balancer } from "svelte-action-balancer";
	import CustomSeparator from "$components/ui/card/CustomSeparator.svelte";
	import AspectRatio from "$components/ui/aspect-ratio/AspectRatio.svelte";



  function sendMail() {
    window.location.href = 'mailto:sarah.cosmai@gmail.com?subject=&body=';
  }
</script>

<!-- TODO: rivedere da zero la versione tablet di questa pagina, perche ci saranno tanti errori nelle classi tailwindcss -->
<!-- Hero Section -->
<div id="hero-section" class="mb-14 bg-white dark:bg-muted/50 overflow-hidden">
  <Separator class="bg-[#BFF5F6]" />

  <!-- TODO: capire qual è il padding della hero section, soprattutto per la versione mobile. Non credo sia buona cosa mantenere delle altezze fisse. -->
  <Container class="relative h-[600px] sm:h-[630px] lg:h-[550px] overflow-hidden">
    <div class="relative h-full grid max-lg:py-5 grid-cols-1 grid-rows-[auto_auto] lg:grid-cols-2 lg:grid-rows-1">
      <div class="my-auto">
        <div class="relative w-fit">
          <Icons.shootingStar class="absolute -top-1 -right-6 h-6 w-6 text-primary -rotate-12" />
          <h1 class="scroll-mt-20 w-fit text-[40px] leading-[2.75rem] sm:text-5xl md:text-5xl md:leading-[3.6rem] font-bold text-primary tracking-tight">
            May the UX<br>
            be with you
          </h1>
        </div>
        <p class="mt-7 text-muted-foreground text-2xl md:text-2xl md:max-w-md md:mt-10">
          I’m Sara, <span class="font-semibold">UI UX Designer</span> with a
          background in <span class="font-semibold">Visual</span> & <span class="font-semibold">Motion Design</span>
        </p>
      </div>
      <div class="max-lg:mt-14 lg:my-auto">
        <AspectRatio ratio={600 / 460}>
          <!-- TODO: Rivedere il padding, su Figma non è chiaro -->
          <div class="p-10 w-full h-full rounded-[10px] bg-gradient-to-b from-[#DCF8F9] from-0% via-[#DBECFA] via-60% to-[#E6DDF8]">
            <!-- Window container -->
            <!-- TODO: guardare Figma perchè c'é una sfumatura colore sul bordo -->
            <!-- TODO: rivedere il calcolo sull'altezza perche il bottone e le sue dimensioni non sono definitive -->
            <div class="rounded-lg w-full h-[calc(100%-61px)] bg-white border-2 border-[#A6EDF2] overflow-hidden">
              <!-- Window Action Menu -->
              <div class="flex space-x-1.5 p-2 border-b-2 border-[#CEC0F1]">
                <div class="h-2.5 w-2.5 rounded-full bg-[#8B5EED]"></div>
                <div class="h-2.5 w-2.5 rounded-full bg-[#50C8F4]"></div>
                <div class="h-2.5 w-2.5 rounded-full bg-[#54C1C5]"></div>
              </div>

              <!-- Window Header -->
              <!-- TODO: Usare le icone di Sara, chiedere dove le ha prese -->
              <div class="flex py-4 px-3 text-[#CEC0F1] justify-between">
                <Icons.arrowLeft />

                <div class="flex space-x-1">
                  <Icons.panelLeft />
                  <Icons.moreVertical />
                </div>
              </div>

              <!-- Window Content -->
              <div class="w-full h-full bg-gradient-to-t from-[#BEF2F4] from-[-45%] via-[#C2DFF7] via-75% to-[#E3DAF7] to-[130%]">
                <!-- TODO: text bubbles animation.. -->
              </div>
            </div>

            <!-- TODO: allineare lo stile di questo bottone -->
            <Button class="relative w-full mt-6">
              Say hello
            </Button>
          </div>
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

  <Card class="w-full p-0.5 mb-8 rounded-xl bg-gradient-to-b from-[#bef3f4] from-30% to-transparent">
    <div class="bg-background rounded-xl">
      <CardHeader class="flex flex-col py-5 px-5 md:pt-12 md:px-12 md:pb-8">
        <CardTitle class="text-[#345556]">
          Designing a Storybrand Website <br class="hidden sm:block">for a family-owned winery
        </CardTitle>
      </CardHeader>

      <CustomSeparator class="w-full h-auto" stroke="#BEF3F4" />

      <CardContent class="relative px-5 pb-6 pt-0 md:p-0">
        <div class="py-5 sm:absolute sm:p-2.5 sm:top-8 sm:right-10 ">
          <div class="grid max-sm:grid-cols-2 max-sm:gap-x-4 sm:grid-rows-2 sm:gap-y-4">
            <Button href="/winery-dibarro" class="w-full text-[#345556] bg-[#BEF3F4] sm:hidden">
              View project
            </Button>
            <Button href="/winery-dibarro" class="hidden sm:block w-full text-[#345556] text-center" style="border-radius: 0.3125rem; background: radial-gradient(52.52% 50% at 52.52% 50%, #F5FFFF 0%, #E2FEFF 100%); box-shadow: 0px 0px 11px 0px #E5FEFF, 0px 1px 6px 0px rgba(102, 200, 204, 0.30);">
              View project
            </Button>
            <Button href="https://www.dibarro.com" target="_blank" class="w-full border-[#345556] text-[#345556] hover:bg-[#345556]/10" variant="outline-card-project">
              View website
            </Button>
          </div>
        </div>
        <div class="sm:p-2.5">
          <picture>
            <source media="(min-width: 768px)" srcset="/img/dibarro-cover.webp" />
            <img
              class="pointer-events-none rounded-md object-cover h-full w-full sm:h-[290px] sm:object-left-top"
              src="/img/dibarro-cover-mobile.webp"
              alt="Project Cover - Di Barrò"
            />
          </picture>
        </div>
      </CardContent>
    </div>
  </Card>


  <Card class="w-full p-0.5 mb-8 rounded-xl bg-gradient-to-b from-[#E0D7F2] from-30% to-transparent">
    <div class="bg-background rounded-xl">
      <CardHeader class="flex flex-col py-5 px-5 md:pt-12 md:px-12 md:pb-8">
        <CardTitle class="text-[#3E3456]">
          Ideating a “mobile-first”<br class="hidden sm:block">One Page Website for a Dental Clinic
        </CardTitle>
      </CardHeader>

      <CustomSeparator class="w-full h-auto" stroke="#E0D7F2" />

      <CardContent class="relative px-5 pb-6 pt-0 md:p-0">
        <div class="py-5 sm:absolute sm:p-2.5 sm:top-8 sm:right-10 ">
          <div class="grid max-sm:grid-cols-2 max-sm:gap-x-4 sm:grid-rows-2 sm:gap-y-4">
            <Button href="/dentist-vierin" class="w-full text-[#3E3456] bg-[#E0D7F2] sm:hidden">
              View project
            </Button>
            <Button href="/dentist-vierin" class="hidden sm:block w-full text-[#3E3456] text-center" style="border-radius: 0.3125rem; background: radial-gradient(52.52% 50% at 52.52% 50%, #FFF 0%, #F1EBFF 100%); box-shadow: 0px 0px 11px 0px #F5F0FF, 0px 1px 6px 0px rgba(136, 102, 204, 0.30);">
              View project
            </Button>
            <Button href="https://www.dentista-aosta.com" target="_blank" class="w-full border-[#3E3456] text-[#3E3456] hover:bg-[#3E3456]/10" variant="outline-card-project">
              View website
            </Button>
          </div>
        </div>
        <div class="sm:p-2.5">
          <picture>
            <source media="(min-width: 768px)" srcset="/img/vierin-cover.webp" />
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


  <Card class="w-full p-0.5 mb-8 rounded-xl bg-gradient-to-b from-[#C3DFF7] from-30% to-transparent">
    <div class="bg-background rounded-xl">
      <CardHeader class="flex flex-col py-5 px-5 md:pt-12 md:px-12 md:pb-8">
        <CardTitle class="text-[#224767]">
          Creating a Digital Startup’s <br class="hidden sm:block">Design identity and Website
        </CardTitle>
      </CardHeader>

      <CustomSeparator class="w-full h-auto" stroke="#C3DFF7" />

      <CardContent class="relative px-5 pb-6 pt-0 md:p-0">
        <div class="py-5 sm:absolute sm:p-2.5 sm:top-8 sm:right-10 ">
          <div class="grid max-sm:grid-cols-2 max-sm:gap-x-4 sm:grid-rows-2 sm:gap-y-4">
            <Button href="/alpitude" class="w-full text-[#224767] bg-[#C3DFF7] sm:hidden">
              View project
            </Button>
            <Button href="/alpitude" class="hidden sm:block w-full text-[#224767] text-center" style="border-radius: 0.3125rem; background: radial-gradient(52.52% 50% at 52.52% 50%, #FFF 0%, #EBF5FF 100%); box-shadow: 0px 0px 11px 0px #F0F8FF, 0px 1px 6px 0px rgba(102, 156, 204, 0.30);">
              View project
            </Button>
            <Button href="https://www.alpitude.it" target="_blank" class="w-full border-[#224767] text-[#224767] hover:bg-[#224767]/10" variant="outline-card-project">
              View website
            </Button>
          </div>
        </div>
        <div class="sm:p-2.5">
          <picture>
            <source media="(min-width: 768px)" srcset="/img/alpitude-cover.webp" />
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
