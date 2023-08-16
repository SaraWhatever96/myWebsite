<script lang="ts">
  import {
    H1,
    H2
  } from "$components/site/typography";
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
	import { Target } from "lucide-svelte";


  let pinkSealReversed = false;
  let blueSealReversed = false;
  let goldSealReversed = false;
  let activeVideo: string = 'illustration-1';
  const questions: Question[] = [
		{
			id: 'question-1',
			title: 'Who are you?',
			description: 'I am highly curious and an avid learner, constantly seeking new insights to improve myself. My goal is to advance my career and excel as a skilled professional, delivering optimal results even in challenging contexts. With a background in visual design and motion design, I am passionate about UI-UX design. I hold a bachelor\'s degree in Communication Design from IAAD University.',
		},
		{
			id: 'question-2',
			title: 'What inspires you?',
			description: "Music fuels my creativity and fosters a productive atmosphere. Japanese culture captivates me, I even embrace their culinary tradition of eating with chopsticks. Moreover, cinema holds a special place in my heart, as it enhances my powers of observation and inspires me.",
		},
		{
			id: 'question-3',
			title: 'What are your careers goals?',
			description: 'Lately, I\'ve been searching for a big challenge and a good company environment, surrounded by exceptional designers. I’m striving for greater heights in my professional journey.',
		},
	];

  function handleAccordionValueChange(event: any) {
    if (event.detail.value !== activeVideo) {
      activeVideo = event.detail.value;
    }
  }
</script>


<!-- Hero Section -->
<div id="hero-section" class="my-14 bg-[#edf5f7] dark:bg-muted/50 overflow-hidden">
  <Separator />

  <div class="relative h-[800px] max-md:py-5 sm:h-[850px] md:h-[600px] overflow-hidden">
    <div class="hidden md:block absolute w-1/2 right-0 inset-y-0 bg-lilla"></div>
    <div class="grid grid-rows-[auto_150px_150px_150px_150px] max-h-full md:grid-rows-1 md:grid-cols-4 md:max-w-7xl md:mx-auto">
      <Container class="w-full md:my-auto">
        <div class="flex flex-col space-y-10 my-auto md:justify-center">
          <H1 id="hero-message">
            May <br>
            design be <br>
            with you <br>
          </H1>
          <Button class="w-fit" size="lg" aria-label="Update dimensions">
            <Icons.playCircle class="h-5 w-5 mr-2" />
            Watch Showreel
          </Button>
        </div>
      </Container>

      <!-- Waves Grid -->
      <div class="overflow-hidden h-[150px] w-auto md:h-[650px] md:-translate-y-4 md:overflow-visible">
        <FirstWave class="w-full absolute max-md:pt-4 md:w-auto md:h-full" />
        <div class="flex flex-row {goldSealReversed ? 'justify-end' : 'justify-start'} items-center w-full h-full max-md:mt-10 max-md:px-12 md:flex-col md:py-16 md:pl-16 md:-translate-y-2">
          <SealAnimation color="gold" on:updateSealPosition={() => goldSealReversed = !goldSealReversed} />
        </div>
      </div>
      <div class="overflow-hidden h-[150px] w-auto md:h-[650px] md:-translate-y-4 md:overflow-visible">
        <SecondWave class="w-full absolute md:w-auto md:h-full" />
        <div class="flex flex-row {pinkSealReversed ? 'justify-start' : 'justify-end'} items-center w-full h-full max-md:mt-8 max-md:px-12 md:flex-col md:py-16 md:pl-16 md:-translate-y-2">
          <SealAnimation color="pink" on:updateSealPosition={() => pinkSealReversed = !pinkSealReversed} />
        </div>
      </div>
      <div class="overflow-hidden h-[150px] w-auto md:h-[650px] md:-translate-y-4 md:overflow-visible">
        <ThirdWave class="w-full absolute md:w-auto md:h-full" />
        <div class="flex flex-row {blueSealReversed ? 'justify-end' : 'justify-start'} items-center w-full h-full max-md:mt-6 max-md:px-12 md:flex-col md:py-16 md:pl-16 md:-translate-y-2">
          <SealAnimation color="blue" on:updateSealPosition={() => blueSealReversed = !blueSealReversed} />
        </div>
      </div>
      <div class="relative overflow-hidden h-[150px] md:hidden">
        <ClosingWave class="w-full absolute" />
      </div>
    </div>
  </div>

  <Separator class="hidden md:block" />
</div>

<!-- About Me -->
<Container class="mt-20 lg:mt-24">
  <H2>Get to know me</H2>
  <p use:balancer={{ enabled: true, ratio: 0.35 }} class="text-muted-foreground text-lg mb-6 md:text-xl md:max-w-3xl md:mb-8">
    Passionate about crafting meaningful experiences, I blend creativity and empathy to design user-centric solutions that leave a lasting impact.
  </p>

  <div class="grid grid-cols-1 gap-x-6 md:grid-cols-2 h-full">
    <!-- TODO: adjust the height which is incorrect at the moment !!! -->
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
    Driven by curiosity, I embrace new technologies and design trends, continuously growing my skillset to stay ahead in the ever-changing world of UI/UX.
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

  <Separator />
</Container>


<!-- Latest Projects -->
<Container class="mt-20 lg:mt-24">
  <H2 id="latest-projects">Latest projects</H2>
  <p use:balancer={{ enabled: true, ratio: 0.35 }} class="text-muted-foreground text-lg mb-6 md:text-xl md:max-w-3xl md:mb-8">
    Dive into a collection of my recent projects, each representing a unique blend of creativity, strategic thinking, and user-centric design solutions.
  </p>

  <Separator />

  <Card class="w-full md:flex md:space-x-6">
    <CardHeader class="md:w-1/2">
      <AspectRatio ratio={10 / 7} class="bg-muted">
        <picture>
          <source media="(min-width: 768px)" srcset="/img/dibarro-cover.webp" />
          <source media="(min-width: 640px)" srcset="/img/dibarro-cover-mobile.webp" />
          <img
            class="pointer-events-none rounded-md object-cover h-full w-full"
            src="/img/dibarro-cover.webp"
            alt="Project Cover - Di Barrò"
          />
        </picture>
      </AspectRatio>
    </CardHeader>
    <CardContent class="md:my-6 md:flex md:flex-col md:justify-between">
      <div>
        <CardTitle class="mb-6 md:mt-12 md:mb-8">Dark Themed<br>Winery Website</CardTitle>
        <p class="text-muted-foreground font-semibold text-lg pb-2 md:pt-4 md:text-2xl">Tools I used</p>

        <div class="flex space-x-4">
          <SkillIconWrapper class="bg-skill-blue w-fit">
            <Icons.figma class="h-6 w-6 md:h-8 md:w-8" />
          </SkillIconWrapper>
          <SkillIconWrapper class="bg-skill-purple w-fit">
            <Icons.photoshop class="h-6 w-6 md:h-8 md:w-8" />
          </SkillIconWrapper>
        </div>
      </div>
      <Button href="/winery-dibarro" class="w-fit max-md:mt-6">View project</Button>
    </CardContent>
  </Card>

  <Separator />

  <Card class="w-full md:flex md:space-x-6">
    <CardHeader class="md:w-1/2">
      <AspectRatio ratio={10 / 7} class="bg-muted">
        <picture>
          <source media="(min-width: 768px)" srcset="/img/vierin-cover.webp" />
          <source media="(min-width: 640px)" srcset="/img/vierin-cover-mobile.webp" />
          <img
            class="pointer-events-none rounded-md object-cover h-full w-full"
            src="/img/vierin-cover.webp"
            alt="Project Cover - Di Barrò"
          />
        </picture>
      </AspectRatio>
    </CardHeader>
    <CardContent class="md:my-6 md:flex md:flex-col md:justify-between">
      <div>
        <CardTitle class="mb-6 md:mt-12 md:mb-8">Dental Care<br>Clinic Website</CardTitle>
        <p class="text-muted-foreground font-semibold text-lg pb-2 md:pt-4 md:text-2xl">Tools I used</p>

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
      <Button href="/dentist-vierin" class="w-fit max-md:mt-6">View project</Button>
    </CardContent>
  </Card>

  <Separator />

  <Card class="w-full md:flex md:space-x-6">
    <CardHeader class="md:w-1/2">
      <AspectRatio ratio={10 / 7} class="bg-muted">
        <picture>
          <source media="(min-width: 768px)" srcset="/img/alpitude-cover.webp" />
          <source media="(min-width: 640px)" srcset="/img/alpitude-cover-mobile.webp" />
          <img
            class="pointer-events-none rounded-md object-cover h-full w-full"
            src="/img/alpitude-cover.webp"
            alt="Project Cover - Alpitude"
          />
        </picture>
      </AspectRatio>
    </CardHeader>
    <CardContent class="md:my-6 md:flex md:flex-col md:justify-between">
      <div>
        <CardTitle class="mb-6 md:mt-12 md:mb-8">Alpitude Sport<br>Outdoor Website</CardTitle>
        <p class="text-muted-foreground font-semibold text-lg pb-2 md:pt-4 md:text-2xl">Tools I used</p>

        <div class="flex space-x-4">
          <SkillIconWrapper class="bg-skill-blue w-fit">
            <Icons.figma class="h-6 w-6 md:h-8 md:w-8" />
          </SkillIconWrapper>
          <SkillIconWrapper class="bg-skill-purple w-fit">
            <Icons.photoshop class="h-6 w-6 md:h-8 md:w-8" />
          </SkillIconWrapper>
          <SkillIconWrapper class="bg-skill-green w-fit">
            <Icons.sketch class="h-6 w-6 md:h-8 md:w-8" />
          </SkillIconWrapper>
          <SkillIconWrapper class="bg-skill-blue w-fit">
            <Icons.illustrator class="h-6 w-6 md:h-8 md:w-8" />
          </SkillIconWrapper>
        </div>
      </div>
      <div class="flex space-x-4 max-md:mt-6">
        <Button href="/alpitude" class="w-fit">
          View project
          <Icons.arrowRight class="h-4 w-4 ml-2" />
        </Button>
        <Button href="https://www.alpitude.it" target="_blank" class="w-fit" variant="outline">
          Open website
          <Icons.externalLink class="h-4 w-4 ml-2" />
        </Button>
      </div>
    </CardContent>
  </Card>

</Container>

