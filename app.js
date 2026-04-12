import express from "express";
import { configDotenv } from "dotenv";
import cors from "cors";

import noteRouter from "./router/noteRouter.js";
import dbConnect from "./database/dbConnect.js";



const app = express();
configDotenv();

app.use(cors({
    origin:[process.env.FRONTEND_URI],
    methods:["POST","GET","DELETE","PUT"],
    credentials:true

    })
);
app.use(express.urlencoded({extended:true}));
app.use(express.json());



app.use("/api/v1/notes", noteRouter);



dbConnect();
export default app;