import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import db from "./Config/Database.js";
import router from "./Routes/index.js";
import { get_plaster_data, get_cement_data } from "./Controllers/Materials.js";
// const { get_plaster_data } = require('/Controllers/Materials.js');
// const { get_plaster_data } = require("./Controllers/Materials.js");

// test for concrete
import { calcualteConcreteCost, getAllConcretePrices } from "./Middleware/MaterialCalculations.js";


dotenv.config();
const app = express();
 
app.use(cors({ credentials:true, origin:'http://localhost:3000' }));
app.use(cookieParser());
app.use(express.json());
app.use(router);

// testing material data access
// console.log('############');
// console.log(await get_plaster_data('Sider Pool Plaster - 55 lb'));
// console.log('############');

// console.log('############');
// console.log(await get_cement_data('Quikrete 50 lb. Fast-Setting Mix'));
// console.log('############');

//TESTING CONCRETE COST FUNCTION
// console.log('############################################################');
// console.log(await calcualteConcreteCost(10, 20, 6, 'Gunite', 'Quikrete 50 lb. Fast-Setting Mix'));
// console.log('############################################################');

// TESTING CONCRETE COST FUNCTION
setTimeout(async function() {
    console.log('############################################################');
    console.log(await getAllConcretePrices(10, 20, 6, 'Gunite'));
    console.log('############################################################');
}, 5000);

// console.log('############################################################');
// console.log(await getAllConcretePrices(10, 20, 6, 'Gunite'));
// console.log('############################################################');

app.listen(4000, ()=> console.log('Server running at port 4000'));