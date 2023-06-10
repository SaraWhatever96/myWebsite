<script lang="ts">
	import Waves from '$lib/components/assets/Waves/index.svelte'
	import SealAnimation from '$lib/components/assets/SealAnimation.svelte';
	import { onMount } from 'svelte';
	import type { Coordinates } from '$lib/models/Coordinates';
	import ClosingWave from '../assets/Waves/ClosingWave.svelte';

	let blueSealCoords: Coordinates;
	let pinkSealCoords: Coordinates;
	let sealAnimationSize = 112;
	let viewportWidth: number;
	$: isMobileView = viewportWidth ? viewportWidth < 768 : false;


	onMount(() => {
		initializeSealPosition();
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

		console.log({mutableCoordinate})
		if (isMobileView) {
			const xAxisMargin = Math.round((viewportWidth - (maxColumns * sealAnimationSize)) / 2);
			mutableCoordinate.x = mutableCoordinate.x + xAxisMargin;
		}

		if (sealColor === 'blue') {
			blueSealCoords = mutableCoordinate;
		} else {
			pinkSealCoords = mutableCoordinate;
		}
	}

	function initializeSealPosition() {
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

		if (isMobileView) {
			const xAxisMargin = Math.round((viewportWidth - (maxColumns * sealAnimationSize)) / 2);
			coordObject1.x = coordObject1.x + xAxisMargin;
			coordObject2.x = coordObject2.x + xAxisMargin;
		}

		blueSealCoords = coordObject1;
		pinkSealCoords = coordObject2
	}

	function getAvailableArea() {
		const halfScreen = window.innerWidth / 2;
		let availableWidth: number;
		let areaHeight: number;

		if (isMobileView) {
			areaHeight = 400;
			availableWidth = window.innerWidth;
		} else {
			let waveOffset = 150;
			areaHeight = 600; // Fixed to 600px for md, lg and xl screen sizes
			let screenSize = 40 * 16 - waveOffset; // 40 rem * 16px - 150px = 490px
			availableWidth = Math.max(250, Math.min(halfScreen, screenSize));
		}

		// Calculate the maximum number of columns and rows for the objects
		let maxColumns = Math.floor(availableWidth / sealAnimationSize);
		let maxRows = Math.floor(areaHeight / sealAnimationSize);

		return {
			maxColumns,
			maxRows
		};
	}
</script>


<svelte:window bind:innerWidth={viewportWidth}/>

<section class="py-4 lg:py-6">
	<div class="m-full-width">
		<div class="relative inset-shadow bg-slate-100/70 h-[1000px] md:h-[600px] overflow-hidden">
			<!-- Background under Waves for Desktop -->
			<div class="absolute z-0 max-md:inset-x-0 max-md:bottom-0 h-1/2 md:inset-y-0 md:w-[45%] md:h-auto md:right-0 bg-water-pink"></div>

			<!-- Content -->
			<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-20 relative">
				<div class="flex flex-col max-md:space-y-14 md:grid md:grid-cols-2 md:grid-rows-1">
          <div class="max-md:mt-10 md:flex md:flex-col md:justify-center md:h-[600px]">
            <h1 class="font-semibold text-slate-700 text-5xl leading-[3.5rem]">
              May <br />
              design be <br />
              with you <br />
            </h1>
          </div>
					<div class="relative max-md:m-full-width">
						<!-- Background under Waves for Mobile -->
						<div class="md:hidden absolute z-0 top-0 inset-x-0 w-auto bg-water-pink"></div>
						<Waves />
						<div class="max-md:relative max-md:mt-[150px]">
							<SealAnimation color="blue" coords={blueSealCoords} on:updateSealPosition={updateSealPositionByColor} />
							<SealAnimation color="pink" coords={pinkSealCoords} on:updateSealPosition={updateSealPositionByColor} />
						</div>
					</div>
				</div>
			</div>

			<!-- Only for Mobile -->
			<ClosingWave className="absolute h-auto w-[800px] -bottom-4 md:hidden" />
		</div>
	</div>
</section>

