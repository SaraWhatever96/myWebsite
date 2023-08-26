<script lang="ts">
	import Caption from "$components/site/Caption.svelte";
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
<div id="hero-section" class="my-14 bg-white dark:bg-muted/50 overflow-hidden">
  <Separator />
  <div class="relative overflow-hidden bg-white max-md:pb-6">
    <div class="hidden md:block absolute w-1/2 left-0 inset-y-0 bg-[#CFE4FB] z-0"></div>
    <div class="lg:max-w-[120rem] mx-auto">
      <div class="grid grid-cols-1 grid-rows-[1fr_auto] md:grid-cols-2 md:grid-rows-1 md:h-[475px] lg:h-[500px] xl:h-[600px]">
        <div class="relative">
          <picture>
            <source media="(min-width: 768px)" srcset="/img/alpitude/hero-image.webp" />
            <img
              class="hero-image md:absolute md:top-0 md:bottom-0 md:right-0 md:h-full md:z-10 md:object-cover md:object-right pointer-events-none"
              src="/img/alpitude/hero-image-mobile.webp"
              alt="Alpitude hero illustration"
            >
          </picture>
        </div>
        <div class="flex flex-col space-y-6 my-auto max-md:px-6 md:pl-10 md:space-y-10 lg:pl-14 md:justify-center">
          <H1 id="hero-message" class="mt-10 md:mt-0" variant="project-page">
            Alpitude <br class="hidden md:block">
            Sports Outdoor <br class="hidden md:block">
            Website
          </H1>

          <div>
            <p class="text-muted-foreground font-semibold pb-2 md:pt-4 md:text-lg">Tools I used</p>
            <div class="flex space-x-4">
              <SkillIconWrapper class="bg-skill-blue w-fit">
                <Icons.figma class="h-6 w-6 sm:h-8 sm:w-8" />
              </SkillIconWrapper>
              <SkillIconWrapper class="bg-skill-purple w-fit">
                <Icons.photoshop class="h-6 w-6 sm:h-8 sm:w-8" />
              </SkillIconWrapper>
              <SkillIconWrapper class="bg-skill-green w-fit">
                <Icons.sketch class="h-6 w-6 sm:h-8 sm:w-8" />
              </SkillIconWrapper>
              <SkillIconWrapper class="bg-skill-blue w-fit">
                <Icons.illustrator class="h-6 w-6 sm:h-8 sm:w-8" />
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
  <p class="text-muted-foreground text-lg mb-2 md:text-xl md:mb-4">
    I created this startup with other three colleagues in September 2019, each one with his skills and experience
    made this project possible.
  </p>
  <p class="text-muted-foreground text-lg md:text-xl">
    Specifically, I took charge of developing the brand identity, as well as crafting the user experience and interface.
  </p>
</Container>

<Carousel
  mobileOnly={true}
  ratio={2 / 3}
  photos={[
    "/img/alpitude/phone-mask-left.webp",
    "/img/alpitude/phone-mask-center.webp",
    "/img/alpitude/phone-mask-right.webp"
  ]}
/>

<Container class="hidden md:block">
  <div class="max-md:-mx-6 md:grid md:grid-cols-3 md:gap-x-6 my-6">
    <FocusCornersWrapper>
      <img class="h-[500px] md:h-auto md:w-full mx-auto pointer-events-none md:py-4" src="/img/alpitude/phone-mask-left.webp" alt="">
    </FocusCornersWrapper>
    <FocusCornersWrapper class="hidden md:block">
      <img class="h-[500px] md:h-auto md:w-full mx-auto pointer-events-none md:py-4" src="/img/alpitude/phone-mask-center.webp" alt="">
    </FocusCornersWrapper>
    <FocusCornersWrapper class="hidden md:block">
      <img class="h-[500px] md:h-auto md:w-full mx-auto pointer-events-none md:py-4" src="/img/alpitude/phone-mask-right.webp" alt="">
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
</Container>

<Carousel
  mobileOnly={true}
  ratio={390 / 440}
  photos={[
    "/img/alpitude/hero-winter-palette-mobile-1.webp",
    "/img/alpitude/hero-winter-palette-mobile-2.webp",
    "/img/alpitude/hero-summer-palette-mobile-1.webp",
    "/img/alpitude/hero-summer-palette-mobile-2.webp",
  ]}
/>

<Container class="hidden md:block md:space-y-24">
  <FocusCornersWrapper class="md:rounded-md">
    <img class="h-full w-full pointer-events-none" src="/img/alpitude/hero-winter-palette.webp" alt="">
  </FocusCornersWrapper>
  <FocusCornersWrapper class="md:rounded-md">
    <img class="h-full w-full pointer-events-none" src="/img/alpitude/hero-summer-palette.webp" alt="">
  </FocusCornersWrapper>
</Container>

<Container class="mt-20 lg:mt-24">
  <p class="text-muted-foreground text-lg mb-2 md:text-xl md:max-w-5xl md:mb-4">
    Creating a homepage that could introduce the project was knotty. On second thoughts I think we could have done differently. A better
    choice would have been to incorporate numerical indicators, effectively showing the range of available options, and a tagline
    encouraging the user to research an activity at once.
  </p>
  <p class="text-muted-foreground text-lg mb-20 md:text-xl md:mb-24">
    The search page was planned with the intention of enabling users to easily filter and preview various activities.
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
      --scrollable-img-url: url(/img/alpitude/scrollable.webp);
      --scrollable-img-url-mobile: url(/img/alpitude/scrollable-mobile.webp);
    "
  >
</FocusCornersWrapper>
<Separator />
<Caption text="tap to scroll" class="text-skill-blue-foreground md:hidden" />

<Container class="my-20 lg:my-24">
  <p class="text-muted-foreground text-lg mb-2 md:text-xl md:max-w-5xl md:mb-4">
    The real challenge was understanding how better we could organize lots of informations creating a seamless experience for users.
  </p>
  <p class="text-muted-foreground text-lg mb-2 md:text-xl md:max-w-5xl md:mb-4">
    Upon selecting a card among others, the user lands on a page where he can find several technical informations.
  </p>
  <p class="text-muted-foreground text-lg mb-2 md:text-xl md:max-w-5xl md:mb-4">
    User can save activities in the profile page after creating an account.
  </p>
  <p class="text-muted-foreground text-lg mb-20 md:text-xl md:mb-24">
    In order to give a personal touch to their profile there is a colourful avatar set to choose from.
  </p>
  <div class="-mx-6 md:hidden">
    <AspectRatio ratio={390 / 440}>
      <img class="h-full w-full pointer-events-none" src="/img/alpitude/profile-page-mobile.webp" alt="">
    </AspectRatio>
  </div>
</Container>

<!-- Mobile -->
<FocusCornersWrapper
  class="h-[460px] md:hidden"
  animation="img-hover-scroll"
>
  <div
    class="background-img vertical-scrolling"
    style="
      --scrollable-img-url-mobile: url(/img/alpitude/alpituders-mobile.webp);
    "
  >
</FocusCornersWrapper>
<Caption text="tap to scroll" class="text-skill-blue-foreground mb-20 md:hidden" />

<!-- Desktop -->
<AspectRatio ratio={3456 / 1748} class="hidden md:block md:mb-24">
  <img class="h-full w-full pointer-events-none" src="/img/alpitude/alpituders.webp" alt="List of avatars (also called Alpituders) to choose from">
</AspectRatio>
