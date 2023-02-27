const express = require("express");
const router = express.Router({mergeParams:true});
const Blog = require("../Models/BlogModel");

router.get("/",async (req,res) => {
    try {
        const blogs = await Blog.findAll();
         res.jsonp({blogs});
    } catch (error) {
      console.log("err",error)  
    }
});
router.get("/:id",async (req,res) => {
    try {
        const {id }=req.params
        const blog = await Blog.findByPk(id);
         res.jsonp({blog});
    } catch (error) {
      console.log("err",error)  
    }
});
router.post("/create",async (req,res) => {
    try {
        const {id,baslik,aciklama,resim,anasayfa,onay} = await req.body;
        Blog.create({
            id:id,
            baslik:baslik,
            aciklama:aciklama,
            resim:resim,
            anasayfa:anasayfa,
            onay:onay
        });
        res.status(200);
        res.end();
    
    } catch (error) {
      console.log("err",error)
      res.status(400)  
    }
});
router.put("/edit/:id",async (req,res) => {
    try {
        const {id} = req.params;
        const body = req.body
        Blog.update({
            id:id,
            baslik:body.baslik,
            aciklama:body.aciklama,
            resim:body.resim,
            anasayfa:body.anasayfa,
            onay:body.onay
        },{
            where: {
              id: id
            }
          });        
        res.status(200);
        res.end();
    
    } catch (error) {
      console.log("err",error)
      res.status(400)  
    }
});
router.delete("/delete/:id",(req,res)=>{
  const {id} = req.params
  Blog.destroy({
    where: {
      id: id
    }
  });
  res.end();
});


module.exports = router;