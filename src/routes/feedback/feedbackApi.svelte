<script context="module">
	//Future possibility to export api from this file
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

	// POST FEEDBACK
	export const postFeedback = (newFeedback) => {
		fetch(url, { method: 'GET', headers, body: { newFeedback } });
	};

	// DELETE FEEDBACK
	export const deleteFeedback = (id) => {
		getFeedbackById(id)
			.then(function (documentID) {
				const deleteUrl = url + '/' + documentID;
				return deleteUrl;
			})
			.then(function (deleteUrl) {
				fetch(deleteUrl, { method: 'DELETE', headers })
					.then(function (response) {
						if (!response.ok) {
							throw Error(`${response.status}`);
						}
						console.log('Delete status:', response.status);
						return response.status != 204 ? response.json() : {};
					})
					.catch((error) => {
						console.log(error);
					});
			});
	};

	async function getFeedbackById(id) {
		const getUrl = url + '?where=%7B%22id%22%3A%7B%22%24eq%22%3A%22' + id + '%22%7D%7D';
		return fetch(getUrl, { method: 'GET', headers })
			.then(function (response) {
				if (!response.ok) {
					throw Error(`${response.status}`);
				}
				console.log('Status:', response.status);
				return response.json();
			})
			.then(function (response) {
				return Object.keys(response.data)[0];
			})
			.catch((error) => {
				console.log(error);
			});
	}
</script>
