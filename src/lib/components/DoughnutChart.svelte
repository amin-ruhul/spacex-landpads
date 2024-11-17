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

	const options:ApexOptions = $derived({
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
							formatter: function (w: any) {
								const sum = w.globals.seriesTotals.reduce((a: number, b: number) => a + b, 0);
								return `${sum}`;
							}
						},
						value: {
							show: true,
							offsetY: -20,
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

<div class="w-full rounded-lg border p-6 shadow">
	<h5 class="me-1 text-xl font-bold leading-none text-gray-900">Landing Pads Status Chart</h5>

	<Chart {options} class="w-full py-6" />
</div>
