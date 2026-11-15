const express = require('express')

//internal imporot
const {getLogin} = require('../controller/loginController.js')


const router = express.Router();

// login page
router.get("/", getLogin)

module.exports = router;