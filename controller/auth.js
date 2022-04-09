const model = require('../models');
const {USER} = model.init;
const bcrypt = require('bcrypt');
const saltRounds = 10;

exports.register = async (req, res) => {
    try {
        const encryptedPassword = await bcrypt.hash(req.body.password, saltRounds);
        await USER.create({ ...req.body, password: encryptedPassword});
        res.status(200).send({
            success: true,
            message: 'Berhasil membuat akun',
            code: 200,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: 'Gagal membuat akun',
            code: 500,
            error,
        });
    }
} 
