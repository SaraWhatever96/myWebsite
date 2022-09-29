<script lang="ts">
  export let src: string;
  export let alt: string;

  let clazz;
	export { clazz as class };
</script>

<div class="-mx-6 md:-mx-0 overflow-scroll h-[450px] md:h-[700px] md:rounded-xl">
  <img class="{clazz || ''} md:rounded-xl !pb-0" {src} {alt}>
</div>
