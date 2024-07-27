import { editRestaurant, getOneRestaurant } from "@/apis/allApis"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { FormEvent, useCallback, useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"                                                                             

export default function Update() {

    const id = useParams().id

    const navigate = useNavigate()

    const [upName, setUpName] = useState("")
    const [upLocation, setUpLocation] = useState("")
    const [upPriceRange, setUpPriceRange] = useState("")

    
    const handaleDataGet = useCallback(async () => {
        console.log("ok");
        
        if (!id) return
        const res = await getOneRestaurant(id)
        console.log(res.data[0]);
        
        setUpName(res.data[0].name)
        setUpLocation(res.data[0].location)
        setUpPriceRange(res.data[0].price_range)
    }, [setUpName, setUpLocation, setUpPriceRange, getOneRestaurant, id])

    const handaleUpdate = useCallback(async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        // const priceRange = parseInt(upPriceRange)
        console.log("pk");
        

        // setData({
        //     name: upName,
        //     location: upLocation,
        //     price_range: priceRange
        // })

        console.log(upName, upLocation, upPriceRange);
        
        const dataobj = {
            name: upName,
            location: upLocation,
            price_range: parseInt(upPriceRange)
        }

        console.log(dataobj);

        if (!id) return
        const res = await editRestaurant(id, dataobj)
        if (res.status) {
            navigate("/")
        }
    }, [editRestaurant, navigate, upName, upLocation, upPriceRange])

    useEffect(() => {
        handaleDataGet()
    }, [handaleDataGet])

    return (
        <main className="h-screen bg-black flex items-center justify-center">
            <form onSubmit={(e) => handaleUpdate(e)} className="flex items-center justify-center flex-col gap-5">
                <div className="flex flex-col gap-1">
                    <label htmlFor="name">Name</label> 
                    <Input value={upName} id="name" name="name" placeholder="Name" onChange={e => {setUpName(e.target.value)}} />
                </div>
                {/* ; setData({...data, name: e.target.value}) */}
                <div className="flex flex-col gap-1">
                    <label htmlFor="location">Location</label>
                    <Input value={upLocation} id="location" name="location" placeholder="Location" onChange={e => {setUpLocation(e.target.value)}} />
                </div>
                <div className="flex flex-col gap-1">
                    <label htmlFor="priceRange">Price Range</label>
                    <Input type="number" value={upPriceRange} id="priceRange" name="priceRange" placeholder="Price Range" onChange={e => {setUpPriceRange(e.target.value)}} />
                </div>
                <Button className="m-4" type="submit">Update</Button>
            </form>
        </main>
    )
}