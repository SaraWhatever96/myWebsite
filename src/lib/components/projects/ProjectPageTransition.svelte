<script lang="ts">
  import { fly } from 'svelte/transition'
	import { cubicOut } from 'svelte/easing';
</script>

<!-- This component is used to create an animation when we open the Project Details page -->
<div in:fly={{ delay: 200, duration: 700, easing: cubicOut, y: 50 }}>
  <slot />
</div>