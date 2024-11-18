<script lang="ts">
	import { Chart } from 'flowbite-svelte';
	import type { ApexOptions } from 'apexcharts';
	import type { Landpad } from '$lib/types';

	const { landpads }: { landpads: Landpad[] } = $props();

	let activeLandingPads = $state(landpads.filter((pad) => pad.status === 'active'));
	let retiredLandingPads = $state(landpads.filter((pad) => pad.status === 'retired'));
	let underConstructionLandingPads = $state(
		landpads.filter((pad) => pad.status === 'under construction')
	);

	$effect(() => {
		activeLandingPads = landpads.filter((pad) => pad.status === 'active');
		retiredLandingPads = landpads.filter((pad) => pad.status === 'retired');
		underConstructionLandingPads = landpads.filter((pad) => pad.status === 'under construction');
	});

	const series = $derived([
		activeLandingPads.length,
		retiredLandingPads.length,
		underConstructionLandingPads.length
	]);

	const options: ApexOptions = $derived({
		series,
		colors: ['#16BDCA', '#E74694', '#1A56DB'],
		chart: {
			height: 300,
			width: '100%',
			type: 'donut'
		},
		stroke: {
			colors: ['transparent'],
			lineCap: 'butt'
		},
		plotOptions: {
			pie: {
				donut: {
					labels: {
						show: true,
						name: {
							show: true,
							offsetY: 20
						},
						total: {
							showAlways: true,
							show: true,
							label: 'Landing Pads',
							fontSize:"16",
							fontWeight:400,
							color:"#6B7280"
						},
						value: {
							show: true,
							offsetY: -20,
							fontWeight:700,
							fontSize:"30px",
							formatter: function (value: any) {
								return value.toString();
							}
						}
					},
					size: '80%'
				}
			}
		},
		labels: ['Active', 'Retired', 'Under Construction'],
		dataLabels: {
			enabled: false
		},
		legend: {
			show: false
		}
	});
</script>

<div class="w-full rounded-lg border border-[#E5E7EB] shadow">
	<p class="p-3 font-semibold text-gray-900">Success Rate Chart</p>
	<Chart {options} class="h-[315px] w-full" />
</div>
