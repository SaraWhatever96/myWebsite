<script lang="ts">
  export let src: string;
  export let alt: string;


  let clazz;
	export { clazz as class };
</script>

<p class="-mx-6 md:-mx-0">
  <img loading="lazy" class="{clazz || ''} md:rounded-xl w-full h-auto" {src} {alt}>
</p>