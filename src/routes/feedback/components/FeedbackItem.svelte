<script>
	import { FeedbackStore } from '../../../stores/stores.js';
	import Card from './Card.svelte';
	export let item = {};

	const deleteFeedback = (itemID) => {
		FeedbackStore.update((currentFeedback) => {
			return currentFeedback.filter((item) => item.id != itemID);
		});
	};
</script>

<Card>
	<div class="num-display">{item.rating}</div>
	<div class="close" on:click={() => deleteFeedback(item.id)}>X</div>
	<p class="text-display">{item.text}</p>
</Card>

<style>
	.num-display {
		position: absolute;
		top: -10px;
		left: -10px;
		color: #fff;
		background-color: #ff6a95;
		border-radius: 50%;
		width: 50px;
		height: 50px;
		border: 1px #eee solid;
		text-align: center;
		padding: 10px;
		font-size: 19px;
	}

	.close {
		position: absolute;
		top: 10px;
		right: 20px;
		cursor: pointer;
	}
</style>
