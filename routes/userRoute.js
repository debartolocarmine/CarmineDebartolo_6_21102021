const express = require("express");
const router = express.Router()

const userCtrl = require("../controllers/userController");
const validatorEmail = require("../middleware/validator-email")
const validatorPassword = require("../middleware/validator-password")

router.post("/signup", validatorEmail, validatorPassword, userCtrl.signup);
router.post("/login", userCtrl.login);

module.exports = router;