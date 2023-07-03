<script lang="ts">
	import { dummyCarsData } from '../data/dummyData';
	console.log($dummyCarsData);
	let showModal = false;
	let company = '';
	let models = new Array(0);
	let newCar = '';
	const handleOpenCloseModal = () => {
		showModal = !showModal;
	};
	const handleAddCar = () => {
		models.push(newCar);
		console.log(models);
		newCar = '';
	};
	const handleAddCompany = () => {
		dummyCarsData.update((currentData) => [
			...currentData,
			{ id: currentData.length + 1, company, models }
		]);
		console.log($dummyCarsData);
        showModal = !showModal;
	};
</script>

{#each $dummyCarsData as data}
	<div>
		<a href={`/details/${data.id}`}>
			<p>{data.company}</p>
		</a>
	</div>
{/each}

{#if !showModal}
	<button on:click={handleOpenCloseModal}>Add card</button>
{/if}

{#if showModal}
	<input placeholder="Company name" bind:value={company} />
	<br />
	<input placeholder="Model name " bind:value={newCar} /><button
		on:click={() => {
			handleAddCar();
		}}>+</button
	>
	<br />
	<button on:click={() => handleAddCompany()}>Add company</button>
{/if}
