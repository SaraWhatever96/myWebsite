<script lang="ts">
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
import Border from "../neumorphic/Border.svelte";


</script>


<div class="pt-48">
  <div class="flex justify-center pb-36">
    <div class="max-w-5xl">
      <p class="text-slate-700 font-medium text-xl">
        Through my work, I've learned different skills such as Wireframing, Prototyping, Design with Accessibility in mind, Mobile First Approach, CSS and HTML.
      </p>
    </div>
  </div>

  <div class="grid grid-cols-3 gap-x-8 gap-y-10">
    <!-- Figma Card -->
    <Border>
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
        <h2 class="text-4xl font-semibold text-slate-700 pb-2">Figma</h2>
        <span class="text-xl font-semibold text-slate-700">Wireframing & Prototyping</span>

        <div>
          <span class="text-xl font-semibold text-[#A86DFC]">Used to do</span>
          <ul class="text-xl text-slate-700">
            <li>High fidelity prototypes</li>
            <li>Digital illustrations</li>
            <li>Icons</li>
          </ul>
        </div>

        <div class="text-3xl font-semibold text-slate-700">3 yrs</div>
      </div>
    </Border>
    <!-- Sketch Card -->
    <Border>
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
        <h2 class="text-4xl font-semibold text-slate-700 pb-2">Sketch</h2>
        <span class="text-xl font-semibold text-slate-700">Wireframing & Prototyping</span>

        <div>
          <span class="text-xl font-semibold text-[#A86DFC]">Used to do</span>
          <ul class="text-xl text-slate-700">
            <li>High fidelity prototypes</li>
            <li>Digital illustrations</li>
            <li>Icons</li>
          </ul>
        </div>

        <div class="text-3xl font-semibold text-slate-700">3 yrs</div>
      </div>
    </Border>
    <!-- Spline Card -->
    <Border>
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
        <h2 class="text-4xl font-semibold text-slate-700 pb-2">Spline</h2>
        <span class="text-xl font-semibold text-slate-700">3D Modeling & Animation</span>

        <div>
          <span class="text-xl font-semibold text-[#A86DFC]">Used to do</span>
          <ul class="text-xl text-slate-700">
            <li>3D Elements</li>
            <li>3D Illustrations</li>
            <li>3D Animations</li>
          </ul>
        </div>

        <div class="text-3xl font-semibold text-slate-700">1 yr</div>
      </div>
    </Border>
    <!-- Blender Card -->
    <Border>
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
        <h2 class="text-4xl font-semibold text-slate-700 pb-2">Blender</h2>
        <span class="text-xl font-semibold text-slate-700">3D Modeling & Animation</span>

        <div>
          <span class="text-xl font-semibold text-[#A86DFC]">Used to do</span>
          <ul class="text-xl text-slate-700">
            <li>3D Illustrations</li>
            <li>3D Animations</li>
            <li>3D Elements</li>
          </ul>
        </div>

        <div class="text-3xl font-semibold text-slate-700">1 yr</div>
      </div>
    </Border>
    <!-- Illustrator Card -->
    <Border>
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
        <h2 class="text-4xl font-semibold text-slate-700 pb-2">Illustrator</h2>
        <span class="text-xl font-semibold text-slate-700">Vector Graphics Design</span>

        <div>
          <span class="text-xl font-semibold text-[#A86DFC]">Used to do</span>
          <ul class="text-xl text-slate-700">
            <li>Illustrations</li>
            <li>Logo</li>
          </ul>
        </div>

        <div class="text-3xl font-semibold text-slate-700">5 yrs</div>
      </div>
    </Border>
    <!-- Indesign Card -->
    <Border>
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
        <h2 class="text-4xl font-semibold text-slate-700 pb-2">Indesign</h2>
        <span class="text-xl font-semibold text-slate-700">Editorial Layout Design</span>

        <div>
          <span class="text-xl font-semibold text-[#A86DFC]">Used to do</span>
          <ul class="text-xl text-slate-700">
            <li>Posters</li>
            <li>Brochures</li>
            <li>Labels</li>
          </ul>
        </div>

        <div class="text-3xl font-semibold text-slate-700">5 yrs</div>
      </div>
    </Border>
    <!-- AfterEffects Card -->
    <Border>
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
        <h2 class="text-4xl font-semibold text-slate-700 pb-2">AfterEffects</h2>
        <span class="text-xl font-semibold text-slate-700">Motion Graphics Design</span>

        <div>
          <span class="text-xl font-semibold text-[#A86DFC]">Used to do</span>
          <ul class="text-xl text-slate-700">
            <li>Logo Animation</li>
            <li>Animated Illustration</li>
            <li>Animations</li>
          </ul>
        </div>

        <div class="text-3xl font-semibold text-slate-700">6 yrs</div>
      </div>
    </Border>
    <!-- Premiere Card -->
    <Border>
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
        <h2 class="text-4xl font-semibold text-slate-700 pb-2">Premiere</h2>
        <span class="text-xl font-semibold text-slate-700">Video Editing</span>

        <div>
          <span class="text-xl font-semibold text-[#A86DFC]">Used to do</span>
          <ul class="text-xl text-slate-700">
            <li>Color Correction</li>
            <li>Editing Video</li>
          </ul>
        </div>

        <div class="text-3xl font-semibold text-slate-700">4 yrs</div>
      </div>
    </Border>
    <!-- Photoshop Card -->
    <Border>
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
        <h2 class="text-4xl font-semibold text-slate-700 pb-2">Photoshop</h2>
        <span class="text-xl font-semibold text-slate-700">Photo Editing</span>

        <div>
          <span class="text-xl font-semibold text-[#A86DFC]">Used to do</span>
          <ul class="text-xl text-slate-700">
            <li>Editing Photo</li>
            <li>Color Correction</li>
          </ul>
        </div>

        <div class="text-3xl font-semibold text-slate-700">6 yrs</div>
      </div>
    </Border>
  </div>
</div>
