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


module.exports = {createResource}