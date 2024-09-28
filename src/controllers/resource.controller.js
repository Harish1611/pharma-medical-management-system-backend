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

module.exports = {createResource, getAllResources};