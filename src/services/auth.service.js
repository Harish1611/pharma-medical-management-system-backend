const Admin = require("../model/admin.model");
const bcrypt = require("bcrypt");

const createAdmin = async (adminData) => {
  try {
    let { firstName, lastName, email, mobileNumber, password } = adminData;

    isAdminExists = await Admin.findOne({ email });

    if (isAdminExists) {
      throw new Error(" Admin Already Exists with email, ", email);
    }

    password = await bcrypt.hash(password, 10);

    const admin = await Admin.create({
      firstName,
      lastName,
      email,
      mobileNumber,
      password,
    });

    return admin;
  } catch (err) {
    console.log("Error - ", err.message);
    throw new Error(err.message);
  }
};


const getAdminByEmail = async (email) => {

  try{

     const admin = await Admin.findOne(email);

     if(!admin){

      throw new Error({message: "Admin not found with email", email})
     }

     return admin;

  }catch(err){

    throw new Error(err.message);
  }
}

module.exports = {createAdmin, getAdminByEmail}