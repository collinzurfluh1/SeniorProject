import express from "express";
import { getUsers, Register, Login, Logout, UpdateUsername, UpdateEmail } from "../Controllers/Users.js";
import { getPools, savePools } from "../Controllers/Pools.js"
import "../Controllers/Materials.js";
import { verifyToken } from "../Middleware/VerifyToken.js";
import { refreshToken } from "../Controllers/RefreshToken.js";
import { calculateShockPrice, getAllChlorinePrices, getAllCyanuricAcidPrices, getAllShockPrices, getAllWinterCoverPrices } from "../Middleware/MaterialCalculations.js"; 
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
    const { length, width, depth, basinType } = req.query;
    const results = await getAllChlorinePrices(length, width, depth, basinType);
    res.json(results);
});

router.get('/calculateChlorinePrice', async (req, res) => {
    const { length, width, depth, basinType, product_name } = req.query;
    const results = await calculateChlorinePrice(length, width, depth, basinType, product_name);
    res.json(results);
});

router.get('/calculateCyanuricAcidPrice', async (req, res) => {
    const { length, width, depth, basinType, product_name } = req.query;
    const results = await calculateCyanuricAcidPrice(length, width, depth, basinType, product_name);
    res.json(results);
});

router.get('/getAllCyanuricAcidPrices', async (req, res) => {
    const { length, width, depth, basinType } = req.query;
    const results = await getAllCyanuricAcidPrices(length, width, depth, basinType);
    res.json(results);
});

router.get('/calculateShockPrice', async (req, res) => {
    const { length, width, depth, basinType, product_name } = req.query;
    const results = await calculateShockPrice(length, width, depth, basinType, product_name);
    res.json(results);
});

router.get('/getAllShockPrices', async (req, res) => {
    const { length, width, depth, basinType} = req.query;
    const results = await getAllShockPrices(length, width, depth, basinType);
    res.json(results);
});

router.get('/calculatePipesCost', async (req, res) => {
    const { depth, length, width, pipe_type } = req.query;
    const results = await calculatePipesCost(depth, length, width, pipe_type );
    res.json(results);
});

router.get('/getAllPipesPrices', async (req, res) => {
    const { depth, length, width } = req.query;
    const results = await getAllPipesPrices(depth, length, width );
    res.json(results);
});

router.get('/calcualteConcreteCost', async (req, res) => {
    const { length, width, depth, basinType, product_name } = req.query;
    const results = await calcualteConcreteCost(length, width, depth, basinType, product_name );
    res.json(results);
});

router.get('/getAllConcretePrices', async (req, res) => {
    const { length, width, depth, basinType, product_name } = req.query;
    const results = await getAllConcretePrices(length, width, depth, basinType, product_name );
    res.json(results);
});

router.get('/calculateWaterPrice', async (req, res) => {
    const { length, width, depth, basinType } = req.query;
    const results = await calculateWaterPrice(length, width, depth, basinType );
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
    const { length, width, depth, basinType, product_name } = req.query;
    const results = await calcualtePoolLinerPrice(length, width, depth, basinType, product_name );
    res.json(results);
});

router.get('/getAllPoolLinerPrices', async (req, res) => {
    const { length, width, depth, basinType } = req.query;
    const results = await getAllPoolLinerPrices(length, width, depth, basinType );
    res.json(results);
});

router.get('/calculatePoolWinterCoverPrice', async (req, res) => {
    const { length, width, product_name } = req.query;
    const results = await calculatePoolWinterCoverPrice(length, width, product_name );
    res.json(results);
});

router.get('/getAllWinterCoverPrices', async (req, res) => {
    const { length, width } = req.query;
    const results = await getAllWinterCoverPrices(length, width );
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
    const { length, width, depth, basinType, product_name} = req.query;
    const results = await calculatePlaster(length, width, depth, basinType, product_name );
    res.json(results);
});
 
router.get('/getAllPlasterPrices', async (req, res) => {
    const { length, width, depth, basinType} = req.query;
    const results = await getAllPlasterPrices(length, width, depth, basinType );
    res.json(results);
});
 
export default router;