<script lang="ts">
	import DribbbleIcon from "./assets/icons/DribbbleIcon.svelte";
	import InstragramIcon from "./assets/icons/InstragramIcon.svelte";
	import LinkedinIcon from "./assets/icons/LinkedinIcon.svelte";
import Divider from "./neumorphic/Divider.svelte";

  let year: number = new Date().getFullYear();
</script>

<section class="pt-36 pb-24">
  <Divider />

  <div class="mt-16">
    <div class="flex flex-col-reverse md:flex-row md:justify-between">
      <!-- Content -->
      <div class="text-slate-700 font-light space-y-5 max-md:text-center">
        <h3 class="text-lg">Sara Cosmai</h3>
        <div class="text-sm">
          <p>UI-UX Designer based in Aosta, Italy</p>
          <p>Background in visual design, motion design</p>
        </div>
        <a href="/" class="block text-lg font-medium underline">Resume</a>
        <p class="text-sm font-normal">&copy; {year} Sara Cosmai</p>
      </div>

      <!-- Social Links -->
      <div class="flex flex-row justify-center space-x-6 pb-12 md:flex-col md:space-x-0 md:space-y-4 md:pb-0">
        <a href="/" class="btn-inner-shadow p-2 bg-white shadow-md rounded-lg">
          <div class="btn-island-outer-shadow bg-white rounded-md p-2.5">
            <LinkedinIcon className="h-5 w-5" />
          </div>
        </a>
        <a href="/" class="btn-inner-shadow p-2 bg-white shadow-md rounded-lg">
          <div class="btn-island-outer-shadow bg-white rounded-md p-2.5">
            <DribbbleIcon className="h-5 w-5" />
          </div>
        </a>
        <a href="/" class="btn-inner-shadow p-2 bg-white shadow-md rounded-lg">
          <div class="btn-island-outer-shadow bg-white rounded-md p-2.5">
            <InstragramIcon className="h-5 w-5" />
          </div>
        </a>
      </div>
    </div>
  </div>
</section>

<style>
  .btn-inner-shadow {
    box-shadow: inset -2px 2px 3px #F1F5F9, inset 2px -2px 3px 17.6043px #FFFFFF;
    filter: drop-shadow(6px -6px 12px #FFFFFF) drop-shadow(-6px 6px 12px #F1F5F9);
  }

  .btn-island-outer-shadow {
    border: 1px solid #F8FAFC;
    box-shadow: 0px 6px 6px #E2E8F0;
  }
</style>
