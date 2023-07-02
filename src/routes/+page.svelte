<script>
	import { dummyMobileData } from '../data/dummyData';
	import Page2Form from '../components/page2Form.svelte';
	let isShow = false;

	console.log($dummyMobileData);
	const handleShowHide = () => {
		isShow = !isShow;
		console.log(isShow);
	};
</script>

{#each $dummyMobileData as mobile}
	<div>
		<p>
			{mobile.model}
		</p>
	</div>
{/each}

<button
	on:click={() => {
		handleShowHide();
	}}>Add</button
>

{#if isShow}
	<Page2Form />
{/if}
