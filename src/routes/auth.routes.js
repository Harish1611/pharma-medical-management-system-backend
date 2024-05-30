const express = require('express');
const router = express.Router();
const adminAuthController = require('../controllers/auth.controller')


router.post('/create-admin', adminAuthController.createAdmin );

module.exports= router;