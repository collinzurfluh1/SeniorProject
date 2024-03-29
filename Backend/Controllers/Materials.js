import Cement from "../Models/CementModel.js";
import Chemicals from "../Models/ChemicalsModel.js";
import Piping from "../Models/PipingModel.js";
import Covers from "../Models/CoversModel.js";
import Liners from "../Models/LinerModel.js";
import SteelWalling from "../Models/SteelWallingModel.js";
import FiberglassShell from "../Models/FiberglassShellsModel.js";

export async function get_plaster_data(plaster_name) {
    // This function will return a JSON of plaster data. If you pass None you will get all plaster options. 
    // if you pass a name, you will get only the plaster option with that name.

    var plaster_data = null;

    if(plaster_name == null) {
        const plaster_sequelize = await Cement.findAll({ where: { type: 'plaster' } })
        plaster_data = plaster_sequelize.map(cement => cement.get({ plain: true }));
    } else {
        // Cement.findAll({ where: { type: 'plaster', name: plaster_name } })
        // .then(cement => {
        //     const plaincement = cement.map(cement => cement.get({ plain: true }));
        //     // var plaster_data = plaincement;
        // });
        const plaster_sequelize = await Cement.findAll({ where: { type: 'plaster', name: plaster_name } })
        plaster_data = plaster_sequelize.map(cement => cement.get({ plain: true }));
    }

    return plaster_data
}

export async function get_cement_data(cement_name) {
    // This function will return a JSON of cement data. If you pass None you will get all cement options. 
    // if you pass a name, you will get only the cement option with that name.

    var cement_data = null;

    if(cement_name == null) {
        const cement_sequelize = await Cement.findAll({ where: { type: 'concrete' } })
        cement_data = cement_sequelize.map(cement => cement.get({ plain: true }));
        
    } else {
        const cement_sequelize = await Cement.findAll({ where: { type: 'concrete', name: cement_name } })
        cement_data = cement_sequelize.map(cement => cement.get({ plain: true }));;
    }

    return cement_data
}

export async function get_winter_covers(winter_cover_name) {

    var cover_data = null;

    if(winter_cover_name == null) {
        const covers_sequelize = await Covers.findAll({ where: { type: 'winter' } })
        cover_data = covers_sequelize.map(covers => covers.get({ plain: true }));
        
    } else {
        const covers_sequelize = await Covers.findAll({ where: { type: 'winter', name: winter_cover_name } })
        cover_data = covers_sequelize.map(covers => covers.get({ plain: true }));
    }

    return cover_data
}

export async function get_solar_covers(solar_cover_name) {

    var cover_data = null;

    if(solar_cover_name == null) {
        const covers_sequelize = await Covers.findAll({ where: { type: 'solar' } })
        cover_data = covers_sequelize.map(covers => covers.get({ plain: true }));
        
    } else {
        const covers_sequelize = await Covers.findAll({ where: { type: 'solar', name: solar_cover_name } })
        cover_data = covers_sequelize.map(covers => covers.get({ plain: true }));
    }

    return cover_data
}

export async function get_chlorine(chlorine_name) {

    var chemical_data = null;

    if(chlorine_name == null) {
        const chemicals_sequelize = await Chemicals.findAll({ where: { type: 'chlorine' } })
        chemical_data = chemicals_sequelize.map(chemical => chemical.get({ plain: true }));
        
    } else {
        const chemicals_sequelize = await Chemicals.findAll({ where: { type: 'chlorine', name: chlorine_name } })
        chemical_data = chemicals_sequelize.map(chemical => chemical.get({ plain: true }));
    }

    return chemical_data
}

export async function get_cyanuric_acid(cyanuric_acid_name) {

    var chemical_data = null;

    if(cyanuric_acid_name == null) {
        const chemicals_sequelize = await Chemicals.findAll({ where: { type: 'cyanuric acid' } })
        chemical_data = chemicals_sequelize.map(chemical => chemical.get({ plain: true }));
        
    } else {
        const chemicals_sequelize = await Chemicals.findAll({ where: { type: 'cyanuric acid', name: cyanuric_acid_name } })
        chemical_data = chemicals_sequelize.map(chemical => chemical.get({ plain: true }));
    }

    return chemical_data
}

export async function get_shock(shock_name) {

    var chemical_data = null;

    if(shock_name == null) {
        const chemicals_sequelize = await Chemicals.findAll({ where: { type: 'shock' } })
        chemical_data = chemicals_sequelize.map(chemical => chemical.get({ plain: true }));
        
    } else {
        const chemicals_sequelize = await Chemicals.findAll({ where: { type: 'shock', name: shock_name } })
        chemical_data = chemicals_sequelize.map(chemical => chemical.get({ plain: true }));
    }

    return chemical_data
}

export async function get_piping(pipe_type) {

   
    var pipe_data = null;

    if(pipe_type == null) {
        const piping_sequelize = await Piping.findAll()
        pipe_data = piping_sequelize.map(piping => piping.get({ plain: true }));
        
    } else {
        const piping_sequelize = await Piping.findAll({ where: { type: pipe_type } })
        pipe_data = piping_sequelize.map(piping => piping.get({ plain: true }));
    }
    
    return pipe_data
}

export async function get_liner(liner_name) {

    var liner_data = null;

    if(liner_name == null) {
        const liner_sequelize = await Liners.findAll()
        liner_data = liner_sequelize.map(liner => liner.get({ plain: true }));
        
    } else {
        const liner_sequelize = await Liners.findAll({ where: { name: liner_name } })
        liner_data = liner_sequelize.map(liner => liner.get({ plain: true }));
    }

    return liner_data
}

export async function get_steel_walling(steel_wall_name) {

    var steel_wall_data = null;

    if(steel_wall_name == null) {
        const steel_wall_sequelize = await SteelWalling.findAll()
        steel_wall_data = steel_wall_sequelize.map(liner => liner.get({ plain: true }));
        
    } else {
        const steel_wall_sequelize = await SteelWalling.findAll({ where: { name: steel_wall_name } })
        steel_wall_data = steel_wall_sequelize.map(liner => liner.get({ plain: true }));
    }

    return steel_wall_data
}

export async function get_fiberglass_shell(fiberglass_shell_name) {

    var fiberglass_shell_data = null;

    if(fiberglass_shell_name == null) {
        const fiberglass_shell_sequelize = await FiberglassShell.findAll()
        fiberglass_shell_data = fiberglass_shell_sequelize.map(shell => shell.get({ plain: true }));
        
    } else {
        const fiberglass_shell_sequelize = await FiberglassShell.findAll({ where: { name: fiberglass_shell_name } })
        fiberglass_shell_data = fiberglass_shell_sequelize.map(shell => shell.get({ plain: true }));
    }

    return fiberglass_shell_data
}