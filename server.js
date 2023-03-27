import express from "express";
import config from "./config.json" assert { type: "json" };
import { router } from "./routes/routes.js";
import mongoose from "mongoose";


const app = express();
const port = config.port;
const url = config.url;


app.use(express.json());
app.use("", router);


const start = async function () {
    try {
        await mongoose.connect(url);
        app.listen(port);
    } catch (e) {
        console.log(e);
    }
};

start().then(() => console.log(`Server is running on ${port}`));