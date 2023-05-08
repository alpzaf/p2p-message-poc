import express from "express";
import {register} from "./src/routes/register";

const PORT = process.env.PORT ?? 3000;

const app = express()
app.use(express.json())

app.post("/register", register)

app.listen(PORT, () => {
    console.log(`Listening on PORT: ${PORT}`)
})
