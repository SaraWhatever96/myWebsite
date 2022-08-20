<script>
  import LottieAnimation from "$lib/components/LottieAnimation.svelte";

  const studioServices = [
    {
      "title": "Urgenze",
      "jsonAnimationName": "urgenze"
    },
    {
      "title": "Estrazioni",
      "jsonAnimationName": "estrazione"
    },
    {
      "title": "Odontopediatria",
      "jsonAnimationName": "odontopediatria"
    },
    {
      "title": "Protossido",
      "jsonAnimationName": "protossido"
    },
    {
      "title": "Igiene",
      "jsonAnimationName": "igiene"
    },
    {
      "title": "Filler",
      "jsonAnimationName": "filler"
    },
    {
      "title": "Parodontologia",
      "jsonAnimationName": "paradontologia"
    },
    {
      "title": "Sbiancamento",
      "jsonAnimationName": "sbiancamento"
    },
    {
      "title": "Ortodonzia",
      "jsonAnimationName": "ortodonzia"
    },
    {
      "title": "Faccette",
      "jsonAnimationName": "faccette"
    },
    {
      "title": "Conservativa",
      "jsonAnimationName": "conservativa"
    },
    {
      "title": "Implantologia",
      "jsonAnimationName": "implantologia"
    }
  ]
</script>

<div class="grid grid-cols-2 md:grid-cols-3 gap-4">
  {#each studioServices as service}
    <LottieAnimation path="/animations/vierin/{service.jsonAnimationName}.json" animateEnteringViewport={false} />
  {/each}
</div>

