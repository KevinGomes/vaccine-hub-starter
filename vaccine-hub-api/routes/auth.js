const { Router } = require("express")
const express = require("express")
const router = express.Router()

router.post("/login", async (req, res, next) => {
    try{
        //pass email and password
} catch(err) {
    next(err)
    }
})

router.post("/register", async (req, res, next) => {
    try{
        //take email password
        //vaccination data and other things
} catch(err) {
    next(err)
    }
})

module.exports = router