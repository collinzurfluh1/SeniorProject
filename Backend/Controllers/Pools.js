import Pool from "../Models/PoolsModel.js";
import jwt_decode from "jwt-decode";
import axios from 'axios';

export const savePools = async(req, res) => {
    const { owner, length, width, depth_shallow,
         depth_deep, slant_type, lining_type, cover1,
        cover2, piping, drain, skimmer, pump, cost} = req.body;
        console.log(req.body);
    try{
        await Pool.create({
            owner: req.body.owner,
            title: req.body.title,
            original_creator: req.body.original_creator,
            pulic: req.body.pulic,
            concrete: req.body.concrete,
            plaster: req.body.plaster,
            fiberglass_shell: req.body.fiberglass_shell,
            steel_wall: req.body.steel_wall,
            basin_type: req.body.basin_type,
            length: req.body.length,
            width: req.body.width,
            depth_shallow: req.body.depth_shallow,
            depth_deep: req.body.depth_deep,
            slant_type: req.body.slant_type,
            lining_type: req.body.lining_type,
            cover1: req.body.cover1,
            cover2: req.body.cover2,
            piping: req.body.piping,
            drain: req.body.drain,
            skimmer: req.body.skimmer,
            pump: req.body.pump,
            shock: req.body.shock,
            cyanuricAcid: req.body.cyanuricAcid,
            chlorine: req.body.chlorine,
            cost: req.body.cost,

        });
        res.json({msg: "Pool Save Successful"});
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
    }
}

export const editPools = async(req, res) => {
    const { owner, length, width, depth_shallow,
         depth_deep, slant_type, lining_type, cover1,
        cover2, piping, drain, skimmer, pump, cost} = req.body;
        console.log(req.body);
    try{
        await Pool.update({
            owner: req.body.owner,
            title: req.body.title,
            original_creator: req.body.original_creator,
            pulic: req.body.pulic,
            concrete: req.body.concrete,
            plaster: req.body.plaster,
            fiberglass_shell: req.body.fiberglass_shell,
            steel_wall: req.body.steel_wall,
            basin_type: req.body.basin_type,
            length: req.body.length,
            width: req.body.width,
            depth_shallow: req.body.depth_shallow,
            depth_deep: req.body.depth_deep,
            slant_type: req.body.slant_type,
            lining_type: req.body.lining_type,
            cover1: req.body.cover1,
            cover2: req.body.cover2,
            piping: req.body.piping,
            drain: req.body.drain,
            skimmer: req.body.skimmer,
            pump: req.body.pump,
            shock: req.body.shock,
            cyanuricAcid: req.body.cyanuricAcid,
            chlorine: req.body.chlorine,
            cost: req.body.cost,

        }, {
            where: {
                id: req.body.id
            }
        });
        res.json({msg: "Pool Save Successful"});
    }catch (error) {
        console.log(error);
    }
    
}
 