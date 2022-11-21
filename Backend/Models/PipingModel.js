import { Sequelize } from "sequelize";
import db from "../config/Database.js";
 
const { DataTypes } = Sequelize;
 
const Piping = db.define('piping',{
    name:{
        type: DataTypes.STRING,
        unique: {
            args: true,
            msg: 'pipe name already exists.'
        }
    },
    type:{
        type: DataTypes.STRING,
    },
    size:{
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
 
export default Piping;