<script lang="ts">
	import { onMount } from 'svelte';
	import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

	const settings = {
		controlColor: '#FFFFFF',
		controlShadow: true,
		addCircle: false,
		addCircleBlur: true,
		showLabels: false,
		labelOptions: {
			before: 'Before',
			after: 'After',
			onHover: false,
		},
		smoothing: true,
		smoothingAmount: 100,
		hoverStart: false,
		verticalMode: false,
		startingPoint: 50,
		fluidMode: false,
	};

	let el; // TODO: document.queryselector('il div in cui inserire l'imageComparator')
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
		standard: [8, 0],
	};

  onMount(() => {
    // Disable smoothing for Safari, causes bugs
    if (getSafariAgent()) {
      settings.smoothing = false;
    }

    el = document.querySelector('il div in cui inserire l\'imageComparator'); // TODO: DA MODIFICARE PRIMA DI FARE IL TEST

    shapeContainer();
    getImages();
    buildControl();
    events();
  });

  function getSafariAgent() {
    return navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1;
  }

  function events() {
    // Desktop events
    el.addEventListener('mousedown', (ev) => {
      activate(true);
      document.body.classList.add('icv__body');
      disableBodyScroll(el, {reserveScrollBarGap: true});
      slideCompare(ev);
    });
    el.addEventListener(
      'mousemove',
      (ev) => active && slideCompare(ev)
    );

    el.addEventListener('mouseup', () => activate(false));
    document.body.addEventListener('mouseup', () => {
      document.body.classList.remove('icv__body');
      enableBodyScroll(el);
      activate(false);
    });

    // Mobile events
    control.addEventListener('touchstart', (e) => {
      activate(true);
      document.body.classList.add('icv__body');
      disableBodyScroll(el, {reserveScrollBarGap: true});
    });

    el.addEventListener('touchmove', (ev) => {
      active && slideCompare(ev);
    });
    el.addEventListener('touchend', () => {
      activate(false);
      document.body.classList.remove('icv__body');
      enableBodyScroll(el);
    });

    // hover

    el.addEventListener('mouseenter', () => {
      settings.hoverStart && activate(true);
      let coord = settings.addCircle
        ? arrowCoordinates.circle
        : arrowCoordinates.standard;

      arrowAnimator.forEach((anim, i) => {
        anim.style.cssText = `
        ${
          settings.verticalMode
            ? `transform: translateY(${coord[1] * (i === 0 ? 1 : -1)}px);`
            : `transform: translateX(${coord[1] * (i === 0 ? 1 : -1)}px);`
        }
        `;
      });
    });

    el.addEventListener('mouseleave', () => {
      let coord = settings.addCircle
        ? arrowCoordinates.circle
        : arrowCoordinates.standard;

      arrowAnimator.forEach((anim, i) => {
        anim.style.cssText = `
        ${
          settings.verticalMode
            ? `transform: translateY(${
                i === 0 ? `${coord[0]}px` : `-${coord[0]}px`
              });`
            : `transform: translateX(${
                i === 0 ? `${coord[0]}px` : `-${coord[0]}px`
              });`
        }
        `;
      });
    });
  }

  function slideCompare(ev) {
    let bounds = el.getBoundingClientRect();
    let x =
      ev.touches !== undefined
        ? ev.touches[0].clientX - bounds.left
        : ev.clientX - bounds.left;
    let y =
      ev.touches !== undefined
        ? ev.touches[0].clientY - bounds.top
        : ev.clientY - bounds.top;

    let position = settings.verticalMode
      ? (y / bounds.height) * 100
      : (x / bounds.width) * 100;

    if (position >= 0 && position <= 100) {
      settings.verticalMode
        ? (control.style.top = `calc(${position}% - ${
            slideWidth / 2
          }px)`)
        : (control.style.left = `calc(${position}% - ${
            slideWidth / 2
          }px)`);

      if (settings.fluidMode) {
        settings.verticalMode
          ? (wrapper.style.clipPath = `inset(0 0 ${100 - position}% 0)`)
          : (wrapper.style.clipPath = `inset(0 0 0 ${position}%)`);
      } else {
        settings.verticalMode
          ? (wrapper.style.height = `calc(${position}%)`)
          : (wrapper.style.width = `calc(${100 - position}%)`);
      }
    }
  }

  function activate(state) {
    active = state;
  }

  function shapeContainer() {
    let imposter = document.createElement('div');
    let label_l = document.createElement('span');
    let label_r = document.createElement('span');

    label_l.classList.add('icv__label', 'icv__label-before', 'keep');
    label_r.classList.add('icv__label', 'icv__label-after', 'keep');

    if (settings.labelOptions.onHover) {
      label_l.classList.add('on-hover');
      label_r.classList.add('on-hover');
    }

    if (settings.verticalMode) {
      label_l.classList.add('vertical');
      label_r.classList.add('vertical');
    }

    label_l.innerHTML = settings.labelOptions.before || 'Before';
    label_r.innerHTML = settings.labelOptions.after || 'After';

    if (settings.showLabels) {
      el.appendChild(label_l);
      el.appendChild(label_r);
    }

    el.classList.add(
      `icv`,
      settings.verticalMode
        ? `icv__icv--vertical`
        : `icv__icv--horizontal`,
      settings.fluidMode ? `icv__is--fluid` : `standard`
    );

    imposter.classList.add('icv__imposter');

    el.appendChild(imposter);
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
           ? settings.verticalMode
             ? `-90deg`
             : `180deg`
           : settings.verticalMode
           ? `90deg`
           : `0deg`
       }); height: ${arrowSize}px; width: ${arrowSize}px;

       ${
         settings.controlShadow
           ? `
       -webkit-filter: drop-shadow( 0px 3px 5px rgba(0, 0, 0, .33));
       filter: drop-shadow( 0px ${
         idx === 0 ? "-3px" : "3px"
       } 5px rgba(0, 0, 0, .33));
       `
           : ``
       }
       "
       xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 15 15">
       <path ${
         settings.addCircle
           ? `fill="transparent"`
           : `fill="${settings.controlColor}"`
       }
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

    let coord = settings.addCircle
      ? arrowCoordinates.circle
      : arrowCoordinates.standard;

    arrowAnimator.forEach((anim, i) => {
      anim.classList.add("icv__arrow-wrapper");

      anim.style.cssText = `
      ${
        settings.verticalMode
          ? `transform: translateY(${
              i === 0 ? `${coord[0]}px` : `-${coord[0]}px`
            });`
          : `transform: translateX(${
              i === 0 ? `${coord[0]}px` : `-${coord[0]}px`
            });`
      }
      `;
    });

    control.classList.add("icv__control");

    control.style.cssText = `
    ${settings.verticalMode ? `height` : `width `}: ${slideWidth}px;
    ${settings.verticalMode ? `top` : `left `}: calc(${
      settings.startingPoint
    }% - ${slideWidth / 2}px);
    ${
      "ontouchstart" in document.documentElement
        ? ``
        : settings.smoothing
        ? `transition: ${settings.smoothingAmount}ms ease-out;`
        : ``
    }
    `;

    uiLine.classList.add("icv__control-line");

    uiLine.style.cssText = `
      ${settings.verticalMode ? `height` : `width `}: ${lineWidth}px;
      background: ${settings.controlColor};
        ${
          settings.controlShadow
            ? `box-shadow: 0px 0px 15px rgba(0,0,0,0.33);`
            : ``
        }
    `;

    let uiLine2 = uiLine.cloneNode(true);

    circle.classList.add("icv__circle");
    circle.style.cssText = `
      ${
        settings.addCircleBlur &&
        `-webkit-backdrop-filter: blur(5px); backdrop-filter: blur(5px)`
      };

      border: ${lineWidth}px solid ${settings.controlColor};
      ${
        settings.controlShadow &&
        `box-shadow: 0px 0px 15px rgba(0,0,0,0.33)`
      };
    `;

    control.appendChild(uiLine);
    settings.addCircle && control.appendChild(circle);
    control.appendChild(arrows);
    control.appendChild(uiLine2);

    arrowContainer = arrows;

    control = control;
    el.appendChild(control);
  }

  function getImages() {
    let children = el.querySelectorAll("img, video, .keep");
    el.innerHTML = "";
    children.forEach((img) => {
      el.appendChild(img);
    });

    let childrenImages = [...children].filter(
      (element) => ["img", "video"].includes(element.nodeName.toLowerCase())
    );

    // settings.verticalMode && [...children].reverse();
    settings.verticalMode && childrenImages.reverse();

    for (let idx = 0; idx <= 1; idx++) {
      let child = childrenImages[idx];

      child.classList.add("icv__img");
      child.classList.add(idx === 0 ? `icv__img-a` : `icv__img-b`);

      if (idx === 1) {
        let wrapper = document.createElement("div");
        let afterUrl = childrenImages[1].src;
        wrapper.classList.add("icv__wrapper");
        wrapper.style.cssText = `
            width: ${100 - settings.startingPoint}%;
            height: ${settings.startingPoint}%;
            ${
              "ontouchstart" in document.documentElement
                ? ``
                : settings.smoothing
                ? `transition: ${settings.smoothingAmount}ms ease-out;`
                : ``
            }
            ${
              settings.fluidMode &&
              `background-image: url(${afterUrl}); clip-path: inset(${
                settings.verticalMode
                  ? ` 0 0 ${100 - settings.startingPoint}% 0`
                  : `0 0 0 ${settings.startingPoint}%`
              })`
            }
        `;

        wrapper.appendChild(child);
        wrapper = wrapper;
        el.appendChild(wrapper);
      }
    }
    if (settings.fluidMode) {
      let url = childrenImages[0].src;
      let fluidWrapper = document.createElement("div");
      fluidWrapper.classList.add("icv__fluidwrapper");
      fluidWrapper.style.cssText = `

        background-image: url(${url});

      `;
      el.appendChild(fluidWrapper);
    }
  }
</script>




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