import { Sequelize } from "sequelize";
import db from "../config/Database.js";
 
const { DataTypes } = Sequelize;
 
const Covers = db.define('covers',{
    name:{
        type: DataTypes.STRING
        // unique: {
        //     args: true,
        //     msg: 'Email address already in use!'
        // }
        // This will be unique based on name and sqft range.
    },
    type:{
        type: DataTypes.STRING,
    },
    sqft_range:{
        type: DataTypes.STRING // for now. we will use numrange type in future.
    },
    sqft_cost:{
        type: DataTypes.double
    }
},{
    freezeTableName:true
});
 
(async () => {
    await db.sync();
})();
 
export default Covers;