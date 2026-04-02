import express from "express";
import { configDotenv } from "dotenv";
import cors from "cors";

import noteRouter from "./router/noteRouter.js";
import dbConnect from "./database/dbConnect.js";



const app = express();
configDotenv();

app.use(cors({
    origin:["FRONTEND_URI"],
    methods:["POST","GET","DELETE","PUT"],
    credentials:true,
    })
);
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());


app.use("/api/v1/notes", noteRouter);



dbConnect();
export default app;