import { Sequelize } from "sequelize";
import db from "../config/Database.js";
 
const { DataTypes } = Sequelize;
 
const Piping = db.define('piping',{
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
    size:{
        type: DataTypes.double // for now. we will use numrange type in future.
    },
    linft_cost:{
        type: DataTypes.double
    }
},{
    freezeTableName:true
});
 
(async () => {
    await db.sync();
})();
 
export default Piping;