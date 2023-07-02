<script lang="ts">
	import { animate, inView, stagger } from "motion";
	import { onMount } from "svelte";
	import AfterEffectsIcon from "$lib/components/assets/icons/AfterEffectsIcon.svelte";
	import FigmaIcon from "$lib/components/assets/icons/FigmaIcon.svelte";
	import IllustratorIcon from "$lib/components/assets/icons/IllustratorIcon.svelte";
	import IndesignIcon from "$lib/components/assets/icons/IndesignIcon.svelte";
	import PhotoshopIcon from "$lib/components/assets/icons/PhotoshopIcon.svelte";
	import PremiereIcon from "$lib/components/assets/icons/PremiereIcon.svelte";
	import SketchIcon from "$lib/components/assets/icons/SketchIcon.svelte";
	import SplineIcon from "$lib/components/assets/icons/SplineIcon.svelte";
  import WaveSkillCard from "$lib/components/assets/WaveSkillCard.svelte";
	import BlenderIcon from "$lib/components/assets/icons/BlenderIcon.svelte";
  import Border from "$lib/components/neumorphic/Border.svelte";
	import ScrollProgress from "$lib/components/neumorphic/ScrollProgress.svelte";
	import SplitTextWrapper from "$lib/components/animations/SplitTextWrapper.svelte";

  let container: any;
  let scrollPercentage: number = 0;
  let moverStyle: string = '';

  function handleScroll() {
    const scrollWidth = container.scrollWidth - container.clientWidth;
    const scrollLeft = container.scrollLeft;
    const percentage = (scrollLeft / scrollWidth) * 100;
    scrollPercentage = Math.round(percentage) * 4;

    moverStyle = `transform: translateX(${scrollPercentage}%)`;
  }



  onMount(() => {
    if (window.innerWidth >= 768) {
      inView(
        '#skills-list',
        (info) => {
          info.target.classList.remove('opacity-0');
          animate('#skills-list .skill', { y: [0, -24], opacity: [0, 1] }, { duration: .8, delay: stagger(0.15, { from: "first" }) })
        },
        { amount: .3 }
      );
    }
  })
</script>


<div class="pt-20 md:pt-48">
  <div class="flex justify-center mb-16 md:mb-36">
    <div class="max-w-4xl">
      <SplitTextWrapper type="lines" target="#skill-paragraph">
        <p id="skill-paragraph" class="opacity-0 text-slate-700 font-medium text-lg md:text-xl">
          Through my work, I've learned different skills such as Wireframing, Prototyping, Design with Accessibility in mind, Mobile First Approach, CSS and HTML.
        </p>
      </SplitTextWrapper>
    </div>
  </div>

  <ul id="skills-list" bind:this={container} on:scroll={handleScroll} class="scrolling-wrapper flex flex-nowrap max-md:overflow-x-auto max-md:space-x-4 max-sm:-mx-4 min-sm:max-md:-mx-6 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 lg:grid-cols-3">
    <!-- To create spacing -->
    <div class="md:hidden"></div>
    <!-- Figma Card -->
    <li class="skill opacity-0">
      <Border className="min-w-[330px]" style="flex: 0 0 auto;">
        <!-- Wave and Icon -->
        <div class="relative h-32">
          <div class="absolute inset-x-0 top-0 inset-y-0">
            <WaveSkillCard className="min-h-[8rem]" fill="#DFEAFF" />
            <div class="absolute inset-y-0 top-7 left-8">
              <FigmaIcon className="h-11" />
            </div>
          </div>
        </div>
        <div class="relative px-8 pt-4 pb-8 space-y-8">
          <h2 class="text-3xl md:text-4xl font-semibold text-slate-700 pb-2">Figma</h2>
          <span class="text-lg md:text-xl font-semibold text-slate-700">Wireframing & Prototyping</span>

          <div class="italic">
            <!-- <span class="text-lg md:text-xl font-semibold text-[#A86DFC]">Used to create</span> -->
            <ul class="text-lg md:text-xl text-slate-700">
              <li>High fidelity prototypes</li>
              <li>Digital illustrations</li>
              <li>Icons</li>
            </ul>
          </div>

          <div class="text-3xl font-semibold text-slate-700">3 yrs</div>
        </div>
      </Border>
    </li>
    <!-- Sketch Card -->
    <li class="skill opacity-0">
      <Border className="min-w-[330px]" style="flex: 0 0 auto;">
        <!-- Wave and Icon -->
        <div class="relative h-32">
          <div class="absolute inset-x-0 top-0 inset-y-0">
            <WaveSkillCard className="min-h-[8rem]" fill="#D8F3FD" />
            <div class="absolute inset-y-0 top-7 left-8">
              <SketchIcon className="h-11" />
            </div>
          </div>
        </div>
        <div class="relative px-8 pt-4 pb-8 space-y-8">
          <h2 class="text-3xl md:text-4xl font-semibold text-slate-700 pb-2">Sketch</h2>
          <span class="text-lg md:text-xl font-semibold text-slate-700">Wireframing & Prototyping</span>

          <div class="italic">
            <!-- <span class="text-lg md:text-xl font-semibold text-[#A86DFC]">Used to create</span> -->
            <ul class="text-lg md:text-xl text-slate-700">
              <li>High fidelity prototypes</li>
              <li>Digital illustrations</li>
              <li>Icons</li>
            </ul>
          </div>

          <div class="text-3xl font-semibold text-slate-700">3 yrs</div>
        </div>
      </Border>
    </li>
    <!-- Spline Card -->
    <li class="skill opacity-0">
      <Border className="min-w-[330px]" style="flex: 0 0 auto;">
        <!-- Wave and Icon -->
        <div class="relative h-32">
          <div class="absolute inset-x-0 top-0 inset-y-0">
            <WaveSkillCard className="min-h-[8rem]" fill="#F3EDFD" />
            <div class="absolute inset-y-0 top-7 left-8">
              <SplineIcon className="h-11" />
            </div>
          </div>
        </div>
        <div class="relative px-8 pt-4 pb-8 space-y-8">
          <h2 class="text-3xl md:text-4xl font-semibold text-slate-700 pb-2">Spline</h2>
          <span class="text-lg md:text-xl font-semibold text-slate-700">3D Modeling & Animation</span>

          <div class="italic">
            <!-- <span class="text-lg md:text-xl font-semibold text-[#A86DFC]">Used to create</span> -->
            <ul class="text-lg md:text-xl text-slate-700">
              <li>3D Elements</li>
              <li>3D Illustrations</li>
              <li>3D Animations</li>
            </ul>
          </div>

          <div class="text-3xl font-semibold text-slate-700">1 yr</div>
        </div>
      </Border>
    </li>
    <!-- Blender Card -->
    <li class="skill opacity-0">
      <Border className="min-w-[330px]" style="flex: 0 0 auto;">
        <!-- Wave and Icon -->
        <div class="relative h-32">
          <div class="absolute inset-x-0 top-0 inset-y-0">
            <WaveSkillCard className="min-h-[8rem]" fill="#E0FAFB" />
            <div class="absolute inset-y-0 top-7 left-8">
              <BlenderIcon className="h-11" />
            </div>
          </div>
        </div>
        <div class="relative px-8 pt-4 pb-8 space-y-8">
          <h2 class="text-3xl md:text-4xl font-semibold text-slate-700 pb-2">Blender</h2>
          <span class="text-lg md:text-xl font-semibold text-slate-700">3D Modeling & Animation</span>

          <div class="italic">
            <!-- <span class="text-lg md:text-xl font-semibold text-[#A86DFC]">Used to create</span> -->
            <ul class="text-lg md:text-xl text-slate-700">
              <li>3D Illustrations</li>
              <li>3D Animations</li>
              <li>3D Elements</li>
            </ul>
          </div>

          <div class="text-3xl font-semibold text-slate-700">1 yr</div>
        </div>
      </Border>
    </li>
    <!-- Illustrator Card -->
    <li class="skill opacity-0">
      <Border className="min-w-[330px]" style="flex: 0 0 auto;">
        <!-- Wave and Icon -->
        <div class="relative h-32">
          <div class="absolute inset-x-0 top-0 inset-y-0">
            <WaveSkillCard className="min-h-[8rem]" fill="#F3EDFD" />
            <div class="absolute inset-y-0 top-7 left-8">
              <IllustratorIcon className="h-11" />
            </div>
          </div>
        </div>
        <div class="relative px-8 pt-4 pb-8 space-y-8">
          <h2 class="text-3xl md:text-4xl font-semibold text-slate-700 pb-2">Illustrator</h2>
          <span class="text-lg md:text-xl font-semibold text-slate-700">Vector Graphics Design</span>

          <div class="italic">
            <!-- <span class="text-lg md:text-xl font-semibold text-[#A86DFC]">Used to create</span> -->
            <ul class="text-lg md:text-xl text-slate-700">
              <li>Illustrations</li>
              <li>Logo</li>
              <li class="opacity-0 select-none">empty</li>
            </ul>
          </div>

          <div class="text-3xl font-semibold text-slate-700">5 yrs</div>
        </div>
      </Border>
    </li>
    <!-- Indesign Card -->
    <li class="skill opacity-0">
      <Border className="min-w-[330px]" style="flex: 0 0 auto;">
        <!-- Wave and Icon -->
        <div class="relative h-32">
          <div class="absolute inset-x-0 top-0 inset-y-0">
            <WaveSkillCard className="min-h-[8rem]" fill="#DFEAFF" />
            <div class="absolute inset-y-0 top-7 left-8">
              <IndesignIcon className="h-11" />
            </div>
          </div>
        </div>
        <div class="relative px-8 pt-4 pb-8 space-y-8">
          <h2 class="text-3xl md:text-4xl font-semibold text-slate-700 pb-2">Indesign</h2>
          <span class="text-lg md:text-xl font-semibold text-slate-700">Editorial Layout Design</span>

          <div class="italic">
            <!-- <span class="text-lg md:text-xl font-semibold text-[#A86DFC]">Used to create</span> -->
            <ul class="text-lg md:text-xl text-slate-700">
              <li>Posters</li>
              <li>Brochures</li>
              <li>Labels</li>
            </ul>
          </div>

          <div class="text-3xl font-semibold text-slate-700">5 yrs</div>
        </div>
      </Border>
    </li>
    <!-- After Effects Card -->
    <li class="skill opacity-0">
      <Border className="min-w-[330px]" style="flex: 0 0 auto;">
        <!-- Wave and Icon -->
        <div class="relative h-32">
          <div class="absolute inset-x-0 top-0 inset-y-0">
            <WaveSkillCard className="min-h-[8rem]" fill="#F3EDFD" />
            <div class="absolute inset-y-0 top-7 left-8">
              <AfterEffectsIcon className="h-11" />
            </div>
          </div>
        </div>
        <div class="relative px-8 pt-4 pb-8 space-y-8">
          <h2 class="text-3xl md:text-4xl font-semibold text-slate-700 pb-2">After Effects</h2>
          <span class="text-lg md:text-xl font-semibold text-slate-700">Motion Graphics Design</span>

          <div class="italic">
            <!-- <span class="text-lg md:text-xl font-semibold text-[#A86DFC]">Used to create</span> -->
            <ul class="text-lg md:text-xl text-slate-700">
              <li>Logo Animation</li>
              <li>Animated Illustration</li>
              <li>Animations</li>
            </ul>
          </div>

          <div class="text-3xl font-semibold text-slate-700">6 yrs</div>
        </div>
      </Border>
    </li>
    <!-- Premiere Card -->
    <li class="skill opacity-0">
      <Border className="min-w-[330px]" style="flex: 0 0 auto;">
        <!-- Wave and Icon -->
        <div class="relative h-32">
          <div class="absolute inset-x-0 top-0 inset-y-0">
            <WaveSkillCard className="min-h-[8rem]" fill="#D8F3FD" />
            <div class="absolute inset-y-0 top-7 left-8">
              <PremiereIcon className="h-11" />
            </div>
          </div>
        </div>
        <div class="relative px-8 pt-4 pb-8 space-y-8">
          <h2 class="text-3xl md:text-4xl font-semibold text-slate-700 pb-2">Premiere</h2>
          <span class="text-lg md:text-xl font-semibold text-slate-700">Video Editing</span>

          <div class="italic">
            <!-- <span class="text-lg md:text-xl font-semibold text-[#A86DFC]">Used to create</span> -->
            <ul class="text-lg md:text-xl text-slate-700">
              <li>Color Correction</li>
              <li>Editing Video</li>
              <li class="opacity-0 select-none">empty</li>
            </ul>
          </div>

          <div class="text-3xl font-semibold text-slate-700">4 yrs</div>
        </div>
      </Border>
    </li>
    <!-- Photoshop Card -->
    <li class="skill opacity-0">
      <Border className="min-w-[330px]" style="flex: 0 0 auto;">
        <!-- Wave and Icon -->
        <div class="relative h-32">
          <div class="absolute inset-x-0 top-0 inset-y-0">
            <WaveSkillCard className="min-h-[8rem]" fill="#E0FAFB" />
            <div class="absolute inset-y-0 top-7 left-8">
              <PhotoshopIcon className="h-11" />
            </div>
          </div>
        </div>
        <div class="relative px-8 pt-4 pb-8 space-y-8">
          <h2 class="text-3xl md:text-4xl font-semibold text-slate-700 pb-2">Photoshop</h2>
          <span class="text-lg md:text-xl font-semibold text-slate-700">Photo Editing</span>

          <div class="italic">
            <!-- <span class="text-lg md:text-xl font-semibold text-[#A86DFC]">Used to create</span> -->
            <ul class="text-lg md:text-xl text-slate-700">
              <li>Editing Photo</li>
              <li>Color Correction</li>
              <li class="opacity-0 select-none">empty</li>
            </ul>
          </div>

          <div class="text-3xl font-semibold text-slate-700">6 yrs</div>
        </div>
      </Border>
    </li>
    <!-- To create spacing -->
    <div class="md:hidden"></div>
    <div class="md:hidden"></div>
  </ul>

  <ScrollProgress className="md:hidden" {moverStyle} />
</div>

<style>
  .scrolling-wrapper {
    -webkit-overflow-scrolling: touch;
  }

  .scrolling-wrapper::-webkit-scrollbar {
    display: none;
  }
</style>
