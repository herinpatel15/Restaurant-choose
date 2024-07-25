import { Restaurant, RestaurantsContextProviderProps, RestaurantsContextType } from "@/allTypes";
import { createContext, useContext, useState } from "react";

const RestuarantsContext = createContext<RestaurantsContextType | null>(null)

export const useRestaurants = () => {
    const context = useContext(RestuarantsContext);
    if (context === null) {
        throw new Error("useRestaurants must be used within a RestaurantsContextProvider");
    }
    return context;
};

export const RestuarantsContextProvider = ({ children }: RestaurantsContextProviderProps) => {
    const [restuarants, setRestuarants] = useState<Restaurant[] | []>([])

    return (
        <RestuarantsContext.Provider value={{ restuarants, setRestuarants }}>
            {children}
        </RestuarantsContext.Provider>
    )
}