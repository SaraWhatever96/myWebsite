<script lang="ts">
  // Logica Javascript
  let isDark: boolean = false; // TODO: probabilemnte da modificare in futuro.


  function toggleDarkMode() {
    if (isDark === false) {
      isDark = true;
      document.documentElement.classList.add('dark')
    } else {
      isDark = false;
      document.documentElement.classList.remove('dark')
    }
  }
</script>


<div class="max-w-7xl mx-auto px-6 lg:px-8 pt-5">
  <div class="flex flex-row justify-between">
    <nav class="flex flex-row align-middle">
    <!-- Logo link -->
      <a sveltekit:prefetch href="/" class="mr-4">
        <svg class="h-12 w-12 flex-shrink-0 {isDark ? 'text-white' : 'text-blueGray-500'} transition-colors duration-150 ease-in-out" id="logo" fill="none" viewBox="0 0 115 36" xmlns="http://www.w3.org/2000/svg">
          <path d="M3.54001 18.62C2.37001 2.32999 27 0.689991 27 19.56C27 35.62 50.74 37.56 50.74 18.56" stroke="currentColor" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M38.94 18.62C37.77 2.32999 62.38 0.689991 62.38 19.56C62.38 35.62 86.11 37.56 86.11 18.56" stroke="currentColor" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M98.37 28.12C105.169 28.12 110.68 22.6086 110.68 15.81C110.68 9.01137 105.169 3.5 98.37 3.5C91.5714 3.5 86.06 9.01137 86.06 15.81C86.06 22.6086 91.5714 28.12 98.37 28.12Z" stroke="currentColor" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>        
      </a>
    <!-- Link pages text -->
      <div class="flex flex-col justify-center">
        <div class="flex my-3 space-x-2 md:space-x-2">
          <a sveltekit:prefetch href="/skills/ae" class="text-blueGray-500 dark:text-white transition-colors duration-150 ease-in-out font-bold text-sm">Skills</a>
          <a sveltekit:prefetch href="/projects" class="text-blueGray-500 dark:text-white transition-colors duration-150 ease-in-out font-bold text-sm">Projects</a>
        </div>
      </div>
    </nav>

    <!-- Toggle light/dark theme -->
    <div class="pt-3 flex flex-row space-x-1">
      <svg class="h-5 w-5 transition-colors duration-150 ease-in-out {isDark ? 'text-blueGray-700' : 'text-blueGray-500'}" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
      <!-- Enabled: "bg-indigo-600", Not Enabled: "bg-blueGray-200" -->
      <button type="button" class="relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring focus:ring-sky-300 dark:focus:ring-yellow-400 {isDark ? 'bg-blueGray-700' : 'bg-blueGray-200'}" aria-pressed="false"
      on:click={toggleDarkMode}>
        <span class="sr-only">Use setting</span>
        <!-- Enabled: "translate-x-5", Not Enabled: "translate-x-0" -->
        <span aria-hidden="true" class="p-1 pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200 {isDark ? 'translate-x-5' : 'translate-x-0'}">
        </span>
      </button>
      <svg class="h-5 w-5 transition-colors duration-150 ease-in-out {isDark ? 'text-white' : 'text-blueGray-300'}" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
      </svg>
    </div>
  </div>
</div>

