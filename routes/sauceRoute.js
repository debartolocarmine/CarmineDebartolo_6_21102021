const express = require("express");
const router = express.Router();
const multer = require("../middleware/multer-config");
const auth = require("../middleware/auth");
const sauceCtrl = require("../controllers/sauceController");


router.post("/", auth, multer, sauceCtrl.createSauce);


module.exports = router;