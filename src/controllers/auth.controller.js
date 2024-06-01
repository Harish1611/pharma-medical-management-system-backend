const adminAuthService = require("../services/auth.service");
const jwtProvider = require('../config/jwtProvider');
const bcrypt = require('bcrypt')


const createAdmin = async (req,res) => {

    try{

        const admin = await adminAuthService.createAdmin(req.body);

        const jwt = jwtProvider.generateJwtToken(admin._id);

        return res.status(200).send({jwt, message: "admin creation successful"})

    }catch(err){

        return res.status(500).send({error: err.message})
    }
}

const loginAdmin = async (req,res) => {

    try{

        const {password, email } = req.body;

        const admin = await adminAuthService.getAdminByEmail({email});

        if(!admin){

            return res.status(404).send({message:"Admin Not Found with Email", email});

        }

        const isPasswordValid = bcrypt.compare(password, admin.password);

        if(!isPasswordValid){

            return res.status(401).send({message:"Invalid Password"})
        }

        const jwt = jwtProvider.generateJwtToken(admin._id);

        return res.status(200).send({message:"Login Successfull",jwt});


    }catch(err){

        return res.status(500).send({error: err.message})
    }
}


module.exports = {createAdmin, loginAdmin};

