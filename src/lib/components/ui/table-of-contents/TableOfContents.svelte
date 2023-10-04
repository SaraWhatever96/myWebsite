<script lang="ts">
	import { createTableOfContents } from '@melt-ui/svelte';
  import Tree from './Tree.svelte';
	import Container from '$components/site/Container.svelte';
  import { slide } from 'svelte/transition';
	import { Icons } from '$components/site/icons';
	import { Button } from '../button';

  const {
    elements: { item },
    states: { activeHeadingIdxs, headingsTree },
  } = createTableOfContents({
    selector: '#toc-builder',
    exclude: ['h1', 'h4', 'h5', 'h6'],
    activeType: 'all',
    headingFilterFn: (heading) => !heading.hasAttribute('data-toc-ignore'),
    scrollFn: (id) => {
      const element = document.getElementById(id);

      if (element) {
        window.scrollTo({
          top: element.offsetTop - 16,
          behavior: 'smooth',
        });
      }
    },
  });

  let hideHeading = false;
  console.log({item})
</script>


<div class="py-4 bg-[#E0FAFB] text-[#345556]">
  <Container>
    <div class="lg:px-5">
      <div class="flex justify-between">
        <p class="font-semibold text-neutral-900">On This Page</p>
        <Icons.chevronsUpDown />
      </div>

      {#if true}
      <nav transition:slide>
        {#key $headingsTree}
          <Tree
            tree={$headingsTree}
            activeHeadingIdxs={$activeHeadingIdxs}
            {item}
          />
        {/key}
      </nav>
      {/if}
    </div>
  </Container>
</div>