<script lang="ts">
	import Container from "$components/site/Container.svelte";
	import { Icons } from "$components/site/icons";
	import { Chapter, Paragraph, Prose, Title, H1, H2 } from "$components/site/typography";
  import { Separator } from "$components/ui/separator";
	import Carousel from "$components/ui/carousel/Carousel.svelte";
	import AspectRatio from "$components/ui/aspect-ratio/AspectRatio.svelte";
	import Caption from "$components/site/Caption.svelte";
	import { Button } from "$components/ui/button";
	import { superzoomImgSrc } from "$lib/stores";

  let superzoom = false;
  function superzoomImg() {
    superzoomImgSrc.set('https://static.zara.net/photos///2024/V/0/1/p/2142/194/712/3/w/2798/2142194712_1_1_1.jpg?ts=1706789860553');
  }
</script>




<div class="h-full bg-gradient-to-br from-[#CBF9FB] to-[#66C8CC] md:h-[600px]">
  <Container class="relative pt-5 md:pt-11">

    <!-- Grid with 2 columns -->
    <div class="grid grid-rows-2 grid-cols-1 md:grid-rows-1 md:grid-cols-2 md:gap-x-8 md:h-[calc(600px-2.75rem)]">
      <div>
        <div class="flex justify-between md:flex-col">
          <Button href="/" class="w-fit -ml-2 md:mb-28" variant="header-link">
            <Icons.chevronLeft class="h-4 w-4 mr-2" />
            Back
          </Button>

          <Button href="https://www.dibarro.com/" class="w-fit" variant="white" target="_blank">
            <Icons.externalLink class="h-4 w-4 mr-2" />
            View website
          </Button>
        </div>

        <H1 id="project-title" class="text-accent-green-foreground mt-15 md:mt-8" variant="project-page">
          Designing a <br class="hidden md:block">
          Storybrand Website <br class="hidden md:block">
          for a family-owned winery
        </H1>

        <div class="text-accent-green-foreground font-semibold mt-8">
          <p class="text-lg font-semibold">Tools Used</p>
          <div class="flex text-base mt-1.5">
            <p>Figma</p>
            <p class="mx-2">•</p>
            <p>Photoshop</p>
          </div>
        </div>
      </div>

      <div class="relative overflow-visible max-md:mt-10 max-md:h-96">
        <picture>
          <source media="(min-width: 768px)" srcset="/img/winery-dibarro/hero-image.png" />
          <img
            class="absolute object-contain h-full w-full left-0 top-0 md:min-w-[672px] md:-right-12"
            src="/img/winery-dibarro/hero-image-mobile.png"
            alt="Computer prototype showing the Hero Section of the DiBarrò website"
          >
        </picture>
      </div>
    </div>
  </Container>
</div>

<Container>
  <!-- Chapter 0 -->
  <Chapter>
    <Prose>
      <Title>
        —— 0. Project
      </Title>
      <Paragraph>
        Lately I had the chance of working on Di Barrò’s new website as a UI UX designer.
        This family-owned winery had an outdated webpage that was located under a subdomain of a larger website,
        focused on promoting local wine products. The client was seeking a transformation in order to establish
        a new digital identity and achieve autonomy. Throughout the process, I maintained a close collaboration
        with a Web Developer during the development stage.
      </Paragraph>
    </Prose>

    <!-- 3 phone images -->
    <div class="relative w-full p-20 bg-[#CBF9FB] h-[500px] overflow-hidden">
      <img class="absolute -bottom-48 left-[25%] -rotate-[4deg]" src="/img/winery-dibarro/phone-mask-right.webp" alt="Mobile phone with homepage of the winery website" width="350px" />
      <img class="absolute -bottom-44 left-[40%]" src="/img/winery-dibarro/phone-mask-center.webp" alt="Mobile phone with homepage of the winery website" width="350px" />
      <img class="absolute -bottom-48 left-[55%] rotate-[4deg]" src="/img/winery-dibarro/phone-mask-left.webp" alt="Mobile phone with homepage of the winery website" width="350px" />
    </div>
  </Chapter>

  <!-- Chapter 1 -->
  <Chapter>
    <Prose>
      <Title>
        —— 1. Challenge
      </Title>
      <Paragraph>
        Since 2011, their digital presence was linked to others.
        The necessity was to properly tell their story, embracing their brand identity through a new website.
        I felt that it was the perfect opportunity to discover more about their world, and gain experience
        through new design challenges.
      </Paragraph>
    </Prose>

    <div class="relative w-full p-20 bg-[#CBF9FB] h-[500px] overflow-hidden">
      <div class="flex h-full w-full items-center justify-center">image here</div>
    </div>
  </Chapter>

  <!-- Chapter 2 -->
  <Chapter>
    <Prose>
      <Title>
        —— 2. Role & Design Process
      </Title>
      <Paragraph>
        I was responsible for the UX design process, researching, diagramming user flow, diagramming IA,
        producing exploratory wireframes and finally crafting high definition prototypes.
        After some meetings with client, I took time to review all the information gathered about the brand identity,
        user target and communicative intents.
      </Paragraph>
      <Paragraph>
        I conducted a heuristic UX analysis on the old webpage and the competitors’ websites identifying usability and
        accessibility issues thinking of solutions accordingly.
      </Paragraph>
    </Prose>

    <div class="relative w-full p-20 bg-[#CBF9FB] h-[500px] overflow-hidden">
      <div class="flex h-full w-full items-center justify-center">image here</div>
    </div>

    <Prose>
      <Paragraph>
        Designing wireframes and prototypes was an iterative process that evolved with each meeting as I had to consider
        the client standpoint and concerns.
        Through the whole process I cross-pollinated with the developer sharing my progresses, beeing deeply interestead
        in his constructive comments.
      </Paragraph>
    </Prose>
  </Chapter>

  <!-- Chapter 3 -->
  <Chapter>
    <Prose>
      <Title>
        —— 3. Users
      </Title>
      <Paragraph>
        The UX was designed for turists, people interested in visiting the winery and wine enthusiasts.
        After leading a Face To Face survey with some of the clients during an event I was able to distill some user objectives.
      </Paragraph>
    </Prose>

    <div class="relative w-full p-20 bg-[#CBF9FB] h-[500px] overflow-hidden">
      <div class="flex h-full w-full items-center justify-center">image here</div>
    </div>

    <Prose>
      <Paragraph>
        Taking into account all the information gathered I fabricated a user persona for the target user, a
        ”wine enthusiast visiting Valle d’Aosta”, who would be both viewing the products and trying to contact
        the winery to purchase or visit.
      </Paragraph>
    </Prose>

    <div class="relative w-full p-20 bg-[#CBF9FB] h-[500px] overflow-hidden">
      <div class="flex h-full w-full items-center justify-center">image here</div>
    </div>
  </Chapter>

  <!-- Chapter 4 -->
  <Chapter>
    <Prose>
      <Title>
        —— 4. Information Architecture & User Flow
      </Title>
    </Prose>

    <div class="relative w-full bg-[#CBF9FB] h-[500px] overflow-hidden">
      <!-- Create a button containing an image -->
      <button id="superzoom-btn" on:click={superzoomImg} class="{superzoom ? 'fixed z-[500] w-screen min-h-screen' : 'h-full w-full flex items-center justify-center'}">
        <img
          class="w-full h-auto"
          src="https://static.zara.net/photos///2024/V/0/1/p/2142/194/712/3/w/2798/2142194712_1_1_1.jpg?ts=1706789860553"
          alt="Information Architecture and User Flow diagram"
        />
      </button>
      <div class="flex h-full w-full items-center justify-center">image here</div>
    </div>
  </Chapter>

  <!-- Chapter 5 -->
  <Chapter>
    <Prose>
      <Title>
        —— 5. User Interface & Visual Design
      </Title>
      <Paragraph>
        In order to create a seamless experience for users the texts surrounded by photos required to stand out and be easy to read.
        With the brand guidelines and a vision in mind I chose a serif for headings and a clean sans for paragraphs to join a
        monochromatic design where colors stick out just from photos.
      </Paragraph>
    </Prose>

    <div class="relative w-full p-20 bg-[#CBF9FB] h-[500px] overflow-hidden">
      <div class="flex h-full w-full items-center justify-center">image here</div>
    </div>

    <div class="relative w-full p-20 bg-[#CBF9FB] h-[500px] overflow-hidden">
      <div class="flex h-full w-full items-center justify-center">image here</div>
    </div>

    <Prose>
      <Paragraph>
        Developing a wine identity page was both challenging and exciting.
        The product is spotlighted with a glowing animated stroke, introduced by its wine tasting notes and then if interested
        the user can dig deeper.
      </Paragraph>
    </Prose>

    <div class="relative w-full p-20 bg-[#CBF9FB] h-[500px] overflow-hidden">
      <div class="flex h-full w-full items-center justify-center">image here</div>
    </div>

    <Prose>
      <Paragraph>
        A recurring problem concerned the client, the Winery location wasn’t easy to reach and many got lost.
        To solve this situation we decided to add both written directions and a map with the right track highlighted.
      </Paragraph>
    </Prose>

    <div class="relative w-full p-20 bg-[#CBF9FB] h-[500px] overflow-hidden">
      <div class="flex h-full w-full items-center justify-center">image here</div>
    </div>

  </Chapter>
</Container>


















<!--
<div class="h-screen"></div>

<div>
  <div id="hero-section" class="mt-6 mb-14 bg-white dark:bg-muted/50 overflow-hidden">
    <Separator />
    <div class="relative overflow-hidden bg-white max-md:pb-6">
      <div class="hidden md:block absolute w-1/2 left-0 inset-y-0 bg-[#D3F7FB] z-0"></div>
      <div class="lg:max-w-[120rem] mx-auto">
        <div class="grid grid-cols-1 grid-rows-[1fr_auto] md:grid-cols-2 md:grid-rows-1 md:h-[475px] lg:h-[500px] xl:h-[600px]">
          <div class="relative">
            <picture>
              <source media="(min-width: 768px)" srcset="/img/winery-dibarro/hero-image.webp" />
              <img
                class="hero-image md:absolute md:top-0 md:bottom-0 md:right-0 md:h-full md:z-10 md:object-cover md:object-right pointer-events-none"
                src="/img/winery-dibarro/hero-image-mobile.webp"
                alt="Winery DiBarro hero illustration"
              >
            </picture>
          </div>
          <div class="flex flex-col space-y-6 my-auto max-md:px-6 md:pl-10 md:space-y-10 lg:pl-14 md:justify-center">
            <H1 id="hero-message" class="mt-10 md:mt-0" variant="project-page">
              Designing a Storybrand <br class="hidden md:block">Website for a family-<br class="hidden md:block">owned winery
            </H1>

            <div>
              <p class="font-semibold pb-2 md:pt-4 md:text-lg">Tools I used</p>
              <div class="flex space-x-4">
                <SkillIconWrapper class="bg-skill-blue w-fit">
                  <Icons.figma class="h-6 w-6 sm:h-8 sm:w-8" />
                </SkillIconWrapper>
                <SkillIconWrapper class="bg-skill-purple w-fit">
                  <Icons.photoshop class="h-6 w-6 sm:h-8 sm:w-8" />
                </SkillIconWrapper>
              </div>
            </div>

            <Button href="https://www.dibarro.com" target="_blank" class="w-fit" variant="outline">
              View website
              <Icons.externalLink class="h-4 w-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </div>
    <Separator />
  </div>

  <Container class="my-20 lg:my-24 max-w-prose">
    <h2 id="the-project" data-label="0. Project" class="scroll-m-20 pb-8 text-[2rem] leading-8 font-bold tracking-tight text-primary">
      —— 0. Project
    </h2>
    <p class="text-muted-foreground text-lg md:text-base">
      Lately I had the chance of working on Di Barrò’s new website as a UI UX designer.
      This family-owned winery had an outdated webpage that was located under a subdomain of a larger website,
      focused on promoting local wine products. The client was seeking a transformation in order to establish
      a new digital identity and achieve autonomy. Throughout the process, I maintained a close collaboration
      with a Web Developer during the development stage.
    </p>
  </Container>

  <Container class="my-20 lg:my-24 max-w-prose">
    <h2 id="the-challenge" data-label="1. Challenge" class="scroll-m-20 pb-8 text-[2rem] leading-8 font-bold tracking-tight text-primary">
      —— 1. Challenge
    </h2>
    <p class="text-muted-foreground text-lg md:text-base">
      Since 2011, their digital presence was linked to others.
      The necessity was to properly tell their story, embracing their brand identity through a new website.
      I felt that it was the perfect opportunity to discover more about their world, and gain experience
      through new design challenges.
    </p>
  </Container>

  <Carousel
    mobileOnly={true}
    ratio={2 / 3}
    photos={[
      "/img/winery-dibarro/phone-mask-left.webp",
      "/img/winery-dibarro/phone-mask-center.webp",
      "/img/winery-dibarro/phone-mask-right.webp"
    ]}
  />

  <Container class="hidden md:block">
    <div class="max-md:-mx-6 md:grid md:grid-cols-3 md:gap-x-6 my-6">
      <FocusCornersWrapper>
        <img class="h-[500px] md:h-auto md:w-full mx-auto pointer-events-none md:py-4" src="/img/winery-dibarro/phone-mask-left.webp" alt="" />
      </FocusCornersWrapper>
      <FocusCornersWrapper class="hidden md:block">
        <img class="h-[500px] md:h-auto md:w-full mx-auto pointer-events-none md:py-4" src="/img/winery-dibarro/phone-mask-center.webp" alt="" />
      </FocusCornersWrapper>
      <FocusCornersWrapper class="hidden md:block">
        <img class="h-[500px] md:h-auto md:w-full mx-auto pointer-events-none md:py-4" src="/img/winery-dibarro/phone-mask-right.webp" alt="" />
      </FocusCornersWrapper>
    </div>
  </Container>

  <Container class="my-20 lg:my-24">
    <H2 id="challenge-accepted">Challenge Accepted</H2>
    <p class="text-muted-foreground text-lg md:text-xl">
      I analysed their brand and took a peek on competitors. Once started sketching and wireframing the path
      to accomplish the task was visually shaped.
    </p>
  </Container>

  <FocusCornersWrapper
    class="h-[460px] md:h-[40vh] lg:h-[min(65vh,_600px)]"
    animation="img-hover-scroll"
    twBottomLeftCornerColor="text-slate-200"
    twBottomRightCornerColor="text-slate-200"
    twTopLeftCornerColor="text-slate-200"
    twTopRightCornerColor="text-slate-200"
  >
    <div
      class="background-img vertical-scrolling"
      style="
        --scrollable-img-url: url(/img/winery-dibarro/scrollable.webp);
        --scrollable-img-url-mobile: url(/img/winery-dibarro/scrollable-mobile.webp);
      "
    >
  </FocusCornersWrapper>
  <Caption text="tap to scroll" class="text-skill-green-foreground md:hidden" />

  <Container class="my-20 lg:my-24">
    <p class="text-muted-foreground text-lg mb-2 md:text-xl md:mb-4">
      To create a seamless experience for users the texts surrounded by photos required to stand out and be
      easy to read.
    </p>
    <p class="text-muted-foreground text-lg md:text-xl">
      With the brand guidelines and a vision in mind I chose a serif for headings and a clean sans for paragraphs
      to join a monochromatic design where colors stick out just from photos.
    </p>
  </Container>

  <Carousel
    mobileOnly={true}
    ratio={390 / 440}
    photos={[
      "/img/winery-dibarro/zodiak-palette-mobile.webp",
      "/img/winery-dibarro/zodiak-example-mobile.webp",
      "/img/winery-dibarro/satoshi-palette-mobile.webp",
      "/img/winery-dibarro/satoshi-example-mobile.webp"
    ]}
  />

  <Container class="hidden md:block">
    <div class="md:rounded-md md:space-y-24">
      <FocusCornersWrapper>
        <img class="h-full w-full pointer-events-none" src="/img/winery-dibarro/zodiak-palette.webp" alt="" />
      </FocusCornersWrapper>
      <FocusCornersWrapper>
        <img class="h-full w-full pointer-events-none" src="/img/winery-dibarro/satoshi-palette.webp" alt="" />
      </FocusCornersWrapper>
    </div>
  </Container>

  <Container class="mt-20 lg:mt-24">
    <p class="text-muted-foreground text-lg mb-2 md:text-xl md:max-w-5xl md:mb-4">
      Developing a wine identity page was both challenging and exciting.
    </p>
    <p class="text-muted-foreground text-lg mb-20 md:text-xl md:mb-24">
      The product is spotlighted with a glowing animated stroke, introduced by its wine tasting notes and then
      if interested the user can dig deeper.
    </p>

    <div class="max-md:-mx-6">
      <div class="md:hidden">
        <AspectRatio ratio={390 / 440}>
          <img class="h-full w-full pointer-events-none" src="/img/winery-dibarro/winery-pattern-mobile.webp" alt="" />
        </AspectRatio>
      </div>
      <div class="hidden md:block md:rounded-md md:space-y-14 md:overflow-hidden">
        <FocusCornersWrapper>
          <img class="h-full w-full pointer-events-none" src="/img/winery-dibarro/winery-pattern.webp" alt="" />
        </FocusCornersWrapper>
      </div>
    </div>
  </Container>


  <Container class="my-20 lg:my-24">
    <p class="text-muted-foreground text-lg mb-2 md:text-xl md:max-w-5xl md:mb-4">
      A recurring problem concerned the client, the Winery location wasn’t easy to reach and many got lost.
    </p>
    <p class="text-muted-foreground text-lg mb-20 md:text-xl md:mb-24">
      To solve this situation we decided to add both written directions and a map with the right track highlighted.
    </p>

    <div class="max-md:-mx-6">
      <div class="md:hidden">
        <AspectRatio ratio={390 / 440}>
          <img class="h-full w-full pointer-events-none" src="/img/winery-dibarro/map-mobile.webp" alt="" />
        </AspectRatio>
      </div>
      <div class="hidden md:block md:rounded-md md:space-y-14 md:overflow-hidden">
        <FocusCornersWrapper>
          <img class="h-full w-full pointer-events-none" src="/img/winery-dibarro/map.webp" alt="" />
        </FocusCornersWrapper>
      </div>
    </div>
  </Container>
</div> -->
