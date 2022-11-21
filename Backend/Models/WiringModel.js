import { Sequelize } from "sequelize";
import db from "../config/Database.js";
 
const { DataTypes } = Sequelize;
 
const Wiring = db.define('wiring',{
    name:{
        type: DataTypes.STRING,
        unique: {
            args: true,
            msg: 'wire name already exists.'
        }
    },
    type:{
        type: DataTypes.STRING,
    },
    gauge:{
        type: DataTypes.double
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
 
export default Wiring;