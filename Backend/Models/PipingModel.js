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
        type: DataTypes.DOUBLE 
    },
    linft_cost:{
        type: DataTypes.DOUBLE
    }
},{
    freezeTableName:true
});
 
 (async () => {
     await db.sync();
 })();

const piping_data = [
    {'name': 'Charlotte Pipe', 'type': 'Rigid PVC', 'linft_cost': 4.44},
    {'name': 'Hydromaxx Flexible PVC', 'type': 'Flex PVC', 'linft_cost': 4.01},
    {'name': '1in 250 PSI Black Poly Pipe', 'type': 'Black Poly', 'linft_cost': 1.25},
   ]

 db.sync({ force: true }).then(() => {
 Piping.bulkCreate(piping_data, { validate: true }).then(() => {
 }).catch((err) => { console.log(err); });
 }).catch((error) => {
 console.error('Unable to create the table : ', error);
 });
 
export default Piping;