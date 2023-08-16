<script lang="ts">
	import FocusCornersWrapper from "$components/site/FocusCornersWrapper.svelte";
	import Container from "$components/site/Container.svelte";
	import { Icons } from "$components/site/icons";
	import { H1, H2 } from "$components/site/typography";
  import { Separator } from "$components/ui/separator";
	import { SkillIconWrapper } from "$components/ui/skill";
	import AspectRatio from "$components/ui/aspect-ratio/AspectRatio.svelte";
	import Carousel from "$components/ui/carousel/Carousel.svelte";
</script>

<!-- Hero Section -->
<div id="hero-section" class="my-14 bg-muted dark:bg-muted/50 overflow-hidden">
  <Separator />
  <div class="relative overflow-hidden">
    <div class="hidden md:block absolute w-1/2 left-0 inset-y-0 bg-[#CFFDFF] z-0"></div>
    <div class="lg:max-w-[120rem] mx-auto">
      <div class="grid grid-cols-1 grid-rows-[1fr_auto] md:grid-cols-2 md:grid-rows-1 md:h-[475px] lg:h-[500px] xl:h-[600px]">
        <div class="relative">
          <picture>
            <source media="(min-width: 768px)" srcset="/img/winery-dibarro/hero-image.png" />
            <img
              class="hero-image md:absolute md:top-0 md:bottom-0 md:right-0 md:h-full md:z-10 md:object-cover md:object-right pointer-events-none"
              src="/img/winery-dibarro/hero-image-mobile.png"
              alt=""
            >
          </picture>
        </div>
        <div class="flex flex-col space-y-6 my-auto max-md:px-6 md:pl-10 md:space-y-10 lg:pl-14 md:justify-center">
          <H1 id="hero-message" class="mt-10 md:mt-0" variant="project-page">
            Dark Themed <br />
            Winery Website
          </H1>

          <div>
            <p class="text-muted-foreground font-semibold pb-2 md:pt-4 md:text-lg">Tools I used</p>
            <div class="flex space-x-4">
              <SkillIconWrapper class="bg-skill-blue w-fit" size="sm">
                <Icons.figma class="h-8 w-8" />
              </SkillIconWrapper>
              <SkillIconWrapper class="bg-skill-purple w-fit" size="sm">
                <Icons.photoshop class="h-8 w-8" />
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
<Container class="mt-20 lg:mt-24">
  <H2 id="the-challenge">The Challenge</H2>
  <p class="text-muted-foreground text-lg mb-6 md:text-xl md:mb-8">
    Di barrò Winery wanted an appealing storytelling website to introduce their family business and their
    products reaching more clients, balancing narrative and photos in a dark themed experience.
  </p>
  <Separator class="hidden md:block" />
</Container>

<FocusCornersWrapper class="md:hidden" animation="none">
  <Carousel
    ratio={2 / 3}
    photos={[
      "/img/winery-dibarro/phone-mask-left.png",
      "/img/winery-dibarro/phone-mask-center.png",
      "/img/winery-dibarro/phone-mask-right.png"
    ]}
  />
</FocusCornersWrapper>

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
  <Separator class="hidden md:block" />
</Container>

<!-- Challenge Accepted -->
<Container class="mt-20 lg:mt-24">
  <H2 id="challenge-accepted">Challenge Accepted</H2>
  <p class="text-muted-foreground text-lg mb-6 md:text-xl md:mb-8">
    I analysed their brand and took a peek on competitors. Once started sketching and wireframing the path
    to accomplish the task was visually shaped.
  </p>
</Container>

<FocusCornersWrapper
  class="h-[400px] md:h-[70vh] bg-slate-950"
  animation="img-hover-scroll"
  twBottomLeftCornerColor="text-slate-200"
  twBottomRightCornerColor="text-slate-200"
  twTopLeftCornerColor="text-slate-200"
  twTopRightCornerColor="text-slate-200"
>
  <div class="background-img">
</FocusCornersWrapper>

<Container class="mt-10 lg:mt-24">
  <p class="text-muted-foreground text-lg mb-6 md:text-xl md:mb-8">
    To create a seamless experience for users the texts surrounded by photos required to stand out and be
    easy to read.
  </p>

  <Separator />

  <div class="my-6 md:grid md:grid-cols-2 -mx-6">
    <!-- <FocusCornersWrapper
      class="bg-lilla md:rounded-md"
      twBottomLeftCornerColor="text-slate-200"
    > -->
    <Carousel
      photos={[
        "/img/winery-dibarro/philosophy-section.png",
        "/img/winery-dibarro/hero-image.png"
      ]}
    />
    <!-- </FocusCornersWrapper> -->
    <div class="h-full w-full flex items-center max-md:pt-10 px-6 lg:px-8">
      <p class="text-muted-foreground text-lg md:text-xl md:pl-10 lg:pl-14">
        With the brand guidelines and a vision in mind I chose a serif for headings and a clean sans for
        paragraphs to join a monochromatic design where colors stick out just from photos.
      </p>
    </div>
  </div>
  <Separator />
</Container>

<div class="h-full mt-8 bg-gradient-to-r from-skill-purple to-skill-sky">
  <Container class="px-0 max-w-5xl">
    <FocusCornersWrapper
      twBottomLeftCornerColor="text-slate-200 md:text-foreground"
      twBottomRightCornerColor="text-slate-200 md:text-foreground"
      twTopLeftCornerColor="text-slate-200 md:text-foreground"
      twTopRightCornerColor="text-slate-200 md:text-foreground"
    >
      <picture>
        <source media="(min-width: 768px)" srcset="/img/winery-dibarro/wine-detail-section.png" />
        <img
          class="md:px-20 pointer-events-none"
          src="/img/winery-dibarro/pattern-mobile.png"
          alt=""
        >
      </picture>
    </FocusCornersWrapper>
  </Container>
</div>


<Container class="mt-10 lg:mt-24">
  <p class="text-muted-foreground text-lg mb-2 md:text-xl md:max-w-5xl md:mb-4">
    Developing a wine identity page was both challenging and exciting.
  </p>
  <p class="text-muted-foreground text-lg mb-6 md:text-xl md:mb-8">
    The product is spotlighted with a glowing animated stroke, introduced by its wine tasting notes and then
    if interested the user can dig deeper.
  </p>
</Container>
