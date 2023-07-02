<script>
	import { dummyCarsData } from '../data/dummyData';
	console.log($dummyCarsData);
</script>

{#each $dummyCarsData as data}
	<div>
		<a href={`/details/${data.id}`}>
			<p>{data.company}</p>
		</a>
	</div>
{/each}
