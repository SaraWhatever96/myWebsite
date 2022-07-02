<script lang="ts">
	import { skills } from '$lib/stores/skills';

	function getSkillBackground({ icon }): string {
		let background: string;

		switch (icon) {
			case 'ae':
				background = 'bg-[#010659] dark:bg-slate-800';
				break;
			case 'ai':
				background = 'bg-[#320102] dark:bg-slate-800';
				break;
			case 'ps':
				background = 'bg-[#021e35] dark:bg-slate-800';
				break;
			case 'sketch':
				background = 'bg-slate-100 dark:bg-slate-800';
				break;
			case 'figma':
				background = 'bg-slate-800 dark:bg-slate-800';
				break;
			case 'invision':
				background = 'bg-[#fc3768] dark:bg-slate-800';
				break;
			case 'pr':
				background = 'bg-[#010659] dark:bg-slate-800';
				break;
			case 'id':
				background = 'bg-[#48031f] dark:bg-slate-800';
				break;
			case 'blender':
				background = 'bg-slate-100 dark:bg-slate-800';
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
				src="https://images.unsplash.com/photo-1525351326368-efbb5cb6814d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1760&q=80"
				alt="Illustration about me"
			/>
		</div>
	</section>

	<!-- Who section -->
	<section class="my-24">
		<div class="flex flex-col lg:grid lg:grid-cols-2 lg:gap-x-12">
			<!-- Who I am -->
			<div class="mb-8 space-y-2 lg:space-y-6">
				<h1 class="text-3xl md:text-4xl lg:text-5xl font-newake tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-[#F7971E] to-[#FFD200] transition-colors duration-150 ease-in-out">
					Who I am
				</h1>
				<p class="max-w-prose text-lg lg:text-xl text-slate-700 dark:text-slate-100 transition-colors duration-150 ease-in-out" >
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
				</p>
			</div>

			<!-- Illustration -->
			<div class="transition-colors duration-150 ease-in-out rounded-lg">
				<div class="rounded-xl shadow-mdspecial">
					<img class="rounded-xl aspect-1 object-cover"
						src="https://images.unsplash.com/photo-1525351326368-efbb5cb6814d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1760&q=80"
						alt="Illustration about me"
					/>
				</div>
			</div>
		</div>
	</section>

	<!-- Skills section -->
	<section class="my-24 space-y">
		<div class="flex flex-col-reverse lg:grid lg:grid-cols-2 lg:gap-x-12">
			<!-- Skills grid -->
			<div id="skills-grid" class="grid grid-cols-3 gap-4 md:gap-6">
				{#each $skills.sort((a, b) => a.gridOrder - b.gridOrder) as skill}
					<div class="{ getSkillBackground(skill) } rounded-xl py-4 md:py-6" title="{skill.title}">
						<div class="flex space-x-4 items-center justify-center">
							<img class="h-12 w-12" src="/svg/{skill.icon}.svg" alt="{skill.title}">
						</div>
					</div>
				{/each}
			</div>

			<!-- Skills -->
			<div class="mb-8 space-y-2 lg:space-y-6">
				<h1 class="text-3xl md:text-4xl lg:text-5xl font-newake tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-[#F7971E] to-[#FFD200] transition-colors duration-150 ease-in-out">
					Skills
				</h1>
				<p class="max-w-prose text-lg lg:text-xl text-slate-700 dark:text-slate-100 transition-colors duration-150 ease-in-out" >
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
				</p>
			</div>
		</div>
	</section>

	<!-- Projects type section -->
	<section class="my-24">
		<div class="mb-8">
			<h1 class="text-3xl md:text-4xl lg:text-5xl font-newake tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-[#F7971E] to-[#FFD200] transition-colors duration-150 ease-in-out">
				Projects
			</h1>
		</div>
		<div class="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-6">
			<a sveltekit:prefetch href="/projects/motion-design" class="space-y-4">
				<div class="rounded-xl shadow-mdspecial">
					<img class="rounded-xl aspect-1 object-cover"
						src="https://images.unsplash.com/photo-1525351326368-efbb5cb6814d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1760&q=80"
						alt="Motion Design Projects"
					/>
				</div>
				<div class="text-2xl font-semibold">Motion Design</div>
			</a>
			<a sveltekit:prefetch href="/projects/ui-ux" class="space-y-4">
				<div class="rounded-xl shadow-mdspecial">
					<img class="rounded-xl aspect-1 object-cover"
						src="https://images.unsplash.com/photo-1525351326368-efbb5cb6814d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1760&q=80"
						alt="UI-UX Projects"
					/>
				</div>
				<div class="text-2xl font-semibold">UI & UX</div>
			</a>
		</div>
	</section>
</div>
