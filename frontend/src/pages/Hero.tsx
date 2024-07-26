import { Restaurant } from "@/allTypes";
import { createRestaurant, deleteRestaurant, getAllRestaurants } from "@/apis/allApis";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useRestaurant } from "@/provider/restuarantProvider";
import { DeleteIcon } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Hero() {

    const [name, setName] = useState("")
    const [location, setLocation] = useState("")
    const [price_range, setPrice_range] = useState(0)

    const objData = {
        name,
        location,
        price_range
    }

    const navigate = useNavigate()

    const {restaurants, setRestaurants} = useRestaurant()

    const allDataFetch = useCallback(async () => {
        const fetchdata = await getAllRestaurants()
        setRestaurants(fetchdata.data)
    }, [getAllRestaurants, setRestaurants])

    const handleAdd = useCallback(async () => {
        // console.log("ok");
        const fetchdata = await createRestaurant(objData)
        console.log(fetchdata);
        
        if (fetchdata.status) {
            alert("Restaurant Added Successfully")
            allDataFetch()
        }
    }, [createRestaurant, allDataFetch])

    const handaleDelete = useCallback(async (id: number, resName: string) => {
        console.log(id);
        alert(`Are you sure delete "${resName}"`)
        const fetchdata = await deleteRestaurant(id)
        if (fetchdata.status) {
            allDataFetch()
        }
    }, [deleteRestaurant, allDataFetch])

    // const handaleUpdate = useCallback(async (id: number) => {
    //     console.log(id);
    //     navigate(`/restaurants/${id}/update`)
    // }, [])

    useEffect(() => {
        allDataFetch()
    }, [allDataFetch])

    return (
        <main className="max-h-screen min-h-screen flex items-center justify-center flex-col bg-gray-950 gap-10 p-10">
            <h1 className="text-3xl">Restuarants Finder</h1>
            <div className="flex gap-5">
                <Input placeholder="Name" onChange={e => setName(e.target.value)} />
                <Input placeholder="Location" onChange={e => setLocation(e.target.value)}/>
                <Input type="number" placeholder="Price Range" onChange={e => setPrice_range(parseInt(e.target.value))}/>
                <Button onClick={handleAdd}>Add</Button>
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
                        Array.isArray(restaurants) && restaurants.length > 0 ?
                            restaurants.map((restaurant) => (
                                <TableRow key={restaurant.id}>
                                    <TableCell>{restaurant.name}</TableCell>
                                    <TableCell>{restaurant.location}</TableCell>
                                    <TableCell>
                                        {
                                            "$".repeat(restaurant.price_range)
                                        }
                                    </TableCell>
                                    <TableCell><Button onClick={() => handaleUpdate(restaurant.id)}>Update</Button></TableCell>
                                    <TableCell>
                                        <Button size="icon" onClick={() => handaleDelete(restaurant.id, restaurant.name)}>
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