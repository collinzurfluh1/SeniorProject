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

const chemicals_data = [
    {'name': 'In The Swim Chlorine Tablets', 'type': 'chlorine', 'pound_cost': 0.62},
    {'name': 'RAYYAKICG 3 in tablets', 'type': 'chlorine', 'pound_cost': 0.50},
    {'name': 'HTH Pool Care 1 in tablets', 'type': 'chlorine', 'pound_cost': 0.78},
    {'name': 'Clorox Pool and SpaXtrablue 3 in tablets', 'type': 'chlorine', 'pound_cost': 0.30},
    {'name': 'RAYYAKICG 1 in Tablets', 'type': 'chlorine', 'pound_cost': 0.72},
    {'name': 'Pool Mate Stabilizer and Conditioner', 'type': 'cyanuric acid', 'pound_cost': 0.39},
    {'name': 'Puri Tect Stabilizer Conditioner', 'type': 'cyanuric acid', 'pound_cost': 0.20},
    {'name': 'Rx Clear Swimming Pool Stabilizer and Conditioner', 'type': 'cyanuric acid', 'pound_cost': 0.22},
    {'name': 'Leisure Pool Chlorine Stabilizer', 'type': 'cyanuric acid', 'pound_cost': 0.40},
    {'name': 'HTH Pool Care Shock', 'type': 'shock', 'pound_cost': 0.27},
    {'name': 'In The Swim Super Pool Shock', 'type': 'shock', 'pound_cost': 0.49},
    {'name': 'Leslie\'s Power Powder', 'type': 'shock', 'pound_cost': 0.42},
    {'name': 'Clorox Pool Aand Spa Pool Shock Xtrablue ', 'type': 'shock', 'pound_cost': 0.48}
   ]

db.sync({ force: true }).then(() => {
Chemicals.bulkCreate(chemicals_data, { validate: true }).then(() => {
}).catch((err) => { console.log(err); });
}).catch((error) => {
console.error('Unable to create the table : ', error);
});
 
export default Chemicals;