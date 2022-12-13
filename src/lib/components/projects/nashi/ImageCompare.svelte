<script lang="ts">
	import { onMount } from 'svelte';
	import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

	export let beforeImg: string;
	export let afterImg: string;
	export let beforeImgAlt: string = '';
	export let afterImgAlt: string = '';
	export let beforeLabel: string = 'Before';
	export let afterLabel: string = 'After';
  export let showLabels: boolean = true;
  export let hoverStart: boolean = true;
  export let smoothing: boolean = true; // Not yet working

	let comparatorEl, wrapperEl, dividerEl; // Binded to html elements
	let active = false;

	onMount(() => {
		// Disable smoothing for Safari, causes bugs
		if (getSafariAgent()) {
			smoothing = false;
		}
	});

	function getSafariAgent(): boolean {
		return (
			navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1
		);
	}

	function handleGlobalMouseup() {
		enableBodyScroll(comparatorEl);
		activate(false);
	}

	function handleMouseDown(event): void {
		activate(true);
		disableBodyScroll(comparatorEl, { reserveScrollBarGap: true });
		slideCompare(event);
	}

	function handleMouseMove(event): void {
		active && slideCompare(event);
	}

	function handleMouseUp(): void {
		activate(false);
	}

	function handleTouchStart(): void {
		activate(true);
		disableBodyScroll(comparatorEl, { reserveScrollBarGap: true });
	}

	function handleTouchMove(event): void {
		active && slideCompare(event);
	}

	function handleTouchEnd(): void {
		activate(false);
		enableBodyScroll(comparatorEl);
	}

	function handleMouseEnter(): void {
		hoverStart && activate(true);
	}

	function slideCompare(event): void {
		let bounds = comparatorEl.getBoundingClientRect();
		let x = event.touches !== undefined
      ? event.touches[0].clientX - bounds.left
      : event.clientX - bounds.left;
		let y = event.touches !== undefined
      ? event.touches[0].clientY - bounds.top
      : event.clientY - bounds.top;

		let position = (x / bounds.width) * 100;

		if (position >= 0 && position <= 100) {
			dividerEl.style.left = `calc(${position}% - 16px)`; // 16px because the whole width of the divider is 48px
			wrapperEl.style.width = `calc(${100 - position}%)`;
		}
	}

	function activate(state): void {
		active = state;
	}
</script>

<svelte:window class={active && 'user-none'} on:mouseup={handleGlobalMouseup} />

<div class="-mx-6 md:-mx-0 mb-6">
	<div
		class="relative overflow-hidden group"
		bind:this={comparatorEl}
		on:mousedown={handleMouseDown}
		on:mousemove={handleMouseMove}
		on:mouseup={handleMouseUp}
		on:touchstart={handleTouchStart}
		on:touchmove={handleTouchMove}
		on:touchend={handleTouchEnd}
		on:mouseenter={handleMouseEnter}
		style="cursor: col-resize"
	>
		<img loading="lazy"
			class="pointer-events-none select-none max-w-none w-full !m-0 !p-0 top-0 block h-auto static z-[1] left-0"
			src={beforeImg}
			alt={beforeImgAlt}
		/>

		{#if showLabels}
			<span class="absolute text-white bottom-4 z-[12] bg-black/40 rounded-md px-3 py-2 select-none left-4 on-hover keep">{beforeLabel}</span>
			<span class="absolute text-white bottom-4 z-[12] bg-black/40 rounded-md px-3 py-2 select-none right-4 on-hover keep">{afterLabel}</span>
		{/if}

		<div bind:this="{wrapperEl}" class="absolute w-1/2 !h-full right-0 top-0 overflow-hidden bg-cover bg-center z-[3]">
			<img loading="lazy"
				class="pointer-events-none select-none max-w-none w-auto !m-0 !p-0 top-0 block h-full absolute z-[2] left-auto right-0"
				src={afterImg}
				alt={afterImgAlt}
			/>
		</div>

		<div bind:this="{dividerEl}" class="absolute flex flex-col justify-center items-center h-full top-0 z-[5] left-[calc(50%-16px)] {smoothing && 'transition duration-100 ease-in-out'}">
			<!-- Top Divider -->
			<div class="h-1/2 w-1 z-[6] bg-amber-500 dark:bg-amber-400"/>
			<!-- Circle Handle ->
			<div class="w-12 h-12 border-4 divide-solid border-amber-500 dark:border-amber-400 box-border flex-shrink-0 rounded-full backdrop-blur-sm"></div>

			<div class="w-full h-full flex justify-center items-center absolute z-[5]">
				<!-- Arrow left ->
				<div class="transition duration-100 ease-in-out group-hover:-translate-x-[2px]">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="text-amber-500 dark:text-amber-400 w-5 h-5">
						<path fill-rule="evenodd" d="M7.72 12.53a.75.75 0 010-1.06l7.5-7.5a.75.75 0 111.06 1.06L9.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5z" clip-rule="evenodd" />
					</svg>
				</div>
				<!-- Arrow right ->
				<div class="transition duration-100 ease-in-out group-hover:translate-x-[2px]">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="text-amber-500 dark:text-amber-400 w-5 h-5">
						<path fill-rule="evenodd" d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z" clip-rule="evenodd" />
					</svg>
				</div>
			</div> 
			-->

			<div class="flex justify-center items-center h-6 w-6 md:h-8 md:w-8 transform rotate-45 z-10 bg-amber-500 dark:bg-amber-400 rounded-full group-hover:scale-150 transition-all ease-in-out duration-300 border border-amber-300/50"></div>

			<!-- Bottom Divider -->
			<div class="h-1/2 w-1 z-[6] bg-amber-500 dark:bg-amber-400"/>
		</div>
	</div>
</div>
