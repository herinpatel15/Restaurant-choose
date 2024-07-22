import express, {Express} from "express"
import cors from "cors"

import {config} from "dotenv"
config()

import route  from "./routes/Restaurant.route"

const app: Express = express()
const port = process.env.PORT || 8081


app.use(express.json())
app.use(cors({
    origin: process.env.CLIENT_URL
}))

app.use("/api/v1", route)

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})