import { Sequelize } from "sequelize";
import db from "../config/Database.js";
 
const { DataTypes } = Sequelize;
 
const Liners = db.define('liners',{
    name:{
        type: DataTypes.STRING,
        unique: {
            args: true,
            msg: 'liner name already exists.'
        }
    },
    type:{
        type: DataTypes.STRING,
    },
    length_feet:{
        type: DataTypes.DOUBLE,
    },
    width_feet:{
        type: DataTypes.DOUBLE,
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

const liners_data = [
    {'name': '18 x 36 Rectangle Inground Swimming Pool Liners - Cambridge Aquarius', 'type': 'vinyl', 'length_feet': 36, 'width_feet': 18, 'cost:': 1663.00},
    {'name': '16’6″ x 32’6″ Grecian Inground Swimming Pool Liners - Amelia', 'type': 'vinyl', 'length_feet': 32.5, 'width_feet': 16.5, 'cost:': 1365.00},
    {'name': '20 x 40 Rectangle Inground Swimming Pool Liners - Cambridge Aquarius', 'type': 'vinyl', 'length_feet': 40, 'width_feet': 20, 'cost:': 1960.00},
    {'name': '20 x 40 Rectangle Inground Swimming Pool Liners - Electric Blue Oxford', 'type': 'vinyl', 'length_feet': 40, 'width_feet': 20, 'cost:': 2205.00},
    {'name': '18 x 36 Rectangle Inground Swimming Pool Liners – Sunburst Tile', 'type': 'vinyl', 'length_feet': 36, 'width_feet': 18, 'cost:': 1413.00},
    {'name': '16 x 32 Rectangle Inground Swimming Pool Liners - Greystone River Blue', 'type': 'vinyl', 'length_feet': 32, 'width_feet': 16, 'cost:': 1150.00},
    {'name': '16 x 32 Rectangle Inground Swimming Pool Liners - Electric Blue Oxford', 'type': 'vinyl', 'length_feet': 32, 'width_feet': 16, 'cost:': 1645.00},
    {'name': '18 x 36 Rectangle Inground Swimming Pool Liners - Honolulu Reflections', 'type': 'vinyl', 'length_feet': 36, 'width_feet': 18, 'cost:': 1708.00},
    {'name': '20 x 40 Rectangle Inground Swimming Pool Liners - Samara Coast', 'type': 'vinyl', 'length_feet': 40, 'width_feet': 20, 'cost:': 2205.00}
   ]

// db.sync({ force: true }).then(() => {
// Liners.bulkCreate(liners_data, { validate: true }).then(() => {
// }).catch((err) => { console.log(err); });
// }).catch((error) => {
// console.error('Unable to create the table : ', error);
// });
 
export default Liners;