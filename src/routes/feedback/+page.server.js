import * as api from '$lib/server/api';

export async function load() {
	const response = await api.getFeedback;
	return response;
}
