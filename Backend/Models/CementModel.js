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
        type: DataTypes.DOUBLE  // Is cement measured in pounds or volume for cost?
    },
},{
    freezeTableName:true
});
 
(async () => {
    await db.sync();
})();
 

const cement_data = [
                     {'name': 'Sider Pool Plaster - 55 lb', 'type': 'plaster', 'bag_cost': 159, 'bag_size_pounds': 55},
                     {'name': 'Pool Patch White Pool Plaster - 25 lb', 'type': 'plaster', 'bag_cost': 99.99, 'bag_size_pounds': 25},
                     {'name': 'Sakrete 80 lb Gray Concrete Mix', 'type': 'concrete', 'bag_cost': 6.15, 'bag_size_pounds': 80},
                     {'name': 'Quikrete 50 lb. Fast-Setting Mix', 'type': 'concrete', 'bag_cost': 6.71, 'bag_size_pounds': 50},
                     {'name': 'Sakrete 60 lb High Strength Concrete Mix', 'type': 'concrete', 'bag_cost': 4.60, 'bag_size_pounds': 60},
                     {'name': 'Sakrete 50 lb Fast Set Concrete Mix', 'type': 'concrete', 'bag_cost': 6.05, 'bag_size_pounds': 50},
                     {'name': 'Rapid Set 60 lb. Concrete Mix', 'type': 'concrete', 'bag_cost': 14.97, 'bag_size_pounds': 60},
                     {'name': 'Sakrete 50 lb. Crack Resistant Fiber Reinforced Concrete Mix', 'type': 'concrete', 'bag_cost': 5.97, 'bag_size_pounds': 50},
                     {'name': 'Sakrete Pro Mix 50 lb. All Purpose Mix', 'type': 'concrete', 'bag_cost': 27.48, 'bag_size_pounds': 50}
                    ]

db.sync({ force: true }).then(() => {
    Cement.bulkCreate(cement_data, { validate: true }).then(() => {
    }).catch((err) => { console.log(err); });
    }).catch((error) => {
    console.error('Unable to create the table : ', error);
    });

export default Cement;