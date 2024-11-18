<script lang="ts">
	import {
		Table,
		TableHead,
		TableHeadCell,
		TableBody,
		TableBodyRow,
		TableBodyCell
	} from 'flowbite-svelte';
	import { LinkOutline } from 'flowbite-svelte-icons';
	import type { Landpad } from '$lib/types';
	import ProgressBar from './ProgressBar.svelte';
	import StatusTag from './StatusTag.svelte';

	let {
		launches,
		onClick
	}: { launches: Landpad[]; onClick: (data: { title: string; details: string }) => void } =
		$props();
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
				<TableBodyCell tdClass="text-gary-900 p-4">
					<button
						class="cursor-pointer rounded-md bg-gray-100 px-3 py-1 text-gray-900 font-medium text-xs"
						onclick={() => onClick({ title: launch.full_name, details: launch.details })}
					>
						View Details
					</button>
				</TableBodyCell>
				<TableBodyCell tdClass="p-4">
					<ProgressBar
						successfulLandings={launch.successful_landings}
						attemptedLandings={launch.attempted_landings}
					/>
				</TableBodyCell>
				<TableBodyCell tdClass="p-4">
					<a href={launch.wikipedia} target="_blank" class="block px-2">
						<LinkOutline class="h-5 w-5 cursor-pointer text-[#1C64F2]" />
					</a>
				</TableBodyCell>
				<TableBodyCell tdClass="p-4">
					<StatusTag status={launch.status} />
				</TableBodyCell>
			</TableBodyRow>
		{/each}
	</TableBody>
</Table>
