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

	function handleTouchStart(event): void {
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

  // TODO: for now it has no purpose
	function handleMouseLeave(): void {
		// let coord = settings.addCircle ? arrowCoordinates.circle : arrowCoordinates.standard;

		// arrowAnimator.forEach((anim, i) => {
		// 	anim.style.cssText = `
    //   ${`transform: translateX(${i === 0 ? `${coord[0]}px` : `-${coord[0]}px`});`}
    //   `;
		// });
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
			dividerEl.style.left = `calc(${position}% - 24px)`; // 24px because the whole width of the divider is 48px
			wrapperEl.style.width = `calc(${100 - position}%)`;
		}
	}

	function activate(state): void {
		active = state;
	}
</script>

<svelte:window class={active && 'user-none'} on:mouseup={handleGlobalMouseup} />

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
	on:mouseleave={handleMouseLeave}
	style="cursor: col-resize"
>
	<img
		class="pointer-events-none select-none max-w-none w-full !m-0 !p-0 top-0 block h-auto static z-[1] left-0"
		src={beforeImg}
		alt={beforeImgAlt}
	/>

	{#if showLabels}
		<span
			class="absolute text-white bottom-4 z-[12] bg-black/40 rounded-md px-3 py-2 select-none left-4 on-hover keep"
			>{beforeLabel}</span
		>
		<span
			class="absolute text-white bottom-4 z-[12] bg-black/40 rounded-md px-3 py-2 select-none right-4 on-hover keep"
			>{afterLabel}</span
		>
	{/if}

	<div bind:this="{wrapperEl}" class="absolute w-1/2 !h-full right-0 top-0 overflow-hidden bg-cover bg-center z-[3]">
		<img
			class="pointer-events-none select-none max-w-none w-auto !m-0 !p-0 top-0 block h-full absolute z-[2] left-auto right-0"
			src={afterImg}
			alt={afterImgAlt}
		/>
	</div>

	<div bind:this="{dividerEl}" class="absolute flex flex-col justify-center items-center h-full top-0 z-[5] left-[calc(50%-24px)] {smoothing && 'transition duration-100 ease-in-out'}">
    <!-- Top Divider -->
		<div class="h-1/2 w-1 z-[6] bg-[#BBDDF4]"/>
    <!-- Circle Handle -->
    <div class="w-12 h-12 border-4 divide-solid border-[#BBDDF4] rounded-full backdrop-blur-sm"></div>
    
		<div class="w-full h-full flex justify-center items-center absolute z-[5]">
      <!-- Arrow left -->
			<div class="transition duration-100 ease-in-out group-hover:-translate-x-[2px]">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="text-[#BBDDF4] w-5 h-5">
          <path fill-rule="evenodd" d="M7.72 12.53a.75.75 0 010-1.06l7.5-7.5a.75.75 0 111.06 1.06L9.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5z" clip-rule="evenodd" />
        </svg>
			</div>
      <!-- Arrow right -->
			<div class="transition duration-100 ease-in-out group-hover:translate-x-[2px]">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="text-[#BBDDF4] w-5 h-5">
          <path fill-rule="evenodd" d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z" clip-rule="evenodd" />
        </svg>
			</div>
		</div>

    <!-- Bottom Divider -->
		<div class="h-1/2 w-1 z-[6] bg-[#BBDDF4]"/>
	</div>
</div>

<!--
<script lang="ts">
	export let hideOnSlide: boolean = true;
	export let contain: boolean = false;
	export let overlay: boolean = true;
	export let offset: number = 0.5;
	export let before: string = '';
	export let after: string = '';

	let imgOffset: DOMRect = null;
	let sliding: boolean = false;
	let img: any;

	// Reactive variables
	$: w = imgOffset && imgOffset.width;
	$: h = imgOffset && imgOffset.height;
	$: x = w * offset;
	$: opacity = hideOnSlide && sliding ? 0 : 1;
	$: style = contain ? `width:100%;height:100%;` : `width:${w}px;height:${h}px;`;


	function resize(e): void {
		imgOffset = (e.type === 'load' ? e.target : img).getBoundingClientRect();
	}

	function move(e): void {
		if (sliding && imgOffset) {
			let x = (e.touches ? e.touches[0].pageX : e.pageX) - imgOffset.left;
			x = x < 0 ? 0 : ((x > w) ? w : x);
			offset = x / w;
		}
	}

	function start(e): void {
		sliding = true;
		move(e);
	}

	function end(): void {
		sliding = false;
	}
</script>

<style>
	.handle {
		z-index: 30;
		width: 40px;
		height: 40px;
		cursor: move;
		background: none;
		margin-top: -4px;
		margin-left: -4px;
		user-select: none;
		position: absolute;
		border-radius: 50px;
		top: calc(50% - 20px);
		border: 4px solid white;
	}
	.handle:before, .handle:after {
		content: "";
		height: 9999px;
		position: absolute;
		left: calc(50% - 2px);
		border: 2px solid white;
	}
	.handle:before { top: 40px; }
	.handle:after { bottom: 40px; }
	.arrow-right, .arrow-left {
		width: 0;
		height: 0;
		user-select: none;
		position: relative;
		border-top: 10px solid transparent;
		border-bottom: 10px solid transparent;
	}
	.arrow-right {
		left: 23px;
		bottom: 10px;
		border-left: 10px solid white;
	}
	.arrow-left {
		left: 7px;
		top: 10px;
		border-right: 10px solid white;
	}
</style>


<svelte:window
	on:touchmove={move}
	on:touchend={end}
	on:mousemove={move}
	on:mouseup={end}
	on:resize={resize}
/>

qui sotto dovrebbe esserci lo slider comparator!!!!!

<div class="relative overflow-hidden box-content group !h-[32rem]" {style} on:touchstart={start} on:mousedown={start}>
	<img
		class="absolute top-0 left-0 z-20 block max-w-full select-none object-cover h-full my-0"
		bind:this={img}
		src={after}
		alt="after"
		on:mousedown|preventDefault
		on:load={resize}
		{style}
	>
	<img
		class="absolute top-0 left-0 z-20 block max-w-full select-none object-cover h-full my-0"
		src={before}
		alt="before"
		on:mousedown|preventDefault
		style="{style}clip:rect(0, {x}px, {h}px, 0);"
	>

	{#if overlay}
		<div class="absolute top-0 opacity-0 z-30 w-full h-full transition-opacity duration-500 bg-opacity-50 group-hover:opacity-100" style="opacity:{opacity}"></div>
	{/if}

	<div class="absolute top-0 bottom-0 left-0 z-30 select-none" style="opacity:{opacity}">
		<slot name="before"></slot>
	</div>
	<div class="absolute top-0 bottom-0 right-0 z-30 select-none" style="opacity:{opacity}">
		<slot name="after"></slot>
	</div>

	<div class="handle" style="left: calc({offset * 100}% - 20px)">
		<div class="arrow-left"></div>
		<div class="arrow-right"></div>
	</div>
</div>
-->
