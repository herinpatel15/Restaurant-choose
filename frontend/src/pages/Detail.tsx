import { useParams } from "react-router-dom"


export default function Detail() {

    const id = useParams().id

    return (
        <main>
            <h1>detail {id}</h1>
        </main>
    )
}