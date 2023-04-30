<script lang="ts">
  export let className: string = '';
  export let scrollPercentage: number;
  export let moverStyle: string;
</script>

<div class="{className} my-6 flex justify-center">
  <div class="relative inner-shadow h-3 w-[70vw] rounded-full overflow-x-hidden">
    <div class="absolute bottom-0 left-0 w-1/2 h-full rounded-full bg-[#DFEAFF]" style="{moverStyle}"></div>
  </div>
</div>
