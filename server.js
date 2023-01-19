import express from "express";
import dbClient from "./db.js";
const app = express()
import cors from "cors";
import dotenv from "dotenv"
dotenv.config()

import userR from "./Routes/userRoute.js"

import deviceR from "./Routes/deviceRoute.js"

import dataR from "./Routes/herbDataRoute.js"



app.use(cors({
    methods: ["GET,POST,PUT,DELETE"],
}))
app.use(express.json())

app.use(cors())
app.use("/user", userR)
app.use("/device", deviceR)
app.use("/data", dataR)






const PORT = process.env.PORT || 3500;
app.listen(PORT, () => {

    console.log(`${PORT} listening`)
    dbClient.connect(err => {
        if (err) {
            console.log("connection error: ", err)
        } else {
            console.log("db connected")
        }
    })
});
