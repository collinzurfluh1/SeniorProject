import Pool from "../Models/PoolsModel.js";
import jwt_decode from "jwt-decode";
import axios from 'axios';

let username = ""

const refreshToken = async () => {
    try {
        const response = await axios.get('http://localhost:4000/token');
        const decoded = jwt_decode(response.data.accessToken);
        username = decoded.username;
        console.log(username);
    } catch (error) {
        console.log(error);
  }
}

export const getUserPools = async(req, res) => {
    refreshToken();
    try{
        const pools = await Pool.findAll({
        where:{
            owner: username
        }
    });
    res.json(pools);
    }catch (error) {
        console.log(error);
    }
    
}

export const getPools = async(req, res) => {
    try {
        const pools = await Pool.findAll({
            where: {
                pulic: true
            }
        });
        res.json(pools);
    } catch (error) {
        console.log(error);
    }
}
 