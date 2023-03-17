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
    quantity:{
        type: DataTypes.DOUBLE
    },
    cost:{
        type: DataTypes.DOUBLE 
    }
},{
    freezeTableName:true
});
 
//  (async () => {
//      await db.sync();
//  })();

const chemicals_data = [
    {'name': 'In The Swim Chlorine Tablets', 'type': 'chlorine', 'quantity': 20, 'cost': 109.99},
    {'name': 'RAYYAKICG 3 in tablets', 'type': 'chlorine', 'quantity': 18, 'cost': 59.99},
    {'name': 'HTH Pool Care 1 in tablets', 'type': 'chlorine', 'quantity': 5, 'cost': 19.25},
    {'name': 'Clorox Pool and SpaXtrablue 3 in tablets', 'type': 'chlorine', 'quantity': 10, 'cost': 69.99},
    {'name': 'RAYYAKICG 1 in Tablets', 'type': 'chlorine', 'quantity': 22, 'cost': 19.99},
    {'name': 'Pool Mate Stabilizer and Conditioner', 'type': 'cyanuric acid', 'quantity': 7, 'cost': 79.99},
    {'name': 'Puri Tect Stabilizer Conditioner', 'type': 'cyanuric acid', 'quantity': 25, 'cost': 78.15},
    {'name': 'Rx Clear Swimming Pool Stabilizer and Conditioner', 'type': 'cyanuric acid', 'quantity': 25, 'cost': 74.99},
    {'name': 'Leisure Pool Chlorine Stabilizer', 'type': 'cyanuric acid', 'quantity': 10, 'cost': 64.99},
    {'name': 'HTH Pool Care Shock', 'type': 'shock', 'quantity': 12, 'cost': 51.58},
    {'name': 'In The Swim Super Pool Shock', 'type': 'shock', 'quantity': 24, 'cost': 62.99},
    {'name': 'Leslie\'s Power Powder', 'type': 'shock', 'quantity': 12, 'cost': 79.99},
    {'name': 'Clorox Pool Aand Spa Pool Shock Xtrablue ', 'type': 'shock', 'quantity': 12, 'cost': 94.50}
   ]

//  db.sync({ force:false }).then(() => {
//  Chemicals.bulkCreate(chemicals_data, { validate: true }).then(() => {
//  }).catch((err) => { console.log(err); });
//  }).catch((error) => {
//  console.error('Unable to create the table : ', error);
//  });
 
export default Chemicals;