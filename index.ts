import express from "express";
import {register} from "./src/routes/register";
import {seeds} from "./seed";
import {addNode} from "./src/servers";
import {getRandomSeedServer} from "./src/getRandomSeedServer";
import {registerWithSeedServer} from "./src/registerWithSeedServer";
import {lookup} from "./src/routes/lookup";

const PORT = process.env.PORT ?? 3000;

const app = express()
app.use(express.json())

app.post("/register", register)
app.get("/lookup", lookup)

app.listen(PORT, () => {
    console.log(`Listening on PORT: ${PORT}`)
})

async function initialize() {
    seeds.map(seed => {
        addNode(seed)
    })
    const randomSeedServerUri = getRandomSeedServer();
    await registerWithSeedServer(randomSeedServerUri.uri);
}

setTimeout(() => {
    initialize()
}, 300)
