const inventory = require("./userController")
const express = require("express")
const router = express.Router()

router.post("/inventory", inventory)

module.exports = router