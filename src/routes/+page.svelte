<script lang="ts">
  import {
    H1,
    H2
  } from "$components/site/typography";
  import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger
  } from "$components/ui/accordion";
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
  import MarginWrapper from "$components/site/MarginWrapper.svelte";
  import { balancer } from "svelte-action-balancer";
	import { AspectRatio } from "$components/ui/aspect-ratio";
	import {
    FirstWave,
    SecondWave,
    ThirdWave,
    ClosingWave
  } from "$components/site/waves";
</script>


<!-- Hero Section -->
<div class="my-14 bg-muted">
  <Separator />

  <div class="relative py-5 h-[800px] md:h-[600px]">
    <div class="grid grid-rows-[auto_1fr_1fr_1fr_1fr] max-h-full">
      <MarginWrapper class="w-full">
        <div class="flex flex-col space-y-10 my-auto">
          <H1 id="hero-message">
            May <br />
            design be <br />
            with you <br />
          </H1>
          <Button class="w-fit">
            <Icons.playCircle class="h-5 w-5 mr-2" />
            Watch Showreel
          </Button>
        </div>
      </MarginWrapper>

      <!-- Waves Grid -->
      <div class="overflow-hidden">
        <FirstWave class="w-full" />
      </div>
      <div class="overflow-hidden">
        <SecondWave class="w-full" />
      </div>
      <div class="overflow-hidden">
        <ThirdWave class="w-full" />
      </div>
      <div class="overflow-hidden md:hidden">
        <ClosingWave />
      </div>
    </div>
  </div>

  <Separator />
</div>

<!-- About Me -->
<MarginWrapper class="mt-20 lg:mt-24">
  <H2>Get to know me</H2>
  <p use:balancer={{ enabled: true, ratio: 0.35 }} class="text-muted-foreground text-lg mb-6 md:text-xl md:max-w-3xl md:mb-8">
    Passionate about crafting meaningful experiences, I blend creativity and empathy to design user-centric solutions that leave a lasting impact.
  </p>

  <div class="grid grid-cols-1 gap-x-6 md:grid-cols-2 h-full">
    <!-- TODO: adjust the height which is incorrect at the moment !!! -->
    <div class="relative max-w-[calc(40rem-24px)] lg:max-w-[calc(40rem-32px)]">
      <div class="relative pt-[100%] overflow-hidden"></div>
      <Video class="absolute inset-0 w-full object-cover" name="illustration-1" />
    </div>

    <Accordion type="single" collapsible class="w-full border-t border-border max-md:mt-6">
      <AccordionItem value="item-1">
        <AccordionTrigger class="text-left">Who am I?</AccordionTrigger>
        <AccordionContent>
          I am highly curious and an avid learner, constantly seeking
          new insights to improve myself. My goal is to advance my
          career and excel as a skilled professional, delivering
          optimal results even in challenging contexts. With a
          background in visual design and motion design, I am
          passionate about UI-UX design. I hold a bachelor's degree
          in Communication Design from IAAD University.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger class="text-left">What inspires me?</AccordionTrigger>
        <AccordionContent>
          Music fuels my creativity and fosters a productive atmosphere.
          Japanese culture captivates me, I even embrace their culinary
          tradition of eating with chopsticks. Moreover, cinema holds a
          special place in my heart, as it enhances my powers of
          observation and inspires me.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger class="text-left">What are my careers goals?</AccordionTrigger>
        <AccordionContent>
          Lately, I've been searching for a big challenge and a good company
          environment, surrounded by exceptional designers. I’m striving
          for greater heights in my professional journey.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  </div>
</MarginWrapper>


<!-- Skills -->
<MarginWrapper class="mt-20 lg:mt-24">
  <H2>Growing skillset</H2>
  <p use:balancer={{ enabled: true, ratio: 0.35 }} class="text-muted-foreground text-lg mb-6 md:text-xl md:max-w-3xl md:mb-8">
    Driven by curiosity, I embrace new technologies and design trends, continuously growing my skillset to stay ahead in the ever-changing world of UI/UX.
  </p>

  <SkillList>
    <SkillItem class="border-t border-border">
      <SkillContent>
        <SkillIconWrapper class="bg-skill-purple">
          <Icons.figma class="h-10 w-10" />
        </SkillIconWrapper>
        <div>
          <SkillName>Figma</SkillName>
          <SkillYearsOfExperience class="text-skill-purple-foreground">3yrs</SkillYearsOfExperience>
        </div>
      </SkillContent>
      <SkillCategory>Wireframing & Prototyping</SkillCategory>
      <SkillDescription>High Fidelity Prototyping &#x2022; Digital Illustrations &#x2022; Icons</SkillDescription>
    </SkillItem>
    <SkillItem>
      <SkillContent>
        <SkillIconWrapper class="bg-skill-blue">
          <Icons.afterEffects class="h-10 w-10" />
        </SkillIconWrapper>
        <div>
          <SkillName>After Effects</SkillName>
          <SkillYearsOfExperience class="text-skill-blue-foreground">6yrs</SkillYearsOfExperience>
        </div>
      </SkillContent>
      <SkillCategory>Motion Graphic Design</SkillCategory>
      <SkillDescription>Logo Animation &#x2022; Animated Illustrations &#x2022; Animations</SkillDescription>
    </SkillItem>
    <SkillItem>
      <SkillContent>
        <SkillIconWrapper class="bg-skill-rose">
          <Icons.photoshop class="h-10 w-10" />
        </SkillIconWrapper>
        <div>
          <SkillName>Photoshop</SkillName>
          <SkillYearsOfExperience class="text-skill-rose-foreground">6yrs</SkillYearsOfExperience>
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
        <SkillIconWrapper class="bg-skill-purple">
          <Icons.illustrator class="h-10 w-10" />
        </SkillIconWrapper>
        <div>
          <SkillName>Illustrator</SkillName>
          <SkillYearsOfExperience class="text-skill-purple-foreground">5yrs</SkillYearsOfExperience>
        </div>
      </SkillContent>
      <SkillCategory>Vector Graphic Design</SkillCategory>
      <SkillDescription>Illustrations &#x2022; Logo</SkillDescription>
    </SkillItem>
    <SkillItem>
      <SkillContent>
        <SkillIconWrapper class="bg-skill-rose">
          <Icons.spline class="h-10 w-10" />
        </SkillIconWrapper>
        <div>
          <SkillName>Spline</SkillName>
          <SkillYearsOfExperience class="text-skill-rose-foreground">1yrs</SkillYearsOfExperience>
        </div>
      </SkillContent>
      <SkillCategory>3D Modeling & Animation</SkillCategory>
      <SkillDescription>3D Elements &#x2022; 3D Illustrations &#x2022; 3D Animations</SkillDescription>
    </SkillItem>
    <SkillItem>
      <SkillContent>
        <SkillIconWrapper class="bg-skill-blue">
          <Icons.indesign class="h-10 w-10" />
        </SkillIconWrapper>
        <div>
          <SkillName>Indesign</SkillName>
          <SkillYearsOfExperience class="text-skill-blue-foreground">5yrs</SkillYearsOfExperience>
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
</MarginWrapper>


<!-- Latest Projects -->
<MarginWrapper class="mt-20 lg:mt-24">
  <H2>Latest projects</H2>
  <p use:balancer={{ enabled: true, ratio: 0.35 }} class="text-muted-foreground text-lg mb-6 md:text-xl md:max-w-3xl md:mb-8">
    Dive into a collection of my recent projects, each representing a unique blend of creativity, strategic thinking, and user-centric design solutions.
  </p>

  <Separator />

  <a href="/" class="block">
    <Card class="w-full md:flex md:space-x-6">
      <CardHeader class="md:w-1/2">
        <AspectRatio ratio={5 / 3} class="bg-muted">
          <img
            src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2370&q=80"
            alt="Gray by Drew Beamer"
            class="rounded-md object-cover h-full w-full"
          />
        </AspectRatio>
      </CardHeader>
      <CardContent class="md:my-auto">
        <CardTitle>Alpitude Sport<br>Outdoor Website</CardTitle>
        <p class="text-muted-foreground font-semibold pb-2 md:pt-4">Tools I used</p>

        <div class="flex space-x-4">
          <SkillIconWrapper class="bg-skill-purple w-fit" size="sm">
            <Icons.figma class="h-6 w-6" />
          </SkillIconWrapper>
          <SkillIconWrapper class="bg-skill-rose w-fit" size="sm">
            <Icons.photoshop class="h-6 w-6" />
          </SkillIconWrapper>
          <SkillIconWrapper class="bg-skill-green w-fit" size="sm">
            <Icons.sketch class="h-6 w-6" />
          </SkillIconWrapper>
          <SkillIconWrapper class="bg-skill-purple w-fit" size="sm">
            <Icons.illustrator class="h-6 w-6" />
          </SkillIconWrapper>
        </div>
      </CardContent>
    </Card>
  </a>

  <Separator />

  <a href="/" class="block">
    <Card class="w-full md:flex md:space-x-6">
      <CardHeader class="md:w-1/2">
        <AspectRatio ratio={5 / 3} class="bg-muted">
          <img
            src="https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2371&q=80"
            alt="Gray by Drew Beamer"
            class="rounded-md object-cover h-full w-full"
          />
        </AspectRatio>
      </CardHeader>
      <CardContent class="md:my-auto">
        <CardTitle>Dark Themed<br>Winery Website</CardTitle>
        <p class="text-muted-foreground font-semibold pb-2 md:pt-4">Tools I used</p>

        <div class="flex space-x-4">
          <SkillIconWrapper class="bg-skill-purple w-fit" size="sm">
            <Icons.figma class="h-6 w-6" />
          </SkillIconWrapper>
          <SkillIconWrapper class="bg-skill-rose w-fit" size="sm">
            <Icons.photoshop class="h-6 w-6" />
          </SkillIconWrapper>
        </div>
      </CardContent>
    </Card>
  </a>

</MarginWrapper>

