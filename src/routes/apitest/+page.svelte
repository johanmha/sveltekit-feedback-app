<script>
	import { deleteFeedback } from '$lib/api';
	export let data;
</script>

<h1>Test API with this page</h1>
<button on:click={() => deleteFeedback('3')}>Delete</button>
<div>
	Here is your data:
	<div>{JSON.stringify(data)}</div>
</div>
