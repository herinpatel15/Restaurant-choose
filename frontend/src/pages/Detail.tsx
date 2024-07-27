import { useParams } from "react-router-dom"
import {Rating, Star} from "@/components/ui/Rating"

export default function Detail() {

    const id = useParams().id

    return (
        <main className="bg-black h-screen flex flex-col items-center justify-center">
            <Rating className="text-6xl text-blue-600">
                <Star />
                <Star />
                <Star />
                <Star />
                <Star />
            </Rating>
        </main>
    )
}