import Users from "../Models/UserModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
 
export const getUsers = async(req, res) => {
    try {
        const users = await Users.findAll({
            attributes:['id','username','email']
        });
        res.json(users);
    } catch (error) {
        console.log(error);
    }
}
 
export const Register = async(req, res) => {
    const { username, email, password, confPassword } = req.body;
    if(password !== confPassword) return res.status(400).json({msg: "Passwords do not match"});
    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(password, salt);
    try {
        await Users.create({
            username: username,
            email: email,
            password: hashPassword
        });
        res.json({msg: "Registration Successful"});
    } catch (error) {
        if(error.code = "ER_DUP_ENTRY"){
            res.status(404).json({msg:"Email already exists!"});
        }
    }
}

export const UpdateUsername = async(req, res) => {
    const { newName, id } = req.body;
    const username = newName;
        if(newName.length < 1){
        return res.status(400).json({msg: "ERROR! Username must be greater than 1 character."});
        }
        else{
            const users = await Users.findOne({ where: { 
                username: username
            } });
            if(users != null){
                return res.status(400).json({msg: "ERROR! Username already Exists."});
            }
            else{
                try {
                    if(newName != "[]"){
                        Users.update({
                            username: newName }, {where: {id: id}}
                        )
                    }
                    res.status(404).json({msg:"Updated Successfully!"});
                    } catch (error) {
            
                }
            }
        }
}

export const UpdateEmail = async(req, res) => {
    const { newEmail, id } = req.body;
    const email = newEmail;
        if(email.length < 1){
        return res.status(400).json({msg: "ERROR! Email must be greater than 1 character."});
        }
        else{
            const users = await Users.findOne({ where: { 
                email: email
            } });
            if(users != null){
                return res.status(400).json({msg: "ERROR! Email already Exists."});
            }
            else{
                try {
                    if(newEmail != "[]"){
                        Users.update({
                            email: email }, {where: {id: id}}
                        )
                    }
                    res.status(404).json({msg:"Updated Successfully!"});
                    } catch (error) {
            
                }
            }
        }
}
 
export const Login = async(req, res) => {
    try {
        const user = await Users.findAll({
            where:{
                email: req.body.email
            }
        });
       
        const match = await bcrypt.compare(req.body.password, user[0].password);
        if(!match) return res.status(400).json({msg: "Wrong Password!"});
        const userId = user[0].id;
        const username = user[0].username;
        const email = user[0].email;
        const accessToken = jwt.sign({userId, username, email}, process.env.ACCESS_TOKEN_SECRET,{
            expiresIn: '15s'
        });
        const refreshToken = jwt.sign({userId, username, email}, process.env.REFRESH_TOKEN_SECRET,{
            expiresIn: '1d'
        });
        await Users.update({refresh_token: refreshToken},{
            where:{
                id: userId
            }
        });
        res.cookie('refreshToken', refreshToken,{
            httpOnly: true,
            maxAge: 24 * 60 * 60 * 1000
        });
        res.json({ accessToken });
    } catch (error) {
        res.status(404).json({msg:"Email not found"});
    }
}
 
export const Logout = async(req, res) => {
    const refreshToken = req.cookies.refreshToken;
    if(!refreshToken) return res.sendStatus(204);
    const user = await Users.findAll({
        where:{
            refresh_token: refreshToken
        }
    });
    if(!user[0]) return res.sendStatus(204);
    const userId = user[0].id;
    await Users.update({refresh_token: null},{
        where:{
            id: userId
        }
    });
    res.clearCookie('refreshToken');
    return res.sendStatus(200);
}