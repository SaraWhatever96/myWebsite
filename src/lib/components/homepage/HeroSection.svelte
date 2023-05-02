<script lang="ts">
	import FullWidthLayout from '$lib/components/FullWidthLayout.svelte';
	import WavesAnimation from '$lib/components/assets/WavesAnimation/index.svelte'
	import SealAnimation from '$lib/components/assets/SealAnimation.svelte';
	import { onMount } from 'svelte';

	let blueSealCoords: { x: number, y: number };
	let pinkSealCoords: { x: number, y: number };
  let areaHeight = 600; // Fixed for md, lg and xl screen sizes
	let sealAnimationSize = 112;


	onMount(() => {
		updateSealPosition();
	})


	function updateSealPosition() {
		// Get the width of the avaiable area
		const waveOffset = 150;
		const halfScreen = window.innerWidth / 2;
		const screenSize = 40 * 16 - waveOffset; // 40 rem * 16px - 150px = 490px
		const availableWidth = Math.max(250, Math.min(halfScreen, screenSize));

		// Calculate the maximum number of columns and rows for the objects
		let maxColumns = Math.floor(availableWidth / sealAnimationSize);
		let maxRows = Math.floor(areaHeight / sealAnimationSize);

		console.log({maxColumns}, {maxRows});

		// Generate random coordinates for the animations, making sure they don't overlap
		let coordObject1: { x: number, y: number };
		let coordObject2: { x: number, y: number };
    do {
      coordObject1 = {
        x: Math.floor(Math.random() * maxColumns) * sealAnimationSize,
        y: Math.floor(Math.random() * maxRows) * sealAnimationSize
      };
      coordObject2 = {
        x: Math.floor(Math.random() * maxColumns) * sealAnimationSize,
        y: Math.floor(Math.random() * maxRows) * sealAnimationSize
      };
    } while (coordObject1.x == coordObject2.x && coordObject1.y == coordObject2.y);

		blueSealCoords = coordObject1;
		pinkSealCoords = coordObject2
	}
</script>


<section class="py-4 lg:py-6">
	<FullWidthLayout>
		<div class="relative inset-shadow bg-slate-100/70 h-[600px] overflow-hidden">
			<!-- Background under Waves -->
			<div class="absolute z-0 md:inset-y-0 md:w-[45%] md:right-0 bg-[#F3EDFD]"></div>

			<!-- Content -->
			<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-20 relative">
				<div class="grid grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-1">
          <div class="flex flex-col justify-center h-[600px]">
            <h1 class="font-semibold text-5xl text-slate-700 leading-[3.5rem]">
              May <br />
              design be <br />
              with you <br />
            </h1>
          </div>
					<div class="relative hidden md:block">
						<WavesAnimation />
						<SealAnimation color="blue" coords={blueSealCoords} on:updateSealPosition={updateSealPosition} />
						<SealAnimation color="pink" coords={pinkSealCoords} on:updateSealPosition={updateSealPosition} />
					</div>
				</div>
			</div>
		</div>
	</FullWidthLayout>
</section>

