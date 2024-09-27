const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());



app.get("/", (req,res)=>{

   return res.status(200).send({message:'PMM System Backend',status:'true'});

})

const adminAuthController = require('./routes/auth.routes');
app.use('/admin', adminAuthController)

const resourceController = require('./routes/resource.routes');
app.use('/resources', resourceController)


module.exports = app; 
