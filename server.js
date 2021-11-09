const express=require("express");
const isAuth = require("./isAuth");

const app=new express();
app.use(isAuth);

const PORT = 5000;

app.get('/',(request,response)=>{response.sendFile(__dirname+"/public/home.html")});
app.get('/contact',(request,response)=>{response.sendFile(__dirname+"/public/contact.html")});
app.get('/services',(request,response)=>{response.sendFile(__dirname+"/public/services.html")})
app.get('/style.css',(req,res)=>{res.sendFile(__dirname+'/public/style.css')})
app.listen(PORT,(err)=>err?console.log(err):console.log(`server running in port ${PORT}`))