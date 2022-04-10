const model = require('../models');
const {FOOD} = model.init;


exports.addFood = async (req, res) => {
    try {
        const food = await FOOD.create({
            ...req.body, 
            image: req.get('host')+ "/upload/" +req.file.filename,
            user_id_user: req.user.id_user,
        });
        res.status(200).send({
            success: true,
            message: 'Berhasil membuat resep',
            code: 200,
            food,
        });        
        console.log(req.get('host'));
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: 'Gagal membuat resep',
            code: 500,
            error,
        });
    }
}

exports.editFood = async (req, res) => {
    try {
        const food = await FOOD.update({
            ...req.body, 
            image: req.get('host')+ "/upload/" +req.file.filename,
        }, {
            where: {
                id_food: req.params.id,
            },
        });
        res.status(200).send({
            success: true,
            message: 'Edit resep berhasil',
            code: 200,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: 'Edit resep gagal',
            code: 500,
            error,
        });
    }
}