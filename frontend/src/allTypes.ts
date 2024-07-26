import { Dispatch, ReactNode, SetStateAction } from "react";

export interface Restaurant {
    id: number,
    name: string,
    location: string,
    price_range: number
}

export interface RestaurantsProviderType {
    children: ReactNode
}

export interface createRestaurantsObjType {
    name: string,
    location: string,
    price_range: number
}

export interface RestaurantsContextType {
    restaurants: Restaurant[] | [];
    setRestaurants: Dispatch<SetStateAction<Restaurant[] | []>>;
}