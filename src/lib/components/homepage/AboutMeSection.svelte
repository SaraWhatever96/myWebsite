<script lang="ts">
  import Lottie from "$lib/components/assets/Lottie.svelte";
	import SplitText from "$lib/components/animationWrapper/SplitText.svelte";
</script>

<section class="mt-28 space-y-16 lg:mt-36 lg:space-y-36">
  <!-- Title -->
  <div class="text-center">
    <SplitText type="words" target="#aboutMe-tite" staggerDelay="{0.1}">
      <h2 id="aboutMe-tite" class="font-semibold text-slate-700 text-5xl leading-[3.5rem]">
        Hi there, <br class="md:hidden">I'm Sara
      </h2>
    </SplitText>
  </div>

  <!-- First Paragraph -->
  <div class="grid grid-cols-1 grid-rows-[1fr_min-content] max-md:gap-y-16 md:grid-cols-2 md:grid-rows-1">
    <!-- First Animation -->
    <div class="inset-shadow max-md:w-full md:h-[min(40vw,35rem)] md:w-[min(40vw,35rem)] rounded-3xl bg-slate-100/70">
      <Lottie animationName="illu1" />
    </div>

    <!-- Description -->
    <div class="paragraph-container flex flex-col justify-center h-full space-y-5 md:space-y-10">
      <SplitText type="lines" target="#aboutMe-1">
        <p id="aboutMe-1" class="opacity-0 text-slate-700 font-medium text-lg md:text-xl">
          I am a freelance designer and a startup founder with a bachelor degree in Communication Design through IAAD University.
        </p>
      </SplitText>
      <SplitText type="lines" target="#aboutMe-2">
        <p id="aboutMe-2" class="opacity-0 text-slate-700 font-medium text-lg md:text-xl">
          Right now I’m diving deep into UI-UX design, visual design and motion design, trying to fullfill my constant desire of learning new skills.
        </p>
      </SplitText>
    </div>
  </div>

  <!-- Second Paragraph -->
  <div class="grid grid-cols-1 grid-rows-[1fr_min-content] max-md:gap-y-16 md:grid-cols-2 md:grid-rows-1">
    <!-- Second Animation -->
    <div class="inset-shadow max-md:w-full md:h-[min(40vw,35rem)] md:w-[min(40vw,35rem)] rounded-3xl bg-slate-100/70 md:col-start-2 md:row-start-1 md:justify-self-end">
      <Lottie animationName="illu2" />
    </div>

    <!-- Description -->
    <div class="paragraph-container flex flex-col justify-center h-full space-y-5 md:space-y-10 md:col-start-1 md:row-start-1">
      <SplitText type="lines" target="#aboutMe-3">
        <p id="aboutMe-3" class="opacity-0 text-slate-700 font-medium text-lg md:text-xl">
          While I'm off work, I find inspiration through my passions. I'm fashinated by Japanese culture and totally into eating with chopsticks.
        </p>
      </SplitText>
      <SplitText type="lines" target="#aboutMe-4">
        <p id="aboutMe-4" class="opacity-0 text-slate-700 font-medium text-lg md:text-xl">
          I love cinema as it boosts up my powers of observation and helps me learning more about animation. Music is my background during my work and cooking sessions.
        </p>
      </SplitText>
    </div>
  </div>

  <!-- Third Paragraph -->
  <div class="grid grid-cols-1 grid-rows-[1fr_min-content] max-md:gap-y-16 md:grid-cols-2 md:grid-rows-1">
    <!-- Third Animation -->
    <div class="inset-shadow max-md:w-full md:h-[min(40vw,35rem)] md:w-[min(40vw,35rem)] rounded-3xl bg-slate-100/70">
      <Lottie animationName="illu3" />
    </div>

    <!-- Description -->
    <div class="paragraph-container flex flex-col justify-center h-full space-y-5 md:space-y-10">
      <SplitText type="lines" target="#aboutMe-5">
        <p id="aboutMe-5" class="opacity-0 text-slate-700 font-medium text-lg md:text-xl">
          These days I'm wondering how an experience in a big company with great designers raising my standards would be like.
        </p>
      </SplitText>
    </div>
  </div>
</section>