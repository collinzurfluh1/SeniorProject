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
                     {'name': 'Sider Pool Plaster - 55 lb', 'type': 'plaster', 'pound_cost': 1.74},
                     {'name': 'Pool Patch White Pool Plaster - 25 lb', 'type': 'plaster', 'pound_cost': 3.78},
                     {'name': 'Sakrete 80 lb Gray Concrete Mix', 'type': 'concrete', 'pound_cost': 0.08},
                     {'name': 'Quikrete 50 lb. Fast-Setting Mix', 'type': 'concrete', 'pound_cost': 0.14},
                     {'name': 'Sakrete 60 lb High Strength Concrete Mix', 'type': 'concrete', 'pound_cost': 0.08},
                     {'name': 'Sakrete 50 lb Fast Set Concrete Mix', 'type': 'concrete', 'pound_cost': 0.12},
                     {'name': 'Rapid Set 60 lb. Concrete Mix', 'type': 'concrete', 'pound_cost': 0.27},
                     {'name': 'Sakrete 50 lb. Crack Resistant Fiber Reinforced Concrete Mix', 'type': 'concrete', 'pound_cost': 0.12},
                     {'name': 'Sakrete Pro Mix 50 lb. All Purpose Mix', 'type': 'concrete', 'pound_cost': 0.53}
                    ]

db.sync({ force: true }).then(() => {
    Cement.bulkCreate(cement_data, { validate: true }).then(() => {
    }).catch((err) => { console.log(err); });
    }).catch((error) => {
    console.error('Unable to create the table : ', error);
    });

export default Cement;