const express = require("express");
const { addUserData, getUserData } = require("../controllers/aadharController");

const router = express.Router();

router.post("/aadhar", addUserData);
router.post("/login", getUserData);

module.exports = router;
