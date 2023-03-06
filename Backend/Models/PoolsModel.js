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
        type: DataTypes.STRING // can be None if shallow == deep
    },
    // Lining/Construction of the pool
    lining_type:{
        type: DataTypes.STRING  
    },
    //There are more columns we will need to include
    //Other Elemtns of the pool
    cover1:{
        type: DataTypes.STRING  // ID for product
    },
    cover2:{
        type: DataTypes.STRING  // ID for product
    },
    piping:{
        type: DataTypes.STRING  // ID for product
    },
    drain:{
        type: DataTypes.STRING  // ID for product
    },
    skimmer:{
        type: DataTypes.STRING  // ID for product
    },
    pump:{
        type: DataTypes.STRING  // ID for product
    },
    //Cost, this is the last column that will be filled.
    cost:{
        type: DataTypes.DOUBLE  // 
    }
},{
    freezeTableName:true
});
 
(async () => {
    await db.sync();
})();
 

export default Pools;