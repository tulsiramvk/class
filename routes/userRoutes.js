const express = require("express")

const router = express.Router()

const addUsers = require('../controller/userController')
const viewUsers = require("../controller/viewController")
const viewSingleUsers = require("../controller/singledatacontroller")
const updateUsers = require("../controller/updatecontroller")
const deletesingleUser = require("../controller/singleDelete")

router.post("/adduser",addUsers)
router.get('/view',viewUsers)
router.get('/:id/',viewSingleUsers)
router.put('/:id/update',updateUsers)
router.delete('/:id/',deletesingleUser)
module.exports = router