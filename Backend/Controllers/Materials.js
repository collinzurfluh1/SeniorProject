import Cement from "../Models/CementModel.js";
import Chemicals from "../Models/ChemicalsModel.js";
import Piping from "../Models/PipingModel.js";

export function get_plaster_data(plaster_name) {
    // This function will return a JSON of plaster data. If you pass None you will get all plaster options. 
    // if you pass a name, you will get only the plaster option with that name.

    var plaster_data = null;

    if(plaster_name == null) {
        Cement.findAll({ where: { type: 'plaster' } })
        .then(cement => {
            const plaincement = cement.map(cement => cement.get({ plain: true }));
            plaster_data = plaincement;
        });
    } else {
        Cement.findAll({ where: { type: 'plaster', name: plaster_name } })
        .then(cement => {
            const plaincement = cement.map(cement => cement.get({ plain: true }));
            plaster_data = plaincement;
        });
    }

    return plaster_data
}