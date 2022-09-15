const dbID = 'fd610b0c-2480-4c5a-81c2-494879cdf141';
const region = 'europe-west1';
const ns = 'feedback_app_store';
const token =
	'AstraCS:jiHYMZCMfIbABDucnShDknAo:1830439e0388064c75b989110194f007b9c96fc721032d7d54a45227810b6c8f';
const midURL = 'apps.astra.datastax.com/api/rest/v2';
const collection = 'feedback_collection';

const headers = {
	'Content-Type': 'application/json',
	'X-Cassandra-Token': token
};
const url = `https://${dbID}-${region}.${midURL}/namespaces/${ns}/collections/${collection}`;
export const testApi = () => {
	const response = {
		a: '1',
		b: '2'
	};
	return response;
};

export const getCatFact = fetch('https://catfact.ninja/fact').then((response) => response.json());

export const getFeedback = fetch(url, { method: 'GET', headers })
	.then(function (response) {
		if (!response.ok) {
			throw Error(`${response.status}, ${response.statusText}`);
		}
		return response.json();
	})
	.catch((error) => {
		console.log(error);
	});
