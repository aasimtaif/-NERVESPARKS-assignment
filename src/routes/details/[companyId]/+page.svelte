<script>
	export let data;
	import { dummyCarsData } from '../../../data/dummyData';

	let showModal = false;
	let newCar = '';
	const handleShowHideModal = () => {
		showModal = !showModal;
	};
	const company = $dummyCarsData[data.params-1]
	
	console.log($dummyCarsData)

	const handleAddCar = () => {
		company.models.push(newCar)
		dummyCarsData.update((currentData) => {
			currentData = currentData.filter((company) => company.id != data.params)
			return [company,...currentData]
		});
		console.log($dummyCarsData);
		showModal=false
	};
</script>

{#each  $dummyCarsData[data.params-1].models as model}
	<p>{model}</p>
{/each}

{#if !showModal}
<button on:click={() => handleShowHideModal()}>Add car</button>
{/if}

{#if showModal}
	<form on:submit|preventDefault={handleAddCar}>
		<input bind:value={newCar} placeholder="Car name" />
		<button type ="submit">Add</button>
	</form>
{/if}
