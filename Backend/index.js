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
// setTimeout(async function() {
//     console.log('############################################################');
//     // console.log(await getAllConcretePrices(10, 20, 6, 'Gunite'));
//     var all_options = await getAllConcretePrices(10, 20, 6, 'Gunite');
//     console.log(all_options);
//     console.log('############################################################');
// }, 5000);

// PIPING TESTS
// import { get_piping } from "./Controllers/Materials.js";
// console.log('############');
// console.log(await get_piping('Rigid PVC'));
// console.log('############');

// import {calculatePipesCost, getAllPipesPrices} from "./Middleware/MaterialCalculations.js";
// console.log('############################################################');
// console.log(await calculatePipesCost(6, 20, 10, 'Rigid PVC'));
// console.log('############################################################');

// setTimeout(async function() {
//     console.log('############################################################');
//     // console.log(await getAllConcretePrices(10, 20, 6, 'Gunite'));
//     var all_options = await getAllPipesPrices(6, 20, 10);
//     console.log(all_options);
//     console.log('############################################################');
// }, 5000);

// console.log('############################################################');
// console.log(await getAllConcretePrices(10, 20, 6, 'Gunite'));
// console.log('############################################################');

// Chlorine
import {calculateChlorinePrice, getAllChlorinePrices, calculateCyanuricAcidPrice, getAllCyanuricAcidPrices, calculateShockPrice, getAllShockPrices} from "./Middleware/MaterialCalculations.js";
// console.log('############################################################');
// console.log(await calculateChlorinePrice(20, 10, 6, 'Gunnite', 'In The Swim Chlorine Tablets'));
// console.log('############################################################');

// setTimeout(async function() {
//     console.log('############################################################');
//     // console.log(await getAllConcretePrices(10, 20, 6, 'Gunite'));
//     var all_options = await getAllCyanuricAcidPrices(20, 10, 6, 'Gunnite');
//     console.log(all_options);
//     console.log('############################################################');
// }, 5000);

// console.log('############################################################');
// console.log(await getAllChlorinePrices(20, 10, 6, 'Gunnite', 'Pool Mate Stabilizer and Conditioner'));
// console.log('############################################################');

// setTimeout(async function() {
//     console.log('############################################################');
//     // console.log(await getAllConcretePrices(10, 20, 6, 'Gunite'));
//     var all_options = await getAllCyanuricAcidPrices(20, 10, 6, 'Gunnite');
//     console.log(all_options);
//     console.log('############################################################');
// }, 5000);

// console.log('############################################################');
// console.log(await calculateShockPrice(20, 10, 6, 'Gunnite', 'In The Swim Super Pool Shock'));
// console.log('############################################################');

// setTimeout(async function() {
//     console.log('############################################################');
//     // console.log(await getAllConcretePrices(10, 20, 6, 'Gunite'));
//     var all_options = await getAllShockPrices(20, 10, 6, 'Gunnite');
//     console.log(all_options);
//     console.log('############################################################');
// }, 5000);

// Water test
import { calculateWaterPrice } from "./Middleware/MaterialCalculations.js";
// console.log('############################################################');
// console.log(await calculateWaterPrice(20, 10, 6, 'Gunnite'));
// console.log('############################################################');

// Covers
import { calculatePoolWinterCoverPrice, getAllWinterCoverPrices, calculatePoolSolarCoverPrice, getAllSolarCoverPrices } from "./Middleware/MaterialCalculations.js";
// console.log('############################################################');
// console.log(await calculatePoolWinterCoverPrice(20, 10, 'Vevor Winter Cover'));
// console.log('############################################################');

// setTimeout(async function() {
//     console.log('############################################################');
//     // console.log(await getAllConcretePrices(10, 20, 6, 'Gunite'));
//     var all_options = await getAllWinterCoverPrices(20, 10);
//     console.log(all_options);
//     console.log('############################################################');
// }, 5000);

// console.log('############################################################');
// console.log(await calculatePoolSolarCoverPrice(20, 10, 'Sun2Solar Blue'));
// console.log('############################################################');

// setTimeout(async function() {
//     console.log('############################################################');
//     // console.log(await getAllConcretePrices(10, 20, 6, 'Gunite'));
//     var all_options = await getAllSolarCoverPrices(20, 10);
//     console.log(all_options);
//     console.log('############################################################');
// }, 5000);

//Plaster
import { calculatePlasterCost, getAllPlasterPrices } from "./Middleware/MaterialCalculations.js";
// console.log('############################################################');
// console.log(await calculatePlasterCost(20, 10, 6, 'Gunnite', 'Sider Pool Plaster - 55 lb'));
// console.log('############################################################');

setTimeout(async function() {
    console.log('############################################################');
    // console.log(await getAllConcretePrices(10, 20, 6, 'Gunite'));
    var all_options = await getAllPlasterPrices(20, 10, 6, 'Gunnite');
    console.log(all_options);
    console.log('############################################################');
}, 5000);

app.listen(4000, ()=> console.log('Server running at port 4000'));