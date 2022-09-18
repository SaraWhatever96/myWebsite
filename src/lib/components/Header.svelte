<script lang="ts">
	import { darkMode } from '$lib/stores/darkMode';
	import { page } from '$app/stores';

	$: path = $page.url.pathname;

	function toggleDarkMode() {
		if ($darkMode === false) {
			darkMode.set(true);
			document.documentElement.classList.add('dark');
		} else {
			darkMode.set(false);
			document.documentElement.classList.remove('dark');
		}
	}
</script>

<div class="max-w-7xl mx-auto px-6 lg:px-8 pt-5">
	<div class="flex flex-row justify-between">
		<nav class="flex flex-row align-middle">
			<!-- Logo link -->
			<a href="/" class="mr-6">
				<svg
					class="h-12 w-12 flex-shrink-0 text-slate-600 dark:text-white transition-colors duration-150 ease-in-out"
					id="logo"
					fill="none"
					viewBox="0 0 115 36"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M3.54001 18.62C2.37001 2.32999 27 0.689991 27 19.56C27 35.62 50.74 37.56 50.74 18.56"
						stroke="currentColor"
						stroke-width="7"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
					<path
						d="M38.94 18.62C37.77 2.32999 62.38 0.689991 62.38 19.56C62.38 35.62 86.11 37.56 86.11 18.56"
						stroke="currentColor"
						stroke-width="7"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
					<path
						d="M98.37 28.12C105.169 28.12 110.68 22.6086 110.68 15.81C110.68 9.01137 105.169 3.5 98.37 3.5C91.5714 3.5 86.06 9.01137 86.06 15.81C86.06 22.6086 91.5714 28.12 98.37 28.12Z"
						stroke="currentColor"
						stroke-width="7"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
				</svg>
			</a>
			<!-- Link Projects
			<div class="flex flex-col justify-center">
				<div class="flex my-3 space-x-2 md:space-x-4">
					<a
						href="/projects/ui-ux"
						class="{path.indexOf('projects') > 0
							? 'text-amber-600 dark:text-amber-400 font-medium'
							: 'text-slate-600 dark:text-white'} transition-colors duration-150 ease-in-out font-medium"
						>Projects</a
					>
				</div>
			</div> -->
		</nav>

		<!-- Toggle light/dark theme -->
		<div>
			<button class="group rounded-full bg-white/90 p-2 flex-shrink-0 ring-1 ring-slate-900/10 shadow-lg shadow-slate-800/5  transition duration-150 ease-in-out dark:bg-slate-800/90 dark:ring-white/10 dark:hover:ring-white/20"
				on:click="{toggleDarkMode}"
				type="button"
				aria-label="Toggle dark mode"
			>
				<!-- Sunny svg -->
				{#if !$darkMode}
				<svg
					class="h-6 w-6 transition-colors duration-150 ease-in-out text-amber-500 dark:text-slate-700"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 20 20"
					fill="currentColor"
				>
					<path
						fill-rule="evenodd"
						d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
						clip-rule="evenodd"
					/>
				</svg>
				{/if}

				{#if $darkMode}
				<!-- Cloudy svg -->
				<svg
					class="h-6 w-6 transition-colors duration-150 ease-in-out text-slate-300 dark:text-white"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 20 20"
					fill="currentColor"
				>
					<path d="M5.5 16a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 16h-8z" />
				</svg>
				{/if}
			</button>
		</div>


	</div>
</div>
