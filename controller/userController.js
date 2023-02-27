const express = require("express");
const router = express.Router();
router.get("/",(req,res)=>{

            res.send("get user")
        })
router.post("/create",(req,res)=>{
    const user = req.body
    console.log("user",user)
    res.send(`created user data : ${user}`)
})

module.exports = router;