import { Sequelize } from "sequelize";
import db from "../config/Database.js";
 
const { DataTypes } = Sequelize;
 
const Chemicals = db.define('chemicals',{
    name:{
        type: DataTypes.STRING,
        unique: {
            args: true,
            msg: 'chemical name already exists.'
        }
    },
    type:{
        type: DataTypes.STRING,
    },
    ounce_cost:{
        type: DataTypes.DOUBLE 
    },
},{
    freezeTableName:true
});
 
(async () => {
    await db.sync();
})();
 
export default Chemicals;