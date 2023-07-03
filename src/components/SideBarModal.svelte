<script>
	import { dummyCarsData } from '../data/dummyData';
	import Modal from './Modal.svelte';
	let company = '';
	let models = new Array(0);
	let newCar = '';
	const handleAddCar = () => {
		models.push(newCar);
		console.log(models);
		newCar = '';
	};
	const handleAddCompany = () => {
		if (models.length == 0) models.push(newCar);
		dummyCarsData.update((currentData) => [
			...currentData,
			{ id: currentData.length + 1, company, models }
		]);
		console.log($dummyCarsData);
		company = '';
	};
</script>

<Modal>
	<div class="relative">
		<button class="text-red-600 absolute top-1 right-3">X</button>
	</div>
	<br />
	<div class="content p-8 flex flex-col items-center space-y-4">
		<input
			class=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
			type="text"
			placeholder="Company name"
			bind:value={company}
		/>

		<input
			class=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
			type="text"
			placeholder="Model name "
			bind:value={newCar}
		/>
		<button
			on:click={() => {
				handleAddCar();
			}}
			class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800"
		>
			<span
				class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0"
			>
				Add Model
			</span>
		</button>
		<button
		on:click={() => handleAddCompany()}
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
	</div>
</Modal>
