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
    cost:{
        type: DataTypes.DOUBLE 
    },
},{
    freezeTableName:true
});
 
// (async () => {
//     await db.sync();
// })();

const chemicals_data = [
    {'name': 'In The Swim Chlorine Tablets', 'type': 'chlorine', 'cost': 109.99},
    {'name': 'RAYYAKICG 3 in tablets', 'type': 'chlorine', 'cost': 59.99},
    {'name': 'HTH Pool Care 1 in tablets', 'type': 'chlorine', 'cost': 19.25},
    {'name': 'Clorox Pool and SpaXtrablue 3 in tablets', 'type': 'chlorine', 'cost': 69.99},
    {'name': 'RAYYAKICG 1 in Tablets', 'type': 'chlorine', 'cost': 19.99},
    {'name': 'Pool Mate Stabilizer and Conditioner', 'type': 'cyanuric acid', 'cost': 79.99},
    {'name': 'Puri Tect Stabilizer Conditioner', 'type': 'cyanuric acid', 'cost': 78.15},
    {'name': 'Rx Clear Swimming Pool Stabilizer and Conditioner', 'type': 'cyanuric acid', 'cost': 74.99},
    {'name': 'Leisure Pool Chlorine Stabilizer', 'type': 'cyanuric acid', 'cost': 64.99},
    {'name': 'HTH Pool Care Shock', 'type': 'shock', 'cost': 51.58},
    {'name': 'In The Swim Super Pool Shock', 'type': 'shock', 'cost': 62.99},
    {'name': 'Leslie\'s Power Powder', 'type': 'shock', 'cost': 79.99},
    {'name': 'Clorox Pool Aand Spa Pool Shock Xtrablue ', 'type': 'shock', 'cost': 94.50}
   ]

// db.sync({ force: true }).then(() => {
// Chemicals.bulkCreate(chemicals_data, { validate: true }).then(() => {
// }).catch((err) => { console.log(err); });
// }).catch((error) => {
// console.error('Unable to create the table : ', error);
// });
 
export default Chemicals;