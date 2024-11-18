<script>
	import { Dropdown, Radio } from 'flowbite-svelte';
	import { ChevronDownOutline, AdjustmentsVerticalSolid } from 'flowbite-svelte-icons';

	let { filterByStatus = $bindable() } = $props();
	let dropdownOpen = $state(false)

	$inspect(dropdownOpen)
</script>

<button
	class="flex items-center space-x-2 rounded-lg border border-gray-200 bg-[#F8F8F8] px-4 py-2 text-sm font-medium"
	class:text-gray-900={!dropdownOpen}
	class:text-[#1C64F2]={dropdownOpen}
>
	<AdjustmentsVerticalSolid class="h-5 w-5" />
	<p>Filter By Status</p>
	<ChevronDownOutline class="h-5 w-5" />
</button>

<Dropdown class="w-48 space-y-1 p-3" bind:open={dropdownOpen}>
	<li class="rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600 cursor-pointer">
		<Radio 
		name="filterByStatus" 
		color="blue" 
		bind:group={filterByStatus} 
		value={'all'}
		class="cursor-pointer"
		>
		All
	</Radio>
	</li>
	<li class="rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600 cursor-pointer">
		<Radio 
		name="filterByStatus" 
		color="blue" 
		bind:group={filterByStatus} 
		value={'active'}
		class="cursor-pointer"
			>Active</Radio
		>
	</li>
	<li class="rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600 cursor-pointer">
		<Radio 
		name="filterByStatus" 
		color="blue" 
		bind:group={filterByStatus} 
		value={'retired'}
		class="cursor-pointer"
			>Retired</Radio
		>
	</li>
	<li class="rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
		<Radio
			name="filterByStatus"
			color="blue"
			bind:group={filterByStatus}
			value={'under construction'}
			class="cursor-pointer"
		>
			Under Construction
		</Radio>
	</li>
</Dropdown>
