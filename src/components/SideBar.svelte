<script lang="ts">
	import { dummyCarsData } from '../data/dummyData';
	let showModal = false;
	let filter=""
	const handleOpenCloseModal = () => {
		showModal = !showModal;
		console.log(showModal)
	};
	import SideBarModal from './SideBarModal.svelte';
	console.log($dummyCarsData);
</script>


<div
	class="sidebar fixed top-0 bottom-0 lg:left-0 p-2 w-[250px] overflow-y-auto text-center bg-gray-900"
>
	<div
		class="p-2.5 flex items-center rounded-md px-4 duration-300 cursor-pointer bg-gray-700 text-white"
	>
		<input
			type="text"
			placeholder="Search"
			class="text-[15px] ml-4 w-full bg-transparent focus:outline-none"
			bind:value={filter}
		/>
	</div>

	{#each $dummyCarsData.filter(data => data.company.toLowerCase().includes(filter.toLowerCase())) as data}
		<div
			class="p-2.5  flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white"
		>
			<a href={`/details/${data.id}`}>
				<span class="text-[15px] ml-4 text-gray-200 font-bold">{data.company}</span>
			</a>
		</div>
	{/each}

		<div
			class="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white"
		>
			<button on:click={handleOpenCloseModal} class="text-[15px] ml-4 text-gray-200 font-bold"
				>+ ADD Company</button
			>
		</div>
	<a class="text-white" href="/">Navigate to Page 1 </a>


		<SideBarModal  showModal={showModal}/>

</div>
