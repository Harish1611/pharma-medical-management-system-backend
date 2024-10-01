const express = require("express");
const router = express.Router();
const resourceController = require("../controllers/resource.controller");

router.post("/create-resource", resourceController.createResource);
router.get("/get-resources", resourceController.getAllResources);
router.get("/id/:id", resourceController.getResourceById);
router.put("/update-resource/:id", resourceController.updateResoruce);
router.delete("/delete-resource/:id", resourceController.deleteResource);
router.get("/resource-count", resourceController.resourceCount);

module.exports = router;
