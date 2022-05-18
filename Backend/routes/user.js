const express=require('express');
const router=express.Router();
router.get('/',(req,res)=>{
    res.send("<h1> hello backend server has created</h1>");
    });
    module.exports=router;