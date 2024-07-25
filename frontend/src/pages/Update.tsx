import { useParams } from "react-router-dom"

export default function Update() {

    const id = useParams().id

    return (
        <main>
            <h1>Update {id}</h1>
        </main>
    )
}