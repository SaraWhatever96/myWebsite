<script lang="ts">
	import FocusCornersWrapper from "$components/site/FocusCornersWrapper.svelte";
	import MarginWrapper from "$components/site/MarginWrapper.svelte";
	import { Icons } from "$components/site/icons";
	import { H1 } from "$components/site/typography";
	import H2 from "$components/site/typography/h2.svelte";
  import { Separator } from "$components/ui/separator";
	import { SkillIconWrapper } from "$components/ui/skill";
	import { balancer } from "svelte-action-balancer";
</script>

<div id="hero-section" class="my-14 bg-muted dark:bg-muted/50 overflow-hidden">
  <Separator />

  <div class="relative max-md:py-5 overflow-hidden">
    <div class="hidden md:block absolute w-1/2 left-0 inset-y-0 bg-[#CFFDFF]"></div>
    <MarginWrapper class="w-full md:my-auto">
      <div class="grid md:grid-cols-2 md:h-[600px]">
        <div class="flex flex-col space-y-10 my-auto md:pl-10 lg:pl-14 md:justify-center md:col-start-2">
          <H1 id="hero-message" class="text">
            Dark Themed <br />
            Winery Website
          </H1>

          <div>
            <p class="text-muted-foreground font-semibold pb-2 md:pt-4 md:text-lg">Tools I used</p>
            <div class="flex space-x-4">
              <SkillIconWrapper class="bg-skill-purple w-fit" size="sm">
                <Icons.figma class="h-8 w-8" />
              </SkillIconWrapper>
              <SkillIconWrapper class="bg-skill-rose w-fit" size="sm">
                <Icons.photoshop class="h-8 w-8" />
              </SkillIconWrapper>
            </div>
          </div>
        </div>
      </div>
    </MarginWrapper>
  </div>

  <Separator />
</div>

<!-- The Challenge -->
<MarginWrapper class="mt-20 lg:mt-24">
  <H2 id="the-challenge">The Challenge</H2>
  <p use:balancer={{ enabled: true, ratio: 0.35 }} class="text-muted-foreground text-lg mb-6 md:text-xl md:max-w-5xl md:mb-8">
    Di barrò Winery wanted an appealing storytelling website to introduce their family business and their
    products reaching more clients, balancing narrative and photos in a dark themed experience.
  </p>

  <Separator />

  <div class="grid grid-cols-1 md:grid-cols-3 h-[500px] my-6">
    <FocusCornersWrapper class="bg-slate-200">
      <img src="https://images.unsplash.com/photo-1505156868547-9b49f4df4e04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1316&q=80" alt="">
    </FocusCornersWrapper>
    <FocusCornersWrapper class="bg-slate-300">
      <img src="https://images.unsplash.com/photo-1523206489230-c012c64b2b48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80" alt="">
    </FocusCornersWrapper>
    <FocusCornersWrapper class="bg-slate-400">
      <img src="https://images.unsplash.com/photo-1601972599720-36938d4ecd31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80" alt="">
    </FocusCornersWrapper>
  </div>

  <Separator />
</MarginWrapper>

<!-- Challenge Accepted -->
<MarginWrapper class="mt-20 lg:mt-24">
  <H2 id="challenge-accepted">Challenge Accepted</H2>
  <p use:balancer={{ enabled: true, ratio: 0.35 }} class="text-muted-foreground text-lg mb-6 md:text-xl md:max-w-5xl md:mb-8">
    I analysed their brand and took a peek on competitors. Once started sketching and wireframing the path
    to accomplish the task was visually shaped.
  </p>
</MarginWrapper>

<FocusCornersWrapper class="h-[70vh] bg-slate-950" twCornersColor="text-slate-200" animation="img-hover-scroll">
  <div class="background-img">
</FocusCornersWrapper>

<MarginWrapper class="mt-20 lg:mt-24">
  <p use:balancer={{ enabled: true, ratio: 0.35 }} class="text-muted-foreground text-lg mb-6 md:text-xl md:max-w-5xl md:mb-8">
    To create a seamless experience for users the texts surrounded by photos required to stand out and be
    easy to read.
  </p>

  <Separator />

  <div class="my-6 md:grid md:grid-cols-2">
    <FocusCornersWrapper>
      <img src="https://images.unsplash.com/photo-1618352357270-ef40d25bcef8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2360&q=80" alt="">
    </FocusCornersWrapper>
    <div class="h-full w-full flex items-center">
      <p class="text-muted-foreground text-lg md:text-xl md:pl-10 lg:pl-14">
        With the brand guidelines and a vision in mind I chose a serif for headings and a clean sans for
        paragraphs to join a monochromatic design where colors stick out just from photos.
      </p>
    </div>
  </div>

  <Separator />
</MarginWrapper>

<div class="h-full mt-8 bg-gradient-to-tr from-skill-rose to-skill-blue">
  <MarginWrapper class="max-w-5xl">
    <FocusCornersWrapper>
      <img src="https://images.unsplash.com/photo-1582993960106-20fb1755f556?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2874&q=80" alt="">
    </FocusCornersWrapper>
  </MarginWrapper>
</div>


<MarginWrapper class="mt-20 lg:mt-24">
  <p use:balancer={{ enabled: true, ratio: 0.35 }} class="text-muted-foreground text-lg mb-2 md:text-xl md:max-w-5xl md:mb-4">
    Developing a wine identity page was both challenging and exciting.
  </p>
  <p use:balancer={{ enabled: true, ratio: 0.35 }} class="text-muted-foreground text-lg mb-6 md:text-xl md:max-w-5xl md:mb-8">
    The product is spotlighted with a glowing animated stroke, introduced by its wine tasting notes and then
    if interested the user can dig deeper.
  </p>
</MarginWrapper>
