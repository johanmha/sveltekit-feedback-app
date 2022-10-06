<script>
	import { FeedbackStore } from '../../stores/stores.js';
	import FeedbackList from './components/FeedbackList.svelte';
	import FeedbackStats from './components/FeedbackStats.svelte';
	import FeedbackForm from './components/FeedbackForm.svelte';

	export let data;
	const dataObject = data.data;
	const feedbackData = Object.keys(dataObject).map((key) => dataObject[key]);

	if ($FeedbackStore.length === 0) {
		feedbackData.map((feedback) =>
			FeedbackStore.update((currentFeedback) => [feedback, ...currentFeedback])
		);
	}

	console.log($FeedbackStore);
</script>

<main class="container">
	<FeedbackForm />
	<FeedbackStats />
	<FeedbackList />
</main>
