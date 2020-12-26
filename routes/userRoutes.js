const express = require("express")

const router = express.Router()

import {addUser,viewData,viewSingleUser,updateUser,deleteUser} from "../controller/userController"

router.post("/adduser",addUser)
router.get('/view',viewData)
router.get('/:id/',viewSingleUser)
router.put('/:id/update',updateUser)
router.delete('/:id/',deleteUser)

module.exports = router