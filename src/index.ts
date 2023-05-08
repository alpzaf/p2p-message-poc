import express from "express";
import {getRandomSeedServer} from "./getRandomSeedServer";

const PORT = process.env.PORT ?? 3000;

const app = express()
app.use(express.json())

app.listen(PORT, () => {
    console.log(`Listening on PORT: ${PORT}`)
})

const initialize = async () => {
    const randomSeedServer = getRandomSeedServer()
    console.log(randomSeedServer)
}

initialize()
