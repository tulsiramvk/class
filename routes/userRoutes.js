const express = require("express")

const router = express.Router()

const addUsers = require('../controller/userController')
const viewUsers = require("../controller/viewController")

router.post("/adduser",addUsers)
router.get('/view',viewUsers)

module.exports = router