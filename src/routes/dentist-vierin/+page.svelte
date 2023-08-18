<script lang="ts">
	import Container from "$components/site/Container.svelte";
	import FocusCornersWrapper from "$components/site/FocusCornersWrapper.svelte";
	import { Icons } from "$components/site/icons";
	import { H1, H2 } from "$components/site/typography";
	import { AspectRatio } from "$components/ui/aspect-ratio";
	import { Carousel } from "$components/ui/carousel";
	import { Separator } from "$components/ui/separator";
	import { SkillIconWrapper } from "$components/ui/skill";


</script>


<!-- Hero Section -->
<div id="hero-section" class="my-14 bg-muted dark:bg-muted/50 overflow-hidden">
  <Separator />
  <div class="relative overflow-hidden max-md:pb-6">
    <div class="hidden md:block absolute w-1/2 left-0 inset-y-0 bg-[#CFFDFF] z-0"></div>
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
            Dental <br class="hidden md:block">
            Care Clinic <br class="hidden md:block">
            Website
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
        </div>
      </div>
    </div>
  </div>
  <Separator />
</div>

<!-- The Challenge -->
<Container class="my-20 lg:my-24">
  <H2 id="the-challenge">The Challenge</H2>
  <p class="text-muted-foreground text-lg mb-6 md:text-xl md:mb-8">
    Vierin Dental Office was looking for a mobile first and easy to read website to reach more clients.
    A single page with a simple user experience, understandable to all age groups using the website for
    the first time.
  </p>
</Container>

<Carousel
  mobileOnly={true}
  ratio={2 / 3}
  photos={[
    "/img/winery-dibarro/phone-mask-left.png",
    "/img/winery-dibarro/phone-mask-center.png",
    "/img/winery-dibarro/phone-mask-right.png"
  ]}
/>

<Container class="hidden md:block">
  <div class="max-md:-mx-6 md:grid md:grid-cols-3 md:gap-x-6 my-6">
    <FocusCornersWrapper>
      <img class="h-[500px] md:h-auto mx-auto pointer-events-none" src="/img/winery-dibarro/phone-mask-left.png" alt="">
    </FocusCornersWrapper>
    <FocusCornersWrapper class="hidden md:block">
      <img class="h-[500px] md:h-auto mx-auto pointer-events-none" src="/img/winery-dibarro/phone-mask-center.png" alt="">
    </FocusCornersWrapper>
    <FocusCornersWrapper class="hidden md:block">
      <img class="h-[500px] md:h-auto mx-auto pointer-events-none" src="/img/winery-dibarro/phone-mask-right.png" alt="">
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
        <img class="h-full w-full pointer-events-none" src="/img/dentist-vierin/team-siluette.webp" alt="">
      </FocusCornersWrapper>
    </div>
  </div>
</Container>


