<script>
	import { v4 as uuidv4 } from 'uuid';
	import { FeedbackStore } from '../../../stores/stores.js';
	import Card from './Card.svelte';
	import Button from './Button.svelte';
	import RatingSelect from './RatingSelect.svelte';

	let message = '';
	let disabled = true;
	let text = '';
	let min = 10;
	export let rating = 10;

	const handleInput = () => {
		if (text.trim().length <= min) {
			disabled = true;
			message = `Text must be at least ${min} characters`;
		} else {
			disabled = false;
			message = '';
		}
	};

	const handleSelect = (e) => (rating = e.detail);

	const handleSubmit = () => {
		const newFeedback = {
			id: uuidv4(),
			text,
			rating: +rating
		};

		FeedbackStore.update((currentFeedback) => [newFeedback, ...currentFeedback]);

		//reset state
		text = '';
	};
</script>

<Card>
	<header>
		<h2>How would you rate your service with us?</h2>
	</header>
	<form on:submit|preventDefault={handleSubmit}>
		<RatingSelect on:rating-select={handleSelect} />
		<div class="input-group">
			<input
				type="text"
				placeholder="Give us your feedback"
				bind:value={text}
				on:input={handleInput}
			/>
			<Button {disabled} type="submit">Send</Button>
		</div>
		{#if message}
			<div class="message">{message}</div>
		{/if}
	</form>
</Card>

<style>
	header {
		max-width: 400px;
		margin: auto;
	}
	header h2 {
		font-size: 22px;
		font-weight: 600;
		text-align: center;
	}
	.input-group {
		display: flex;
		flex-direction: row;
		padding: 2px;
		border: 1px solid #ccc;
		border-radius: 8px;
		padding: 8px 10px;
		margin-top: 15px;
	}
	input {
		flex-grow: 2;
		border: none;
		font-size: 16px;
	}
	input:focus {
		outline: none;
	}
	.message {
		color: rebeccapurple;
		text-align: center;
		padding-top: 10px;
	}
</style>
