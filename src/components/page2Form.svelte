<script>
	import { dummyMobileData } from '../data/dummyData';
	import Modal from './Modal.svelte';
	let input = { company: '', model: '' };
	const handleSubmit = () => {
		console.log(input, $dummyMobileData);
		dummyMobileData.update((currentData) => [...currentData, input]);
	};
	console.log(input);
</script>

<Modal>
	<div class="relative">
		<button class="text-red-600 absolute top-1 right-3">X</button>
	</div>
	<br />
	<div class="content p-8">
		<form class="flex flex-col items-center space-y-4" on:submit|preventDefault={handleSubmit}>
			<input
				class=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
				bind:value={input.company}
				placeholder="Company name"
			/>
			<input
				class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
				bind:value={input.model}
				placeholder="Model"
			/>
			<button
				class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800"
			>
				<span
					class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0"
				>
					Submit
				</span>
			</button>
		</form>
	</div>
</Modal>
