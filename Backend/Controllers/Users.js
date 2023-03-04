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
    }
}
 
export const Register = async(req, res) => {
    const { username, email, password, confPassword } = req.body;
    if(password !== confPassword) return res.status(400).json({msg: "Passwords do not match"});
    if(isEmailValid(email) == false) return res.status(400).json({msg: "Email is invalid!"});
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
        
    }
}

var emailRegex = /^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;

export function isEmailValid(email) {
    if (!email)
        return false;

    if(email.length>254)
        return false;

    var valid = emailRegex.test(email);
    if(!valid)
        return false;

    // Further checking of some things regex can't handle
    var parts = email.split("@");
    if(parts[0].length>64)
        return false;

    var domainParts = parts[1].split(".");
    if(domainParts.some(function(part) { return part.length>63; }))
        return false;

    return true;
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
        if(isEmailValid(email) == false) return res.status(400).json({msg: "Email is invalid!"});
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
    if(isEmailValid(req.body.email) == true){
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
    else {
        try {
            const user = await Users.findAll({
                where:{
                    username: req.body.username
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
            res.status(404).json({msg:"Username not found"});
        }
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