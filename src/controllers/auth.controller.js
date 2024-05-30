const adminAuthService = require("../services/auth.service");
const jwtProvider = require('../config/jwtProvider');

const createAdmin = async (req,res) => {

    try{

        const admin = await adminAuthService.createAdmin(req.body);

        const jwt = jwtProvider.generateJwtToken(admin._id);

        return res.status(200).send({jwt, message: "admin creation successful"})

    }catch(err){

        return res.status(500).send({error: err.message})
    }
}


module.exports = {createAdmin};

