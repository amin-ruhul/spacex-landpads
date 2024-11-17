<script lang="ts">
	import ProgressBar from './ProgressBar.svelte';
	import { LinkOutline } from 'flowbite-svelte-icons';
	import StatusTag from './StatusTag.svelte';
	import type { Landpad } from '$lib/types';

	let {
		launchs,
		onClick
	}: { launchs: Landpad[]; onClick: (data: { title: string; details: string }) => void } = $props();
</script>

<div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
	{#each launchs as launch}
		<div class="space-y-4 rounded-md border p-4">
			<div class="space-y-2">
				<h3 class="font-semibold">{launch.full_name}</h3>
				<p class="text-muted-foreground text-sm">
					{launch.location.name}, {launch.location.region}
				</p>
			</div>

			<div>
				<ProgressBar
					successfulLandings={launch.successful_landings}
					attemptedLandings={launch.attempted_landings}
					isGridView={true}
				/>
			</div>

			<div class="flex items-center justify-between">
				<StatusTag status={launch.status} />
				<div class="flex items-center gap-2">
					<button
						class="cursor-pointer rounded-md bg-gray-100 px-3 py-1 text-sm font-semibold text-gray-900"
						onclick={() => onClick({ title: launch.full_name, details: launch.details })}
					>
						View Details
					</button>
					<a href={launch.wikipedia} target="_blank" class="block cursor-pointer">
						<LinkOutline class="h-5 w-5 cursor-pointer text-[#1C64F2]" />
					</a>
				</div>
			</div>
		</div>
	{/each}
</div>
