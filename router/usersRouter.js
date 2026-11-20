const express = require('express')
const {check} = require('express-validator')

//internal imporot
const {getUsers, addUser, removeUser} = require('../controller/usersController.js')
const decorateHtmlResponse = require('../middlewares/common/decorateHtmlResponse.js')
const avatarUpload = require('../middlewares/common/users/avaterUpload.js')
const {addUserValidators, addUserValidationHandler} = require('../middlewares/common/users/userValidators.js')

const router = express.Router();

// login page
router.get("/", decorateHtmlResponse("Users"), getUsers)

// add user
router.post("/", avatarUpload, addUserValidators, addUserValidationHandler,  addUser)

// remove user
router.delete("/:id", removeUser);

module.exports = router;