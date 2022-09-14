const headers = {
	'Content-Type': 'application/json',
	'X-Cassandra-Token':
		'AstraCS:jiHYMZCMfIbABDucnShDknAo:1830439e0388064c75b989110194f007b9c96fc721032d7d54a45227810b6c8f'
};
const url =
	'https://fd610b0c-2480-4c5a-81c2-494879cdf141-europe-west1.apps.astra.datastax.com/api/rest/v2/namespaces/feedback_app_store/collections/test_collection';

export const testApi = () => {
	const response = {
		a: '1',
		b: '2'
	};
	return response;
};

export const getCatFact = fetch('https://catfact.ninja/fact').then((response) => response.json());

export const getFeedback = fetch(url, { headers })
	.then(function (response) {
		console.log(response);
		if (!response.ok) {
			throw Error(`${response.status}, ${response.statusText}`);
		}
		return response.json();
	})
	.catch((error) => {
		console.log(error);
	});
