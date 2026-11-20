const express = require('express')

//internal imporot
const {getLogin} = require('../controller/loginController.js')
const decorateHtmlResponse = require('../middlewares/common/decorateHtmlResponse.js')
const {doLoginValidationHandler,
    doLoginValidationHandler,
    doLoginValidators
} = require('../middlewares/login/loginValidators.js')

const router = express.Router();

// set page title
const page_title = "Login";

// login page
router.get("/",decorateHtmlResponse(page_title), getLogin)
// process page
router.post("/", decorateHtmlResponse(page_title), doLoginValidators, doLoginValidationHandler, login)

module.exports = router;