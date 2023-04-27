<script>
	import FullWidthLayout from '$lib/components/FullWidthLayout.svelte';
	import WavesAnimation from '$lib/components/assets/WavesAnimation/index.svelte'
	import SealAnimation from '$lib/components/assets/SealAnimation.svelte';
</script>

<section class="py-4 lg:py-6">
	<FullWidthLayout>
		<div class="relative inset-shadow bg-slate-100/70 h-[600px] overflow-hidden">
			<!-- Background under Waves -->
			<div class="absolute z-0 inset-y-0 w-[45%] right-0 bg-[#F3EDFD]"></div>

			<!-- Content -->
			<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-20 relative">
				<div class="grid grid-cols-2">
          <div class="flex flex-col justify-center h-[600px]">
            <h1 class="font-semibold text-5xl text-slate-700 leading-[3.5rem]">
              May <br />
              design be <br />
              with you <br />
            </h1>
          </div>
					<div class="relative">
						<WavesAnimation />
						<SealAnimation color="blue" />
						<SealAnimation color="rose" />
					</div>
				</div>
			</div>
		</div>
	</FullWidthLayout>
</section>
