const helpers = require('../helper');
const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const isMailExist = await helpers.emailExist(email);
        console.log('-------',isMailExist)
        return res.status(200).json({
            code:200,
            msg:"Login Success",
        })
    } catch (error) {
        return res.status(400).json({
            code: 400,
            msg: "Something Went Wrong",
            error: error.message
        })
    }
}