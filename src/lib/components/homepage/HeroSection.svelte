<script lang="ts">
	import { onMount } from 'svelte';
	import { animate } from 'motion';
	import Waves from '$lib/components/assets/Waves/index.svelte'
	import SealAnimation from '$lib/components/assets/SealAnimation.svelte';
	import type { Coordinates } from '$lib/types/Coordinates';
	import ClosingWave from '../assets/Waves/ClosingWave.svelte';
	import SplitTextWrapper from '../animations/SplitTextWrapper.svelte';


	let blueSealCoords: Coordinates;
	let pinkSealCoords: Coordinates;
	const sealAnimationSize = 112;
	const heightSealMobileContainer = 350;
	let viewportWidth: number;
	let loaded = false;
	$: isMobileView = viewportWidth ? viewportWidth < 768 : false;


	onMount(() => {
		loaded = true;
		animateHeroSection();
		isMobileView = viewportWidth < 768;
		initializeSealPosition();
	});

	function animateHeroSection() {
		animate('.fade-in', { opacity: [0, 1] }, { duration: 1, delay: 0.7, easing: 'ease-in' })
	}

	function updateSealPositionByColor(event: any) {
		const sealColor: 'blue' | 'pink' = event.detail.color;
		const { maxColumns, maxRows, xAxisMargin, yAxisMargin } = getAvailableArea();
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
        x: Math.floor(Math.random() * maxColumns) * sealAnimationSize + xAxisMargin,
        y: Math.floor(Math.random() * maxRows) * sealAnimationSize + yAxisMargin
      };
    } while (mutableCoordinate.x == fixedCoordinates.x && mutableCoordinate.y == fixedCoordinates.y);

		if (sealColor === 'blue') {
			blueSealCoords = mutableCoordinate;
		} else {
			pinkSealCoords = mutableCoordinate;
		}
	}

	function initializeSealPosition() {
		const { maxColumns, maxRows, xAxisMargin, yAxisMargin } = getAvailableArea();

		// Generate random coordinates for the animations, making sure they don't overlap
		let coordObject1: Coordinates;
		let coordObject2: Coordinates;
    do {
      coordObject1 = {
        x: Math.floor(Math.random() * maxColumns) * sealAnimationSize + xAxisMargin,
        y: Math.floor(Math.random() * maxRows) * sealAnimationSize + yAxisMargin
      };
      coordObject2 = {
        x: Math.floor(Math.random() * maxColumns) * sealAnimationSize + xAxisMargin,
        y: Math.floor(Math.random() * maxRows) * sealAnimationSize + yAxisMargin
      };
    } while (coordObject1.x == coordObject2.x && coordObject1.y == coordObject2.y);

		blueSealCoords = coordObject1;
		pinkSealCoords = coordObject2
	}

	function getAvailableArea() {
		const halfScreen = viewportWidth / 2;
		let availableWidth: number;
		let areaHeight: number;

		if (isMobileView) {
			areaHeight = heightSealMobileContainer;
			availableWidth = viewportWidth;
		} else {
			let waveOffset = 150;
			areaHeight = 600; // Fixed to 600px for md, lg and xl screen sizes
			let screenSize = 40 * 16 - waveOffset; // 40rem * 16px - 150px = 490px
			availableWidth = Math.max(250, Math.min(halfScreen, screenSize));
		}

		// Calculate the maximum number of columns and rows for the objects
		let maxColumns = Math.floor(availableWidth / sealAnimationSize);
		let maxRows = Math.floor(areaHeight / sealAnimationSize);

		// Mobile Only - Calculate the `x` and `y` margins to center the seals on screen
		let xAxisMargin = isMobileView ? Math.round((viewportWidth - (maxColumns * sealAnimationSize)) / 2) : 0;
		let yAxisMargin = isMobileView ? 50 : 0;

		return {
			maxColumns,
			maxRows,
			xAxisMargin,
			yAxisMargin
		};
	}
</script>


<svelte:window bind:innerWidth={viewportWidth}/>

<section class="py-4 lg:py-6">
	<div class="m-full-width">
		<div class="relative inset-shadow bg-slate-100/70 h-[1000px] md:h-[600px] overflow-hidden">
			<!-- Background under Waves for Desktop -->
			<div class="fade-in absolute opacity-0 z-0 max-md:inset-x-0 max-md:bottom-0 h-1/2 md:inset-y-0 md:w-[45%] md:h-auto md:right-0 bg-water-pink"></div>

			<!-- Content -->
			<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-20 relative">
				<div class="flex flex-col max-md:space-y-14 md:grid md:grid-cols-2 md:grid-rows-1">
          <div class="max-md:mt-10 md:flex md:flex-col md:justify-center md:h-[600px]">
						<SplitTextWrapper type="words" target="#hero-message" staggerDelay="{0.1}">
							<h1 id="hero-message" class="opacity-0 font-semibold text-slate-700 text-5xl leading-[3.5rem]">
								May <br />
								design be <br />
								with you <br />
							</h1>
						</SplitTextWrapper>
          </div>
					<div class="fade-in opacity-0 relative max-md:m-full-width">
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

