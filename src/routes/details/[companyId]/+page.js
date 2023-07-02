import { dummyCarsData } from "../../../data/dummyData"
import { get } from 'svelte/store';

export const load = ({ params }) => {
console.log()
    return { params:parseInt(params.companyId)}
}