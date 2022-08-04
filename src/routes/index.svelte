<script lang="ts">
	import { darkMode } from '$lib/stores/darkMode';
	import { skills } from '$lib/stores/skills';



	function getSkillBackground({ icon }): string {
		let background: string;

		switch (icon) {
			case 'ae':
				background = 'dark:bg-slate-800';
				break;
			case 'ai':
				background = 'dark:bg-slate-800';
				break;
			case 'ps':
				background = 'dark:bg-slate-800';
				break;
			case 'sketch':
				background = 'dark:bg-slate-800';
				break;
			case 'figma':
				background = 'dark:bg-slate-800';
				break;
			case 'invision':
				background = 'dark:bg-slate-800';
				break;
			case 'pr':
				background = 'dark:bg-slate-800';
				break;
			case 'id':
				background = 'dark:bg-slate-800';
				break;
			case 'blender':
				background = 'dark:bg-slate-800';
				break;
			default:
				background = '';
				break;
		}

		return background;
	}
</script>


<div class="max-w-7xl mx-auto pt-8 md:pt-12 lg:pt-14 px-6 lg:px-8">
	<!-- Showreel section -->
	<section class="rounded-xl shadow-mdspecial">
		<div class="rounded-xl shadow-mdspecial">
			<img class="rounded-xl aspect-1 md:aspect-[16/9] object-cover"
				src="https://images.unsplash.com/photo-1509731987499-fd9bba3a46cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=4770&q=80"
				alt="Illustration about me"
			/>
		</div>
	</section>

	<!-- Who section -->
	<section class="my-24 md:my-32 lg:my-40">
		<div class="flex flex-col lg:grid lg:grid-cols-2 lg:gap-x-12">
			<!-- Who I am -->
			<div class="mb-8 space-y-2 lg:space-y-6">
				<h1 class="text-3xl md:text-4xl lg:text-5xl font-newake tracking-wider text-slate-600 dark:text-slate-100 transition-colors duration-150 ease-in-out">
					Who I <span class="text-3xl md:text-4xl lg:text-5xl font-newake tracking-wider text-amber-500 dark:text-amber-400">a</span>m
				</h1>
				<p class="max-w-prose text-lg lg:text-xl text-slate-700 dark:text-slate-300 transition-colors duration-150 ease-in-out" >
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
				</p>
			</div>

			<!-- Illustration -->
			<div class="transition-colors duration-150 ease-in-out rounded-lg">
				<div class="rounded-xl shadow-mdspecial">
					<img class="rounded-xl aspect-1 object-cover"
						src="/gif/total-2.gif"
						alt="Illustration about me"
					/>
				</div>
			</div>
		</div>
	</section>

	<!-- Skills section -->
	<section class="my-24 md:my-36 lg:my-44 space-y">
		<div class="flex flex-col-reverse lg:grid lg:grid-cols-2 lg:gap-x-12">
			<!-- Skills grid -->
			<div id="skills-grid" class="grid grid-cols-3 bg-slate-200 dark:bg-slate-800 gap-0.5">
				{#each $skills.sort((a, b) => a.gridOrder - b.gridOrder) as skill}
					<div class="relative bg-white dark:bg-slate-900 py-4 md:py-6" title="{skill.title}">
						<!-- Skill Icon -->
						<div class="flex space-x-4 items-center justify-center">
							<img class="h-16 w-16" src="/svg/{skill.icon}{$darkMode ? '-dark' : ''}.svg" alt="{skill.title}">
						</div>

						<!-- Skill badge `new` -->
						{#if skill.title === 'Blender'}
							<div class="absolute -top-3 md:-top-1.5 right-1/2 translate-x-1/2">
								<span class="inline-flex items-center px-2 py-0.5 rounded-full text-sm font-medium bg-amber-500 dark:bg-amber-400 text-white dark:text-slate-800"> New </span>
							</div>
						{/if}
					</div>
				{/each}
			</div>

			<!-- Skills -->
			<div class="mb-8 md:mt-6 space-y-2 lg:space-y-6">
				<h1 class="text-3xl md:text-4xl lg:text-5xl font-newake tracking-wider text-slate-600 dark:text-slate-100 transition-colors duration-150 ease-in-out">
					S<span class="text-3xl md:text-4xl lg:text-5xl font-newake tracking-wider text-amber-500 dark:text-amber-400">k</span>ills
				</h1>
				<p class="max-w-prose text-lg lg:text-xl text-slate-700 dark:text-slate-300 transition-colors duration-150 ease-in-out" >
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
				</p>
			</div>
		</div>
	</section>

	<!-- Projects type section -->
	<section class="my-24 md:my-36 lg:my-44">
		<div class="mb-8">
			<h1 class="text-3xl md:text-4xl lg:text-5xl font-newake tracking-wider text-slate-500 dark:text-slate-100 transition-colors duration-150 ease-in-out">
				Proje<span class="text-3xl md:text-4xl lg:text-5xl font-newake tracking-wider text-amber-500 dark:text-amber-400">c</span>ts
			</h1>
		</div>
		<div class="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-6">
			<a sveltekit:prefetch href="/projects/motion-design" class="space-y-4">
				<div class="rounded-xl shadow-mdspecial">
					<img class="rounded-xl aspect-1 object-cover"
						src="https://images.unsplash.com/photo-1504587614488-3259c5c1d9b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80"
						alt="Motion Design Projects"
					/>
				</div>
				<div class="text-2xl font-semibold text-slate-700 dark:text-slate-100 transition-colors duration-150 ease-in-out">Motion Design</div>
			</a>
			<a sveltekit:prefetch href="/projects/ui-ux" class="space-y-4">
				<div class="rounded-xl shadow-mdspecial">
					<img class="rounded-xl aspect-1 object-cover"
						src="https://images.unsplash.com/photo-1521089815383-cf2b2cf7f0f0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1965&q=80"
						alt="UI-UX Projects"
					/>
				</div>
				<div class="text-2xl font-semibold text-slate-700 dark:text-slate-100 transition-colors duration-150 ease-in-out">UI & UX</div>
			</a>
		</div>
	</section>
</div>
