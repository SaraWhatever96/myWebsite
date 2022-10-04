<script lang="ts">
  import { fade } from 'svelte/transition';
  import screenfull from 'screenfull';

	export let poster: string;
	export let src: string;

	// These values are bound to properties of the video
	let time = 0;
	let duration: number;
	let paused = true;
  let videoEl: any;

	let showControls = true;
	let showControlsTimeout: NodeJS.Timeout;

	// Used to track time of last mouse down event
	let lastMouseDown: number;

	function handleMove(e) {
		// Make the controls visible, but fade out after
		// 2.5 seconds of inactivity
		clearTimeout(showControlsTimeout);
		showControlsTimeout = setTimeout(() => (showControls = false), 2500);
		showControls = true;

		if (!duration) return; // video not loaded yet
		if (e.type !== 'touchmove' && !(e.buttons & 1)) return; // mouse not down

		const clientX = e.type === 'touchmove' ? e.touches[0].clientX : e.clientX;
		const { left, right } = this.getBoundingClientRect();
		time = (duration * (clientX - left)) / (right - left);
	}

	// we can't rely on the built-in click event, because it fires
	// after a drag — we have to listen for clicks ourselves
	function handleMousedown(e) {
		lastMouseDown = new Date().getTime();
	}

	function handleMouseup(e) {
		if (new Date().getTime() - lastMouseDown < 300) {
			if (paused) videoEl.play();
			else videoEl.pause();
		}
	}

	function format(seconds) {
		if (isNaN(seconds)) return '...';

		const minutes = Math.floor(seconds / 60);
		seconds = Math.floor(seconds % 60);
		if (seconds < 10) seconds = '0' + seconds;

		return `${minutes}:${seconds}`;
	}

  function handleFullscreenRequest() {
    if (screenfull.isEnabled) {
    	screenfull.request(videoEl, { navigationUI: 'hide' });
    }
  }
</script>

<div class="max-w-5xl mx-auto">
	<div class="relative">
		<video
      bind:this="{videoEl}"
			class="w-full rounded-xl"
			{poster}
			{src}
			on:mousemove={handleMove}
			on:touchmove|preventDefault={handleMove}
			on:mousedown={handleMousedown}
			on:mouseup={handleMouseup}
			bind:currentTime={time}
			bind:duration
			bind:paused
		>
			<track kind="captions" />
		</video>

		<!-- Controls -->
		<div class="absolute bottom-0 w-full transition-opacity duration-700 ease-in-out" style="opacity: {duration && showControls ? 1 : 0}">
			<progress class="block w-full h-[5px] appearance-none" value={time / duration || 0} />

			<div class="flex w-full justify-between items-center py-[6px] px-4 bg-gradient-to-b from-transparent to-black/80 text-white rounded-b-xl">
				<div class="flex space-x-2 items-center md:space-x-3">
          {#if paused}
            <button on:click="{() => videoEl.play()}" in:fade="{{ duration: 150 }}" data-title-no-tooltip="Play" aria-label="Play video" title="Play">
              <svg class="w-6 h-6 text=white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path fill-rule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clip-rule="evenodd" />
              </svg>
            </button>
          {:else}
            <button on:click="{() => videoEl.pause()}" in:fade="{{ duration: 150 }}" data-title-no-tooltip="Pause" aria-label="Pause video" title="Pause">
              <svg class="w-6 h-6 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path fill-rule="evenodd" d="M6.75 5.25a.75.75 0 01.75-.75H9a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H7.5a.75.75 0 01-.75-.75V5.25zm7.5 0A.75.75 0 0115 4.5h1.5a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H15a.75.75 0 01-.75-.75V5.25z" clip-rule="evenodd" />
              </svg>
            </button>
          {/if}
					<span class="text-sm">{format(time)} / {format(duration)}</span>
				</div>
				<span>Drag to seek</span>
        <div class="flex space-x-2 items-center md:space-x-3">
          <span class="w-12 text-right"></span>
          <button on:click="{handleFullscreenRequest}" in:fade="{{ duration: 150 }}" data-title-no-tooltip="Fullscreen" aria-label="Open video in fullscreen" title="Fullscreen">
            <svg class="w-6 h-6 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path fill-rule="evenodd" d="M15 3.75a.75.75 0 01.75-.75h4.5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0V5.56l-3.97 3.97a.75.75 0 11-1.06-1.06l3.97-3.97h-2.69a.75.75 0 01-.75-.75zm-12 0A.75.75 0 013.75 3h4.5a.75.75 0 010 1.5H5.56l3.97 3.97a.75.75 0 01-1.06 1.06L4.5 5.56v2.69a.75.75 0 01-1.5 0v-4.5zm11.47 11.78a.75.75 0 111.06-1.06l3.97 3.97v-2.69a.75.75 0 011.5 0v4.5a.75.75 0 01-.75.75h-4.5a.75.75 0 010-1.5h2.69l-3.97-3.97zm-4.94-1.06a.75.75 0 010 1.06L5.56 19.5h2.69a.75.75 0 010 1.5h-4.5a.75.75 0 01-.75-.75v-4.5a.75.75 0 011.5 0v2.69l3.97-3.97a.75.75 0 011.06 0z" clip-rule="evenodd" />
            </svg>
          </button>
        </div>
			</div>
		</div>
	</div>
</div>

<style>
	progress::-webkit-progress-bar {
		background-color: rgba(251, 191, 36, 0.4);
	}

	progress::-webkit-progress-value {
		background-color: rgba(251, 191, 36, 0.8);
	}
</style>
