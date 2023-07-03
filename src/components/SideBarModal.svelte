<script>
	import { dummyCarsData } from '../data/dummyData';
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

<div
	class="modal z-50 fixed w-full h-full top-0 left-0 flex items-center justify-center p-8 lg:p-0"
>
	<div class="bg-grey w-full lg:h-max lg:w-1/2 mx-auto rounded-lg shadow-xl z-50 overflow-y-auto">
		<div class="content p-8">
			<div
				class="p-2.5 flex items-center rounded-md px-4 duration-300 cursor-pointer bg-gray-700 text-white"
			>
				<input
					type="text"
					placeholder="Company name"
					bind:value={company}
					class="text-[15px] ml-4 w-full bg-transparent focus:outline-none"
				/>
			</div>
			<div
				class="p-2.5 flex items-center rounded-md px-4 duration-300 cursor-pointer bg-gray-700 text-white"
			>
				<input
					type="text"
					placeholder="Model name "
					bind:value={newCar}
					class="text-[15px] ml-4 w-full bg-transparent focus:outline-none"
				/>
				<button
					class="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white"
					on:click={() => {
						handleAddCar();
					}}>+</button
				>
			</div>
			<button
				class="p-2.5 mt-3 mr-auto rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white"
				on:click={() => handleAddCompany()}>Add company</button
			>
		</div>
	</div>
</div>
