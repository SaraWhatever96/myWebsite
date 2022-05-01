<script context="module" lang="ts">
	export async function load({ params }) {
    // TODO: mettere il controllo degli url
    
    return {
      props: {
        category: params.category,
      },
    }
  }
</script>

<script lang="ts">
  export let category: string;
</script>


<!-- Prj Grid -->
<div class="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-10 mb-20 mx-5 lg:mx-0">
  <div class="h-illustration bg-slate-100 dark:bg-slate-700 transition-colors duration-150 ease-in-out rounded-lg shadow-mdspecial">
    <div class="h-full flex flex-col justify-end">
      <div class="flex flex-col justify-center bg-white border-4 border-slate-100 dark:border-slate-700 dark:bg-gray-900 rounded-lg">
        <h2 class="px-4 pt-3 pb-2 text-left text-3xl font-bold text-slate-900 dark:text-white transition-colors duration-150 ease-in-out">
          Title of the project long one
        </h2>
        <div class="flex flex-row justify-end">
          <div class="flex flex-row">
              <div class="px-1 flex flex-col justify-center">
                <div class="flex flex-col justify-center bg-slate-100 dark:bg-slate-900 border-2 border-slate-100 dark:border-white rounded-lg transition-all duration-300 ease-in-out">
                  <svg class="h-11 w-11 text-slate-500 dark:text-white p-1" viewBox="0 0 90 90" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M36.25 56.8H18.75L14.69 69.47H4.26001L21.76 19.76H33.24L50.74 69.47H40.31L36.25 56.8ZM33.52 48.25L27.52 29.35L21.52 48.25H33.52Z" fill="currentColor"/>
                    <path d="M84.6901 54.3499H63.6201C64.3901 59.7399 67.6201 62.3499 72.7901 62.3499C75.6141 62.426 78.4193 61.8691 81.0001 60.72L82.8901 67.44C80.3001 69.05 75.2601 70.2399 70.8901 70.2399C60.4601 70.2399 53.3201 63.45 53.3201 52.24C53.3201 41.66 60.0401 34.45 70.4701 34.45C79.9901 34.45 85.8001 41.03 85.8001 52.45L84.6901 54.3499ZM63.6201 48.75H75.6201C75.0601 43.91 73.2401 42.09 70.0901 42.09C66.7701 42.09 64.3201 44.19 63.6201 48.75Z" fill="currentColor"/>
                  </svg>
                </div>
              </div>
              <div class="px-1 flex flex-col justify-center">
                <div class="flex flex-col justify-center bg-slate-100 dark:bg-slate-900 border-2 border-slate-100 dark:border-white rounded-lg transition-all duration-300 ease-in-out">
                  <svg class="h-11 w-11 text-slate-500 dark:text-white p-1" viewBox="0 0 90 90" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M45.56 54.07H28.06L24 66.74H13.57L31.07 17H42.55L60.05 66.7H49.62L45.56 54.07ZM42.83 45.53L36.83 26.63L30.83 45.53H42.83Z" fill="currentColor"/>
                    <path d="M64.46 21.59C64.46 18.59 66.98 16.34 70.46 16.34C73.94 16.34 76.46 18.58 76.46 21.59C76.46 24.6 73.94 26.91 70.46 26.91C66.98 26.91 64.46 24.67 64.46 21.59ZM65.51 33.14L75.38 31.74V66.74H65.51V33.14Z" fill="currentColor"/>
                  </svg>
                </div>
              </div>
              <h2 class="py-6 px-3 text-left text-xl font-normal text-slate-900 dark:text-white transition-colors duration-150 ease-in-out">
                gg/mm/YY
              </h2>
          </div>

        </div>
      </div>
    </div>


  </div>
  <div class="h-illustration bg-slate-100 dark:bg-slate-700 transition-colors duration-150 ease-in-out rounded-lg shadow-mdspecial">
    <div class="h-full flex flex-col justify-end">
      <div class="flex flex-col justify-center bg-white border-4 border-slate-100 dark:border-slate-700 dark:bg-gray-900 rounded-lg">
        <h2 class="px-4 pt-3 pb-2 text-left text-3xl font-bold text-slate-900 dark:text-white transition-colors duration-150 ease-in-out">
          Title of the project long one
        </h2>
        <div class="flex flex-row justify-end">
          <div class="flex flex-row">
              <div class="px-1 flex flex-col justify-center">
                <div class="flex flex-col justify-center bg-slate-100 dark:bg-slate-900 border-2 border-slate-100 dark:border-white rounded-lg transition-all duration-300 ease-in-out">
                  <svg class="h-11 w-11 text-slate-500 dark:text-white p-1" viewBox="0 0 90 90" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M36.25 56.8H18.75L14.69 69.47H4.26001L21.76 19.76H33.24L50.74 69.47H40.31L36.25 56.8ZM33.52 48.25L27.52 29.35L21.52 48.25H33.52Z" fill="currentColor"/>
                    <path d="M84.6901 54.3499H63.6201C64.3901 59.7399 67.6201 62.3499 72.7901 62.3499C75.6141 62.426 78.4193 61.8691 81.0001 60.72L82.8901 67.44C80.3001 69.05 75.2601 70.2399 70.8901 70.2399C60.4601 70.2399 53.3201 63.45 53.3201 52.24C53.3201 41.66 60.0401 34.45 70.4701 34.45C79.9901 34.45 85.8001 41.03 85.8001 52.45L84.6901 54.3499ZM63.6201 48.75H75.6201C75.0601 43.91 73.2401 42.09 70.0901 42.09C66.7701 42.09 64.3201 44.19 63.6201 48.75Z" fill="currentColor"/>
                  </svg>
                </div>
              </div>
              <div class="px-1 flex flex-col justify-center">
                <div class="flex flex-col justify-center bg-slate-100 dark:bg-slate-900 border-2 border-slate-100 dark:border-white rounded-lg transition-all duration-300 ease-in-out">
                  <svg class="h-11 w-11 text-slate-500 dark:text-white p-1" viewBox="0 0 90 90" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M45.56 54.07H28.06L24 66.74H13.57L31.07 17H42.55L60.05 66.7H49.62L45.56 54.07ZM42.83 45.53L36.83 26.63L30.83 45.53H42.83Z" fill="currentColor"/>
                    <path d="M64.46 21.59C64.46 18.59 66.98 16.34 70.46 16.34C73.94 16.34 76.46 18.58 76.46 21.59C76.46 24.6 73.94 26.91 70.46 26.91C66.98 26.91 64.46 24.67 64.46 21.59ZM65.51 33.14L75.38 31.74V66.74H65.51V33.14Z" fill="currentColor"/>
                  </svg>
                </div>
              </div>
              <h2 class="py-6 px-3 text-left text-xl font-normal text-slate-900 dark:text-white transition-colors duration-150 ease-in-out">
                gg/mm/YY
              </h2>
          </div>

        </div>
      </div>
    </div>


  </div>
  <div class="h-illustration bg-slate-100 dark:bg-slate-700 transition-colors duration-150 ease-in-out rounded-lg shadow-mdspecial">
    <div class="h-full flex flex-col justify-end">
      <div class="flex flex-col justify-center bg-white border-4 border-slate-100 dark:border-slate-700 dark:bg-gray-900 rounded-lg">
        <h2 class="px-4 pt-3 pb-2 text-left text-3xl font-bold text-slate-900 dark:text-white transition-colors duration-150 ease-in-out">
          Title of the project long one
        </h2>
        <div class="flex flex-row justify-end">
          <div class="flex flex-row">
              <div class="px-1 flex flex-col justify-center">
                <div class="flex flex-col justify-center bg-slate-100 dark:bg-slate-900 border-2 border-slate-100 dark:border-white rounded-lg transition-all duration-300 ease-in-out">
                  <svg class="h-11 w-11 text-slate-500 dark:text-white p-1" viewBox="0 0 90 90" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M36.25 56.8H18.75L14.69 69.47H4.26001L21.76 19.76H33.24L50.74 69.47H40.31L36.25 56.8ZM33.52 48.25L27.52 29.35L21.52 48.25H33.52Z" fill="currentColor"/>
                    <path d="M84.6901 54.3499H63.6201C64.3901 59.7399 67.6201 62.3499 72.7901 62.3499C75.6141 62.426 78.4193 61.8691 81.0001 60.72L82.8901 67.44C80.3001 69.05 75.2601 70.2399 70.8901 70.2399C60.4601 70.2399 53.3201 63.45 53.3201 52.24C53.3201 41.66 60.0401 34.45 70.4701 34.45C79.9901 34.45 85.8001 41.03 85.8001 52.45L84.6901 54.3499ZM63.6201 48.75H75.6201C75.0601 43.91 73.2401 42.09 70.0901 42.09C66.7701 42.09 64.3201 44.19 63.6201 48.75Z" fill="currentColor"/>
                  </svg>
                </div>
              </div>
              <div class="px-1 flex flex-col justify-center">
                <div class="flex flex-col justify-center bg-slate-100 dark:bg-slate-900 border-2 border-slate-100 dark:border-white rounded-lg transition-all duration-300 ease-in-out">
                  <svg class="h-11 w-11 text-slate-500 dark:text-white p-1" viewBox="0 0 90 90" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M45.56 54.07H28.06L24 66.74H13.57L31.07 17H42.55L60.05 66.7H49.62L45.56 54.07ZM42.83 45.53L36.83 26.63L30.83 45.53H42.83Z" fill="currentColor"/>
                    <path d="M64.46 21.59C64.46 18.59 66.98 16.34 70.46 16.34C73.94 16.34 76.46 18.58 76.46 21.59C76.46 24.6 73.94 26.91 70.46 26.91C66.98 26.91 64.46 24.67 64.46 21.59ZM65.51 33.14L75.38 31.74V66.74H65.51V33.14Z" fill="currentColor"/>
                  </svg>
                </div>
              </div>
              <h2 class="py-6 px-3 text-left text-xl font-normal text-slate-900 dark:text-white transition-colors duration-150 ease-in-out">
                gg/mm/YY
              </h2>
          </div>

        </div>
      </div>
    </div>


  </div>
  <div class="h-illustration bg-slate-100 dark:bg-slate-700 transition-colors duration-150 ease-in-out rounded-lg shadow-mdspecial">
    <div class="h-full flex flex-col justify-end">
      <div class="flex flex-col justify-center bg-white border-4 border-slate-100 dark:border-slate-700 dark:bg-gray-900 rounded-lg">
        <h2 class="px-4 pt-3 pb-2 text-left text-3xl font-bold text-slate-900 dark:text-white transition-colors duration-150 ease-in-out">
          Title of the project long one
        </h2>
        <div class="flex flex-row justify-end">
          <div class="flex flex-row">
              <div class="px-1 flex flex-col justify-center">
                <div class="flex flex-col justify-center bg-slate-100 dark:bg-slate-900 border-2 border-slate-100 dark:border-white rounded-lg transition-all duration-300 ease-in-out">
                  <svg class="h-11 w-11 text-slate-500 dark:text-white p-1" viewBox="0 0 90 90" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M36.25 56.8H18.75L14.69 69.47H4.26001L21.76 19.76H33.24L50.74 69.47H40.31L36.25 56.8ZM33.52 48.25L27.52 29.35L21.52 48.25H33.52Z" fill="currentColor"/>
                    <path d="M84.6901 54.3499H63.6201C64.3901 59.7399 67.6201 62.3499 72.7901 62.3499C75.6141 62.426 78.4193 61.8691 81.0001 60.72L82.8901 67.44C80.3001 69.05 75.2601 70.2399 70.8901 70.2399C60.4601 70.2399 53.3201 63.45 53.3201 52.24C53.3201 41.66 60.0401 34.45 70.4701 34.45C79.9901 34.45 85.8001 41.03 85.8001 52.45L84.6901 54.3499ZM63.6201 48.75H75.6201C75.0601 43.91 73.2401 42.09 70.0901 42.09C66.7701 42.09 64.3201 44.19 63.6201 48.75Z" fill="currentColor"/>
                  </svg>
                </div>
              </div>
              <div class="px-1 flex flex-col justify-center">
                <div class="flex flex-col justify-center bg-slate-100 dark:bg-slate-900 border-2 border-slate-100 dark:border-white rounded-lg transition-all duration-300 ease-in-out">
                  <svg class="h-11 w-11 text-slate-500 dark:text-white p-1" viewBox="0 0 90 90" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M45.56 54.07H28.06L24 66.74H13.57L31.07 17H42.55L60.05 66.7H49.62L45.56 54.07ZM42.83 45.53L36.83 26.63L30.83 45.53H42.83Z" fill="currentColor"/>
                    <path d="M64.46 21.59C64.46 18.59 66.98 16.34 70.46 16.34C73.94 16.34 76.46 18.58 76.46 21.59C76.46 24.6 73.94 26.91 70.46 26.91C66.98 26.91 64.46 24.67 64.46 21.59ZM65.51 33.14L75.38 31.74V66.74H65.51V33.14Z" fill="currentColor"/>
                  </svg>
                </div>
              </div>
              <h2 class="py-6 px-3 text-left text-xl font-normal text-slate-900 dark:text-white transition-colors duration-150 ease-in-out">
                gg/mm/YY
              </h2>
          </div>

        </div>
      </div>
    </div>


  </div>
</div>