<script lang="ts">
  import {
    H1,
    H2
  } from "$components/site/typography";
  import HeroLines from "$lib/components/site/HeroLines.svelte";
  import { Accordion } from "$components/ui/accordion";
  import {
    SkillList,
    SkillItem,
    SkillName,
    SkillContent,
    SkillCategory,
    SkillIconWrapper,
    SkillDescription,
    SkillYearsOfExperience
  } from "$components/ui/skill";
	import {
    Card,
    CardHeader,
    CardTitle,
    CardContent,
  } from "$components/ui/card";
  import { Video } from "$components/ui/video"
	import { Icons } from "$components/site/icons";
	import { Button } from "$components/ui/button";
	import { Separator } from "$components/ui/separator";
  import Container from "$components/site/Container.svelte";
  import { balancer } from "svelte-action-balancer";
	import { AspectRatio } from "$components/ui/aspect-ratio";
	import {
    FirstWave,
    SecondWave,
    ThirdWave,
    ClosingWave
  } from "$components/site/waves";
	import type { Question } from "$lib/types/question";
	import SealAnimation from "$components/site/SealAnimation.svelte";
	import CustomSeparator from "$components/ui/card/CustomSeparator.svelte";


  let pinkSealReversed = false;
  let blueSealReversed = false;
  let goldSealReversed = false;
  let activeVideo: string = 'illustration-1';
  const questions: Question[] = [
		{
			id: 'question-1',
			title: 'Who are you?',
			description: 'I\'m a design enthusiast, an optimistic visionary who thrives on challenges and sees opportunities in problem-solving. I\'m curious, an avid learner and a tireless worker searching for a good company environment to help me turn good ideas into reality.',
		},
		{
			id: 'question-2',
			title: 'What inspires you?',
			description: "Music fuels my creativity and fosters a productive atmosphere. Japanese culture captivates me, I even embrace their culinary tradition of eating with chopsticks. Moreover, cinema holds a special place in my heart, as it enhances my powers of observation and inspires me.",
		},
		{
			id: 'question-3',
			title: 'What\'s your background?',
			description: 'Since my bachelor\'s degree in Communication Design from IAAD University in Turin, my design journey brought me to fall in love with After Effects, to deeply enjoy Visual design and last but not least to discover Figma ♥︎ which carried me to UI-UX.',
		},
	];

  function handleAccordionValueChange(event: any) {
    if (event.detail.value !== activeVideo) {
      activeVideo = event.detail.value;
    }
  }

  function sendMail() {
    window.location.href = 'mailto:sarah.cosmai@gmail.com?subject=&body=';
  }
</script>


<!-- Hero Section -->
<div id="hero-section" class="mt-6 mb-14 bg-white dark:bg-muted/50 overflow-hidden">
  <Separator />

  <Container class="relative h-[600px] sm:h-[630px] lg:h-[500px] overflow-hidden">
    <HeroLines />
    <div class="relative h-full grid max-lg:py-5 grid-cols-1 grid-rows-[auto_auto] lg:grid-cols-2 lg:grid-rows-1">
      <div class="my-auto">
        <h1 class="scroll-mt-20 text-[40px] leading-[2.75rem] sm:text-5xl md:text-6xl md:leading-[4rem] font-bold text-primary tracking-tight">I'm Sara,<br>a UI UX Designer</h1>
        <p class="mt-6 text-muted-foreground text-xl lg:text-2xl">
          Background in <span class="font-semibold">Visual</span> & <span class="font-semibold">Motion Design</span>
        </p>
      </div>
      <div class="my-auto">
        <div class="relative bg-background">
          <Icons.chevronLeft class="absolute z-10 w-14 h-14 rotate-45 -top-[22px] -left-[22px]" />
          <Icons.chevronUp class="absolute z-10 w-14 h-14 rotate-45 -top-[22px] -right-[22px]" />
          <Icons.chevronDown class="absolute z-10 w-14 h-14 rotate-45 -bottom-[22px] -left-[22px]" />
          <Icons.chevronRight class="absolute z-10 w-14 h-14 rotate-45 -bottom-[22px] -right-[22px]" />

          <div class="flex flex-col space-y-6 p-7 md:p-10 md:space-y-10">
            <p class="text-primary font-semibold text-xl sm:text-2xl md:text-3xl">
              I’m currently looking for new opportunities. Having questions or just want to reach out?
            </p>
            <Button on:click={sendMail} class="w-fit border-primary hover:bg-white" size="lg" variant="outline">Say Hello</Button>
          </div>
        </div>
      </div>
    </div>
  </Container>

  <Separator />
</div>


<!-- Latest Projects -->
<Container class="mt-20 lg:mt-24">
  <H2 id="latest-projects">Selected projects</H2>
  <p use:balancer={{ enabled: true, ratio: 0.35 }} class="text-muted-foreground text-lg mb-6 md:text-xl md:max-w-3xl md:mb-8">
    Below you'll be able to checkout some UX/UI projects I've worked on.
  </p>

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
              Open website
            </Button>
          </div>
        </div>
        <div class="sm:p-2.5">
          <picture>
            <source media="(min-width: 768px)" srcset="/img/dibarro-cover.webp" />
            <img
              class="pointer-events-none rounded-md object-cover h-full w-full"
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
              Open website
            </Button>
          </div>
        </div>
        <div class="sm:p-2.5">
          <picture>
            <source media="(min-width: 768px)" srcset="/img/vierin-cover.webp" />
            <img
              class="pointer-events-none rounded-md object-cover h-full w-full"
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
              Open website
            </Button>
          </div>
        </div>
        <div class="sm:p-2.5">
          <picture>
            <source media="(min-width: 768px)" srcset="/img/alpitude-cover.webp" />
            <img
              class="pointer-events-none rounded-md object-cover h-full w-full"
              src="/img/alpitude-cover-mobile.webp"
              alt="Project Cover - Di Barrò"
            />
          </picture>
        </div>
      </CardContent>
    </div>
  </Card>

</Container>

<!-- About Me -->
<Container class="mt-20 lg:mt-24">
  <H2>Get to know me</H2>
  <p use:balancer={{ enabled: true, ratio: 0.35 }} class="text-muted-foreground text-lg mb-6 md:text-xl md:max-w-3xl md:mb-8">
    Meet the creative mind behind the designs.
  </p>

  <div class="grid grid-cols-1 gap-x-6 md:grid-cols-2 h-full">
    <div class="relative max-w-[calc(40rem-24px)] lg:max-w-[calc(40rem-32px)]">
      <div class="relative pt-[100%] overflow-hidden rounded-md"></div>
      {#key activeVideo}
        <Video class="absolute inset-0 w-full object-cover" name="{activeVideo}" />
      {/key}
    </div>

    <Accordion {questions} on:valueChange={handleAccordionValueChange} />
  </div>
</Container>


<!-- Skills -->
<Container class="mt-20 lg:mt-24">
  <H2 id="growing-skillset">Growing skillset</H2>
  <p use:balancer={{ enabled: true, ratio: 0.35 }} class="text-muted-foreground text-lg mb-6 md:text-xl md:max-w-3xl md:mb-8">
    I use a variety of tools, enabling effective and creative design solutions.
  </p>

  <SkillList>
    <SkillItem class="border-t border-border">
      <SkillContent>
        <SkillIconWrapper class="bg-skill-blue">
          <Icons.figma class="h-10 w-10" />
        </SkillIconWrapper>
        <div>
          <SkillName>Figma</SkillName>
          <SkillYearsOfExperience class="text-skill-blue-foreground">3yrs</SkillYearsOfExperience>
        </div>
      </SkillContent>
      <SkillCategory>Wireframing & Prototyping</SkillCategory>
      <SkillDescription>High Fidelity Prototyping &#x2022; Digital Illustrations &#x2022; Icons</SkillDescription>
    </SkillItem>
    <SkillItem>
      <SkillContent>
        <SkillIconWrapper class="bg-skill-sky">
          <Icons.afterEffects class="h-10 w-10" />
        </SkillIconWrapper>
        <div>
          <SkillName>After Effects</SkillName>
          <SkillYearsOfExperience class="text-skill-sky-foreground">6yrs</SkillYearsOfExperience>
        </div>
      </SkillContent>
      <SkillCategory>Motion Graphic Design</SkillCategory>
      <SkillDescription>Logo Animation &#x2022; Animated Illustrations &#x2022; Animations</SkillDescription>
    </SkillItem>
    <SkillItem>
      <SkillContent>
        <SkillIconWrapper class="bg-skill-purple">
          <Icons.photoshop class="h-10 w-10" />
        </SkillIconWrapper>
        <div>
          <SkillName>Photoshop</SkillName>
          <SkillYearsOfExperience class="text-skill-purple-foreground">6yrs</SkillYearsOfExperience>
        </div>
      </SkillContent>
      <SkillCategory>Photo Editing</SkillCategory>
      <SkillDescription>Editing Photo &#x2022; Color Correction</SkillDescription>
    </SkillItem>
    <SkillItem>
      <SkillContent>
        <SkillIconWrapper class="bg-skill-green">
          <Icons.sketch class="h-10 w-10" />
        </SkillIconWrapper>
        <div>
          <SkillName>Sketch</SkillName>
          <SkillYearsOfExperience class="text-skill-green-foreground">3yrs</SkillYearsOfExperience>
        </div>
      </SkillContent>
      <SkillCategory>Wireframe & Prototyping</SkillCategory>
      <SkillDescription>High Fidelity Prototyping &#x2022; Digital Illustrations &#x2022; Icons</SkillDescription>
    </SkillItem>
    <SkillItem>
      <SkillContent>
        <SkillIconWrapper class="bg-skill-blue">
          <Icons.illustrator class="h-10 w-10" />
        </SkillIconWrapper>
        <div>
          <SkillName>Illustrator</SkillName>
          <SkillYearsOfExperience class="text-skill-blue-foreground">5yrs</SkillYearsOfExperience>
        </div>
      </SkillContent>
      <SkillCategory>Vector Graphic Design</SkillCategory>
      <SkillDescription>Illustrations &#x2022; Logo</SkillDescription>
    </SkillItem>
    <SkillItem>
      <SkillContent>
        <SkillIconWrapper class="bg-skill-purple">
          <Icons.spline class="h-10 w-10" />
        </SkillIconWrapper>
        <div>
          <SkillName>Spline</SkillName>
          <SkillYearsOfExperience class="text-skill-purple-foreground">1yrs</SkillYearsOfExperience>
        </div>
      </SkillContent>
      <SkillCategory>3D Modeling & Animation</SkillCategory>
      <SkillDescription>3D Elements &#x2022; 3D Illustrations &#x2022; 3D Animations</SkillDescription>
    </SkillItem>
    <SkillItem>
      <SkillContent>
        <SkillIconWrapper class="bg-skill-sky">
          <Icons.indesign class="h-10 w-10" />
        </SkillIconWrapper>
        <div>
          <SkillName>Indesign</SkillName>
          <SkillYearsOfExperience class="text-skill-sky-foreground">5yrs</SkillYearsOfExperience>
        </div>
      </SkillContent>
      <SkillCategory>Editorial Layout Design</SkillCategory>
      <SkillDescription>Posters &#x2022; Brochures &#x2022; Labels</SkillDescription>
    </SkillItem>
    <SkillItem>
      <SkillContent>
        <SkillIconWrapper class="bg-skill-green">
          <Icons.premiere class="h-10 w-10" />
        </SkillIconWrapper>
        <div>
          <SkillName>Premiere</SkillName>
          <SkillYearsOfExperience class="text-skill-green-foreground">4yrs</SkillYearsOfExperience>
        </div>
      </SkillContent>
      <SkillCategory>Video Editing</SkillCategory>
      <SkillDescription>Color Correction &#x2022; Editing Video</SkillDescription>
    </SkillItem>
  </SkillList>
</Container>

