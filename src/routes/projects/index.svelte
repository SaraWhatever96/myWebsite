<script context="module" lang="ts">
  // Il codice viene richiamato non appena finisci sulla pagina '/projects'.
  // L'utente viene rimandato immediatamente alla pagina '/projects/motion-design'.
  export async function load() {
    return { redirect: '/projects/motion-design', status: 302 }
  }
</script>