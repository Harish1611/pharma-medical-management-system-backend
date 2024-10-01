const Resource = require("../model/resource.model");
const resourceService = require("../services/resource.service");

const createResource = async (req, res) => {
  try {
    const resource = resourceService.createResource(req.body);

    return res.status(200).send({ message: "New Resource created successfully!" });

  } catch (err) {
    return res.status(500).send({ error: err.message });
  }
};

const getAllResources = async (req, res) => {

  try{

    const resources = await resourceService.getAllResources();
    return res.status(200).send(resources);

  }catch(err){
    return res.status(500).send({error: err.message});
  }

}

const getResourceById = async (req, res) => {

  try{
    const resId = req.params.id;
    const resource = await resourceService.getResourceById(resId);
    return res.status(200).send(resource);

  }catch(err){
    return res.status(500).send({error:err.message})
  }
}

const updateResoruce = async (req,res) => {

  try{

    const resource = await resourceService.updateResource(req.params.id,req.body);

    return res.status(200).send({message:'Resource Updated Successfully',resource})


  }catch(err){
    return res.status(500).send({error: err.message})
  }
}

const deleteResource = async (req,res) => {

  try{

    const resource = await resourceService.deleteResource(req.params.id);
    return res.status(200).send({message:'Resource Deleted Successfully',resource});

  }catch(err){
    return res.status(500).send({error:err.message});
  }
}

const resourceCount = async (req,res) => {
  try{

    const resourceCount = await resourceService.resourceCount();
    return res.status(200).send(resourceCount);

  }catch(err){
    return res.status(500).send({error: err.message});
  }
}

module.exports = {createResource, getAllResources, getResourceById, updateResoruce, deleteResource,resourceCount };