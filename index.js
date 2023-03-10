const express = require("express");
var bodyParser = require('body-parser');
const app = express();
const mysql = require("mysql2");
const router = require("./controller/router");
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

let connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Brksbs5620.",
    database:"blogdb"
})
connection.connect((err)=>{
    if(err){
        return console.log("connection err",err);
    }
    console.log("connection success ")
})
app.use("/",router);
app.listen(4000,()=>{
    console.log("4000 portu dinleniyor")
})