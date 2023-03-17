import express from "express";
import { getUsers, Register, Login, Logout, UpdateUsername, UpdateEmail } from "../Controllers/Users.js";
import { getPools, savePools } from "../Controllers/Pools.js";
import "../Controllers/Materials.js";
import { verifyToken } from "../Middleware/VerifyToken.js";
import { refreshToken } from "../Controllers/RefreshToken.js";

import { getAllSkimmerPrices, getAllDrainPrices, calculateWaterPrice, calculateShockPrice, getAllChlorinePrices, getAllCyanuricAcidPrices, getAllShockPrices, getAllPipesPrices, getAllWinterCoverPrices, getAllSolarCoverPrices, getAllConcretePrices, getAllPlasterPrices, getAllPoolLinerPrices, getAllSteelWallingPrices, calculateRebar, calculatePoolPumpPrice, calculatePoolFilterPrice, getFiberglassShellDetails, getSkimmerPrice, getDrainPrice } from "../Middleware/MaterialCalculations.js"; 

const router = express.Router();
 
router.get('/users', verifyToken, getUsers);
router.post('/users', Register);
router.post('/updateUsername', UpdateUsername);
router.post('/updateEmail', UpdateEmail);
router.post('/login', Login);
router.get('/token', refreshToken);
router.delete('/logout', Logout);

router.get('/getPools', getPools);
router.post('/savePools', savePools);

router.get('/getAllChlorine', async (req, res) => {
    const { length, width, depth, deepDepth, floorType } = req.query;
    const results = await getAllChlorinePrices(length, width, depth, deepDepth, floorType);
    res.json(results);
});

router.get('/calculateChlorinePrice', async (req, res) => {
    const { length, width, depth, deepDepth, floorType, product_name } = req.query;
    const results = await calculateChlorinePrice(length, width, depth, deepDepth, floorType, product_name);
    res.json(results);
});

router.get('/calculateCyanuricAcidPrice', async (req, res) => {
    const { length, width, depth, deepDepth, floorType, product_name } = req.query;
    const results = await calculateCyanuricAcidPrice(length, width, depth, deepDepth, floorType, product_name);
    res.json(results);
});

router.get('/getAllCyanuricAcidPrices', async (req, res) => {
    const { length, width, depth, deepDepth, floorType } = req.query;
    const results = await getAllCyanuricAcidPrices(length, width, depth, deepDepth, floorType);
    res.json(results);
});

router.get('/calculateShockPrice', async (req, res) => {
    const { length, width, depth, deepDepth, floorType, product_name } = req.query;
    const results = await calculateShockPrice(length, width, depth, deepDepth, floorType, product_name);
    res.json(results);
});

router.get('/getAllShockPrices', async (req, res) => {
    const { length, width, depth, deepDepth, floorType } = req.query;
    const results = await getAllShockPrices(length, width, depth, deepDepth, floorType);
    res.json(results);
});

router.get('/calculatePipesCost', async (req, res) => {
    const { deepDepth, length, width, pipe_type } = req.query;
    const results = await calculatePipesCost(deepDepth, length, width, pipe_type );
    res.json(results);
});

router.get('/getAllPipesPrices', async (req, res) => {

    const { deepDepth, length, width } = req.query;
    const results = await getAllPipesPrices(deepDepth, length, width );
    res.json(results);
});

router.get('/calculateConcreteCost', async (req, res) => {
    const { length, width, depth, deepDepth, floorType, basinType, product_name } = req.query;
    const results = await calculateConcreteCost(length, width, depth, deepDepth, floorType, basinType, product_name );
    res.json(results);
});

router.get('/getAllConcretePrices', async (req, res) => {
    
    const { length, width, depth, deepDepth, floorType, basinType } = req.query;
    const results = await getAllConcretePrices(length, width, depth, deepDepth, floorType, basinType);
    res.json(results);
});

router.get('/calculateWaterPrice', async (req, res) => {
    const { length, width, depth_shallow, depth_deep, basin_type } = req.query;
    const results = await calculateWaterPrice( length, width, depth_shallow, depth_deep, basin_type);
    res.json(results);
});

router.get('/calcuateSteelWallingPrice', async (req, res) => {
    const { length, width, product_name } = req.query;
    const results = await calcuateSteelWallingPrice(length, width, product_name );
    res.json(results);
});

router.get('/getAllSteelWallingPrices', async (req, res) => {
    const { length, width } = req.query;
    const results = await getAllSteelWallingPrices(length, width );
    res.json(results);
});

router.get('/calcualtePoolLinerPrice', async (req, res) => {
    const { length, width, depth, deepDepth, floorType, product_name } = req.query;
    const results = await calcualtePoolLinerPrice(length, width, depth, deepDepth, floorType, product_name );
    res.json(results);
});

router.get('/getAllPoolLinerPrices', async (req, res) => {
    const { length, width, depth, deepDepth, floorType } = req.query;
    const results = await getAllPoolLinerPrices(length, width, depth, deepDepth, floorType );
    res.json(results);
});

router.get('/calculatePoolWinterCoverPrice', async (req, res) => {
    const { length, width, product_name } = req.query;
    const results = await calculatePoolWinterCoverPrice(length, width, product_name );
    res.json(results);
});

router.get('/getAllWinterCoverPrices', async (req, res) => {
    const { length, width } = req.query;
    const results = await getAllWinterCoverPrices(length, width);
    res.json(results);
});

router.get('/calculatePoolSolarCoverPrice', async (req, res) => {
    const { length, width, product_name } = req.query;
    const results = await calculatePoolSolarCoverPrice(length, width, product_name );
    res.json(results);
});

router.get('/getAllSolarCoverPrices', async (req, res) => {
    const { length, width } = req.query;
    const results = await getAllSolarCoverPrices(length, width );
    res.json(results);
});

router.get('/calculatePlasterCost', async (req, res) => {
    const { length, width, depth, deepDepth, floorType, product_name} = req.query;
    const results = await calculatePlaster(length, width, depth, deepDepth, floorType, product_name );
    res.json(results);
});
 
router.get('/getAllPlasterPrices', async (req, res) => {
    const { length, width, depth, deepDepth, floorType} = req.query;
    const results = await getAllPlasterPrices(length, width, depth, deepDepth, floorType);
    res.json(results);
});
 
router.get('/calculateRebar', async (req, res) => {
    const { length, width, depth } = req.query;
    const results = await calculateRebar(length, width, depth);
    res.json(results);
});

router.get('/calculatePoolPumpPrice', async (req, res) => {
    const { length, width, depth, deepDepth, floorType } = req.query;
    const results = await calculatePoolPumpPrice(length, width, depth, deepDepth, floorType);
    res.json(results);
});

router.get('/calculatePoolFilterPrice', async (req, res) => {
    const { length, width, depth, deepDepth, floorType } = req.query;
    const results = await calculatePoolFilterPrice(length, width, depth, deepDepth, floorType);
    res.json(results);
});

router.get('/getFiberglassShellDetails', async (req, res) => {
    const { name } = req.query;
    const results = await getFiberglassShellDetails(name);
    res.json(results);
});

router.get('/getFiberglassShellDetails', async (req, res) => {
    const { name } = req.query;
    const results = await getFiberglassShellDetails(name);
    res.json(results);
});

router.get('/getSkimmerPrice', async (req, res) => {
    const { name } = req.query;
    const results = await getSkimmerPrice(name);
    res.json(results);
});

router.get('/getDrainPrice', async (req, res) => {
    const { name } = req.query;
    const results = await getDrainPrice(name);
    res.json(results);
});

router.get('/getSkmmerPrices', async (req, res) => {
    const { } = req.query;
    const results = await getDrainPrice();
    res.json(results);
});

router.get('/getAllDrainPrices', async (req, res) => {
    const { } = req.query;
    const results = await getDrainPrice();
    res.json(results);
});
export default router;