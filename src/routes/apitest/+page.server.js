import * as api from '$lib/api';

export async function load() {
	const response = await api.getFeedback;
	return response;
}
