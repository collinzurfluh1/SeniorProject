//Things still needed to be added in during calculations 
//Drains, Pumps, Skimmer


function calculatePrice(poolMaterials, basinType)
{
    //This funciton is the main function that will set which pool type to calculate for
    //This function will take in an array of values that are passed in from the front end based on user selection including all of thier selections
    //Then after it has the values it will pass the values into their appropriate pool type.
    if(basinType.equal("Fiberglass"))
    {
        var poolObject = calculateFiberglass(poolMaterials);
        return poolObject;
    }
    else if(basinType.equals("vinyl"))
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
    */
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
    var pumpInformation = calculatePoolPump(gallons, filterInformation[0], poolMaterials[4]);
    var skimmerPrice = poolMaterials[15];//This line will be replaced with a database call for the skimmer price
    var drainPrice = poolMaterials[16] * poolMaterials[17];
    var price = chemicalPrice[0] + chemicalPrice[1] + chemicalPrice[2] + concretePrice + sideWallingCost + waterPrice + poolLinerCost + solarCoverCost + winterCoverCost + filterInformation[1] + pumpInformation[1] + skimmerPrice + drainPrice;
    var poolStatistics = null;//for this I would want to build a pool object and then yeet it through, yes, I know very professional

    return poolStatistics;
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
    calculateSideWalling()
    calculatePoolFilter()
    calculateRebar()
    calculatePlaster()
    *///                0       1       2       3   4           5           6          7        8               9       10      11      12          13              14      15      16      17
    //poolMaterials = {length, width, depth, type, pipes, chlorineTablet, shockName, ppm, cyanuricAcidName, concrete, plaster, rebar, solarCover, winterCover, basinType, Skimmer, drain, numDrains}
    
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
    */
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
}
function calculateFiberglass(shell)
{
    //This function takes in the input of the shell from the calculation function and then gets the fiberglass shells price
    var fiberglassCost = 10;
    return fiberglassCost;
}
function calculateChemicals(gallons, chlorineTablet, shockName, cyanuricAcidName, ppm)
{
    //This function calculates the cost based on the volume of the pool
    //Inputs: Pools Gallons of Water, chlorine tablet name, shock name, cyanuric acid name, ppm is from user input
    var tabletCount;
    var lbsOfShock;
    var cyanuricAcid;
    if(gallons < 20000)
    {
        tabletCount = 2 * (gallons / 10000);
    }
    else
    {
        tabletCount = 3 * (gallons / 10000);
    }
    lbsOfShock = gallons / 5000;
    switch(ppm)
    {
        case 10:
            cyanuricAcid = .75 + (((gallons - 10000) / 5000) * .5);
            break;
        case 20:
            cyanuricAcid = 1.75 + (((gallons - 10000) / 5000) * .75);
            break
        case 30:
            cyanuricAcid = 2.5 + (((gallons - 10000) / 5000) * 1.25);
            break;
        case 40:
            cyanuricAcid = 3.25 + (((gallons - 10000) / 5000) * 1.75);
            break;
    }
    var cyanuricPrice = cyanuricAcid * cyanuricAcidName;
    var shockPrice = lbsOfShock * shockName;
    var tabletPrice = tabletCount * chlorineTablet;
    var toReturn = {tabletPrice, shockPrice, cyanuricPrice};
    return toReturn;
}
function calculatePipes(pipes, depth, length, width)
{
    //This function calculates the length and cost of pipe based on the type of pipe and perimeter of the pool
    //Inputs: Pipe Price/Name, Pools Max Depth, Length, and Width
    var pipeLength = (length * 1.75) + (width * 2) + (depth * 1.1) + 20;
    return (pipeLength * pipes);
}

function calculateConcrete(length, width, depth, surfaceArea, concrete, type)
{
    //This calculates the total cost of concrete through cubic and square feet cost around and inside the pool.
    //Inputs: Length, Width, Depth, Surface Area, Concrete Price, BasinType
    //database call for concrete price
    var concretePriceSqFT = concrete;
    var concretePriceCbFT = concrete;
    var totalPrice;
    if(type == 1)//pool gunite
    {
        var totalPrice = surfaceArea * concretePriceSqFT; 
        totalPrice = concretePriceCbFT * ((length + 1) * (width + 1) * depth) - (length * width * depth);
        totalPrice = concretePriceSqFT * ((length + 3) * (width + 3)) - (length * width);
        return totalPrice;
    }
    if (type == 2)//pool fiberglass
    {
        var totalPrice = (surfaceArea * 1.1) * concretePriceSqFT;
        totalPrice = concretePriceSqFT * ((length + 3) * (width + 3)) - (length * width);
        return totalPrice;
    }
    if (type == 3)//pool vinyl
    {
        var totalPrice = calculatePoolFloor(length, width, depth) * concretePriceSqFT; 
        totalPrice = concretePriceCbFT * ((length + 1) * (width + 1) * depth) - (length * width * depth);
        totalPrice = concretePriceSqFT * ((length + 3) * (width + 3)) - (length * width);
        return totalPrice;
    }
}

function calculateWater(gallons)
{
    //This calculates the total cost of water for a pool based on the pools volume.
    //Inputs: Pools Volume
    var waterPrice = 0.005;//random value, gotten from database
     varprice = volume * waterPrice;
    return price;
}
function calcualteGallons(volume)
{

    return (volume * 7.47);
}
function calculateSideWalling(length, width, sideWalling)
{
    //This calculates the steel side walling for a pool
    //Inputs: Pools Length, Width, Depth 1, Price/Name of side walling
    //database call for sidewalling price
    var sideWallingPrice = sideWalling; //Database call for sidewalling price based on name;
    var price = sideWalling * (2 * (width * sideWalling) + 2 * (length * sideWalling));
    return price;
}
function calculatePoolLiner(surfaceArea, liner)
{
    //This calculates the cost of a vinyl pools liner based on its surface area.
    //Inputs: Pools Surface Area, Liner price/name
    var poolLinerPrice = liner; //Database call for liner price
    var price = surfaceArea * liner * 1.05;
    return price;
}
function calculatePoolWinterCover(length, width, winterCover)
{
    //This calculates the cost of a winter pool cover based on the Length and Width of a pool
    //Inputs: pools Length, width, Winter Cover Price/Name
    var winterCoverPrice = winterCover; //database call to get the winter cover price
    var price = winterCoverPrice * (width + 1) * (length + 1);

    return price;
}
function calculatePoolSolarCover(length, width, solarCover)
{
    //This calculates the cost of the pools solar cover based on its length and width
    //Inputs: Pool Length, Width, Solar Cover Price/Name
    //function call for solar cover price
    var solarCoverPrice = solarCover; //database call to get the solar cover price;
    var price = width * length * solarCover;
    return price;
}
function calculatePoolFilter(gallons)
{
    //This calculatees the appropriate filter based on the pools volume
    //Inputs: Pool Gallons
    var filterSqFt = gallons / 10000;
    //database call for filter of that size&Name and returns both to be returned
    var price;
    return price;

}
function calculateRebar(length, width, depth, rebar)
{
    //This calculates the rebar needed with 2 inch spacing from its depth 1, length, and width
    //Inputs:Pool Length, Width, Depth, Rebar name/price
    //call to get rebar price if not included
    var rebarPrice = rebar; //database call to get the price of rebar based on name
    var areaForBar = rebarPrice * (2(length * 6 * depth) + 2(width * 6 * depth));

    return areaForBar;
}
function calculatePlaster(surfaceArea, plaster)
{
    //This calculates the cost of plaster
    //Inputs: Pools Surface Area, Cost of Plaster/Name of Plaster
    //Call to get Plaster(Or pass in plaster price)
    var plasterPrice = plaster;//database call for plaster price
    return (surfaceArea * plasterPrice);
}
function calculatePoolSurfaceArea(length, width, depth, basinType)
{
    //This calculates the pools surface area
    //Inputs: Pools Length, Depth's, Widths, Type of Basin

    if(basinType.equals("Diver"))
    {
        var volume = 2(width * depth[0]) + 2(length * depth[0]) + calculatePoolFloor(length, width, depth);
    }
    else if(basinType.equals("Slant"))
    {
        var surfaceArea = (width * depth[0]) + (width * depth[1]) + 2(length * ((depth[1] - depth[0]) / 2)) + (width * Math.sqrt(Math.pow(width, 2) + Math.pow((depth[1] - depth[0]), 2)));
        return surfaceArea;
    }
    else
    {
        var surfaceArea = (length * width) + 2(width * depth) + 2(length * depth);
        return surfaceArea;
    }

}
function calculatePoolVolume(length, width, depth, basinType)
{
    //this calculates the pools volume
    //Inputs:Pools Length, Width, Depth, Basin Type

    if(basinType.equals("Diver"))
    {
        //later
        var volume = length * width * depth[0] + ((width * (length * .75) * (depth[1] - depth[0]))/3);
        return volume;
    }
    else if(basinType.equals("Slant"))
    {
        var volume = length * width * ((depth[0] + depth[1] - .75)/2);
        return volume;
    }
    else
    {
        var volume = length * (depth - .75) * width; //calculations done in feet
        return volume;
    }
}
function calculatePoolPump(gallons, filter, pipes)
{
    //this calculates the pools pumps needed. 
    //Inputs: gallons, filter
    //For each 1.5-inch intake line, the maximum flow rate is 42 gallons per minute.
    //For each 2-inch intake line, the maximum flow rate is 73 gallons per minute.
    //This function will need to get various parameters about the pool filter in order to appropriately calculate the required pool pump.
    //pipes will also need to be known for their inch intake.





}
function calculatePoolFloor(length, width, depth)
{
    var shallow = width * (length/4);
    var baseWidth = width / 2;
    var baseLength = length * (7/40);
    var dd = depth[1] - depth[0];
    var trapizoid1 = ((baseWidth + width)/2) * Math.pow((Math.pow(dd, 2) + Math.pow((length/2), 2)), .5);
    var trapizoid2 = 2 * (((0.75 * length) + length)/2) * Math.pow((Math.pow(dd,2) + Math.pow((.25 * width), 2)), 0.5);
    var base = baseLength * baseWidth;
    var trapizoid3 = ((baseWidth + width) / 2) * Math.pow((Math.pow(dd, 2) + Math.pow(((3 & length)/40), 2)), .5); 
    var poolFloorSurfaceArea = shallow + trapizoid1 + trapizoid2 + base + trapizoid3;
    return poolFloorSurfaceArea;
}
function gatherPoolItemnames(itemRequested)
{
    //this funciton takes in a string that will then be used to gather items of that type from the database
    switch(itemRequested)
    {
        case "concrete":
            //database call for all concrete
        case "pump":
            //database call for all pumps
        case "plaster":
            //database call for all plaster
        case "rebar":
            //database call for all rebar
        case "filter":
            //database call for all filter
        case "solarCover":
            //database call for all solar covers
        case "winterCover":
            //database call for all winter covers
        case "liner":
            //database call for all liners
        case "sideWalling":
            //database call for all steel side wallings
        case "fiberglass":
            //database call for all fiberglass shells
        case "pipes":
            //database call for all pipes
        case "chemicals":
            //database call for all chemicals
        default:
            return null;//default not supposed to happen, if it does you messed up on input
    }
}