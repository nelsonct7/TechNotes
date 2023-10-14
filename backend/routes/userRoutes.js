const express = require("express");
const router = express.Router();
const userCtrl=require('../controllers/usersController')

router.route('/')
.get(userCtrl.getAllUsers)
.post(userCtrl.createNewUser)
.patch(userCtrl.updateUser)
.delete(userCtrl.deleteUser)

module.exports = router