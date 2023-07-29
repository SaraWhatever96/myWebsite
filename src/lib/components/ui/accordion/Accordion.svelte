<script lang="ts">
	import { Icons } from '$components/site/icons';
	import type { Question } from '$lib/types/question';
	import { createAccordion } from '@melt-ui/svelte';
	import { slide } from 'svelte/transition';
  import { createEventDispatcher } from 'svelte';

  export let questions: Question[];
	const { content, item, trigger, isSelected, root } = createAccordion({ type: 'single', value: 'illustration-1' });
  const dispatch = createEventDispatcher();

  $: $isSelected('question-1') && dispatch('valueChange', { value: 'illustration-1' });
  $: $isSelected('question-2') && dispatch('valueChange', { value: 'illustration-2' });
  $: $isSelected('question-3') && dispatch('valueChange', { value: 'illustration-3' });
</script>

<div class="w-full border-t border-border max-md:mt-6" {...$root}>
	{#each questions as { id, title, description }, i}
		<div
			{...$item(id)}
			class="border-b"
		>
			<h2 class="flex">
				<button
					id={i === 0 ? 'trigger' : undefined}
					{...$trigger(id)}
					use:trigger
					class="flex flex-1 items-center justify-between py-4 text-lg font-semibold cursor-pointer transition-all hover:bg-opacity-95"
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
					<div class="pb-4 pt-0">{description}</div>
				</div>
			{/if}
		</div>
	{/each}
</div>