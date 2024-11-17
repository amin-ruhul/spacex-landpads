export type Landpad = {
	id: string;
	full_name: string;
	status: string;
	location: {
		name: string;
		region: string;
		latitude: number;
		longitude: number;
	};
	landing_type: string;
	successful_landings: number;
	attempted_landings: number;
	wikipedia: string;
	details: string;
};
