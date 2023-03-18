import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import db from "./Config/Database.js";
import router from "./Routes/index.js";

// test for concrete
import { calculatePrice, getPump, getFilter, calculatePoolPumpPrice, calculatePoolFilterPrice, getDrainPrice, getSkimmerPrice, getAllSkimmerPrices, calculatePoolLinerArea, calculateCyanuricAcidPounds, calculateChlorineTablets, calculateShockLbs, calculatePipesAmount, calculateRebar, calculatePlaster, calculatePoolSurfaceArea, calculateConcretePounds, calculateConcreteCost, getAllConcretePrices, calculateGallons, calculatePoolVolume, calculateWaterPrice } from "./Middleware/MaterialCalculations.js";


import { get_plaster_data, get_cement_data, get_winter_covers, get_solar_covers, get_chlorine, get_cyanuric_acid, get_shock, get_piping, get_liner, get_steel_walling, get_fiberglass_shell } from "./Controllers/Materials.js";


dotenv.config();
const app = express();
 
app.use(cors({ credentials:true, origin:'http://localhost:3000' }));
app.use(cookieParser());
app.use(express.json());
app.use(router);

// console.log('############');
// console.log(await get_plaster_data('Sider Pool Plaster - 55 lb'));
// console.log('############');

// console.log('############');
// console.log(await get_cement_data());
// console.log('############');

// TESTING CONCRETE COST FUNCTION
// console.log('############################################################');
// console.log(await calculateConcreteCost(10, 20, 6, 6, 'Flatbed', 'Gunite', 'Quikrete 50 lb. Fast-Setting Mix'));
// console.log('############################################################');

// TESTING CONCRETE COST FUNCTION
// setTimeout(async function() {
//     console.log('############################################################');
//     console.log(await getAllConcretePrices(10, 20, 6, 'Gunite'));
//     var all_options = await getAllConcretePrices(10, 20, 6, 'Gunite');
//     console.log(all_options);
//     console.log('############################################################');
// }, 5000);

// PIPING TESTS
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
// import {calculateChlorinePrice, getAllChlorinePrices, calculateCyanuricAcidPrice, getAllCyanuricAcidPrices, calculateShockPrice, getAllShockPrices} from "./Middleware/MaterialCalculations.js";
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
// import { calculateWaterPrice } from "./Middleware/MaterialCalculations.js";
// console.log('############################################################');
// console.log(await calculateWaterPrice(40, 10, 10, 20, 'Vinyl'));
// console.log('############################################################');

// Covers
// import { calculatePoolWinterCoverPrice, getAllWinterCoverPrices, calculatePoolSolarCoverPrice, getAllSolarCoverPrices } from "./Middleware/MaterialCalculations.js";
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
// import { calculatePlasterCost, getAllPlasterPrices } from "./Middleware/MaterialCalculations.js";
// console.log('############################################################');
// console.log(await calculatePlasterCost(20, 10, 6, 'Gunnite', 'Sider Pool Plaster - 55 lb'));
// console.log('############################################################');

// setTimeout(async function() {
//     console.log('############################################################');
//     // console.log(await getAllConcretePrices(10, 20, 6, 'Gunite'));
//     var all_options = await getAllPlasterPrices(20, 10, 6, 'Gunnite');
//     console.log(all_options);
//     console.log('############################################################');
// }, 5000);

//liner data access
// console.log('############');
// console.log(await get_liner());
// console.log('############');

// Liner
// import { calculatePoolLinerPrice, getAllPoolLinerPrices } from "./Middleware/MaterialCalculations.js";
// console.log('############################################################');
// console.log(await calculatePoolLinerPrice(20, 10, 6, 'Gunnite', '20 x 40 Rectangle Inground Swimming Pool Liners - Samara Coast'));
// console.log('############################################################');

// setTimeout(async function() {
//     console.log('############################################################');
//     // console.log(await getAllConcretePrices(10, 20, 6, 'Gunite'));
//     var all_options = await getAllPoolLinerPrices(20, 10, 6, 'Gunnite');
//     console.log(all_options);
//     console.log('############################################################');
// }, 5000);

//steel walling db access
// console.log('############');
// console.log(await get_steel_walling());
// console.log('############');

//Steel Walling
// import { calculateSteelWallingPrice, getAllSteelWallingPrices } from "./Middleware/MaterialCalculations.js";
// console.log('############################################################');
// console.log(await calculateSteelWallingPrice(20, 10, 'Pool Warehouse walling'));
// console.log('############################################################');

// setTimeout(async function() {
//     console.log('############################################################');
//     // console.log(await getAllConcretePrices(10, 20, 6, 'Gunite'));
//     var all_options = await getAllSteelWallingPrices(20, 10, 6, 'Gunnite');
//     console.log(all_options);
//     console.log('############################################################');
// }, 5000);

// Fiberglass Shells
// console.log('############');
// console.log(await get_fiberglass_shell('Lazy L Fiberglass'));
// console.log('############');

import { calculatePoolFiberglassShellPrice, getAllFiberglassShellPrices } from "./Middleware/MaterialCalculations.js";

// console.log('############');
// console.log(await calculatePoolFiberglassShellPrice('Lazy L Fiberglass'));
// console.log('############');

// console.log('############');
// console.log(await getAllFiberglassShellPrices());
// console.log('############');

/*
Collyn Backend Test Functions
console.log('############');
console.log(await calculatePoolVolume(40, 20, 4, 10, "Flatbed"));
console.log(await calculatePoolVolume(40, 20, 4, 10, "Slant"));

console.log(await calculatePoolVolume(40, 20, 4, 10, "Diver"));

console.log('############');
console.log('############');
console.log(await calculatePoolSurfaceArea(40, 20, 4, 10, "Flatbed"));
console.log(await calculatePoolSurfaceArea(40, 20, 4, 10, "Slant"));

console.log(await calculatePoolSurfaceArea(40, 20, 4, 10, "Diver"));

console.log('############');


console.log('############');
console.log(await calculateChlorineTablets(40, 20, 4, 10, "Flatbed"));
console.log(await calculateChlorineTablets(40, 20, 4, 10, "Slant"));

console.log(await calculateChlorineTablets(40, 20, 4, 10, "Diver"));

console.log('############');
console.log('############');
console.log(await calculateCyanuricAcidPounds(40, 20, 4, 10, "Flatbed"));
console.log(await calculateCyanuricAcidPounds(40, 20, 4, 10, "Slant"));

console.log(await calculateCyanuricAcidPounds(40, 20, 4, 10, "Diver"));

console.log('############');
console.log('############');
console.log(await calculateGallons(40, 20, 4, 10, "Flatbed"));
console.log(await calculateGallons(40, 20, 4, 10, "Slant"));

console.log(await calculateGallons(40, 20, 4, 10, "Diver"));

console.log('############');


console.log('############');
console.log(await calculatePoolVolume(40, 20, 4, 10, "Flatbed"));
console.log(await calculatePoolVolume(40, 20, 4, 10, "Slant"));

console.log(await calculatePoolVolume(40, 20, 4, 10, "Diver"));

console.log('############');
console.log('############');
console.log(await calculatePoolLinerArea(40, 20, 4, 10, "Flatbed"));
console.log(await calculatePoolLinerArea(40, 20, 4, 10, "Slant"));

console.log(await calculatePoolLinerArea(40, 20, 4, 10, "Diver"));

console.log('############');

console.log('############');

console.log(await calculateRebar(40, 20, 10));
*/
// console.log('############');
// console.log('############');
// console.log(await calculatePlaster(40, 20, 4, 10, "Flatbed"));
// console.log('############');

// console.log('############');
// console.log(getAllSkimmerPrices());
// console.log('############');


// console.log('############');
// console.log(getSkimmerPrice("Hayward SP1091LX Dyna-Skim Above-Ground Pool Skimmer"));
// console.log('############');

// console.log('############');
// console.log(getDrainPrice("Tongoss 8 Bottom Pool Drain Cover"));
// console.log('############');

// console.log('############');
// console.log(await calculatePoolPumpPrice(40, 20, 4, 10, "Flatbed"));
// console.log(await calculatePoolPumpPrice(40, 10, 4, 10, "Slant"));
// console.log(await calculatePoolPumpPrice(35, 20, 4, 10, "Diver"));
// console.log('############');

// console.log("############");
// console.log(await getFilter("425 sq. ft. SwimClear Cartridge Filter"))
// console.log("############");

// console.log('############');
// console.log(await calculatePoolFilterPrice(40, 20, 4, 10, "Flatbed"));
// console.log(await calculatePoolFilterPrice(40, 10, 4, 10, "Slant"));
// console.log(await calculatePoolFilterPrice(35, 20, 4, 10, "Diver"));
// console.log('############');

// console.log("############");
// console.log(await getPump("Energy Efficient Variable Dual Speed Swimming Pool Pump Strainer"))
// console.log(await getPump("PowerFlo LX 115-Volt 1½ in. Plumbing"))
// console.log(await getPump("Self-Priming Dual Speed In-Ground Pool Pump 2 in"))
// console.log("############");

////////////////////////// TESTING MASTER CALCULATION FUNCTIONS //////////////////////////
import { calculateVinyl, calculateGunite, calculateFiberglass } from "./Middleware/MaterialCalculations.js";

// console.log("#######################################");
// console.log("############### Gunnite ###############");
// console.log("#######################################");
//     // name: pool['name'],
//     // material: pool['material'],
//     // materialBrand: (pool['material'] == 'Fiber Glass') ? "Not Applicable" : pool['materialData']['materialBrand'],
//     // width: (pool['material'] == 'Fiber Glass') ? 'Not Applicable' : pool['materialData']['width'],
//     // length:  (pool['material'] == 'Fiber Glass') ? 'Not Applicable' : pool['materialData']['length'],
//     // depth:  (pool['material'] != 'Gunnite') ? 'Not Applicable' : pool['materialData']['depth'],
//     // shallowDepth: (pool['material'] == 'Vinyl') ? pool['materialData']['shallowDepth'] : "Not Applicable",
//     // deepDepth: (pool['material'] == 'Vinyl') ? pool['materialData']['deepDepth'] : "Not Applicable",
//     // slant: (pool['material'] == 'Vinyl') ? pool['materialData']['slant'] : "Not Applicable",
//     // shell: (pool['material'] == 'Fiber Glass') ? pool['materialData']['shell'] : "Not Applicable",
//     // chlorine: pool['chemicals']['chlorine'],
//     // cyaneuricAcid: pool['chemicals']['cyaneuricAcid'],
//     // shock: pool['chemicals']['shock']
// var gunnitePoolMaterialsJson = {'length': 20,
//                                 'width': 10,
//                                 'depth': 6,
//                                 'deepDepth': 6,
//                                 'basinType': 'Gunite',
//                                 'floorType': 'Flatbed',
//                                 'concrete': 'Quikrete 50 lb. Fast-Setting Mix',
//                                 'plaster': 'Sider Pool Plaster - 55 lb',
//                                 'pipes': 'Rigid PVC',
//                                 'solarCover': 'Blue Wave',
//                                 'winterCover': 'Vevor Winter Cover',
//                                 'skimmer': 'Hayward SP1091WM Dyna-Skim Above-Ground Pool Skimmer',
//                                 'drain': 'Polaris 5820 Main Drain Cover',
//                                 'filter': '36 sq. ft. ProGrid D.E. Filter',
//                                 'chlorine': 'RAYYAKICG 3 in tablets',
//                                 'cyanuric_acid': 'Leisure Pool Chlorine Stabilizer',
//                                 'shock': 'Leslie\'s Power Powder'
//                             }
// console.log(await calculateGunite(gunnitePoolMaterialsJson))
// console.log("#######################################");
// console.log("############### Gunnite ###############");
// console.log("#######################################");


// console.log("#####################################");
// console.log("############### VINYL ###############");
// console.log("#####################################");

// var vinylPoolMaterialsJson = {'length': 20,
//                                 'width': 10,
//                                 'depth': 6,
//                                 'deepDepth': 6,
//                                 'basinType': 'Vinyl',
//                                 'floorType': 'Flatbed',
//                                 'concrete': 'Quikrete 50 lb. Fast-Setting Mix',
//                                 'steelWall': 'Pool Warehouse walling',
//                                 'liner': '18 x 36 Rectangle Inground Swimming Pool Liners - Cambridge Aquarius',
//                                 'pipes': 'Rigid PVC',
//                                 'solarCover': 'Blue Wave',
//                                 'winterCover': 'Vevor Winter Cover',
//                                 'skimmer': 'Hayward SP1091WM Dyna-Skim Above-Ground Pool Skimmer',
//                                 'drain': 'Polaris 5820 Main Drain Cover',
//                                 'filter': '36 sq. ft. ProGrid D.E. Filter',
//                                 'chlorine': 'RAYYAKICG 3 in tablets',
//                                 'cyanuric_acid': 'Leisure Pool Chlorine Stabilizer',
//                                 'shock': 'Leslie\'s Power Powder'
//                             };
// console.log(await calculateVinyl(vinylPoolMaterialsJson));

// console.log("#####################################");
// console.log("############### VINYL ###############");
// console.log("#####################################");

console.log("##########################################");
console.log("############### FIBERGLASS ###############");
console.log("##########################################");

var fiberglassPoolMaterialsJson = {'length': 30,
                                'width': 14,
                                'depth': 3.5,
                                'deepDepth': 6,
                                'basinType': 'Vinyl',
                                'floorType': 'Slant',
                                'concrete': 'Quikrete 50 lb. Fast-Setting Mix',
                                'fiberglass': 'Lazy L Fiberglass',
                                'pipes': 'Rigid PVC',
                                'solarCover': 'Blue Wave',
                                'winterCover': 'Vevor Winter Cover',
                                'skimmer': 'Hayward SP1091WM Dyna-Skim Above-Ground Pool Skimmer',
                                'drain': 'Polaris 5820 Main Drain Cover',
                                'filter': '36 sq. ft. ProGrid D.E. Filter',
                                'chlorine': 'RAYYAKICG 3 in tablets',
                                'cyanuric_acid': 'Leisure Pool Chlorine Stabilizer',
                                'shock': 'Leslie\'s Power Powder'
                            };
console.log(await calculateFiberglass(fiberglassPoolMaterialsJson));

console.log("##########################################");
console.log("############### FIBERGLASS ###############");
console.log("##########################################");




app.listen(4000, ()=> console.log('Server running at port 4000'));