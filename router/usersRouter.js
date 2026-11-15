const express = require('express')

//internal imporot
const {getUsers} = require('../controller/usersController.js')


const router = express.Router();

// login page
router.get("/", getUsers)

module.exports = router;