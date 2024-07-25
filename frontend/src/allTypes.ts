import { Dispatch, ReactNode, SetStateAction } from "react";

export interface Restaurant {
    id: number,
    name: string,
    location: string,
    price_range: number
}

export interface RestaurantsContextType {
    restuarants: Restaurant[] | [];
    setRestuarants: Dispatch<SetStateAction<Restaurant[] | []>> 
}

export interface RestaurantsContextProviderProps {
    children: ReactNode
}

export interface AddRestaurantDataType {
    name: string,
    location: string,
    price_range: number
}