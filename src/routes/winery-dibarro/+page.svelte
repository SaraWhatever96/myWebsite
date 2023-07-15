<script lang="ts">
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
        <div class="flex flex-col space-y-10 my-auto md:pl-10 lg:pl-20 md:justify-center md:col-start-2">
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

<MarginWrapper class="mt-20 lg:my-24">
  <H2 id="the-challenge">The Challenge</H2>
  <p use:balancer={{ enabled: true, ratio: 0.35 }} class="text-muted-foreground text-lg mb-6 md:text-xl md:max-w-5xl md:mb-8">
    Di barrò Winery wanted an appealing storytelling website to introduce their family business and their
    products reaching more clients, balancing narrative and photos in a dark themed experience.
  </p>

  <div class="grid grid-cols-1 md:grid-cols-3 h-[500px]">
    <div class="relative bg-slate-200">
    </div>
    <div class="relative bg-slate-300"></div>
    <div class="relative bg-slate-400"></div>
  </div>
</MarginWrapper>
