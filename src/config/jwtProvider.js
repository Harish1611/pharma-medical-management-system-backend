const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

const SECRET_KEY = process.env.SECRET_KEY;

const generateJwtToken = ( id ) => {

    const token = jwt.sign({id}, SECRET_KEY, {expiresIn: "1h"});

    return token;
}


const getIdFromJwtToken = (token) => {

    const decodedToken = jwt.verify(token, SECRET_KEY );

    return decodedToken;
}

module.exports = {generateJwtToken, getIdFromJwtToken};