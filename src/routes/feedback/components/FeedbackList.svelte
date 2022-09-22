<script>
	import { FeedbackStore } from '../../../stores/stores.js';
	import { scale, fade } from 'svelte/transition';
	import FeedbackItem from './FeedbackItem.svelte';
</script>

{#each $FeedbackStore as fb (fb.id)}
	<div in:scale out:fade={{ duration: 500 }}>
		<FeedbackItem item={fb} on:delete-feedback />
	</div>
{/each}
