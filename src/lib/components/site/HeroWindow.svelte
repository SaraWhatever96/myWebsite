<script lang="ts">
  import { timeline, inView, type TimelineDefinition } from "motion";
  import { Icons } from "$lib/components/site/icons";
	import { Button } from "$components/ui/button";
	import { onMount } from "svelte";

  const sequence: TimelineDefinition = [
    ['#first-message', { y: [200, 70], rotate: ['4deg', '0deg'] }, { duration: 0.7 }],
    ['#second-message', { y: [100, 0], rotate: ['4deg', '0deg'] }, { duration: 0.7, at: '+1.2' }],
    ['#first-message', { y: [70, -10] }, { duration: 0.7, at: '<' }],
  ];
  const options = {
    defaultOptions: { ease: "ease-out" },
  }

  onMount(() => {
    inView('#hello-btn', () => {
      timeline(sequence, options);
    });
  })

  function sendMail() {
    window.location.href = 'mailto:sarah.cosmai@gmail.com?subject=&body=';
  }
</script>



<!-- TODO: Rivedere il padding, su Figma non è chiaro -->
<div class="px-2 py-3 w-full h-full rounded-lg bg-gradient-to-b from-[#DCF8F9] from-0% via-[#DBECFA] via-60% to-[#E6DDF8] md:p-10">
  <!-- Window container -->
  <!-- TODO: guardare Figma perchè c'é una sfumatura colore sul bordo -->
  <!-- TODO: rivedere il calcolo sull'altezza perche il bottone e le sue dimensioni non sono definitive -->
  <div class="rounded-lg w-full h-[calc(100%-61px)] bg-white border-2 border-[#A6EDF2] overflow-hidden">
    <!-- Window Action Menu -->
    <div class="flex space-x-1.5 p-2 border-b-2 border-[#CEC0F1]">
      <div class="h-2.5 w-2.5 rounded-full bg-[#8B5EED]"></div>
      <div class="h-2.5 w-2.5 rounded-full bg-[#50C8F4]"></div>
      <div class="h-2.5 w-2.5 rounded-full bg-[#54C1C5]"></div>
    </div>

    <!-- Window Header -->
    <!-- TODO: Usare le icone di Sara, chiedere dove le ha prese -->
    <div class="flex py-4 px-3 text-[#CEC0F1] justify-between">
      <Icons.arrowLeft />

      <div class="flex space-x-1">
        <Icons.panelLeft />
        <Icons.moreVertical />
      </div>
    </div>

    <!-- Window Content -->
    <div class="relative flex flex-col justify-end w-full h-[calc(100%-84px)] p-3 overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-t from-[#BEF2F4] from-[-45%] via-[#C2DFF7] via-75% to-[#E3DAF7] to-[130%]"></div>

      <!-- TODO: text bubbles animation.. -->
      <div id="first-message" class="messages relative translate-y-[200px] w-full bg-white py-3 px-4 max-w-xs rounded-lg rounded-bl-none">
        <p class="text-primary font-semibold">I'm currently looking for new opportunities</p>
      </div>

      <div id="second-message" class="messages relative translate-y-[100px] w-full bg-white py-3 px-4 max-w-xs rounded-lg rounded-bl-none">
        <p class="text-primary font-semibold">Having questions or just want to reach out?</p>
      </div>
    </div>
  </div>

  <!-- TODO: allineare lo stile di questo bottone -->
  <Button id="hello-btn" on:click={sendMail} variant="white" size="lg" class="relative w-full mt-4 lg:mt-6">
    Say hello
  </Button>
</div>