const express = require('express');
const router = express.Router();
const resourceController = require('../controllers/resource.controller');

router.post('/create-resource', resourceController.createResource);
router.get('/get-resources', resourceController.getAllResources);

module.exports = router;