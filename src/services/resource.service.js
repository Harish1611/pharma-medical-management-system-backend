const Resource = require('../model/resource.model');


const createResource = async (resourceData) => {


    try{

        let { resourceName, resourceType, requestedFor, quantity, storedAt, addedBy } = resourceData;

        const resource = await Resource.create({
            resourceName, resourceType, requestedFor, quantity, storedAt, addedBy
        });

        return resource;

    }catch(err){

        throw new Error(err.message);
    }
}


const getAllResources = async () => {

    try{

        const resources = await Resource.find();

        return resources;

    }catch(err){
        throw new Error(err.message)
    }
}


const getResourceById = async (resourceId) => {

    try{

        const resource = await Resource.findById(resourceId);

        return resource;

    }catch(err){
        throw new Error(err.message)
    }
}



const updateResource = async (resourceId, reqData) => {

    try{

        const resource = await Resource.findByIdAndUpdate(resourceId, reqData); // By Defaults it gives old resource - if you need updated resouce need to add (resourceId,reqData, {new:true}) 

        return resource;

    }catch(err){
        throw new Error(err.message)
    }
}

const deleteResource = async (resourceId) =>{

    try{
        const resource = await Resource.findByIdAndDelete(resourceId);
        if(!resource){
            throw new Error('Resource not found');
        }
        return resource;
    }catch(err){
        throw new Error(err.message);
    }
}

const resourceCount = async () => {
    try{

        const resourceCount = await Resource.countDocuments({});
        return resourceCount;

    }catch(err){
        throw new Error(err.message);
    }
}


module.exports = {createResource, getAllResources,getResourceById, updateResource, deleteResource, resourceCount}