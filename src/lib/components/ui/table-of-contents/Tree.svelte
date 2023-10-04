<script lang="ts">
	import type { TableOfContentsElements, TableOfContentsItem } from "@melt-ui/svelte";



  export let tree: TableOfContentsItem[] = [];
  export let activeHeadingIdxs: number[];
  export let item: TableOfContentsElements['item'];
  export let level = 1;
</script>

<ul class="m-0 list-none {level !== 1 ? 'pl-4' : ''}">
  {#if tree && tree.length}
    {#each tree as heading, i (i)}
      {@const headingTitle = heading.node.innerHTML.startsWith('—— ') ? heading.node.innerHTML.slice(3) : heading.node.innerHTML}
      <li class="mt-0 pt-2">
        <a
          href="#{heading.id}"
          {...$item(heading.id)} use:item
          class="inline-flex items-center justify-center gap-1 text-zinc-500 no-underline transition-colors
           hover:!text-zinc-600 data-[active]:text-red-700"
        >
          <!--
            Along with the heading title, the original heading node
            is also passed down, so you can display headings
            however you want.
          -->
          {@html headingTitle}
        </a>
        {#if heading.children && heading.children.length}
          <svelte:self
            tree={heading.children}
            level={level + 1}
            {activeHeadingIdxs}
            {item}
          />
        {/if}
      </li>
    {/each}
  {/if}
</ul>
