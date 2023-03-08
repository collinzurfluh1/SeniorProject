import Cement from "../Models/CementModel.js";
import Chemicals from "../Models/ChemicalsModel.js";
import Piping from "../Models/PipingModel.js";

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