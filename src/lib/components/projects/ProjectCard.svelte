<script lang="ts">
  export let slug: string;
  export let title: string;
  export let createdAt: string;
  export let category: string;

  function parseDate(strDate: string): string {
    return strDate.split('-').reverse().join('/');
  }
</script>


<a sveltekit:prefetch href="/projects/{category}/{slug}" class="space-y-4">
  <div class="rounded-xl shadow-mdspecial">
    <img class="rounded-xl aspect-1 object-cover"
      src="https://images.unsplash.com/photo-1583927136633-7ecde5b23ac5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80"
      alt="Motion Design Projects"
    />
  </div>
  <div class="text-2xl font-semibold">{title}</div>
</a>