<script>
	export let data;
	import { dummyCarsData } from '../../../data/dummyData';
	let filter = '';
	let showModal = false;
	let newCar = '';
	const handleShowHideModal = () => {
		showModal = !showModal;
	};
	const company = $dummyCarsData.find((company) => company.id == data.params);

	console.log(company);

	const handleAddCar = () => {
		// @ts-ignore
		company.models.push(newCar);
		// @ts-ignore
		dummyCarsData.update((currentData) => {
			currentData = currentData.filter((company) => company.id != data.params);
			return [company, ...currentData];
		});
		console.log($dummyCarsData);
		showModal = false;
	};
</script>

<input bind:value={filter} placeholder="filter" />

{#each $dummyCarsData
	.find((company) => company.id == data.params)
	.models.filter((model) => model.toLowerCase().includes(filter.toLowerCase())) as model}
	<p>{model}</p>
{/each}

{#if !showModal}
	<button on:click={() => handleShowHideModal()}>Add car</button>
{/if}

{#if showModal}
	<form on:submit|preventDefault={handleAddCar}>
		<input bind:value={newCar} placeholder="Car name" />
		<button type="submit">Add</button>
	</form>
{/if}
