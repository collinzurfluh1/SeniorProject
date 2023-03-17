import { Sequelize } from "sequelize";
import db from "../config/Database.js";
 
const { DataTypes } = Sequelize;
 
const Users = db.define('users',{
    username:{
        type: DataTypes.STRING,
        unique: {
            args: true,
            msg: 'Username already in use!'
        }
    },
    email:{
        type: DataTypes.STRING,
        unique: {
            args: true,
            msg: 'Email address already in use!'
        }
    },
    password:{
        type: DataTypes.STRING
    },
    refresh_token:{
        type: DataTypes.TEXT
    }
},{
    freezeTableName:true
});
 
//  (async () => {
//      await db.sync({ force: true, logging: true });
//  })();
 
export default Users;