<script lang="ts">
	import FullWidthLayout from '$lib/components/FullWidthLayout.svelte';
	import WavesAnimation from '$lib/components/assets/Waves/index.svelte'
	import SealAnimation from '$lib/components/assets/SealAnimation.svelte';
	import { onMount } from 'svelte';
	import type { Coordinates } from '$lib/models/Coordinates';

	let blueSealCoords: Coordinates;
	let pinkSealCoords: Coordinates;
	let sealAnimationSize = 112;
  let areaHeight = 600; // Fixed to 600px for md, lg and xl screen sizes


	onMount(() => {
		updateSealPosition();
	});

	function updateSealPositionByColor(event: any) {
		console.log(event.detail.color);
		const sealColor: 'blue' | 'pink' = event.detail.color;
		const { maxColumns, maxRows } = getAvailableArea();

		let mutableCoordinate: Coordinates;
		let fixedCoordinates: Coordinates;
		if (sealColor === 'blue') {
			mutableCoordinate = blueSealCoords;
			fixedCoordinates = pinkSealCoords;
		} else {
			mutableCoordinate = pinkSealCoords;
			fixedCoordinates = blueSealCoords
		}

		do {
      mutableCoordinate = {
        x: Math.floor(Math.random() * maxColumns) * sealAnimationSize,
        y: Math.floor(Math.random() * maxRows) * sealAnimationSize
      };
    } while (mutableCoordinate.x == fixedCoordinates.x && mutableCoordinate.y == fixedCoordinates.y);

		if (sealColor === 'blue') {
			blueSealCoords = mutableCoordinate;
		} else {
			pinkSealCoords = mutableCoordinate;
		}
	}

	function updateSealPosition() {
		const { maxColumns, maxRows } = getAvailableArea();

		// Generate random coordinates for the animations, making sure they don't overlap
		let coordObject1: Coordinates;
		let coordObject2: Coordinates;
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

	function getAvailableArea() {
		// Get the width of the avaiable area
		const waveOffset = 150;
		const halfScreen = window.innerWidth / 2;
		const screenSize = 40 * 16 - waveOffset; // 40 rem * 16px - 150px = 490px
		const availableWidth = Math.max(250, Math.min(halfScreen, screenSize));

		// Calculate the maximum number of columns and rows for the objects
		let maxColumns = Math.floor(availableWidth / sealAnimationSize);
		let maxRows = Math.floor(areaHeight / sealAnimationSize);

		return {
			maxColumns,
			maxRows
		};
	}
</script>


<section class="py-4 lg:py-6">
	<FullWidthLayout>
		<div class="relative inset-shadow bg-slate-100/70 md:h-[600px] overflow-hidden">
			<!-- Background under Waves -->
			<div class="absolute z-0 md:inset-y-0 md:w-[45%] md:h-auto md:right-0 bg-[#F3EDFD]"></div>

			<!-- Content -->
			<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-20 relative">
				<div class="md:grid md:grid-cols-2 md:grid-rows-1">
          <div class="max-md:mt-10 md:flex md:flex-col md:justify-center md:h-[600px]">
            <h1 class="font-semibold text-slate-700 text-5xl leading-[3.5rem]">
              May <br />
              design be <br />
              with you <br />
            </h1>
          </div>
					<div class="relative hidden md:block">
						<WavesAnimation />
						<SealAnimation color="blue" coords={blueSealCoords} on:updateSealPosition={updateSealPositionByColor} />
						<SealAnimation color="pink" coords={pinkSealCoords} on:updateSealPosition={updateSealPositionByColor} />
					</div>
				</div>
			</div>
		</div>
	</FullWidthLayout>
</section>

