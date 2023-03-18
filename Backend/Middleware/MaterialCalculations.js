1//Things still needed to be added in during calculations 
//Drains, Pumps, Skimmer

import { get_plaster_data, get_cement_data, get_piping, get_chlorine, get_cyanuric_acid, get_shock, get_winter_covers, get_solar_covers, get_liner, get_steel_walling, get_fiberglass_shell } from "../Controllers/Materials.js";



export function calculatePrice(poolMaterials)
{
    //This funciton is the main function that will set which pool type to calculate for
    //This function will take in an array of values that are passed in from the front end based on user selection including all of thier selections
    //Then after it has the values it will pass the values into their appropriate pool type.
    if(poolMaterials.basin_type == "Fiberglass")
    {
        var poolPrice = calculateFiberglass(poolMaterials);
        return poolPrice;
    }
    else if(poolMaterials.basin_type == "Vinyl")
    {
        var poolPrice = calculateVinyl(poolMaterials);
        return poolPrice;
    }
    else
    {
        var poolPrice = calculateGunite(poolMaterials);
        return poolPrice;
    }

}
async function calculateVinyl(poolMaterials)
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
    */    
   //                   0       1       2       3   4           5           6          7        8               9       10            11         12          13              14      15      16      17
    //poolMaterials = {length, width, depth, type, pipes, chlorineTablet, shockName, ppm, cyanuricAcidName, concrete, poolLiner, steelWalling, solarCover, winterCover, basinType, Skimmer, drain, numDrains}
    
    var price = calculateWaterPrice(poolMaterials.length, poolMaterials.width, poolMaterials.depth_shallow, poolMaterials.depth_deep, poolMaterials.floorType);
    // return price;
    price = price + await calculateChlorinePrice(poolMaterials.length, poolMaterials.width, poolMaterials.depth_shallow, poolMaterials.depth_deep, poolMaterials.floorType, poolMaterials.chlorine);
    // return price;
    price = price + await calculatePipesCost(poolMaterials.depth_deep, poolMaterials.length, poolMaterials.width, poolMaterials.piping);
    // return price;
    price = price + await calculateConcreteCost(poolMaterials.length, poolMaterials.width, poolMaterials.depth_shallow, poolMaterials.depth_deep, poolMaterials.slant_type, 'Vinyl', poolMaterials.concrete)
    // return price;
    price = price + await calculateSteelWallingPrice(poolMaterials.length, poolMaterials.width, poolMaterials.steelWall);
    // return price;
    price = price + await calculatePoolLinerPrice(poolMaterials.length, poolMaterials.width, poolMaterials.depth_shallow, poolMaterials.depth_deep, poolMaterials.floorType, poolMaterials.lining_type);
    // return price
    price = price + await calculatePoolSolarCoverPrice(poolMaterials.length, poolMaterials.width, poolMaterials.cover2);
    price = price + await calculatePoolWinterCoverPrice(poolMaterials.length, poolMaterials.width, poolMaterials.cover1);
    price = price + calculatePoolFilterPrice(poolMaterials.length, poolMaterials.width, poolMaterials.depth_shallow, poolMaterials.depth_deep, poolMaterials.floorType);
    price = price + calculatePoolPumpPrice(poolMaterials.length, poolMaterials.width, poolMaterials.depth_shallow, poolMaterials.depth_deep, poolMaterials.floorType);
    price = price + getSkimmerPrice(poolMaterials.skimmer);
    price = price + getDrainPrice(poolMaterials.drain);
    

    return Math.round(price * 100) / 100;
    
}
async function calculateGunite(poolMaterials)
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
    var price = calculateWaterPrice(poolMaterials.length, poolMaterials.width, poolMaterials.depth_shallow, poolMaterials.depth_deep, poolMaterials.slant_type);
    price = price + await calculatePipesCost(poolMaterials.depth_deep, poolMaterials.length, poolMaterials.width, poolMaterials.piping);
    price = price + await calculateConcreteCost(poolMaterials.length, poolMaterials.width, poolMaterials.depth_shallow, poolMaterials.depth_deep, poolMaterials.slant_type, "Gunite", poolMaterials.concrete);
    price = price + calculateRebar(poolMaterials.length, poolMaterials.width, poolMaterials.depth_shallow);
    price = price + await calculatePoolSolarCoverPrice(poolMaterials.length, poolMaterials.width, poolMaterials.cover2);
    price = price + await calculatePoolWinterCoverPrice(poolMaterials.length, poolMaterials.width, poolMaterials.cover1);
    price = price + calculatePoolFilterPrice(poolMaterials.length, poolMaterials.width, poolMaterials.depth_shallow, poolMaterials.depth_deep, poolMaterials.slant_type);
    price = price + calculatePoolPumpPrice(poolMaterials.length, poolMaterials.width, poolMaterials.depth_shallow, poolMaterials.depth_deep, poolMaterials.slant_type);
    price = price + getSkimmerPrice(poolMaterials.skimmer);
    price = price + getDrainPrice(poolMaterials.drain);
    price = price + await calculateChlorinePrice(poolMaterials.length, poolMaterials.width, poolMaterials.depth_shallow, poolMaterials.depth_deep, poolMaterials.slant_type, poolMaterials.chlorine);
    price = price + await calculateCyanuricAcidPrice(poolMaterials.length, poolMaterials.width, poolMaterials.depth_shallow, poolMaterials.depth_deep, poolMaterials.slant_type, poolMaterials.cyanuric_acid);
    price = price + await calculateShockPrice(poolMaterials.length, poolMaterials.width, poolMaterials.depth_shallow, poolMaterials.depth_deep, poolMaterials.slant_type, poolMaterials.shock);


    

    return Math.round(price * 100) / 100;
}   
async function calculateFiberglass(poolMaterials)
{
    //This function calculates the cost of a fiberglass pool
    //calculateChemicals()
    
    //calculatePipesA()
    //calculateConcrete()
    //calculateWater()
    //calculateSolarCover()
    //calculateWinterCover()
    //calculateFilter()
    
    var price = calculateWaterPrice(poolMaterials.length, poolMaterials.width, poolMaterials.depth_shallow, poolMaterials.depth_deep, poolMaterials.slant_type);
    price = price + await calculatePoolFiberglassShellPrice(poolMaterials.fiberglass_shell);
    price = price + await calculateChlorinePrice(poolMaterials.length, poolMaterials.width, poolMaterials.depth_shallow, poolMaterials.depth_deep, poolMaterials.slant_type, poolMaterials.chlorine);
    price = price + await calculatePipesCost(poolMaterials.depth_deep, poolMaterials.length, poolMaterials.width, poolMaterials.piping);
    price = price + await calculateConcreteCost(poolMaterials.length, poolMaterials.width, poolMaterials.depth_shallow, poolMaterials.depth_deep, poolMaterials.slant_type, "Fiberglass", poolMaterials.concrete)
    price = price + await calculatePoolSolarCoverPrice(poolMaterials.length, poolMaterials.width, poolMaterials.cover2);
    price = price + await calculatePoolWinterCoverPrice(poolMaterials.length, poolMaterials.width, poolMaterials.cover1);
    price = price + calculatePoolFilterPrice(poolMaterials.length, poolMaterials.width, poolMaterials.depth_shallow, poolMaterials.depth_deep, poolMaterials.slant_type);
    price = price + calculatePoolPumpPrice(poolMaterials.length, poolMaterials.width, poolMaterials.depth_shallow, poolMaterials.depth_deep, poolMaterials.slant_type);
    price = price + getSkimmerPrice(poolMaterials.skimmer);
    price = price + getDrainPrice(poolMaterials.drain);
    

    return Math.round(price * 100) / 100;
}

///////////////////////////////
////////// CHEMICALS //////////
///////////////////////////////

function calculateChlorineTablets(length, width, depth, deepDepth, floorType)
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
    if (product_name == null) {return 0}

    var tablets = calculateChlorineTablets(length, width, depth, deepDepth, floorType);

    var chlorineJson = (await get_chlorine(product_name))[0];

    var units;
    units = Math.floor(tablets / chlorineJson.quantity);
    if(!(tablets % chlorineJson.quantity == 0))
    {
        units = units + 1;
    }
    var price = units * chlorineJson.cost;
    return price;
}
export async function getAllChlorinePrices(length, width, depth, deepDepth, floorType)
{
    var chlorineOptions = [];
    var chlorineJsons = await get_chlorine();

    for (const chlorineJson of chlorineJsons) {
        var name = await chlorineJson.name;
        const price = await calculateChlorinePrice(length, width, depth, deepDepth, floorType, name)
        
        // Create a new JSON object with the name and price fields
        const option = { "name": name, "price": price };
        
        // Add the new JSON object to the empty JSON array
        chlorineOptions.push(option);
    }

    return chlorineOptions;  
}
function calculateCyanuricAcidPounds(length, width, depth, deepDepth, floorType)
{
    var gallons = calculateGallons(length, width, depth, deepDepth, floorType)

    var cyanuricAcid = 1.75 + (((gallons - 10000) / 5000) * .75);
    return cyanuricAcid;
}
export async function calculateCyanuricAcidPrice(length, width, depth, deepDepth, floorType, product_name)
{

    if (product_name == null) {return 0}

    var gallons = calculateGallons(length, width, depth, deepDepth, floorType)

    var cyanuricAcidlbs = calculateCyanuricAcidPounds(length, width, depth, deepDepth, floorType);

    var cyanuricAcidJson = (await get_cyanuric_acid(product_name))[0];

    var units;
    units = Math.floor(cyanuricAcidlbs / cyanuricAcidJson.quantity);
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
function calculateShockLbs(gallons)
{
    var lbsOfShock = gallons / 5000;
    return lbsOfShock;
}
export async function calculateShockPrice(length, width, depth, deepDepth, floorType, product_name)
{

    if (product_name == null) {return 0}

    var gallons = calculateGallons(length, width, depth, deepDepth, floorType)
   
    var shocklbs = calculateShockLbs(gallons);
    var shockJson = (await get_shock(product_name))[0];

    var units;
    units = Math.floor(shocklbs / shockJson.quantity);
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
        const price = await calculateShockPrice(length, width, depth, deepDepth, floorType, name)
        
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

function calculatePipesAmount(deepDepth, length, width)
{
    //This function calculates the length and cost of pipe based on the type of pipe and perimeter of the pool
    //Inputs: Pipe Price/Name, Pools Max Depth, Length, and Width
    var pipeLength = (length * 1.75) + (width * 2) + (deepDepth * 1.1) + 20;
    return pipeLength;
}
export async function calculatePipesCost(deepDepth, length, width, pipe_type)
{
    if (pipe_type == null) {return 0}

    var price_per_linear_foot =  (await get_piping(pipe_type))[0]['linft_cost'];
    // return price_per_linear_foot

    var pipeLength = Math.round(calculatePipesAmount(deepDepth, length, width));
    // return pipeLength


    return Math.round(pipeLength * price_per_linear_foot *100) / 100;
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

function calculateConcretePounds(length, width, depth, deepDepth, floorType, basinType)
{
    //This calculates the total cost of concrete through cubic and square feet cost around and inside the pool.
    //Inputs: Length, Width, Depth, Surface Area, Concrete Price, BasinType
    //database call for concrete price
    //1 cubic foot of concrete = 133, 1 square foot of concrete assuming 6" thick is 66.5
    if(basinType == "Gunite")//pool gunite
    { 
        var concretelbsCbFT = 133 * (((length + 1) * (width + 1) * depth) - (length * width * depth));
        var concretelbsSqFT = 66.5 * ((length + 3) * (width + 3)) - (length * width);
        return (concretelbsCbFT + concretelbsSqFT);
    }
    if (basinType == "Fiberglass")//pool fiberglass
    {
        var dd = (deepDepth * depth) / 2;
        var depthDiff = deepDepth - depth;
        var surfaceArea = (length * dd) + (width * depth) + (width * deepDepth) + (Math.sqrt(Math.pow(depthDiff, 2) + Math.pow(length, 2)));
        var totallbs = ((surfaceArea * 1.1) * 66.5);
        totallbs = totallbs + (66.5 * ((length + 3) * (width + 3)) - (length * width));
        return totallbs;
    }
    if (basinType == "Vinyl")//pool vinyl
    {
        var totallbs = calculatePoolFloor(length, width, depth, deepDepth, floorType) * 66.5; 
        totallbs = 66.5 * ((length + 1) * (width + 1) * depth) - (length * width * depth);
        totallbs = totallbs + (133 * ((length + 3) * (width + 3)) - (length * width));
        return totallbs;
    }
}

export async function calculateConcreteCost(length, width, depth, deepDepth, floorType, basinType, product_name)
{

    if (product_name == null) {return 0}

    var concretelbs = calculateConcretePounds(length, width, depth, deepDepth, floorType, basinType);

    var concreteJson = await get_cement_data(product_name);
    // return concreteJson

    // return concreteJson[0]['bag_size_pounds'];

    var units;
    units = Math.floor(concretelbs / concreteJson[0]['bag_size_pounds']);
    if(!(concretelbs % concreteJson[0]['bag_size_pounds'] == 0))
    {
        units = units + 1;
    }
    var price = units * concreteJson[0]['bag_cost'];
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

function calculateGallons(length, width, depth, deepDepth, floorType)
{
    var volume = calculatePoolVolume(length, width, depth, deepDepth, floorType);
    return (volume * 7.48);
}
export function calculateWaterPrice(length, width, depth, deepDepth, floorType) // will this need to be acessed?
{
    //This calculates the total cost of water for a pool based on the pools volume.
    //Inputs: Pools Volume
    var gallons_2 = Math.round(calculateGallons(length, width, depth, deepDepth, floorType) / 2);
    var waterPrice = 0.01;//set price
    var varprice = gallons_2 * waterPrice;
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

    if (product_name == null) {return 0}

    var sqFt = calculateSteelWallingSqFT(length, width);
    var sideWallingJson = await get_steel_walling(product_name);

    return (sqFt * sideWallingJson[0]['sqft_cost']);
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

function calculatePoolLinerArea(length, width, depth, deepDepth, floorType)
{
    //This calculates the cost of a vinyl pools liner based on its surface area.
    //Inputs: Pools Surface Area, Liner price/name
    //Database call for liner price

    var surfaceArea = calculatePoolSurfaceArea(length, width, depth, deepDepth, floorType);

    var poolLinerSize = surfaceArea * 1.05;
    return Math.ceil(poolLinerSize);
}
export async function calculatePoolLinerPrice(length, width, depth, deepDepth, floorType, product_name)
{

    if (product_name == null) {return 0}

    var poolLinerSize = calculatePoolLinerArea(length, width, depth, deepDepth, floorType);
    var poolLinerJson = (await get_liner(product_name))[0];

    var linerWidth = poolLinerJson.width_feet;
    var linerLength = poolLinerJson.length_feet;
    var linerCoverArea = linerLength * linerWidth;
    var unitsNeeded = Math.floor(poolLinerSize / (linerCoverArea));
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
        const price = await calculatePoolLinerPrice(length, width, depth, deepDepth, floorType, name)
        
        // Create a new JSON object with the name and price fields
        const option = { "name": name, "price": price };
        
        // Add the new JSON object to the empty JSON array
        poolLinerOptions.push(option);
    }
    return poolLinerOptions;
}

////////////////////////////////
////////// FIBERGLASS //////////
////////////////////////////////

export async function calculatePoolFiberglassShellPrice(product_name)
{

    if (product_name == null) {return 0}

    var fiberglassShellJson = (await get_fiberglass_shell(product_name))[0];
    
    return fiberglassShellJson['cost'];
}
export async function getAllFiberglassShellPrices()
{
    var fiberglassShellOptions = (await get_fiberglass_shell());
    
    return fiberglassShellOptions;
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

    if (product_name == null) {return 0}

    var winterCoverSize = calculatePoolWinterCoverArea(length, width);
    var winterCoverJson = (await get_winter_covers(product_name))[0];

    var winterCoverLength = winterCoverJson.length_feet;
    var winterCoverWidth = winterCoverJson.width_feet;
    var winterCoverArea = winterCoverLength * winterCoverWidth;
    var unitsNeeded = Math.floor(winterCoverSize / winterCoverArea);
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

    if (product_name == null) {return 0}

    var solarCoverSize = calculatePoolSolarCover(length, width);
    var solarCoverJson = (await get_solar_covers(product_name))[0];

    var solarCoverLength = solarCoverJson.length_feet;
    var solarCoverWidth = solarCoverJson.width_feet;
    var solarCoverArea = solarCoverLength * solarCoverWidth;
    var unitsNeeded = Math.floor(solarCoverSize / solarCoverArea);
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
export function calculatePoolFilterPrice(length, width, depth, deepDepth, floorType)
{
    var gallons = calculateGallons(length, width, depth, deepDepth, floorType);
    return calculatePoolFilter(gallons);
}
export function getFilter(name)
{
    const filters = [
        {
          "Filter": "ProSeries 24 in. 3.14 sq. ft. Pool Sand Filter with 2 in. Valve",
          "Cost": 599.00,
          "Square Feet": 3.14
        },
        {
          "Filter": "425 sq. ft. SwimClear Cartridge Filter",
          "Cost": 1368.87,
          "Square Feet": 425
        },
        {
          "Filter": "24 in. Swimming Pool Sand Filter System with 7-Way Valve In-Ground",
          "Cost": 349.95,
          "Square Feet": 2
        },
        {
          "Filter": "36 sq. ft. ProGrid D.E. Filter",
          "Cost": 1008.99,
          "Square Feet": 4
        },
        {
          "Filter": "ProSeries 21 in. 2.20 sq. ft. Pool Sand Filter with 1.5 HP Matrix Pump",
          "Cost": 796.00,
          "Square Feet": 2.2
        },
        {
          "Filter": "40 sq. ft. Perflex D.E. Filter",
          "Cost": 959.00,
          "Square Feet": 40
        }
      ];
      return filters.find(item => item.Filter == name).Cost;

}
function calculatePoolFilter(gallons)
{

    //This calculatees the appropriate filter based on the pools volume
    //Inputs: Pool Gallons
    var filterSqFt = gallons / 10000;
    const filters = [
        {
          "Filter": "ProSeries 24 in. 3.14 sq. ft. Pool Sand Filter with 2 in. Valve",
          "Cost": 599.00,
          "Square Feet": 3.14
        },
        {
          "Filter": "425 sq. ft. SwimClear Cartridge Filter",
          "Cost": 1368.87,
          "Square Feet": 425
        },
        {
          "Filter": "24 in. Swimming Pool Sand Filter System with 7-Way Valve In-Ground",
          "Cost": 349.95,
          "Square Feet": 2
        },
        {
          "Filter": "36 sq. ft. ProGrid D.E. Filter",
          "Cost": 1008.99,
          "Square Feet": 4
        },
        {
          "Filter": "ProSeries 21 in. 2.20 sq. ft. Pool Sand Filter with 1.5 HP Matrix Pump",
          "Cost": 796.00,
          "Square Feet": 2.2
        },
        {
          "Filter": "40 sq. ft. Perflex D.E. Filter",
          "Cost": 959.00,
          "Square Feet": 40
        }
      ]
      filters.sort((a, b) => Math.abs(filterSqFt - a["Square Feet"]) - Math.abs(filterSqFt - b["Square Feet"]));
      return filters[0].Cost;
}
export function calculatePoolPumpPrice(length, width, depth, deepDepth, floorType)
{
    var gallons = calculateGallons(length, width, depth, deepDepth, floorType);
    return calculatePoolPump(gallons);
}
export function getPump(name)
{

    if (name == null) {return 0}
    const pumps = [
        {
          "Pumps": "Self-Priming Dual Speed In-Ground Pool Pump 2 in",
          "Cost": 407.55,
          "Horsepower": 2
        },
        {
          "Pumps": "PowerFlo LX 115-Volt 1½ in. Plumbing",
          "Cost": 371.88,
          "Horsepower": 1.5
        },
        {
          "Pumps": "Energy Efficient Variable Dual Speed Swimming Pool Pump Strainer",
          "Cost": 214.07,
          "Horsepower": 1
        }
      ];
      return pumps.find(item => item.Pumps == name).Cost;


}
function calculatePoolPump(gallons)
{
    //this calculates the pools pumps needed. 
    //Inputs: gallons
    var hpNeeded = (gallons / 24) / 60;
    hpNeeded = hpNeeded / 15;
    const pumps = [
        {
          "Pumps": "Self-Priming Dual Speed In-Ground Pool Pump 2 in",
          "Cost": 407.55,
          "Horsepower": 2
        },
        {
          "Pumps": "PowerFlo LX 115-Volt 1½ in. Plumbing",
          "Cost": 371.88,
          "Horsepower": 1.5
        },
        {
          "Pumps": "Energy Efficient Variable Dual Speed Swimming Pool Pump Strainer",
          "Cost": 214.07,
          "Horsepower": 1
        }
      ];
      pumps.sort((a, b) => Math.abs(hpNeeded - a.Horsepower) - Math.abs(hpNeeded - b.Horsepower))
      return pumps[0].Cost;

}
export function calculateRebar(length, width, depth)
{
    //This calculates the rebar needed with 2 inch spacing from its depth 1, length, and width
    //Inputs:Pool Length, Width, Depth, Rebar name/price
    //call to get rebar price if not included
    //database call to get the price of rebar based on name
    var areaForBar = Math.round(2 * (length * 6 * depth) + 2 * (width * 6 * depth));
    areaForBar = areaForBar * 0.71;
    return areaForBar;
}
export function getSkimmerPrice(name)
{

    if (name == null) {return 0}

    const skims = [
        {
          "Name": "Hayward SP1091LX Dyna-Skim Above-Ground Pool Skimmer",
          "Price": 54.41
        },
        {
          "Name": "Swimline 8940 Complete Standard Thru-Wall Skimmer, One Size, Multi",
          "Price": 44.95
        },
        {
          "Name": "Swimline SPAG8939 Complete Wide Mouth Thru-Wall Skimmer, One Size, Multi",
          "Price": 59.95
        },
        {
          "Name": "Hayward SP1091WM Dyna-Skim Above-Ground Pool Skimmer",
          "Price": 94.99
        },
        {
          "Name": "Hayward SP10841 Auto-Skim In-Ground Pool Skimmer, Square",
          "Price": 195.01
        }
      ];
      return skims.find(item => item.Name == name).Price;
}
export function getAllSkimmerPrices()
{
    return [
        {
          "Name": "Hayward SP1091LX Dyna-Skim Above-Ground Pool Skimmer",
          "Price": 54.41
        },
        {
          "Name": "Swimline 8940 Complete Standard Thru-Wall Skimmer, One Size, Multi",
          "Price": 44.95
        },
        {
          "Name": "Swimline SPAG8939 Complete Wide Mouth Thru-Wall Skimmer, One Size, Multi",
          "Price": 59.95
        },
        {
          "Name": "Hayward SP1091WM Dyna-Skim Above-Ground Pool Skimmer",
          "Price": 94.99
        },
        {
          "Name": "Hayward SP10841 Auto-Skim In-Ground Pool Skimmer, Square",
          "Price": 195.01
        }
      ];
}
export function getDrainPrice(name)
{

    if (name == null) {return 0}

    const drains = [
        {
          "Name": "Tongoss 8 Bottom Pool Drain Cover",
          "Price": 14.99
        },
        {
          "Name": "Polaris 5820 Main Drain Cover",
          "Price": 84.98
        },
        {
          "Name": "Hayward WG1030AVDGRPAK2 Dark Gray Dual Suction Flow Drain Cover and Frame",
          "Price": 48.99
        },
        {
          "Name": "Anti-Vortex Main Drain Suction Cover Plate For In-Ground Swimming Pools",
          "Price": 22.97
        },
        {
          "Name": "Color Match Pool Fittings 8-inch VGB Retro-Fit Universal Drain Cover & Adaptor Plate (White)",
          "Price": 38.95
        }
      ];
      return drains.find(item => item.Name = name).Price;
}
export function getAllDrainPrices()
{
    return [
        {
          "Name": "Tongoss 8 Bottom Pool Drain Cover",
          "Price": 14.99
        },
        {
          "Name": "Polaris 5820 Main Drain Cover",
          "Price": 84.98
        },
        {
          "Name": "Hayward WG1030AVDGRPAK2 Dark Gray Dual Suction Flow Drain Cover and Frame",
          "Price": 48.99
        },
        {
          "Name": "Anti-Vortex Main Drain Suction Cover Plate For In-Ground Swimming Pools",
          "Price": 22.97
        },
        {
          "Name": "Color Match Pool Fittings 8-inch VGB Retro-Fit Universal Drain Cover & Adaptor Plate (White)",
          "Price": 38.95
        }
      ];
}
/////////////////////////////
////////// PLASTER //////////
/////////////////////////////

function calculatePlaster(length, width, depth, deepDepth, floorType)
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

    if (product_name == null) {return 0}

    var plasterlbsNeeded = calculatePlaster(length, width, depth, deepDepth, floorType);
    var plasterJson = (await get_plaster_data(product_name))[0];

    var plasterlbs = plasterJson.bag_size_pounds;
    var unitsNeeded = Math.floor(plasterlbsNeeded / plasterlbs);
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

function calculatePoolSurfaceArea(length, width, depth, deepDepth, floorType)
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
function calculatePoolVolume(length, width, depth, deepDepth, floorType)
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