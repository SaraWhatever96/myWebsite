<script lang="ts">
	import AfterEffectsIcon from "$lib/components/assets/icons/AfterEffectsIcon.svelte";
	import FigmaIcon from "$lib/components/assets/icons/FigmaIcon.svelte";
	import PhotoshopIcon from "$lib/components/assets/icons/PhotoshopIcon.svelte";
	import SketchIcon from "$lib/components/assets/icons/SketchIcon.svelte";
  import Border from "$lib/components/neumorphic/Border.svelte";
	import WaveProjectCard from "../assets/WaveProjectCard.svelte";
</script>

<section class="mt-28 space-y-16 lg:mt-36 lg:space-y-36">
  <!-- Title -->
  <div class="flex justify-center">
    <h2 class="font-semibold text-slate-700 text-3xl md:text-4xl lg:text-5xl lg:leading-[3.5rem]">
      Latest Projects
    </h2>
  </div>

  <!-- Alpitude Project -->
  <a href="/" class="block group">
    <Border className="group-hover:bg-[#F3EDFD] transition">
      <div class="lg:h-[475px]">
        <div class="grid grid-rows-2 grid-cols-1 lg:grid-rows-1 lg:grid-cols-2 md:h-full">
          <div class="relative">
            <WaveProjectCard className="absolute max-md:-bottom-[1px] max-md:-left-[1px] lg:right-0 lg:h-[475px]" />
            <img class="object-cover md:h-full md:w-full" src="/img/alpitude-cover.png" alt="">
          </div>

          <div class="flex flex-col justify-center h-full px-8 pb-6 md:px-10 md:pb-0">
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
