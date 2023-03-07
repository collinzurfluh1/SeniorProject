import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import db from "./Config/Database.js";
import router from "./Routes/index.js";
import { get_plaster_data } from "./Controllers/Materials.js";
dotenv.config();
const app = express();
 
app.use(cors({ credentials:true, origin:'http://localhost:3000' }));
app.use(cookieParser());
app.use(express.json());
app.use(router);

// testing material data access
get_plaster_data('Sider Pool Plaster - 55 lb');
 
app.listen(4000, ()=> console.log('Server running at port 4000'));