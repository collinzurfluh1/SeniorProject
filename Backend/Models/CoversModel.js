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
    length_feet:{
        type: DataTypes.DOUBLE // for now. we will use numrange type in future.
    },
    width_feet:{
        type: DataTypes.DOUBLE // for now. we will use numrange type in future.
    },
    cost:{
        type: DataTypes.DOUBLE
    }
},{
    freezeTableName:true
});
 
// (async () => {
//     await db.sync();
// })();

const cover_data = [
    {'name': 'Sun2Solar Blue', 'type': 'solar', 'length_feet': 32, 'width_feet': 16, 'cost': 172.92},
    {'name': 'Blue Wave', 'type': 'solar', 'length_feet': 32, 'width_feet': 16, 'cost': 204.27},
    {'name': 'BigXwell Pool Solar Cover', 'type': 'solar', 'length_feet': 24, 'width_feet': 12, 'cost': 209.99},
    {'name': 'In The Swim Pool Solar Cover', 'type': 'solar', 'length_feet': 40, 'width_feet': 20, 'cost': 154.99},
    {'name': 'Midwest Canvas Pool Solar over', 'type': 'solar', 'length_feet': 36, 'width_feet': 18, 'cost': 236.80},
    {'name': 'Robelle 353050R Super Winter Pool Cover', 'type': 'winter', 'length_feet': 50, 'width_feet': 30, 'cost': 183.04},
    {'name': 'Blue Wave BWC752 Bronze Pool Winter Cover', 'type': 'winter', 'length_feet': 40, 'width_feet': 20, 'cost': 129.98},
    {'name': 'Pool Mate Heavy Duty Winter Cover', 'type': 'winter', 'length_feet': 40, 'width_feet': 20, 'cost': 120.79},
    {'name': 'Vevor Winter Cover', 'type': 'winter', 'length_feet': 36, 'width_feet': 18, 'cost': 601.09},
    {'name': 'Blue Wave BWC958 Pool Winter Cover', 'type': 'winter', 'length_feet': 32, 'width_feet': 16, 'cost': 164.98}
   ]

// db.sync({ force: true }).then(() => {
// Covers.bulkCreate(cover_data, { validate: true }).then(() => {
// }).catch((err) => { console.log(err); });
// }).catch((error) => {
// console.error('Unable to create the table : ', error);
// });
 
export default Covers;