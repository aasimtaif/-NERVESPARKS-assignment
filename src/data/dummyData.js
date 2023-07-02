import { writable } from "svelte/store"

export const dummyMobileData = writable(
    [
        { company: "Iphone", model: "13 Pro" },
        { company: "Apple", model: "Iphone 13 Pro" },
        { company: "One plus", model: "10R" },
        { company: "Goole", model: "pixel 7" },
    ]
) 

const dummyCarsData = writable()