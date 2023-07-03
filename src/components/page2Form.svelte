<script>
	import { dummyMobileData } from '../data/dummyData';
	let input = { company: '', model: '' };
	const handleSubmit = () => {
		console.log(input, $dummyMobileData);
        dummyMobileData.update(currentData => [...currentData,input] );
	};
	console.log(input)
</script>

<form on:submit|preventDefault={handleSubmit}>
	<input bind:value={input.company} placeholder="Company name" />
	<input bind:value={input.model} placeholder="Model" />
	<button type="submit">submit</button>
</form>
