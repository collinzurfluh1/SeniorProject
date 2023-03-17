import { Sequelize } from "sequelize";
import db from "../config/Database.js";
 
const { DataTypes } = Sequelize;

/*
id
owner
original_creator
public

length
width
depth

cement
cover
piping


cost
*/
 
const Pools = db.define('pools',{
    // Asset Information
    id:{
        type: DataTypes.INTEGER, // we can make this int.
        primaryKey: true,
        autoIncrement: true,
        unique: {
            args: true,
            msg: 'pool id already exists.'
        }
    },
    owner:{
        type: DataTypes.STRING, // This should be same as username
    },
    title:{
        type: DataTypes.STRING, // This should be same as username
    },
    original_creator:{
        type: DataTypes.BOOLEAN  // This should be same as username
    },
    pulic:{
        type: DataTypes.BOOLEAN  // Should the pool be available in the community
    },
    // Dimentions
    length:{
        type: DataTypes.DOUBLE
    },
    width:{
        type: DataTypes.DOUBLE
    },
    depth_shallow:{
        type: DataTypes.DOUBLE
    },
    depth_deep:{ 
        type: DataTypes.DOUBLE // should be same as shallow if no slant.
    },
    slant_type:{
        type: DataTypes.STRING // can be flatbed, slant, diver
    },
    basin_type:{
        type: DataTypes.STRING // can be Gunnite, Vinyl, or Fiberglass
    },
    // Lining/Construction of the pool
    lining_type:{
        type: DataTypes.STRING  // name of product
    },
    fiberglass_shell:{
        type: DataTypes.STRING  // name of product
    },
    steel_wall:{
        type: DataTypes.STRING  // name of product
    },
    // Materials
    concrete:{
        type: DataTypes.STRING  // name of product
    },
    plaster:{
        type: DataTypes.STRING  // name of product
    },
    //There are more columns we will need to include
    //Other Elemtns of the pool
    cover1:{
        type: DataTypes.STRING  // name of product
    },
    cover2:{
        type: DataTypes.STRING  // name of product
    },
    piping:{
        type: DataTypes.STRING  // name of product
    },
    drain:{
        type: DataTypes.STRING  // name of product
    },
    skimmer:{
        type: DataTypes.STRING  // name of product
    },
    pump:{
        type: DataTypes.STRING  // name of product
    },
    //chemicals
    chlorine:{
        type: DataTypes.STRING  // name of product
    },
    cyanuric_acid:{
        type: DataTypes.STRING  // name of product
    },
    shock:{
        type: DataTypes.STRING  // name of product
    },
    //Cost, this is the last column that will be filled.
    cost:{
        type: DataTypes.DOUBLE  // total cost of the pool from MaterialCalculations.js
    }
},{
    freezeTableName:true
});
 
// (async () => {
//     await db.sync({ force: true });
// })
 

export default Pools;