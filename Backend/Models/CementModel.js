import { Sequelize } from "sequelize";
import db from "../config/Database.js";
 
const { DataTypes } = Sequelize;
 
const Cement = db.define('cement',{
    name:{
        type: DataTypes.STRING,
        unique: {
            args: true,
            msg: 'cement name already exists.'
        }
    },
    type:{
        type: DataTypes.STRING, // There might not be different types of cement.
    },
    pound_cost:{
        type: DataTypes.double  // Is cement measured in pounds or volume for cost?
    },
},{
    freezeTableName:true
});
 
(async () => {
    await db.sync();
})();
 
export default Cement;