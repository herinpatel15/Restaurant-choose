import { AddRestaurantDataType } from "@/allTypes";
import axios from "axios";

const base =  axios.create({
    baseURL: "/api/v1/restaurants"
})

export const getRestaurants = async () => {
    try {
        const res = await base.get("/")
        return res.data.data
    } catch(err) {
        console.error(`get restaurant error : ${err}`)
    }
}

export const addRestaurantAPI = async (data: AddRestaurantDataType) => {
    try {
        const res = await base.post("/", data)
        if (res.data.satus === "success") {
            return true
        }
        return false
    } catch(err) {
        console.error(`add restaurant error : ${err}`)
    }
}