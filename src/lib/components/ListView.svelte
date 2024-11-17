<script lang="ts">
	import {
		Table,
		TableHead,
		TableHeadCell,
		TableBody,
		TableBodyRow,
		TableBodyCell,
		Progressbar
	} from 'flowbite-svelte';
	import { LinkOutline } from 'flowbite-svelte-icons';
	import type { Landpad } from '$lib/types';

	let { launches, onClick }: { launches: Landpad[]; onClick: (launch: Landpad) => void } = $props();

	function calculateProgress(launch: Landpad) {
		return Math.round((launch.successful_landings / launch.attempted_landings) * 100) || 0;
	}
</script>

<Table shadow>
	<TableHead theadClass="uppercase text-xs py-6">
		<TableHeadCell padding="p-4">Full Name</TableHeadCell>
		<TableHeadCell padding="p-4">Location Name</TableHeadCell>
		<TableHeadCell padding="p-4">Region</TableHeadCell>
		<TableHeadCell padding="p-4">Details</TableHeadCell>
		<TableHeadCell padding="p-4">Success Rate</TableHeadCell>
		<TableHeadCell padding="p-4">Wikipedia Link</TableHeadCell>
		<TableHeadCell padding="p-4">Status</TableHeadCell>
	</TableHead>
	<TableBody tableBodyClass="divide-y">
		{#each launches as launch}
			<TableBodyRow>
				<TableBodyCell tdClass="text-gary-900  font-semibold text-sm p-4">
					{launch.full_name}
				</TableBodyCell>
				<TableBodyCell tdClass="text-gary-900  font-semibold text-sm px-4">
					{launch.location.name}
				</TableBodyCell>
				<TableBodyCell tdClass="text-gary-900  font-semibold text-sm p-4">
					{launch.location.region}
				</TableBodyCell>
				<TableBodyCell tdClass="text-gary-900  font-semibold text-sm p-4">
					<button
						class="cursor-pointer rounded-md bg-gray-100 px-3 py-1 text-gray-900"
						onclick={() => onClick(launch)}>View Details</button
					>
				</TableBodyCell>
				<TableBodyCell tdClass="p-4">
					{#if calculateProgress(launch) > 0}
						<Progressbar progressClass="bg-green-400" progress={calculateProgress(launch)} />
						<p class="text-xs font-medium text-gray-500">
							{calculateProgress(launch)}%
						</p>
					{:else}
						<p class="text-xs font-medium text-gray-500">N/A</p>
					{/if}
				</TableBodyCell>
				<TableBodyCell tdClass="p-4">
					<a href={launch.wikipedia} target="_blank" class="block px-2">
						<LinkOutline class="h-5 w-5 cursor-pointer text-[#1C64F2]" />
					</a>
				</TableBodyCell>
				<TableBodyCell tdClass="p-4">
					<p
						class="inline-block rounded-md px-[10px] py-[2px] text-xs font-medium"
						class:bg-green-100={launch.status === 'active'}
						class:text-green-800={launch.status === 'active'}
						class:bg-red-100={launch.status === 'retired'}
						class:text-red-800={launch.status === 'retired'}
						class:bg-primary-100={launch.status === 'under construction'}
						class:text-primary-800={launch.status === 'under construction'}
					>
						{launch.status}
					</p>
				</TableBodyCell>
			</TableBodyRow>
		{/each}
	</TableBody>
</Table>
