<script>
	import { Progressbar } from 'flowbite-svelte';
	let { successfulLandings, attemptedLandings, isGridView = false } = $props();

	let progress = $derived(Math.round((successfulLandings / attemptedLandings) * 100) || 0);
</script>

<div class="flex flex-col items-start gap-1">
	{#if progress > 0}
		{#if isGridView}
			<div class="flex w-full items-center justify-between">
				<span class="text-sm">Success Rate</span>
				<span class="text-sm font-medium">{progress}%</span>
			</div>
		{/if}
		<Progressbar {progress} progressClass="bg-pink-600 dark:bg-pink-400" />
		{#if !isGridView}
			<p class="text-xs font-medium text-gray-500">{progress}%</p>
		{/if}
	{:else}
		<p class="text-xs font-medium text-gray-500">N/A</p>
	{/if}
</div>
