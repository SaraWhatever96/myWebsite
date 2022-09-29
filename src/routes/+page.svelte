<script lang="ts">
	import { darkMode } from '$lib/stores/darkMode';
	import { skills } from '$lib/stores/skills';
	import { fly } from 'svelte/transition';
	import { cubicOut, backOut } from 'svelte/easing';
	import { onMount } from 'svelte';
	import { inview, Options } from 'svelte-inview';
	import fadeScale from '$lib/animations/fadeScale';
	import LottieAnimation from '$lib/components/LottieAnimation.svelte';
	import ProjectCard from '$lib/components/projects/ProjectCard.svelte';
	import WorkInProgress from '$lib/components/WorkInProgress.svelte';

	export let data;

	const options: Options = {
		rootMargin: '-50px',
		unobserveOnEnter: true
	};
	// Variables for the animations
	let pageLoaded: boolean = false;
	let skillsTextInView: boolean = false;
	let skillsGridInView: boolean = false;
	let projectsTitleInView: boolean = false;
	let projectsInView: boolean = false;
	let expandAboutMeSection: boolean = false;

	onMount(() => {
		pageLoaded = true;
	});
</script>

<div class="max-w-7xl mx-auto pt-8 md:pt-12 lg:pt-14 px-6 lg:px-8">
	<!-- Showreel section -->
	<section class="rounded-xl">
		<div class="rounded-xl h-[300px] md:h-[650px] shadow-lg shadow-slate-800/5">
			{#key pageLoaded}
				<WorkInProgress />
			{/key}
		</div>
	</section>

	<!-- About Me section -->
	<section class="my-24 md:my-32 lg:my-40">
		<div class="flex flex-col lg:grid lg:grid-cols-2 lg:gap-x-12">
			<!-- Who I am -->
			<div class="mb-8">
				{#key pageLoaded}
					<h1
						class="text-3xl md:text-4xl lg:text-5xl lg:mb-6 font-title font-semibold text-slate-600 dark:text-slate-100 transition-colors duration-150 ease-in-out"
						in:fly={{ delay: 300, duration: 700, easing: cubicOut, y: 50 }}
					>
						Hi there, I'm <span class="text-3xl md:text-4xl font-title lg:text-5xl text-amber-500 dark:text-amber-400">S</span>ara
					</h1>

					<p
						class="max-w-prose mb-3 text-lg lg:text-xl !leading-8 md:!leading-9 text-slate-700 dark:text-slate-300 transition-colors duration-150 ease-in-out"
						in:fly={{ delay: 400, duration: 700, easing: cubicOut, y: 50 }}
					>
						I am a freelance designer and a startup founder with a bachelor degree in Communication
						design through IAAD University. Right now I’m diving deep into UI-UX design, visual
						design and motion design, trying to fullfill my constant desire of learning new skills.
					</p>

					{#if !expandAboutMeSection}
						<button
							class="text-lg lg:text-xl text-amber-500 dark:text-amber-400 transition-colors duration-150 ease-in-out hover:underline hover:underline-offset-4"
							on:click={() => (expandAboutMeSection = true)}
							in:fly={{ delay: 500, duration: 700, easing: cubicOut, y: 50 }}
						>
							Read More
						</button>
					{/if}
				{/key}

				{#if expandAboutMeSection}
					<p
						class="max-w-prose mb-3 text-lg lg:text-xl !leading-8 md:!leading-9 text-slate-700 dark:text-slate-300 transition-colors duration-150 ease-in-out"
						in:fly={{ delay: 0, duration: 700, easing: cubicOut, y: 50 }}
					>
						While I'm off work, I find inspiration through my passions. I'm fashinated by Japanese
						culture and totally into eating with chopsticks. I love cinema as it boosts up my powers
						of observation and helps me learning more about animation. Music is my background during
						my work and cooking sessions.
					</p>

					<p
						class="max-w-prose mb-3 text-lg lg:text-xl !leading-8 md:!leading-9 text-slate-700 dark:text-slate-300 transition-colors duration-150 ease-in-out"
						in:fly={{ delay: 100, duration: 700, easing: cubicOut, y: 50 }}
					>
						These days I'm wondering how an experience in a big company with great designers raising
						my standards would be like and honestly looking forward to try this.
					</p>
				{/if}
			</div>

			<!-- Illustration -->
			<div class="transition-colors duration-150 ease-in-out rounded-lg">
				<div class="rounded-xl">
					{#key pageLoaded}
						{#if $darkMode}
							<LottieAnimation path="/animations/whoIAm-dark.json" animateEnteringViewport={true} />
						{:else}
							<LottieAnimation
								path="/animations/whoIAm-light.json"
								animateEnteringViewport={true}
							/>
						{/if}
					{/key}
				</div>
			</div>
		</div>
	</section>

	<!-- Skills section -->
	<section
		use:inview={options}
		class="my-24 md:my-36 lg:my-44 space-y {skillsTextInView || skillsGridInView
			? 'opacity-100'
			: 'opacity-0'}"
	>
		<div class="flex flex-col-reverse lg:grid lg:grid-cols-2 lg:gap-x-12">
			<!-- Skills grid -->
			<div class={skillsGridInView ? 'opacity-100' : 'opacity-0'}>
				<div
					use:inview={options}
					id="skills-grid"
					class="mt-6 grid grid-cols-3 {skillsGridInView
						? 'bg-slate-200'
						: 'bg-white'} dark:bg-slate-800 gap-0.5 md:mt-0 transition duration-500 delay-200 ease-out"
					on:enter={() => (skillsGridInView = true)}
				>
					{#key skillsGridInView}
						{#each $skills.sort((a, b) => a.gridOrder - b.gridOrder) as skill, i}
							<div class="relative bg-white dark:bg-slate-900 py-4 md:py-6" title={skill.title}>
								<!-- Skill Icon -->
								<div class="flex space-x-4 items-center justify-center">
									<img
										class="h-16 w-16 origin-center"
										src="/svg/{skill.icon}{$darkMode ? '-dark' : ''}.svg"
										alt={skill.title}
										in:fadeScale={{
											delay: 300 + i * 100,
											duration: 700,
											easing: cubicOut,
											baseScale: 1.3
										}}
									/>
								</div>

								<!-- Skill badge `new` -->
								{#if skill.title === 'Blender'}
									<div class="absolute -top-3 md:-top-1.5 right-1/2 translate-x-1/2">
										<span
											in:fadeScale={{ delay: 1200, duration: 400, easing: backOut }}
											class="inline-flex items-center px-2 py-0.5 rounded-full text-sm font-medium bg-amber-500 dark:bg-amber-400 text-white dark:text-slate-800"
										>
											New
										</span>
									</div>
								{/if}
							</div>
						{/each}
					{/key}
				</div>
			</div>

			<!-- Skills Text -->
			<div class={skillsTextInView ? 'opacity-100' : 'opacity-0'}>
				<div use:inview={options} class="mb-8 md:mt-6" on:enter={() => (skillsTextInView = true)}>
					{#key skillsTextInView}
						<h1
							class="text-3xl md:text-4xl lg:text-5xl lg:mb-6 font-title font-semibold text-slate-600 dark:text-slate-100 transition-colors duration-150 ease-in-out"
							in:fly={{ delay: 100, duration: 700, easing: cubicOut, y: 50 }}
						>
							S<span class="text-3xl md:text-4xl lg:text-5xl font-title text-amber-500 dark:text-amber-400">k</span>ills
						</h1>
						<p
							class="max-w-prose mb-3 text-lg lg:text-xl !leading-8 md:!leading-9 text-slate-700 dark:text-slate-300 transition-colors duration-150 ease-in-out"
							in:fly={{ delay: 200, duration: 700, easing: cubicOut, y: 50 }}
						>
							Through my work, I've learned different skills such as Wireframing, Prototyping,
							Design with Accessibility in mind, Mobile First Approach, CSS and HTML.
						</p>

						<p
							class="max-w-prose mb-3 text-lg lg:text-xl !leading-8 md:!leading-9 text-slate-700 dark:text-slate-300 transition-colors duration-150 ease-in-out"
							in:fly={{ delay: 250, duration: 700, easing: cubicOut, y: 50 }}
						>
							These are the tools I use on a daily basis.
						</p>
					{/key}
				</div>
			</div>
		</div>
	</section>

	<!-- Projects type section -->
	<section
		class="my-24 md:my-36 lg:my-44 {projectsTitleInView || projectsInView
			? 'opacity-100'
			: 'opacity-0'}"
	>
		{#key projectsTitleInView}
			<div use:inview={options} class="mb-8" on:enter={() => (projectsTitleInView = true)}>
				<h1
					class="text-3xl md:text-4xl lg:text-5xl font-title font-semibold text-slate-600 dark:text-slate-100 transition-colors duration-150 ease-in-out"
					in:fly={{ delay: 100, duration: 700, easing: cubicOut, y: 50 }}
				>
					Proje<span class="text-3xl md:text-4xl lg:text-5xl font-title text-amber-500 dark:text-amber-400">c</span>ts
				</h1>
			</div>
		{/key}
		<div
			use:inview={options}
			class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-6"
			on:enter={() => (projectsInView = true)}
		>
			{#key projectsInView}
				{#each data.projects as { title, slug, coverImage, createdAt }, i}
					<ProjectCard {slug} {title} {createdAt} {coverImage} category={'ui-ux'} delay="{i * 100}" />
				{/each}
			{/key}
		</div>
	</section>
</div>
