import { writable } from "svelte/store"

export const dummyMobileData = writable(
    [
        { company: "Iphone", model: "13 Pro" },
        { company: "Apple", model: "Iphone 13 Pro" },
        { company: "One plus", model: "10R" },
        { company: "Goole", model: "pixel 7" },
    ]
)

export const dummyCarsData = writable([
    { id: 1, company: "volkswagen", models: ["Polo GT", "Tiguan"] },
    { id: 2, company: "BMW", models: ["M2", "X3",] },
])