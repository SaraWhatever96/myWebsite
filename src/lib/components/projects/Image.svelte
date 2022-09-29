<script lang="ts">
  export let src: string;
  export let alt: string;


  let clazz;
	export { clazz as class };
</script>

<p class="-mx-6 md:-mx-0">
  <img class="{clazz || ''} md:rounded-xl" {src} {alt}>
</p>