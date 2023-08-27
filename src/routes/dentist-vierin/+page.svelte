<script lang="ts">
	import { browser } from "$app/environment";
	import Caption from "$components/site/Caption.svelte";
	import Container from "$components/site/Container.svelte";
	import FocusCornersWrapper from "$components/site/FocusCornersWrapper.svelte";
	import Lottie from "$components/site/Lottie.svelte";
	import { Icons } from "$components/site/icons";
	import { H1, H2 } from "$components/site/typography";
	import { AspectRatio } from "$components/ui/aspect-ratio";
	import { Button } from "$components/ui/button";
	import { Carousel } from "$components/ui/carousel";
	import { Separator } from "$components/ui/separator";
	import { SkillIconWrapper } from "$components/ui/skill";


</script>


<!-- Hero Section -->
<div id="hero-section" class="my-14 bg-white dark:bg-muted/50 overflow-hidden">
  <Separator />
  <div class="relative overflow-hidden bg-white max-md:pb-6">
    <div class="hidden md:block absolute w-1/2 left-0 inset-y-0 bg-[#E9E5FC] z-0"></div>
    <div class="lg:max-w-[120rem] mx-auto">
      <div class="grid grid-cols-1 grid-rows-[1fr_auto] md:grid-cols-2 md:grid-rows-1 md:h-[475px] lg:h-[500px] xl:h-[600px]">
        <div class="relative">
          <picture>
            <source media="(min-width: 768px)" srcset="/img/dentist-vierin/hero-image.webp" />
            <img
              class="hero-image md:absolute md:top-0 md:bottom-0 md:right-0 md:h-full md:z-10 md:object-cover md:object-right pointer-events-none"
              src="/img/dentist-vierin/hero-image-mobile.webp"
              alt="Dentist Vierin hero illustration"
            >
          </picture>
        </div>
        <div class="flex flex-col space-y-6 my-auto max-md:px-6 md:pl-10 md:space-y-10 lg:pl-14 md:justify-center">
          <H1 id="hero-message" class="mt-10 md:mt-0" variant="project-page">
            Ideating a “mobile-first” <br class="hidden md:block">One Page Website for a <br class="hidden md:block">Dental Clinic
          </H1>

          <div>
            <p class="text-muted-foreground font-semibold pb-2 md:pt-4 md:text-lg">Tools I used</p>
            <div class="flex space-x-4">
              <SkillIconWrapper class="bg-skill-blue w-fit">
                <Icons.figma class="h-6 w-6 md:h-8 md:w-8" />
              </SkillIconWrapper>
              <SkillIconWrapper class="bg-skill-sky w-fit">
                <Icons.afterEffects class="h-6 w-6 md:h-8 md:w-8" />
              </SkillIconWrapper>
              <SkillIconWrapper class="bg-skill-purple w-fit">
                <Icons.photoshop class="h-6 w-6 md:h-8 md:w-8" />
              </SkillIconWrapper>
              <SkillIconWrapper class="bg-skill-blue w-fit">
                <Icons.illustrator class="h-6 w-6 md:h-8 md:w-8" />
              </SkillIconWrapper>
            </div>
          </div>

          <Button href="https://www.dentista-aosta.com" target="_blank" class="w-fit" variant="outline">
            View website
            <Icons.externalLink class="h-4 w-4 ml-2" />
          </Button>
        </div>
      </div>
    </div>
  </div>
  <Separator />
</div>

<!-- The Challenge -->
<Container class="my-20 lg:my-24">
  <H2 id="the-challenge">The Challenge</H2>
  <p class="text-muted-foreground text-lg md:text-xl">
    Vierin Dental Clinic was looking for a mobile first website, a one-page with a effortless user experience.
    The aim was to reach more clients and gain trust at first sight.
  </p>
</Container>

<Carousel
  mobileOnly={true}
  ratio={2 / 3}
  photos={[
    "/img/dentist-vierin/phone-mask-left.webp",
    "/img/dentist-vierin/phone-mask-center.webp",
    "/img/dentist-vierin/phone-mask-right.webp"
  ]}
/>

<Container class="hidden md:block">
  <div class="max-md:-mx-6 md:grid md:grid-cols-3 md:gap-x-6 my-6">
    <FocusCornersWrapper>
      <img class="h-[500px] md:h-auto md:w-full mx-auto pointer-events-none md:py-4" src="/img/dentist-vierin/phone-mask-left.webp" alt="">
    </FocusCornersWrapper>
    <FocusCornersWrapper class="hidden md:block">
      <img class="h-[500px] md:h-auto md:w-full mx-auto pointer-events-none md:py-4" src="/img/dentist-vierin/phone-mask-center.webp" alt="">
    </FocusCornersWrapper>
    <FocusCornersWrapper class="hidden md:block">
      <img class="h-[500px] md:h-auto md:w-full mx-auto pointer-events-none md:py-4" src="/img/dentist-vierin/phone-mask-right.webp" alt="">
    </FocusCornersWrapper>
  </div>
</Container>


<!-- Challenge Accepted -->
<Container class="my-20 lg:my-24">
  <H2 id="challenge-accepted">Challenge Accepted</H2>
  <p class="text-muted-foreground text-lg mb-2 md:text-xl md:mb-4">
    After some research, brainstorming sketches and weekly meetings with the client, the website shaped up nicely.
  </p>
  <p class="text-muted-foreground text-lg md:text-xl mb-20 md:mb-24">
    The goal was to recreate an initial encounter scenario between users and the Dental Office, improving the user experience
    (UX) to facilitate access to content.
  </p>

  <div class="max-md:-mx-6 mb-20 md:mb-24">
    <div class="md:hidden">
      <AspectRatio ratio={390 / 440}>
        <img class="h-full w-full pointer-events-none" src="/img/dentist-vierin/bubble-phone-mobile.webp" alt="">
      </AspectRatio>
    </div>
    <div class="hidden md:block md:rounded-md md:space-y-14 md:overflow-hidden">
      <FocusCornersWrapper>
        <img class="h-full w-full pointer-events-none" src="/img/dentist-vierin/bubble-phone.webp" alt="">
      </FocusCornersWrapper>
    </div>
  </div>
  <p class="text-muted-foreground text-lg mb-20 md:mb-24 md:text-xl">
    Upon entering the website the Hero Section warmly greets users through a hero message apposed to an illustration showcasing
    one of their most common services, oral hygiene.
  </p>
  <div class="max-md:-mx-6 mb-20 md:mb-24">
    <Carousel
      mobileOnly={true}
      ratio={390 / 440}
      photos={[
        "/img/dentist-vierin/illustration-palette-mobile-1.webp",
        "/img/dentist-vierin/illustration-palette-mobile-2.webp",
      ]}
    />
    <div class="hidden md:block md:rounded-md md:space-y-14 md:overflow-hidden">
      <FocusCornersWrapper>
        <img class="h-full w-full pointer-events-none" src="/img/dentist-vierin/illustration-palette.webp" alt="">
      </FocusCornersWrapper>
    </div>
  </div>
  <p class="text-muted-foreground text-lg mb-20 md:mb-24 md:text-xl">
    The Dental Office introduces itself and its team, providing employees’ faces and names, by horizontally scrolling, users can
    develop familiarity with the individuals who will assist them.
  </p>
  <div class="max-md:-mx-6 mb-20 md:mb-24">
    <!-- Mobile Only -->
    <FocusCornersWrapper
      class="h-[460px] w-full hide-scrollbar md:hidden"
      animation="img-hover-scroll"
    >
      <div class="background-img horizontal-scrolling" style="--scrollable-img-url-mobile: url(/img/dentist-vierin/team-siluette-scroll-mobile.webp);">
    </FocusCornersWrapper>
    <Caption text="tap to scroll" class="text-skill-purple-foreground md:hidden" />
    <!-- Desktop Only -->
    <div class="hidden md:block md:rounded-md md:space-y-14 md:overflow-hidden">
      <FocusCornersWrapper>
        <img class="h-full w-full pointer-events-none" src="/img/dentist-vierin/team-siluette.webp" alt="">
      </FocusCornersWrapper>
    </div>
  </div>
  <p class="text-muted-foreground text-lg mb-20 md:mb-24 md:text-xl">
    A grid of cards presents all the services, each card contains a comprehensive description along with a customised animated icon.
    Throughout the design process, I encountered some challenges in striking the right personality choice balanced between
    professionalism and fun.
  </p>
</Container>

<Separator />
<FocusCornersWrapper
  class="h-[460px] md:h-[40vh] lg:h-[min(65vh,_600px)]"
  animation="img-hover-scroll"
>
  <div
    class="background-img vertical-scrolling"
    style="
      --scrollable-img-url: url(/img/dentist-vierin/scrollable.webp);
      --scrollable-img-url-mobile: url(/img/dentist-vierin/scrollable-mobile.webp);
    "
  >
</FocusCornersWrapper>
<Separator />
<Caption text="tap to scroll" class="text-skill-purple-foreground md:hidden" />

<Container class="my-20 lg:my-24">
  <p class="text-muted-foreground text-lg md:text-xl">
    By incorporating a rounded sans-serif font, a color scheme consisting of blue-gray with hints of light teal, and employing a small
    border radius, I was able to achieve a design that closely aligned with my vision.
  </p>
</Container>

<Carousel
  mobileOnly={true}
  ratio={390 / 440}
  photos={[
    "/img/dentist-vierin/font-palette-mobile-1.webp",
    "/img/dentist-vierin/font-palette-mobile-2.webp",
    "/img/dentist-vierin/font-palette-mobile-3.webp",
    "/img/dentist-vierin/font-palette-mobile-4.webp",
    "/img/dentist-vierin/font-palette-mobile-5.webp",
    "/img/dentist-vierin/font-palette-mobile-6.webp"
  ]}
/>

<Container class="hidden md:block md:space-y-24">
  <FocusCornersWrapper class="md:rounded-md">
    <img class="h-full w-full pointer-events-none" src="/img/dentist-vierin/nunito-palette.webp" alt="">
  </FocusCornersWrapper>
  <FocusCornersWrapper class="md:rounded-md">
    <img class="h-full w-full pointer-events-none" src="/img/dentist-vierin/nunito-sans-palette.webp" alt="">
  </FocusCornersWrapper>
</Container>

<Container class="mt-20 lg:mt-24">
  <p class="text-muted-foreground text-lg mb-2 md:text-xl md:max-w-5xl md:mb-4">
    Additionally, the utilization of flat illustrations and icons significantly contributed to the overall aesthetic.
  </p>
  <p class="text-muted-foreground text-lg mb-20 md:text-xl md:mb-24">
    Simplifying the services into icons posed a hitch. However, I successfully tackled it by looping simple movements to reveal
    specific situations.
  </p>
  <!-- Mobile -->
  <div class="-mx-6 mb-20 md:hidden">
    <FocusCornersWrapper>
      <AspectRatio ratio={390 / 440}>
        <div class="flex justify-center items-center bg-[#E9E3FB] h-full w-full">
          <div class="grid grid-cols-2 gap-4">
            <Lottie jsonAnimationName="filler" />
            <Lottie jsonAnimationName="implantologia" />
            <Lottie jsonAnimationName="odontoiatria" />
            <Lottie jsonAnimationName="ortodonzia" />
            <Lottie jsonAnimationName="protossido" />
            <Lottie jsonAnimationName="sbiancamento" />
          </div>
        </div>
      </AspectRatio>
    </FocusCornersWrapper>
  </div>
  <!-- Desktop -->
  <div class="hidden md:block md:mb-24">
    <FocusCornersWrapper>
      <AspectRatio ratio={2376 / 972}>
        <div class="grid grid-cols-2 bg-[#E9E3FB] h-full w-full md:rounded-md md:px-6 lg:px-12 xl:px-16">
          <div class="grid grid-cols-3 m-auto gap-4 lg:gap-6">
            <Lottie jsonAnimationName="filler" />
            <Lottie jsonAnimationName="implantologia" />
            <Lottie jsonAnimationName="odontoiatria" />
            <Lottie jsonAnimationName="ortodonzia" />
            <Lottie jsonAnimationName="protossido" />
            <Lottie jsonAnimationName="sbiancamento" />
          </div>
          <div class="flex justify-center items-center">
            <h3 class="font-nunito-sans font-bold text-3xl">
              Each icon was <br>
              animated in After <br>
              Effects and exported <br>
              with Bodymovin
            </h3>
          </div>
        </div>
      </AspectRatio>
    </FocusCornersWrapper>
  </div>
  <p class="text-muted-foreground text-lg mb-20 md:text-xl md:max-w-5xl md:mb-24">
    To facilitate user interactions, quick action links such as contact or locate the Dental Office are conveniently placed
    on the top navigation bar. For the mobile version, a floating button is consistently visible in the lower right corner
    of the screen. This button serves as a direct call trigger to the Dental Office, proving particularly useful in
    emergency situations.
  </p>
</Container>

<Carousel
  mobileOnly={true}
  ratio={390 / 440}
  photos={[
    "/img/dentist-vierin/floating-button-1.webp",
    "/img/dentist-vierin/floating-button-2.webp",
    "/img/dentist-vierin/floating-button-3.webp"
  ]}
/>

<Container class="mb-20 md:mb-24">
  <FocusCornersWrapper class="hidden md:block md:rounded-md">
    <img class="h-full w-full pointer-events-none" src="/img/dentist-vierin/floating-button.webp" alt="">
  </FocusCornersWrapper>
</Container>



