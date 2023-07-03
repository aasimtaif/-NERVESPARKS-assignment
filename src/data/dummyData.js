import { writable } from "svelte/store"

export const dummyMobileData = writable(
    [
        { company: "Apple", model: "13 Pro" },
        { company: "One plus", model: "10R" },
        { company: "Google", model: "pixel 7" },
    ]
)

export const dummyCarsData = writable([
    { id: 1, company: "volkswagen", models: ["Polo GT", "Tiguan"] },
    { id: 2, company: "BMW", models: ["M2", "X3",] },
])