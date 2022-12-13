<script lang="ts">
  export let icons: string = '';

  function getSkillBackground(icon: string): string {
		let background: string;

		switch (icon) {
			case 'ae':
				background = 'bg-slate-100 dark:bg-slate-800';
				break;
			case 'ai':
				background = 'bg-slate-100 dark:bg-slate-800';
				break;
			case 'ps':
				background = 'bg-slate-100 dark:bg-slate-800';
				break;
			case 'sketch':
				background = 'bg-slate-100 dark:bg-slate-800';
				break;
			case 'figma':
				background = 'bg-slate-800 dark:bg-slate-800';
				break;
			case 'invision':
				background = 'bg-slate-100 dark:bg-slate-800';
				break;
			case 'pr':
				background = 'bg-slate-100 dark:bg-slate-800';
				break;
			case 'id':
				background = 'bg-slate-100 dark:bg-slate-800';
				break;
			case 'blender':
				background = 'bg-slate-100 dark:bg-slate-800';
				break;
			default:
				background = '';
				break;
		}

		return background;
	}
</script>

<div class="flex space-x-2 mb-4">
  {#each icons.split(',') as icon}
    <div class="rounded-lg p-2 hover:scale-105 hover:rotate-2 transition-all duration-150 ease-in-out">
      <img class="h-8 w-8 !mb-0" src="/svg/{icon}.svg" alt="Skill icon">
    </div>
  {/each}
</div>