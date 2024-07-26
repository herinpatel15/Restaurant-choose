
import { Restaurant, RestaurantsContextType, RestaurantsProviderType } from "@/allTypes";
import { createContext, useContext, useState } from "react";


const RestaurantContext = createContext<RestaurantsContextType | null>(null)

export const  useRestaurant = () => {
    const context = useContext(RestaurantContext)
    if (!context) throw new Error("useRestaurant must be used within a RestaurantProvider")
    return context
}

export const RestaurantProvider = ({children}: RestaurantsProviderType) => {
    const [restaurants, setRestaurants] = useState<Restaurant[]>([])

    return (
        <RestaurantContext.Provider value={{restaurants, setRestaurants}}>
            {children}
        </RestaurantContext.Provider>
    )
}