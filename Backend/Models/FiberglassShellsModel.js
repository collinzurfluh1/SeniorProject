import { Sequelize } from "sequelize";
import db from "../config/Database.js";
 
const { DataTypes } = Sequelize;
 
const FiberglassShell = db.define('fiberglassshells',{
    name:{
        type: DataTypes.STRING,
        unique: {
            args: true,
            msg: 'fibergass shell name already exists.'
        }
    },
    length:{
        type: DataTypes.DOUBLE,
    },
    width:{
        type: DataTypes.DOUBLE,
    },
    depth_shallow:{
        type: DataTypes.DOUBLE,
    },
    depth_deep:{
        type: DataTypes.DOUBLE,
    },
    cost:{
        type: DataTypes.DOUBLE,
    }
},{
    freezeTableName:true
});
 
//  (async () => {
//      await db.sync();
//  })();
const fiberglass_shell_data = [
    {'name': 'Free Form Fiberglass', 'length': 30, 'width': 14, 'depth_shallow': 3.3, 'depth_deep': 5.5, 'cost': 19979},
    {'name': 'Lazy L Fiberglass', 'length': 30, 'width': 14, 'depth_shallow': 3.5, 'depth_deep': 6, 'cost': 20979},
    {'name': 'Gaston Thermal Insulated Fiberglass Pool', 'length': 25, 'width': 12, 'depth_shallow': 3.5, 'depth_deep': 5.5, 'cost': 19979},
    {'name': 'Quebec Freeform Fiberglass Thermal Insulated Pool', 'length': 20, 'width': 10, 'depth_shallow': 4.5, 'depth_deep': 4.5, 'cost': 15979},
    {'name': 'Ocean Blue Thermal Insulated Fiberglass Pool', 'length': 22, 'width': 12, 'depth_shallow': 4.5, 'depth_deep': 4.5, 'cost': 17979},
    {'name': 'Three Rivers Fiberglass Thermal Insulated Pool', 'length': 16, 'width': 8, 'depth_shallow': 4.5, 'depth_deep': 4.5, 'cost': 13979},
    {'name': 'Fiberglass Pool Shell Spaggia', 'length': 22.10, 'width': 11.60, 'depth_shallow': 4.7, 'depth_deep': 4.7, 'cost': 14911},
    {'name': 'One Piece Pool Factory Direct', 'length': 26, 'width': 13, 'depth_shallow': 6, 'depth_deep': 6, 'cost': 16250}
   ]

//  db.sync({ force:true }).then(() => {
//  FiberglassShell.bulkCreate(fiberglass_shell_data, { validate: true }).then(() => {
//  }).catch((err) => { console.log(err); });
//  }).catch((error) => {
//  console.error('Unable to create the table : ', error);
//  });
 
export default FiberglassShell;