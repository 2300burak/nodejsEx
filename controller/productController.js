const express = require("express");
const router = express.Router({mergeParams:true});
router.get("/",(req,res)=>{

    res.send('<p>product</p>')})
router.get("/abc",(req,res)=>{

    res.send('<p>product abc</p>')})
router.get(`/:id`,(req,res)=>{
    const {id}=req.params
    res.jsonp({id}) })



module.exports = router;