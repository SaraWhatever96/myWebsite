<script lang="ts">
	import Container from "$components/site/Container.svelte";
	import { Icons } from "$components/site/icons";
	import { H2 } from "$components/site/typography";
	import { Accordion } from "$components/ui/accordion";
	import {
    SkillList,
    SkillItem,
    SkillContent,
    SkillIconWrapper,
    SkillName,
    SkillYearsOfExperience,
    SkillCategory,
    SkillDescription
  } from "$components/ui/skill";
	import { Video } from "$components/ui/video";
	import type { Question } from "$lib/types/question";
	import { balancer } from "svelte-action-balancer";


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
</script>


<div class="relative">
  <div class="absolute inset-0" style="background: linear-gradient(180deg, transparent 0%, #F4EEFE 27.62%, #D7F2FC 60.95%, #E0FAFB 100%)"></div>

  <!-- About Me -->
  <Container class="relative py-10">

    <!-- NeonDivider -->
    <div
      class="min-w-full max-w-[450px] h-3 bg-background rounded-full"
      style="background: radial-gradient(52.52% 50% at 52.52% 50%, #F5FFFF 0%, #E2FEFF 100%);filter: drop-shadow(0px 0px 11px #E5FEFF) drop-shadow(0px 1px 6px rgba(102, 200, 204, 0.30));"
    ></div>

    <div class="mt-10 lg:mt-20">
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
    </div>
  </Container>


  <!-- Skills -->
  <Container class="relative mt-20 lg:mt-24">
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


</div>
