<script lang="ts">
	import { onMount } from 'svelte';
	import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

	export let beforeImg: string;
	export let afterImg: string;

	const settings = {
		controlColor: '#FFFFFF',
		controlShadow: true,
		addCircle: false,
		addCircleBlur: true,
		showLabels: false,
		labelOptions: {
			before: 'Before',
			after: 'After',
			onHover: true
		},
		smoothing: true,
		smoothingAmount: 100,
		hoverStart: false,
		startingPoint: 50,
	};

	let comparatorEl; // TODO: document.queryselector('il div in cui inserire l'imageComparator')
	let images = {};
	let wrapper = null;
	let control = null;
	let arrowContainer = null;
	let arrowAnimator = [];
	let active = false;
	let slideWidth = 50;
	let lineWidth = 2;
	let arrowCoordinates = {
		circle: [5, 3],
		standard: [8, 0]
	};

	onMount(() => {
		// Disable smoothing for Safari, causes bugs
		if (getSafariAgent()) {
			settings.smoothing = false;
		}

		getImages();
		buildControl();
	});

	function getSafariAgent(): boolean {
		return (
			navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1
		);
	}

	function handleGlobalMouseup() {
		document.body.classList.remove('icv__body');
		enableBodyScroll(comparatorEl);
		activate(false);
	}

	function handleMouseDown(event): void {
		activate(true);
		document.body.classList.add('icv__body');
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
		document.body.classList.add('icv__body');
		disableBodyScroll(comparatorEl, { reserveScrollBarGap: true });
	}

	function handleTouchMove(event): void {
		active && slideCompare(event);
	}

	function handleTouchEnd(event): void {
		activate(false);
		document.body.classList.remove('icv__body');
		enableBodyScroll(comparatorEl);
	}

	function handleMouseEnter(): void {
		settings.hoverStart && activate(true);
		let coord = settings.addCircle ? arrowCoordinates.circle : arrowCoordinates.standard;

		arrowAnimator.forEach((anim, i) => {
			anim.style.cssText = `
        ${`transform: translateX(${coord[1] * (i === 0 ? 1 : -1)}px);`}
      `;
		});
	}

	function handleMouseLeave(): void {
		let coord = settings.addCircle ? arrowCoordinates.circle : arrowCoordinates.standard;

		arrowAnimator.forEach((anim, i) => {
			anim.style.cssText = `
      ${`transform: translateX(${i === 0 ? `${coord[0]}px` : `-${coord[0]}px`});`}
      `;
		});
	}

	function slideCompare(event): void {
		let bounds = comparatorEl.getBoundingClientRect();
		let x =
			event.touches !== undefined ? event.touches[0].clientX - bounds.left : event.clientX - bounds.left;
		let y = event.touches !== undefined ? event.touches[0].clientY - bounds.top : event.clientY - bounds.top;

		let position = (x / bounds.width) * 100;

		if (position >= 0 && position <= 100) {
			control.style.left = `calc(${position}% - ${slideWidth / 2}px)`;
			wrapper.style.width = `calc(${100 - position}%)`;
		}
	}

	function activate(state): void {
		active = state;
	}

	function buildControl() {
		let control = document.createElement('div');
		let uiLine = document.createElement('div');
		let arrows = document.createElement('div');
		let circle = document.createElement('div');

		const arrowSize = '20';

		arrows.classList.add('icv__theme-wrapper');

		for (var idx = 0; idx <= 1; idx++) {
			let animator = document.createElement(`div`);

			let arrow = `<svg
      height="15"
      width="15"
       style="
       transform:
       scale(${settings.addCircle ? 0.7 : 1.5})
       rotateZ(${
					idx === 0
						? `180deg`
						: `0deg`
				}); height: ${arrowSize}px; width: ${arrowSize}px;

       ${
					settings.controlShadow
						? `
       -webkit-filter: drop-shadow( 0px 3px 5px rgba(0, 0, 0, .33));
       filter: drop-shadow( 0px ${idx === 0 ? '-3px' : '3px'} 5px rgba(0, 0, 0, .33));
       `
						: ``
				}
       "
       xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 15 15">
       <path ${settings.addCircle ? `fill="transparent"` : `fill="${settings.controlColor}"`}
       stroke="${settings.controlColor}"
       stroke-linecap="round"
       stroke-width="${settings.addCircle ? 3 : 0}"
       d="M4.5 1.9L10 7.65l-5.5 5.4"
       />
     </svg>`;

			animator.innerHTML += arrow;
			arrowAnimator.push(animator);
			arrows.appendChild(animator);
		}

		let coord = settings.addCircle ? arrowCoordinates.circle : arrowCoordinates.standard;

		arrowAnimator.forEach((anim, i) => {
			anim.classList.add('icv__arrow-wrapper');

			anim.style.cssText = `${`transform: translateX(${i === 0 ? `${coord[0]}px` : `-${coord[0]}px`});`}`;
		});

		control.classList.add('icv__control');

		control.style.cssText = `
    width: ${slideWidth}px;
    left: calc(${settings.startingPoint}% - ${slideWidth / 2}px);
    ${
			'ontouchstart' in document.documentElement
				? ``
				: settings.smoothing
				? `transition: ${settings.smoothingAmount}ms ease-out;`
				: ``
		}
    `;

		uiLine.classList.add('icv__control-line');

		uiLine.style.cssText = `
      width: ${lineWidth}px;
      background: ${settings.controlColor};
        ${settings.controlShadow ? `box-shadow: 0px 0px 15px rgba(0,0,0,0.33);` : ``}
    `;

		let uiLine2 = uiLine.cloneNode(true);

		circle.classList.add('icv__circle');
		circle.style.cssText = `
      ${settings.addCircleBlur && `-webkit-backdrop-filter: blur(5px); backdrop-filter: blur(5px)`};

      border: ${lineWidth}px solid ${settings.controlColor};
      ${settings.controlShadow && `box-shadow: 0px 0px 15px rgba(0,0,0,0.33)`};
    `;

		control.appendChild(uiLine);
		settings.addCircle && control.appendChild(circle);
		control.appendChild(arrows);
		control.appendChild(uiLine2);

		arrowContainer = arrows;

		control = control;
		comparatorEl.appendChild(control);
	}

	function getImages() {
		let children = comparatorEl.querySelectorAll('img, video, .keep');
		comparatorEl.innerHTML = '';
		children.forEach((img) => {
			comparatorEl.appendChild(img);
		});

		let childrenImages = [...children].filter((element) =>
			['img', 'video'].includes(element.nodeName.toLowerCase())
		);

		for (let idx = 0; idx <= 1; idx++) {
			let child = childrenImages[idx];

			child.classList.add('icv__img');
			child.classList.add(idx === 0 ? `icv__img-a` : `icv__img-b`);

			if (idx === 1) {
				let wrapper = document.createElement('div');
				let afterUrl = childrenImages[1].src;
				wrapper.classList.add('icv__wrapper');
				wrapper.style.cssText = `
            width: ${100 - settings.startingPoint}%;
            height: ${settings.startingPoint}%;
            ${
							'ontouchstart' in document.documentElement
								? ``
								: settings.smoothing
								? `transition: ${settings.smoothingAmount}ms ease-out;`
								: ``
						}
        `;

				wrapper.appendChild(child);
				wrapper = wrapper;
				comparatorEl.appendChild(wrapper);
			}
		}
	}
</script>

<svelte:window on:mouseup={handleGlobalMouseup} />

<div
	class="relative overflow-hidden icv icv__icv--horizontal standard"
	bind:this={comparatorEl}
	on:mousedown={handleMouseDown}
	on:mousemove={handleMouseMove}
	on:mouseup={handleMouseUp}
	on:touchstart={handleTouchStart}
	on:touchmove={handleTouchMove}
	on:touchend={handleTouchEnd}
	on:mouseenter={handleMouseEnter}
	on:mouseleave={handleMouseLeave}
	style="cursor: column-resize"
>
	<img class="pointer-events-none select-none max-w-none w-full !m-0 !p-0 top-0 block h-auto static z-10 left-0 icv__img icv__img-a" src={beforeImg} alt="" />

  {#if settings.showLabels}
	<span class="absolute bottom-4 z-30 bg-black/30 rounded-sm px-3 py-2 select-none left-4 on-hover keep">{settings.labelOptions.before || 'Before'}</span>
	<span class="absolute bottom-4 z-30 bg-black/30 rounded-sm px-3 py-2 select-none right-4 on-hover keep">{settings.labelOptions.after || 'After'}</span>
  {/if}

	<div class="icv__wrapper">
		<img class="pointer-events-none select-none max-w-none w-full !m-0 !p-0 top-0 block h-full absolute z-20 left-auto right-0 w-auto icv__img icv__img-b" src={afterImg} alt="" />
	</div>

	<div
		class="icv__control"
		style="width: 50px; left: calc(60.9265% - 25px); transition: all 100ms ease-out 0s;"
	>
		<div class="icv__control-line" style="width: 2px; background: rgb(74, 85, 104);" />
		<div class="icv__theme-wrapper">
			<div class="icv__arrow-wrapper" style="transform: translateX(8px);">
        <!-- qui ci devono stare gli svg delle freccie -->
			</div>
			<div class="icv__arrow-wrapper" style="transform: translateX(-8px);">
        <!-- qui ci devono stare gli svg delle freccie -->
			</div>
		</div>
		<div class="icv__control-line" style="width: 2px; background: rgb(74, 85, 104);" />
	</div>
</div>

l'html non va inserito in modo dinamico

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

<style>
	icv__wrapper {
		position: absolute;
		width: 100%;
		height: 100%;
		right: 0px;
		top: 0px;
		overflow: hidden;
		background-size: cover;
		background-position: center center;
		z-index: 3;
	}

	icv__is--fluid icv__wrapper,
	icv__icv--vertical icv__wrapper {
		width: 100% !important;
	}

	icv__icv--horizontal icv__wrapper {
		height: 100% !important;
	}

	icv__fluidwrapper {
		background-size: cover;
		background-position: center;
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}

	icv__control {
		position: absolute;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		box-sizing: border-box;
		height: 100%;
		top: 0px;
		z-index: 5;
	}

	icv__control-line {
		height: 50%;
		width: 2px;
		z-index: 6;
	}

	icv__theme-wrapper {
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		position: absolute;
		transition: all 0.1s ease-out 0s;
		z-index: 5;
	}

	icv__arrow-wrapper {
		display: flex;
		justify-content: center;
		align-items: center;
		transition: all 0.1s ease-out 0s;
	}

	icv__arrow-a {
		transform: scale(1.5) rotateZ(180deg);
		height: 20px;
		width: 20px;
		-webkit-filter: drop-shadow(0px 3px 5px rgba(0, 0, 0, 0.33));
		filter: drop-shadow(0px -3px 5px rgba(0, 0, 0, 0.33));
	}
	icv__arrow-b {
		transform: scale(1.5) rotateZ(0deg);
		height: 20px;
		width: 20px;

		-webkit-filter: drop-shadow(0px 3px 5px rgba(0, 0, 0, 0.33));
		filter: drop-shadow(0px 3px 5px rgba(0, 0, 0, 0.33));
	}

	icv__circle {
		width: 50px;
		height: 50px;
		box-sizing: border-box;
		flex-shrink: 0;
		border-radius: 999px;
	}

	icv__label.on-hover {
		transform: scale(0);
		transition: 0.25s cubic-bezier(0.68, 0.26, 0.58, 1.22);
	}

	icv:hover icv__label.on-hover {
		transform: scale(1);
	}

	i__body {
		-webkit-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
		user-select: none;
	}
</style>
