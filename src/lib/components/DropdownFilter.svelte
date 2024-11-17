<script>
	import { Dropdown, Radio } from 'flowbite-svelte';
	import { ChevronDownOutline, AdjustmentsVerticalSolid } from 'flowbite-svelte-icons';

	let { filterByStatus = $bindable() } = $props();
</script>

<button
	class="flex items-center space-x-2 rounded-lg border border-gray-200 bg-[#F8F8F8] px-4 py-[10px] text-sm font-medium text-gray-900"
>
	<AdjustmentsVerticalSolid class="h-5 w-5" />
	<p>Filter By Status</p>
	<ChevronDownOutline class="h-5 w-5" /></button
>

<Dropdown class="w-48 space-y-1 p-3">
	<li class="rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
		<Radio name="filterByStatus" color="blue" bind:group={filterByStatus} value={'all'}>All</Radio>
	</li>
	<li class="rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
		<Radio name="filterByStatus" color="blue" bind:group={filterByStatus} value={'active'}
			>Active</Radio
		>
	</li>
	<li class="rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
		<Radio name="filterByStatus" color="blue" bind:group={filterByStatus} value={'retired'}
			>Retired</Radio
		>
	</li>
	<li class="rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
		<Radio
			name="filterByStatus"
			color="blue"
			bind:group={filterByStatus}
			value={'under construction'}
		>
			Under Construction
		</Radio>
	</li>
</Dropdown>
