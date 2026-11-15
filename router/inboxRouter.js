const express = require('express')

//internal imporot
const {getInbox} = require('../controller/inboxController.js')
const decorateHtmlResponse = require('../middlewares/common/decorateHtmlResponse.js')


const router = express.Router();

// login page
router.get("/", decorateHtmlResponse("Inbox"), getInbox)

module.exports = router;