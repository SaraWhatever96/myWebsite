<script lang="ts">
	import Container from "$components/site/Container.svelte";
	import { Icons } from "$components/site/icons";
	import { H1, H2 } from "$components/site/typography";
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