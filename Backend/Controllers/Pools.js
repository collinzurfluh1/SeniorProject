import Pool from "../Models/PoolsModel.js";
import jwt_decode from "jwt-decode";
import axios from 'axios';

export const getUserPools = async(req, res) => {

    try{
        const pools = await Pool.findAll({
        where:{
            owner: username
        }
    });
    res.json(pools);
    }catch (error) {
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
    }
}
 