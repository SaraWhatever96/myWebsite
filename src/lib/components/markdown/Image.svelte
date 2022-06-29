<script lang="ts">
  export let src: string;
  export let alt: string;
</script>

<!-- Per cambiare il width dell'immagine, mettere lo stile sul <p> -->
<p>
  <img {src} {alt}>
</p>