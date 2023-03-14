import { Sequelize } from "sequelize";
import db from "../config/Database.js";
 
const { DataTypes } = Sequelize;
 
const SteelWalling = db.define('steelwalling',{
    name:{
        type: DataTypes.STRING,
        unique: {
            args: true,
            msg: 'steelwall name already exists.'
        }
    },
    sqft_cost:{
        type: DataTypes.DOUBLE,
    }
},{
    freezeTableName:true
});
 
 (async () => {
     await db.sync();
 })();

const steelwalling_data = [
    {'name': 'National Pool Whole Salers walling', 'sqft_cost': 44.86},
    {'name': 'Pool Warehouse walling', 'sqft_cost': 42.35}
   ]

 db.sync({ force:true }).then(() => {
 SteelWalling.bulkCreate(steelwalling_data, { validate: true }).then(() => {
 }).catch((err) => { console.log(err); });
 }).catch((error) => {
 console.error('Unable to create the table : ', error);
 });
 
export default SteelWalling;