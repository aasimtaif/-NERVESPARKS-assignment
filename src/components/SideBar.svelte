<script>
	import { dummyCarsData } from '../data/dummyData';
</script>

{#each $dummyCarsData as data }
<div>
    <p>{data.company}</p>
</div>
{/each}