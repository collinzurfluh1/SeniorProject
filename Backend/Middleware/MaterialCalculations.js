1//Things still needed to be added in during calculations 
//Drains, Pumps, Skimmer

import { get_plaster_data, get_cement_data, get_piping, get_chlorine, get_cyanuric_acid, get_shock, get_winter_covers, get_solar_covers, get_liner, get_steel_walling } from "../Controllers/Materials.js";



function calculatePrice(poolMaterials, basinType)
{
    //This funciton is the main function that will set which pool type to calculate for
    //This function will take in an array of values that are passed in from the front end based on user selection including all of thier selections
    //Then after it has the values it will pass the values into their appropriate pool type.
    if(basinType == "Fiberglass")
    {
        var poolObject = calculateFiberglass(poolMaterials);
        return poolObject;
    }
    else if(basinType == "Vinyl")
    {
        var poolObject = calculateVinyl(poolMaterials);
        return poolObject;
    }
    else
    {
        var poolObject = calculateGunite(poolMaterials);
        return poolObject;
    }

}
function calculateVinyl(poolMaterials)
{
    //This function is to calculate the cost of a vinyl pool by calling the functions needed
    //This function will need to calculate its surface area and volume and call
    /*
    calculateChemicals()
    calculatePipes()
    calculateConcrete()
    calculateWater()
    calculateSideWalling()
    calculatePoolLiner()
    calculatePoolSolarCover()
    calculatePoolWinterCover()
    calculateSideWalling()
    calculatePoolFilter()
    
   //                   0       1       2       3   4           5           6          7        8               9       10            11         12          13              14      15      16      17
    //poolMaterials = {length, width, depth, type, pipes, chlorineTablet, shockName, ppm, cyanuricAcidName, concrete, poolLiner, steelWalling, solarCover, winterCover, basinType, Skimmer, drain, numDrains}
    
    var surfaceArea = calculatePoolSurfaceArea(poolMaterials[0], poolMaterials[1], poolMaterials[2], poolMaterials[14]);
    var volume = calculatePoolVolume(poolMaterials[0], poolMaterials[1], poolMaterials[2], poolMaterials[14]);
    var gallons = calcualteGallons(gallons);
    var waterPrice = calculateWater(gallons);
    var chemicalPrice = calculateChemicals(gallons, poolMaterials[5], poolMaterials[6], poolMaterials[8], poolMaterials[7]);
    var pipesPrice = calculatePipes(poolMaterials[4], poolMaterials[2], poolMaterials[0], poolMaterials[1]);
    var concretePrice = calculateConcrete(poolMaterials[0], poolMaterials[1], poolMaterials[2], surfaceArea, poolMaterials[9], poolMaterials[3]);
    var sideWallingCost = calculateSideWalling(poolMaterials[0], poolMaterials[1], poolMaterials[11]);
    var poolLinerCost = calculatePoolLiner(surfaceArea, poolMaterials[10]);
    var solarCoverCost = calculatePoolSolarCover(poolMaterials[0], poolMaterials[1], poolMaterials[12]);
    var winterCoverCost = calculatePoolWinterCover(poolMaterials[0], poolMaterials[1], poolMaterials[13]);
    var filterInformation = calculatePoolFilter(gallons);
    var pumpInformation = calculatePoolPump(gallons);
    var skimmerPrice = poolMaterials[15];//This line will be replaced with a database call for the skimmer price
    var drainPrice = poolMaterials[16] * poolMaterials[17];
    var price = chemicalPrice[0] + chemicalPrice[1] + chemicalPrice[2] + concretePrice + sideWallingCost + waterPrice + poolLinerCost + solarCoverCost + winterCoverCost + filterInformation[1] + pumpInformation[1] + skimmerPrice + drainPrice;
    var poolStatistics = null;//for this I would want to build a pool object and then yeet it through, yes, I know very professional

    return poolStatistics;
    */
}
function calculateGunite(poolMaterials)
{
    //This function calculates the cost of a gunite pool
    /*
    calculateChemicals()
    calculatePipes()
    calculateConcrete()
    calculateWater()
    calculateSideWalling()
    calculatePoolLiner()
    calculatePoolSolarCover()
    calculatePoolWinterCover()
    calculatePoolFilter()
    calculateRebar()
    calculatePlaster()
    *///                0       1       2       3   4           5           6          7        8               9       10      11      12          13              14      15      16      17
    //poolMaterials = {length, width, depth, type, pipes, chlorineTablet, shockName, ppm, cyanuricAcidName, concrete, plaster, rebar, solarCover, winterCover, basinType, Skimmer, drain, numDrains}
    /*
    var surfaceArea = calculatePoolSurfaceArea(poolMaterials[0], poolMaterials[1], poolMaterials[2], poolMaterials[14]);
    var volume = calculatePoolVolume(poolMaterials[0], poolMaterials[1], poolMaterials[2], poolMaterials[14]);
    var gallons = calcualteGallons(gallons);
    var waterPrice = calculateWater(gallons);
    var chemicalPrice = calculateChemicals(gallons, poolMaterials[5], poolMaterials[6], poolMaterials[8], poolMaterials[7]);
    var pipesPrice = calculatePipes(poolMaterials[4], poolMaterials[2], poolMaterials[0], poolMaterials[1]);
    var concretePrice = calculateConcrete(poolMaterials[0], poolMaterials[1], poolMaterials[2], surfaceArea, poolMaterials[9], poolMaterials[3]);
    var rebarCost = calculateRebar(poolMaterials[0], poolMaterials[1], poolMaterials[2], poolMaterials[11]);
    var plasterCost = calculatePlaster(surfaceArea, poolMaterials[10]);
    var solarCoverCost = calculatePoolSolarCover(poolMaterials[0], poolMaterials[1], poolMaterials[12]);
    var winterCoverCost = calculatePoolWinterCover(poolMaterials[0], poolMaterials[1], poolMaterials[13]);
    var filterInformation = calculatePoolFilter(gallons);
    var pumpInformation = calculatePoolPump(gallons, filterInformation[0], poolMaterials[4]);
    var skimmerPrice = poolMaterials[15];//This line will be replaced with a database call for the skimmer price
    var drainPrice = poolMaterials[16] * poolMaterials[17];
    var price = chemicalPrice[0] + chemicalPrice[1] + chemicalPrice[2] + concretePrice + rebarCost + waterPrice + plasterCost + solarCoverCost + winterCoverCost + filterInformation[1] + pumpInformation[1] + skimmerPrice + drainPrice;
    var poolStatistics = null;//for this I would want to build a pool object and then yeet it through, yes, I know very professional
    
    return poolStatistics;
    */
}   
function calculateFiberglass(poolMaterials)
{
    //This function calculates the cost of a fiberglass pool
    //calculateChemicals()
    /*
    calculatePipesA()
    calculateConcrete()
    calculateWater()
    calculateSolarCover()
    calculateWinterCover()
    calculateFilter()
    
   //                    0       1       2     3     4           5           6          7        8               9       10            11          12          13      14      15      16
    //poolMaterials = {length, width, depth, type, pipes, chlorineTablet, shockName, ppm, cyanuricAcidName, concrete, fiberShell, solarCover, winterCover, basinType, Skimmer, drain, numDrains}
    
    var surfaceArea = calculatePoolSurfaceArea(poolMaterials[0], poolMaterials[1], poolMaterials[2], poolMaterials[13]);
    var volume = calculatePoolVolume(poolMaterials[0], poolMaterials[1], poolMaterials[2], poolMaterials[13]);
    var gallons = calcualteGallons(gallons);
    var waterPrice = calculateWater(gallons);
    var chemicalPrice = calculateChemicals(gallons, poolMaterials[5], poolMaterials[6], poolMaterials[8], poolMaterials[7]);
    var pipesPrice = calculatePipes(poolMaterials[4], poolMaterials[2], poolMaterials[0], poolMaterials[1]);
    var concretePrice = calculateConcrete(poolMaterials[0], poolMaterials[1], poolMaterials[2], surfaceArea, poolMaterials[9], poolMaterials[3]);
    
    var shell = calculateFiberglass(poolMaterials[10]);
    var solarCoverCost = calculatePoolSolarCover(poolMaterials[0], poolMaterials[1], poolMaterials[11]);
    var winterCoverCost = calculatePoolWinterCover(poolMaterials[0], poolMaterials[1], poolMaterials[12]);
    var filterInformation = calculatePoolFilter(gallons);
    var pumpInformation = calculatePoolPump(gallons, filterInformation[0], poolMaterials[4]);
    var skimmerPrice = poolMaterials[15];//This line will be replaced with a database call for the skimmer price
    var drainPrice = poolMaterials[16] * poolMaterials[17];
    var price = chemicalPrice[0] + chemicalPrice[1] + chemicalPrice[2] + concretePrice + shell + waterPrice + solarCoverCost + winterCoverCost + filterInformation[1] + pumpInformation[1] + skimmerPrice + drainPrice;
    var poolStatistics = null;//for this I would want to build a pool object and then yeet it through, yes, I know very professional

    return poolStatistics;
    */
}
// function calculateFiberglass(shell)
// {
//     //This function takes in the input of the shell from the calculation function and then gets the fiberglass shells price
//     var fiberglassCost = 10;
//     return fiberglassCost;
// }

///////////////////////////////
////////// CHEMICALS //////////
///////////////////////////////

export function calculateChlorineTablets(length, width, depth, deepDepth, floorType)
{
    //This function calculates the cost based on the volume of the pool
    //Inputs: Pools Gallons of Water, chlorine tablet name, shock name, cyanuric acid name, ppm is from user input
    var gallons = calculateGallons(length, width, depth, deepDepth, floorType)

    var tabletCount;
    if(gallons < 20000)
    {
        tabletCount = 2 * (gallons / 10000);
    }
    else
    {
        tabletCount = 3 * (gallons / 10000);
    }
    return Math.ceil(tabletCount);
}
export async function calculateChlorinePrice(length, width, depth, deepDepth, floorType, product_name)
{

    var tablets = calculateChlorineTablets(length, width, depth, deepDepth, floorType);

    var chlorineJson = (await get_chlorine(product_name))[0];

    var units;
    units = tablets / chlorineJson.quantity;
    if(!(tablets % chlorineJson.quantity == 0))
    {
        units = units + 1;
    }
    var price = units * chlorineJson.cost;
    return price;
}
export async function getAllChlorinePrices(length, width, depth, deepDepth, floorType)
{
    var gallons = calculateGallons(length, width, depth, deepDepth, floorType)

    var chlorineOptions = [];
    var chlorineJsons = await get_chlorine();

    for (const chlorineJson of chlorineJsons) {
        var name = await chlorineJson.name;
        const price = await calculateChlorinePrice(gallons, name)
        
        // Create a new JSON object with the name and price fields
        const option = { "name": name, "price": price };
        
        // Add the new JSON object to the empty JSON array
        chlorineOptions.push(option);
    }

    return chlorineOptions;  
}
export function calculateCyanuricAcidPounds(length, width, depth, deepDepth, floorType)
{
    var gallons = calculateGallons(length, width, depth, deepDepth, floorType)

    var cyanuricAcid = 1.75 + (((gallons - 10000) / 5000) * .75);
    return cyanuricAcid;
}
export async function calculateCyanuricAcidPrice(length, width, depth, deepDepth, floorType, product_name)
{
    var gallons = calculateGallons(length, width, depth, deepDepth, floorType)

    var cyanuricAcidlbs = calculateCyanuricAcidPounds(length, width, depth, deepDepth, floorType);

    var cyanuricAcidJson = (await get_cyanuric_acid(product_name))[0];

    var units;
    units = cyanuricAcidlbs / cyanuricAcidJson.quantity;
    if(!(cyanuricAcidlbs % cyanuricAcidJson.quantity == 0))
    {
        units = units + 1;
    }
    var price = units * cyanuricAcidJson.cost;
    return price;
}
export async function getAllCyanuricAcidPrices(length, width, depth, deepDepth, floorType)
{
    var gallons = calculateGallons(length, width, depth, deepDepth, floorType)

    var cyanuricAcidOptions = [];
    var cyanuricAcidJsons = await get_cyanuric_acid();

    for (const cyanuricAcidJson of cyanuricAcidJsons) {
        var name = await cyanuricAcidJson.name;
        const price = await calculateCyanuricAcidPrice(length, width, depth, deepDepth, floorType, name)
        
        // Create a new JSON object with the name and price fields
        const option = { "name": name, "price": price };
        
        // Add the new JSON object to the empty JSON array
        cyanuricAcidOptions.push(option);
    }

    return cyanuricAcidOptions; 
}
export function calculateShockLbs(gallons)
{
    var lbsOfShock = gallons / 5000;
    return lbsOfShock;
}
export async function calculateShockPrice(length, width, depth, deepDepth, floorType, product_name)
{
    var gallons = calculateGallons(length, width, depth, deepDepth, floorType)
   
    var shocklbs = calculateShockLbs(gallons);
    var shockJson = (await get_shock(product_name))[0];

    var units;
    units = shocklbs / shockJson.quantity;
    if(!(shocklbs % shockJson.quantity == 0))
    {
        units = units + 1;
    }
    var price = units * shockJson.cost;
    return price;
}
export async function getAllShockPrices(length, width, depth, deepDepth, floorType)
{
    var gallons = calculateGallons(length, width, depth, deepDepth, floorType)
    var shockOptions = [];
    var shockJsons = await get_shock();

    for (const shockJson of shockJsons) {
        var name = await shockJson.name;
        const price = await calculateShockPrice(gallons, name)
        
        // Create a new JSON object with the name and price fields
        const option = { "name": name, "price": price };
        
        // Add the new JSON object to the empty JSON array
        shockOptions.push(option);
    }

    return shockOptions; 
}

////////////////////////////
////////// PIPING //////////
////////////////////////////

export function calculatePipesAmount(deepDepth, length, width)
{
    //This function calculates the length and cost of pipe based on the type of pipe and perimeter of the pool
    //Inputs: Pipe Price/Name, Pools Max Depth, Length, and Width
    var pipeLength = (length * 1.75) + (width * 2) + (deepDepth * 1.1) + 20;
    return pipeLength;
}
export async function calculatePipesCost(deepDepth, length, width, pipe_type)
{

    var price_per_linear_foot =  (await get_piping(pipe_type))[0]['linft_cost'];

    var pipeLength = calculatePipesAmount(deepDepth, length, width);

    return (pipeLength * price_per_linear_foot);
}
export async function getAllPipesPrices(deepDepth, length, width)
{

    var PipingOptions = [];
    var pipingJsons = await get_piping();

    for (const pipingJson of pipingJsons) {
        var type = await pipingJson.type;
        const price = await calculatePipesCost(deepDepth, length, width, type)
        
        // Create a new JSON object with the name and price fields
        const option = { "type": type, "price": price };
        
        // Add the new JSON object to the empty JSON array
        PipingOptions.push(option);
    }
    return PipingOptions;
}

//////////////////////////////
////////// CONCRETE //////////
//////////////////////////////

export function calculateConcretePounds(length, width, depth, deepDepth, floorType, basinType)
{
    //This calculates the total cost of concrete through cubic and square feet cost around and inside the pool.
    //Inputs: Length, Width, Depth, Surface Area, Concrete Price, BasinType
    //database call for concrete price

    if(basinType == "Gunite")//pool gunite
    { 
        var concretelbsCbFT = 64.21 * ((length + 1) * (width + 1) * depth) - (length * width * depth);
        var concretelbsSqFT = 75 * ((length + 3) * (width + 3)) - (length * width) * 0.5;
        return (concretelbsCbFT + concretelbsSqFT);
    }
    if (basinType == "Fiberglass")//pool fiberglass
    {
        var dd = (deepDepth * depth) / 2;
        var depthDiff = deepDepth - depth;
        var surfaceArea = 2 * (length * dd) + (width * depth) + (width * deepDepth) + (Math.sqrt(Math.pow(depthDiff, 2) + Math.pow(length, 2)));
        var totallbs = ((surfaceArea * 1.1) * 75 * 0.5);
        totallbs = totallbs + (75 * ((length + 3) * (width + 3)) - (length * width) * 0.5);
        return totallbs;
    }
    if (basinType == "Vinyl")//pool vinyl
    {
        var totallbs = calculatePoolFloor(length, width, depth, deepDepth, floorType) * 75; 
        totallbs = 64.21 * ((length + 1) * (width + 1) * depth) - (length * width * depth);
        totallbs = totallbs + (75 * ((length + 3) * (width + 3)) - (length * width) * 0.5);
        return totallbs;
    }
}

export async function calculateConcreteCost(length, width, depth, deepDepth, basinType, floorType, product_name)
{

    var concretelbs = await calculateConcretePounds(length, width, depth, deepDepth, basinType, floorType);
    var concreteJson = await get_cement_data(product_name);

    concreteJson = concreteJson[0] // only one json in the list

    // return concreteJson[0]['bag_size_pounds'];

    var units;
    units = concretelbs / concreteJson['bag_size_pounds'];
    if(!(concretelbs % concreteJson['bag_size_pounds'] == 0))
    {
        units = units + 1;
    }
    var price = units * concreteJson['bag_cost'];
    return price;
}
export async function getAllConcretePrices(length, width, depth, deepDepth, floorType, basinType)
{

    var concreteOptions = [];
    var concreteJsons = await get_cement_data();

    // concreteJsons.forEach(async function(concreteJson) {
    //     console.log(concreteJson)
    //     var name = await concreteJson.name;
    //     console.log(name)
    //     const price = await calculateConcreteCost(length, width, depth, basinType, name)
    //     console.log(price)
        
    //     // Create a new JSON object with the name and price fields
    //     const option = { "name": name, "price": price };
        
    //     // Add the new JSON object to the empty JSON array
    //     concreteOptions.push(option);
    // });

    for (const concreteJson of concreteJsons) {
        var name = await concreteJson.name;
        const price = await calculateConcreteCost(length, width, depth, deepDepth, floorType, basinType, name)
        
        // Create a new JSON object with the name and price fields
        const option = { "name": name, "price": price };
        
        // Add the new JSON object to the empty JSON array
        concreteOptions.push(option);
    }

    // for (let i = 0; i < concreteJsons.length; i++) {
    //     var concreteJson = concreteJsons[i]
        
    //     console.log(concreteJson)
    //     var name = concreteJson.name;
    //     console.log(name)
    //     const price = await calculateConcreteCost(length, width, depth, basinType, name)
    //     console.log(price)
        
    //     // Create a new JSON object with the name and price fields
    //     const option = { "name": name, "price": 50 };
        
    //     // Add the new JSON object to the empty JSON array
    //     concreteOptions.push(option);
    // }
    return concreteOptions;
    
}

///////////////////////////
////////// WATER //////////
///////////////////////////

export function calculateGallons(length, width, depth, deepDepth, floorType)
{
    var volume = calculatePoolVolume(length, width, depth, deepDepth, floorType);
    return (volume * 7.48);
}
export function calculateWaterPrice(length, width, depth, deepDepth, floorType) // will this need to be acessed?
{
    //This calculates the total cost of water for a pool based on the pools volume.
    //Inputs: Pools Volume
    var gallons = calculateGallons(length, width, depth, deepDepth, floorType);
    var waterPrice = 0.005;//set price
    var varprice = gallons * waterPrice;
    return varprice;
}

///////////////////////////////////
////////// STEEL WALLING //////////
///////////////////////////////////

function calculateSteelWallingSqFT(length, width)
{
    //This calculates the steel side walling for a pool
    //Inputs: Pools Length, Width, Depth 1, Price/Name of side walling
    //database call for sidewalling price
    //Database call for sidewalling price based on name;
    var sqFt = (2 * width) + (2 * length);
    return sqFt;
}

export async function calculateSteelWallingPrice(length, width, product_name)
{

    var sqFt = calculateSteelWallingSqFT(length, width);
    var sideWallingJson = (await get_steel_walling(product_name))[0];

    return (sqFt * sideWallingJson.sqft_cost);
}
export async function getAllSteelWallingPrices(length, width)
{

    var SteelWallingOptions = [];
    var SteelWallingJsons = await get_steel_walling();

    for (const SteelWallingJson of SteelWallingJsons) {
        var name = await SteelWallingJson.name;
        const price = await calculateSteelWallingPrice(length, width, name)
        
        // Create a new JSON object with the name and price fields
        const option = { "name": name, "price": price };
        
        // Add the new JSON object to the empty JSON array
        SteelWallingOptions.push(option);
    }
    return SteelWallingOptions;
    
}

//////////////////////////////////
////////// VINYL LINING //////////
//////////////////////////////////

export function calculatePoolLinerArea(length, width, depth, deepDepth, floorType)
{
    //This calculates the cost of a vinyl pools liner based on its surface area.
    //Inputs: Pools Surface Area, Liner price/name
    //Database call for liner price

    var surfaceArea = calculatePoolSurfaceArea(length, width, depth, deepDepth, floorType);

    var poolLinerSize = surfaceArea * 1.05;
    return Math.ceil(poolLinerSize);
}
export async function calcualtePoolLinerPrice(length, width, depth, deepDepth, floorType, product_name)
{

    var poolLinerSize = calculatePoolLinerArea(length, width, depth, deepDepth, floorType);
    var poolLinerJson = (await get_liner(product_name))[0];

    var linerWidth = poolLinerJson.width_feet;
    var linerLength = poolLinerJson.length_feet;
    var linerCoverArea = linerLength * linerWidth;
    var unitsNeeded = poolLinerSize / (linerCoverArea);
    if(!(unitsNeeded % linerCoverArea == 0))
    {
        unitsNeeded += 1;
    }
    
    return unitsNeeded * poolLinerJson.cost;
}
export async function getAllPoolLinerPrices(length, width, depth, deepDepth, floorType)
{

    var poolLinerOptions = [];
    var poolLinerJsons = await get_liner()

    for (const poolLinerJson of poolLinerJsons) {
        var name = await poolLinerJson.name;
        const price = await calcualtePoolLinerPrice(depth, length, width, basinType, name)
        
        // Create a new JSON object with the name and price fields
        const option = { "name": name, "price": price };
        
        // Add the new JSON object to the empty JSON array
        poolLinerOptions.push(option);
    }
    return poolLinerOptions;
}

////////////////////////////
////////// COVERS //////////
////////////////////////////

function calculatePoolWinterCoverArea(length, width)
{
    //This calculates the cost of a winter pool cover based on the Length and Width of a pool
    //Inputs: pools Length, width, Winter Cover Price/Name
    //database call to get the winter cover price
    var winterCoverSize = (width + 1) * (length + 1);

    return winterCoverSize;
}
export async function calculatePoolWinterCoverPrice(length, width, product_name)
{

    var winterCoverSize = calculatePoolWinterCoverArea(length, width);
    var winterCoverJson = (await get_winter_covers(product_name))[0];

    var winterCoverLength = winterCoverJson.length_feet;
    var winterCoverWidth = winterCoverJson.width_feet;
    var winterCoverArea = winterCoverLength * winterCoverWidth;
    var unitsNeeded = winterCoverSize / winterCoverArea;
    if(!(winterCoverSize % winterCoverArea == 0))
    {
        unitsNeeded += 1;
    }
    return unitsNeeded * winterCoverJson.cost;
}
export async function getAllWinterCoverPrices(length, width)
{

    var winterCoverOptions = []
    var winterCoverJsons = await get_winter_covers();

    for (const winterCoverJson of winterCoverJsons) {
        var name = await winterCoverJson.name;
        const price = await calculatePoolWinterCoverPrice(length, width, name);
        
        // Create a new JSON object with the name and price fields
        const option = { "name": name, "price": price };
        
        // Add the new JSON object to the empty JSON array
        winterCoverOptions.push(option);
    }
    return winterCoverOptions;
}
function calculatePoolSolarCover(length, width)
{
    //This calculates the cost of the pools solar cover based on its length and width
    //Inputs: Pool Length, Width, Solar Cover Price/Name
    //function call for solar cover price
    //database call to get the solar cover price;
    var solarCoverSize = width * length;
    return solarCoverSize;
}
export async function calculatePoolSolarCoverPrice(length, width, product_name)
{

    var solarCoverSize = calculatePoolSolarCover(length, width);
    var solarCoverJson = (await get_solar_covers(product_name))[0];

    var solarCoverLength = solarCoverJson.length_feet;
    var solarCoverWidth = solarCoverJson.width_feet;
    var solarCoverArea = solarCoverLength * solarCoverWidth;
    var unitsNeeded = solarCoverSize / solarCoverArea;
    if(!(solarCoverSize % solarCoverArea == 0))
    {
        unitsNeeded += 1;
    }
    return unitsNeeded * solarCoverJson.cost;
}
export async function getAllSolarCoverPrices(length, width)
{

    var solarCoverOptions = []
    var solarCoverJsons = await get_solar_covers();

    for (const solarCoverJson of solarCoverJsons) {
        var name = await solarCoverJson.name;
        const price = await calculatePoolSolarCoverPrice(length, width, name);
        
        // Create a new JSON object with the name and price fields
        const option = { "name": name, "price": price };
        
        // Add the new JSON object to the empty JSON array
        solarCoverOptions.push(option);
    }
    return solarCoverOptions;
}

///////////////////////////////////////
////////// MISC INTERNAL USE //////////
///////////////////////////////////////

function calculatePoolFilter(gallons)
{

    //This calculatees the appropriate filter based on the pools volume
    //Inputs: Pool Gallons
    var filterSqFt = gallons / 10000;
    //database call for filter of that size&Name and returns both to be returned
    var price;
    return price;

}
function calculatePoolPump(gallons)
{
    //this calculates the pools pumps needed. 
    //Inputs: gallons
    var hpNeeded = (gallons / 24) / 60;
    hpNeeded = hpNeeded / 15;
    //Database call to get a pump with a horsepower closest but not less than needed.
    toReturn = hpNeeded;

    return toReturn;
}
export function calculateRebar(length, width, depth)
{
    //This calculates the rebar needed with 2 inch spacing from its depth 1, length, and width
    //Inputs:Pool Length, Width, Depth, Rebar name/price
    //call to get rebar price if not included
    //database call to get the price of rebar based on name
    var areaForBar = (2 * (length * 6 * depth) + 2 * (width * 6 * depth));
    areaForBar = areaForBar * 0.71;
    return areaForBar;
}
export async function calculatePoolPumpPrice(length, width, depth, deepDepth, floorType)
{
    var gallons = calculateGallons(length, width, depth, deepDepth, floorType);
    return calculatePoolPump(gallons);
}
export async function calculatePoolFilterPrice(length, width, depth, deepDepth, floorType)
{
    var gallons = calculateGallons(length, width, depth, deepDepth, floorType);
    return calculatePoolFilter(gallons);
}
export async function getFiberglassShellDetails(name)
{
    //database call for a fiberglass shell based on the input name and returns the json
}
export async function getSkimmerPrice(name)
{
    //db call for price
}
export async function getDrainPrice(name)
{
    //db call for price
}
/////////////////////////////
////////// PLASTER //////////
/////////////////////////////

export function calculatePlaster(length, width, depth, deepDepth, floorType)
{
    //This calculates the cost of plaster - No it doesn't it calculates how much plaster is needed - devin
    //Inputs: Pools Surface Area, Cost of Plaster/Name of Plaster
    //Call to get Plaster(Or pass in plaster price)
    //database call for plaster price

    var surfaceArea = calculatePoolSurfaceArea(length, width, depth, deepDepth, floorType);
    return (surfaceArea / (1/3));
}
export async function calculatePlasterCost(length, width, depth, deepDepth, floorType, product_name)
{

    var plasterlbsNeeded = calculatePlaster(length, width, depth, deepDepth, floorType);
    var plasterJson = (await get_plaster_data(product_name))[0];

    var plasterlbs = plasterJson.bag_size_pounds;
    var unitsNeeded = plasterlbsNeeded / plasterlbs;
    if(!(plasterlbsNeeded % plasterlbs == 0))
    {
        unitsNeeded += 1;
    }
    return unitsNeeded * plasterJson.bag_cost;
}
export async function getAllPlasterPrices(length, width, depth, deepDepth, floorType)
{

    var plasterOptions = []
    var plasterJsons = await get_plaster_data();

    for (const plasterJson of plasterJsons) {
        var name = await plasterJson.name;
        const price = await calculatePlasterCost(length, width, depth, deepDepth, floorType, name);
        
        // Create a new JSON object with the name and price fields
        const option = { "name": name, "price": price };
        
        // Add the new JSON object to the empty JSON array
        plasterOptions.push(option);
    }
    return plasterOptions;
}

///////////////////////////////////////////
////////// POOL MEASURMENT TOOLS //////////
///////////////////////////////////////////

export function calculatePoolSurfaceArea(length, width, depth, deepDepth, floorType)
{
    //This calculates the pools surface area
    //Inputs: Pools Length, Depth's, Widths, Type of Basin

    if(floorType == "Diver")
    {
        var surfaceArea = 2 * (width * depth) + 2 * (length * depth) + calculatePoolFloor(length, width, depth, deepDepth, floorType);
        return surfaceArea;
    }
    else if(floorType == "Slant")
    {
        var surfaceArea = (width * depth) + (width * deepDepth) + 2 * (length * ((deepDepth - depth) / 2)) + calculatePoolFloor(length, width, depth, deepDepth, floorType);
        return surfaceArea;
    }
    else
    {
        var surfaceArea = (length * width) + (2 * (width * depth)) + (2 * (length * depth));
        return surfaceArea;
    }

}
export function calculatePoolVolume(length, width, depth, deepDepth, floorType)
{
    //this calculates the pools volume
    //Inputs:Pools Length, Width, Depth, Basin Type

    if(floorType == "Diver")
    {
        var volume = length * width * depth + ((width * (length * .75) * (deepDepth - depth))/3);
        return volume;
    }
    else if(floorType == "Slant")
    {
        var volume = length * width * ((depth + deepDepth - .75) / 2);
        return volume;
    }
    else
    {
        var volume = length * (depth - .75) * width; //calculations done in feet
        return volume;
    }
}
function calculatePoolFloor(length, width, depth, deepDepth, floorType)
{
    if(floorType == "Diver")
    {
        var shallow = width * (length/4);
        var baseWidth = width / 2;
        var baseLength = length * (7/40);
        var dd = deepDepth - depth;
        var trapizoid1 = ((baseWidth + width)/2) * Math.pow((Math.pow(dd, 2) + Math.pow((length/2), 2)), .5);
        var trapizoid2 = 2 * (((0.75 * length) + length)/2) * Math.pow((Math.pow(dd,2) + Math.pow((.25 * width), 2)), 0.5);
        var base = baseLength * baseWidth;
        var trapizoid3 = ((baseWidth + width) / 2) * Math.pow((Math.pow(dd, 2) + Math.pow(((3 & length)/40), 2)), .5); 
        var poolFloorSurfaceArea = shallow + trapizoid1 + trapizoid2 + base + trapizoid3;
        return poolFloorSurfaceArea;
    }
    if(floorType == "Slant")
    {
        var depthDiff = deepDepth - depth;
        return (Math.sqrt(Math.pow(depthDiff, 2) + Math.pow(length, 2)) * width);
    }
    else
    {
        return (length * width);
    }
}