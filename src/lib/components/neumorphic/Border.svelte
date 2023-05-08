<script lang="ts">
  export let className: string = '';
  export let style: string = '';
</script>


<div class="{className} relative inner-shadow p-3 rounded-[40px]" {style}>
  <div class="bg-slate-50 rounded-[32px] overflow-hidden">
    <slot />
  </div>
</div>
