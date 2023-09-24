<script lang="ts">
	import { Icons } from '$components/site/icons';
	import type { Question } from '$lib/types/question';
	import { createAccordion } from '@melt-ui/svelte';
	import { slide } from 'svelte/transition';
  import { createEventDispatcher } from 'svelte';

  export let questions: Question[];
	const {
    elements: { content, item, trigger, root },
    helpers: { isSelected },
  } = createAccordion({
    defaultValue: 'illustration-1',
  });
  const dispatch = createEventDispatcher();

  $: $isSelected('question-1') && dispatch('valueChange', { value: 'illustration-1' });
  $: $isSelected('question-2') && dispatch('valueChange', { value: 'illustration-2' });
  $: $isSelected('question-3') && dispatch('valueChange', { value: 'illustration-3' });
</script>

<div class="w-full max-md:mt-3" {...$root}>
	{#each questions as { id, title, description }, i}
		<div
			{...$item(id)}
			class="bg-background rounded-lg mb-3 last-of-type:mb-0 md:mb-5 "
		>
			<!-- TODO: Capire se in questo tag <h2> va inserito qualche stato di hover.. altrimenti eliminare tutti gli stili al netto di `flex` -->
			<h2 class="flex {!$isSelected(id) && ''}">
				<button
					{...$trigger(id)}
					use:trigger
					class="flex flex-1 items-center justify-between px-5 py-6 text-lg font-semibold rounded-lg cursor-pointer transition-all hover:bg-opacity-95"
					aria-label="Open or close {title}"
				>
					{title}
          <Icons.chevronDown class="h-4 w-4 shrink-0 transition-transform duration-200 {$isSelected(id) && 'rotate-180'}" />
				</button>
			</h2>
			{#if $isSelected(id)}
				<div
					class="overflow-hidden text-base text-muted-foreground"
					{...$content(id)}
					transition:slide
				>
					<div class="px-5 pb-6 pt-0">{description}</div>
				</div>
			{/if}
		</div>
	{/each}
</div>