const helpers = require('../helper/helper');
const User = require('../models/User');
const { hashSync, compareSync } = require("bcrypt");

const login = async (req, res) => {
    try {
        if (req.method == 'POST') {
            const { email, password } = req.body;
            const isMailExist = await helpers.emailExist(email);
            console.log('-------', isMailExist)
            if (!isMailExist) return res.status(404).json({ code: 404, msg: "User not found" })
            const checkPass = await helpers.compareSync(password, isMailExist.password)
            if (!checkPass) {
                req.flash('msg', 'incorrect password')
                return res.redirect('/')
            }
            return res.status(404).json({
                code: 404,
                msg: "User not found",
            })
        }
        return res.render('index', {
            msg: req.flash('msg')
        })
    } catch (error) {
        return res.status(400).json({
            code: 400,
            msg: "Something Went Wrong",
            error: error.message
        })
    }
}

module.exports = { login }