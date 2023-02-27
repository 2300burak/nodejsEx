const express = require("express");
const router = express.Router({mergeParams:true});
const userController = require("./userController.js");
const productController = require("./productController.js");
const blogController = require("./blogController.js");

router.get("/",(req,res)=>{
    res.send("root")
});
router.use("/user",userController);
router.use("/product",productController);
router.use("/blog",blogController);

module.exports = router;