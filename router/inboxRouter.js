const express = require('express')

//internal imporot
const {getInbox} = require('../controller/inboxController.js')


const router = express.Router();

// login page
router.get("/", getInbox)

module.exports = router;