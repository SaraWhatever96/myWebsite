<script lang="ts">
	import GreenWave from './GreenWave.svelte';
	import BlueWave from './BlueWave.svelte';
	import PinkWave from './PinkWave.svelte';
</script>


<GreenWave className="absolute will-change-transform h-auto w-[1600px] animate-green-wave-mobile md:h-[1600px] md:animate-green-wave-desktop md:-translate-x-44" />
<BlueWave className="absolute will-change-transform h-auto w-[1800px] animate-blue-wave-mobile md:h-[1800px] md:animate-blue-wave-desktop md:-translate-x-12" />
<PinkWave className="absolute will-change-transform h-auto w-[1800px] animate-pink-wave-mobile md:h-[1800px] md:animate-pink-wave-desktop" />
