// import { RestaurantsContextType } from "@/allTypes";
import { AddRestaurantDataType } from "@/allTypes";
import { addRestaurantAPI, getRestaurants } from "@/apis/RestaurantsFinderAPI";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useRestaurants } from "@/provider/restuarantProvider";
import { DeleteIcon } from "lucide-react";
import { useEffect, useState } from "react";

export default function Hero() {

    const [addRestayrant, setAddRestaurant] = useState({
        name: '',
        location: '',
        price_range: 0,
    })

    const { restuarants, setRestuarants } = useRestaurants()

    const handalAdd = async (data: AddRestaurantDataType) => {
        await addRestaurantAPI(data)

        // const upRest = await getRestaurants()
        // // setRestuarants(upRest)
    }

    useEffect(() => {
        const fetchData = async () => {
            setRestuarants(await getRestaurants())
        }
        fetchData()
    }, [])
    

    return (
        <main className="max-h-screen min-h-screen flex items-center justify-center flex-col bg-gray-950 gap-10 p-10">
            <h1 className="text-3xl">Restuarants Finder</h1>
            <div className="flex gap-5">
                <Input placeholder="Name" onChange={e => setAddRestaurant({...addRestayrant, name: e.target.value})} />
                <Input placeholder="Location" onChange={e => setAddRestaurant({...addRestayrant, location: e.target.value})}/>
                <Input type="number" placeholder="Price Range" onChange={e => setAddRestaurant({...addRestayrant, price_range: parseInt(e.target.value)})}/>
                <Button onClick={() => handalAdd(addRestayrant)}>Add</Button>
            </div>

            <Table>
                <TableCaption>A list of Restuarants.</TableCaption>
                <TableHeader className="bg-blue-200 text-black">
                    <TableRow>
                        <TableHead className="text-xl">Restuarant</TableHead>
                        <TableHead className="text-xl">Location</TableHead>
                        <TableHead className="text-xl">Price Range</TableHead>
                        <TableHead className="text-xl">Edit</TableHead>
                        <TableHead className="text-xl">Delete</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody className="bg-slate-900 text-white">
                    {
                        Array.isArray(restuarants) && restuarants.length > 0 ?
                            restuarants.map((restaurant) => (
                                <TableRow key={restaurant.id}>
                                    <TableCell>{restaurant.name}</TableCell>
                                    <TableCell>{restaurant.location}</TableCell>
                                    <TableCell>
                                        {
                                            "$".repeat(restaurant.price_range)
                                        }
                                    </TableCell>
                                    <TableCell><Button>Update</Button></TableCell>
                                    <TableCell>
                                        <Button size="icon">
                                            <DeleteIcon color="red" className="h-4 w-4" />
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            )) : (
                                <TableRow>
                                    <TableCell colSpan={5}>No restaurants found</TableCell>
                                </TableRow>
                            )
                    }

                </TableBody>
            </Table>

        </main>
    )
}