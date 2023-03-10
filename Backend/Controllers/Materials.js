import Cement from "../Models/CementModel.js";
import Chemicals from "../Models/ChemicalsModel.js";
import Piping from "../Models/PipingModel.js";
import Covers from "../Models/CoversModel";

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