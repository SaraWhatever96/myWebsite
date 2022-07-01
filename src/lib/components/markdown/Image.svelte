<script lang="ts">
  export let src: string;
  export let alt: string;

  
  let clazz;
	export { clazz as class };
</script>

<!-- Per cambiare il width dell'immagine, mettere lo stile sul <p> -->
<p>
  <img class="{clazz || ''}" {src} {alt}>
</p>