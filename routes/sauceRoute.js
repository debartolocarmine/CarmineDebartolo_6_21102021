const express = require("express");
const router = express.Router();
const multer = require("../middleware/multer-config");
const auth = require("../middleware/auth");
const sauceCtrl = require("../controllers/sauceControllers");
const checkSauce = require("../middleware/check-sauce");


router.post("/", auth, multer, checkSauce, sauceCtrl.createSauce);
router.put("/:id", auth, multer, checkSauce, sauceCtrl.updateSauce);
router.delete("/:id", auth, sauceCtrl.deleteSauce);
router.get("/", auth, sauceCtrl.getAllSauces);
router.get('/:id', auth, sauceCtrl.getOneSauce);
router.post("/:id/like", auth, sauceCtrl.likeDislikeSauce)


module.exports = router;