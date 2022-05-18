const express =require('express');
const app=express();
const router=require('./routes/user.js');
 app.use(router);
// MVC => Model view controller
app.get('/about',(req,res)=>{
    res.send("<h1> hello backend server has created for ABOUT</h1>");
    });
app.listen(8000,(req,res)=>{
    console.log('the port is listening on port 8000');
})
 