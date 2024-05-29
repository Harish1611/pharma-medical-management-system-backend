const mongoose = require("mongoose");


const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required:true,
    default:"ADMIN"
  },
  mobile: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const AdminModel = mongoose.model("adminmodel", userSchema);

module.exports = AdminModel;
