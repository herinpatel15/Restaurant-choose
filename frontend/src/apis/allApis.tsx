import { createRestaurantsObjType } from "@/allTypes";
import axios from "axios";

const baseurl = axios.create({
    baseURL: "api/v1/restaurants",
})

export const getAllRestaurants = async () => {
    try {
        const res = await baseurl.get("/")
        return {
            data: res.data.data,
            status: true,
        }
    } catch(err) {
        console.log(err)
        return {
            data: "error",
            status: false
        }
    }
} 

export const createRestaurant = async (data: createRestaurantsObjType) => {
    try {
        // console.log(data);
        
        await baseurl.post("/", data)
        return {
            data: "success",
            status: true
        }
    } catch(err) {
        console.log(err)
        return {
            data: "error",
            status: false
        }
    }
}