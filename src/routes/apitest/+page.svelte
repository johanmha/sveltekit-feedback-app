<script>
	export let data;

	// const dbID = 'fd610b0c-2480-4c5a-81c2-494879cdf141';
	// const region = 'europe-west1';
	// const ns = 'feedback_app_store';
	// const token =
	// 	'AstraCS:jiHYMZCMfIbABDucnShDknAo:1830439e0388064c75b989110194f007b9c96fc721032d7d54a45227810b6c8f';
	// const midURL = 'apps.astra.datastax.com/api/rest/v2';
	// const collection = 'feedback_collection';

	// const headers = {
	// 	'Content-Type': 'application/json',
	// 	'X-Cassandra-Token': token
	// };
	// const url = `https://${dbID}-${region}.${midURL}/namespaces/${ns}/collections/${collection}`;

	// const deleteUrl = url + '/8f0c8679-9d4f-4520-a424-c55f5bc2dba7';
	// const deleteFeedback = fetch(url, { method: 'DELETE', headers })
	// 	.then(function (response) {
	// 		if (!response.ok) {
	// 			throw Error(`${response.status}`);
	// 		}
	// 		console.log('Delete status:', response.status);
	// 		return response.status != 204 ? response.json() : {};
	// 	})
	// 	.catch((error) => {
	// 		console.log(error);
	// 	});

	const deleteFeedback = () => console.log('Run Delete Feedback function (async?)');
</script>

<h1>Test API with this page</h1>
<button on:click={deleteFeedback}>Delete</button>
<div>
	Here is your data:
	<div>{JSON.stringify(data)}</div>
</div>
