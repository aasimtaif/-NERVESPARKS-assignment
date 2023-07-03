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

<div class="container mx-auto">
	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
		{#each $dummyMobileData as mobile}
			<div
				class="flex mt-10 m-auto w-auto max-md:w-48 lg:w-48 justify-center text-base border-2 border-gray-300 rounded-xl p-6 bg-gray-100 font-medium text-gray-500"
			>
				<span class="font-bold text-black mr-1">{mobile.company}</span>{mobile.model}
			</div>
		{/each}
	</div>
</div>

<div class="relative h-32 w-32 ...">
	<div class="absolute bottom-0 right-0 h-16 w-16 ...">
		<button
		on:click={() => {
			handleShowHide();
		}}
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


	<Page2Form  isShow={isShow}/>

