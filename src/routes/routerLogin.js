
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const loginController = require('../controllers/loginController');

router.get('/', loginController.index); 


module.exports = router;
