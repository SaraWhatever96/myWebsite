<script lang="ts">
	import AfterEffectsIcon from "$lib/components/assets/icons/AfterEffectsIcon.svelte";
	import FigmaIcon from "$lib/components/assets/icons/FigmaIcon.svelte";
	import PhotoshopIcon from "$lib/components/assets/icons/PhotoshopIcon.svelte";
	import SketchIcon from "$lib/components/assets/icons/SketchIcon.svelte";
  import Border from "$lib/components/neumorphic/Border.svelte";
	import SplitTextWrapper from "$lib/components/animations/SplitTextWrapper.svelte";
	import WaveProjectCard from "$lib/components/assets/WaveProjectCard.svelte";
</script>

<section class="mt-28 space-y-16 lg:mt-36 lg:space-y-36">
  <!-- Title -->
  <div class="text-center">
    <SplitTextWrapper type="words" target="#latest-projects-title" staggerDelay="{0.1}">
      <h2 id="latest-projects-title" class="opacity-0 font-semibold text-slate-700 text-5xl leading-[3.5rem]">
        Latest <br class="md:hidden">Projects
      </h2>
    </SplitTextWrapper>

  </div>

  <!-- Alpitude Project -->
  <a href="/" class="block group">
    <Border className="group-hover:bg-sky-300 transition">
      <div class="lg:h-[475px]">
        <div class="grid grid-rows-2 grid-cols-1 lg:grid-rows-1 lg:grid-cols-2 md:h-full">
          <div class="relative">
            <WaveProjectCard className="absolute max-md:bottom-0 lg:right-0 lg:h-[475px]" />
            <img class="object-cover h-[280px] w-full md:h-full" src="/img/alpitude-cover.png" alt="">
          </div>

          <div class="flex flex-col justify-center px-8 py-6 md:h-full md:px-10 md:py-0">
            <h2 class="text-2xl text-slate-700 font-semibold md:text-4xl md:leading-[3rem]">
              Alpitude <br>
              Sport Outdoor <br>
              Website <br>
            </h2>

            <p class="font-semibold text-slate-700 pt-8 md:text-2xl">Tools used</p>

            <div class="flex space-x-4 pt-4 md:space-x-6">
              <div class="p-2.5 bg-white shadow-md rounded-lg md:p-3">
                <FigmaIcon className="h-6 w-6 md:h-8 md:w-8" />
              </div>

              <div class="p-2.5 bg-white shadow-md rounded-lg md:p-3">
                <PhotoshopIcon className="h-6 w-6 md:h-8 md:w-8" />
              </div>

              <div class="p-2.5 bg-white shadow-md rounded-lg md:p-3">
                <AfterEffectsIcon className="h-6 w-6 md:h-8 md:w-8" />
              </div>

              <div class="p-2.5 bg-white shadow-md rounded-lg md:p-3">
                <SketchIcon className="h-6 w-6 md:h-8 md:w-8" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Border>
  </a>
</section>
