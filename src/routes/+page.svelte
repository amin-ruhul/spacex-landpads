<script lang="ts">
	import { ListOutline, GridOutline } from 'flowbite-svelte-icons';
	import DropdownFilter from '$lib/components/DropdownFilter.svelte';
	import ListView from '$lib/components/ListView.svelte';
	let { data } = $props();
	let viewMode: 'list' | 'grid' = $state('list');
	let filterByStatus = $state('all');
	console.log(data.landpads);

	let filteredData = $derived(
		data.landpads.filter((landpad) =>
			filterByStatus === 'all' ? true : landpad.status === filterByStatus
		)
	);
</script>

<main class="container mx-auto mt-8 px-2">
	<div class="flex items-center">
		<div class="rounded-md border">
			<button
				class="p-3 transition-colors duration-300 hover:bg-gray-200 hover:text-[#1C64F2]"
				class:bg-gray-200={viewMode === 'list'}
				class:text-[#1C64F2]={viewMode === 'list'}
				onclick={() => (viewMode = 'list')}
			>
				<ListOutline class="h-5 w-5"></ListOutline>
			</button>
			<button
				class="p-3 transition-colors duration-300 hover:bg-gray-200 hover:text-[#1C64F2]"
				class:bg-gray-200={viewMode === 'grid'}
				class:text-[#1C64F2]={viewMode === 'grid'}
				onclick={() => (viewMode = 'grid')}
			>
				<GridOutline class="h-5 w-5"></GridOutline>
			</button>
		</div>

		<div class="ml-auto">
			<DropdownFilter bind:filterByStatus />
		</div>
	</div>

	<ListView launches={filteredData} onClick={() => {}} />
</main>
