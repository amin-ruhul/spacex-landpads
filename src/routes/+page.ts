import type { Landpad } from '$lib/types';
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) => {
	const response = await fetch(`${import.meta.env.VITE_BASE_URL}/v3/landpads`);
	if (!response.ok) {
		error(404, {
			message: 'Not found'
		});
	}
	const landpads = await response.json();

	return { landpads: landpads as Landpad[] };
};
