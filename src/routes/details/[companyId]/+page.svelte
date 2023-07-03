<script>
	export let data;
	import { dummyCarsData } from '../../../data/dummyData';
	import Modal from '../../../components/Modal.svelte';
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

<input
	class=" mt-2 m-auto bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-min"
	bind:value={filter}
	placeholder="filter"
/>

<div class="container mx-auto">
	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
		{#each $dummyCarsData
			.find((company) => company.id == data.params)
			.models.filter((model) => model.toLowerCase().includes(filter.toLowerCase())) as model}
			<div
				class="flex mt-10 m-auto w-auto max-md:w-48 lg:w-48 justify-center text-base border-2 border-gray-300 rounded-xl p-6 bg-gray-100 font-bold text-black"
			>
				{model}
			</div>
		{/each}
	</div>
</div>

{#if !showModal}
	<div class="relative h-32 w-32 ...">
		<div class="absolute bottom-0 right-0 h-16 w-16 ...">
			<button
				on:click={() => handleShowHideModal()}
				class="
		mt-auto
		relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
			>
				<span
					class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0"
				>
					Add
				</span>
			</button>
		</div>
	</div>
{/if}

{#if showModal}
	<Modal>
		<div class="relative">
			<button class="text-red-600 absolute top-1 right-3" on:click={() => handleShowHideModal()}
				>X</button
			>
		</div>
		<div class="content p-8">
			<form class="flex flex-col items-center space-y-4" on:submit|preventDefault={handleAddCar}>
				<input
					class=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
					bind:value={newCar}
					placeholder="Car name"
				/>
				<button
					type="submit"
					class="
		mt-auto
		relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
				>
					<span
						class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0"
					>
						submit
					</span>
				</button>
			</form>
		</div>
	</Modal>
{/if}
