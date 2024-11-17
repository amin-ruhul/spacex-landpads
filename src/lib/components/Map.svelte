<script lang="ts">
	import Map from 'ol/Map';
	import View from 'ol/View';
	import TileLayer from 'ol/layer/Tile';
	import OSM from 'ol/source/OSM';
	import { Feature } from 'ol';
	import { Point } from 'ol/geom';
	import { fromLonLat } from 'ol/proj';
	import VectorSource from 'ol/source/Vector';
	import VectorLayer from 'ol/layer/Vector';
	import { Circle, Fill, Style } from 'ol/style';
	import 'ol/ol.css';
	import type { Landpad } from '$lib/types';

	let mapElement: HTMLDivElement;

	let map: Map | null = null;
	let { landingPads }: { landingPads: Landpad[] } = $props();

	$effect(() => {
		initializeMap();

		return () => {
			if (map) {
				map.setTarget(null);
				map = null;
			}
		};
	});

	function initializeMap() {
		map = new Map({
			target: mapElement,
			layers: [
				new TileLayer({
					source: new OSM({
						attributions: []
					})
				})
			],
			view: new View({
				center: fromLonLat([-95.7129, 37.0902]),
				zoom: 0
			}),
			controls: []
		});

		addMarkers();
	}

	function addMarkers() {
		if (!map || landingPads.length === 0) return;

		const features = landingPads.map((pad) => {
			const feature = new Feature({
				geometry: new Point(fromLonLat([pad.location.longitude, pad.location.latitude])),
				name: pad.full_name,
				status: pad.status
			});

			feature.setStyle(
				new Style({
					image: new Circle({
						radius: 8,
						fill: new Fill({
							color: '#91F652'
						})
					})
				})
			);

			return feature;
		});

		const vectorSource = new VectorSource({ features });
		const vectorLayer = new VectorLayer({ source: vectorSource });
		map.addLayer(vectorLayer);

		// Add hover interaction
		const tooltipContainer = document.createElement('div');
		tooltipContainer.className =
			'absolute z-10 bg-white px-4 py-2 rounded-lg shadow-lg pointer-events-none hidden';
		mapElement.appendChild(tooltipContainer);

		map.on('pointermove', function (evt:any) {
			const feature = map.forEachFeatureAtPixel(evt.pixel, (feature:any) => feature);

			if (feature) {
				tooltipContainer.style.display = 'block';
				tooltipContainer.style.left = evt.pixel[0] + 10 + 'px';
				tooltipContainer.style.top = evt.pixel[1] + 10 + 'px';
				tooltipContainer.innerHTML = `
          <div class="font-medium">${feature.get('name')}</div>
          <div class="text-sm text-muted-foreground capitalize">${feature.get('status')}</div>
        `;
			} else {
				tooltipContainer.style.display = 'none';
			}
		});
	}
</script>

<div class="relative w-full overflow-hidden rounded-lg border border-[#E5E7EB] shadow">
	<p class="p-3 font-semibold text-gray-900">Map View</p>
	<div bind:this={mapElement} class="h-[300px] w-full"></div>
</div>
