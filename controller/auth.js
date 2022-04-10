const model = require('../models');
const {USER} = model.init;
const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt = require('jsonwebtoken');

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

exports.login = async (req, res) => {
    try {
        const user = await USER.findOne({
            where: {
              username: req.body.username,
            },
          });
        if (!user) {
            res.status(403).send({
                success: false,
                message: 'User tidak ditemukan',
                code: 403,
            });
            return;
        }
        const password = req.body.password;
        const comparison = await bcrypt.compare(password, user.dataValues.password);
        if(comparison){
            const token = jwt.sign(user.dataValues, process.env.secret, {
                expiresIn: 86400 * 356, // 1 year
              });
            res.status(200).send({
                success: true,
                message: 'login berhasil',
                code: 200,
                token,
            }); 
        }
        else{
            res.status(403).send({
                success: false,
                message: 'Password salah',
                code: 403,
            });
            return;
        }
    } catch (error) {
        res.status(500).send({
            success: false,
            message: 'login gagal',
            code: 500,
            error,
        });
        console.log(error);
    }
}
