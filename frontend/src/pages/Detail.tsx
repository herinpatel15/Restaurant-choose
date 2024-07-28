import { useParams } from "react-router-dom"
import {Rating} from "@/components/ui/Rating"
import { useState } from "react"

export default function Detail() {

    const id = useParams().id

    const [rat, setRat] = useState(0)

    return (
        <main className="bg-black h-screen flex flex-col items-center justify-center">
            <Rating value={3} readonly={true} onRatingChange={(value) => setRat(value)} />
            <h1>{rat}</h1>
        </main>
    )
}