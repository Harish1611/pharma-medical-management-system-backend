const mongoose = require('mongoose');

const resourceSchema = new mongoose.Schema({

    resourceName :{
        type: String,
        required:true,
    },
    resourceType :{
        type:String,
        required:true,
    },
    requestedFor: {
        type: String,
        required: true,
    },
    quantity:{
        type:String,
        required:true,
    },
    storedAt:{
        type:String,
        required:true,
    },
    addedBy:{
        type:String,
        required:true,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
      },


});

const Resource = mongoose.model("resource", resourceSchema);

module.exports = Resource;