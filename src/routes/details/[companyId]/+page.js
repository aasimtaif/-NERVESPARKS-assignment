import { dummyCarsData } from "../../../data/dummyData"
import { get } from 'svelte/store';

export const load = ({ params }) => {
    console.log(get(dummyCarsData))
    const data = get(dummyCarsData).filter(company => company.id == parseInt(params.companyId))
    return { companyDetails:data[0] }
}