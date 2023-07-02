<script>
export let data
console.log(data.companyDetails.models)
</script>

{#each data.companyDetails.models as model}
<p>{model}</p>
{/each}
