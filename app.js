const express=require("express");
const bodyParser=require("body-parser");
const app=express();
var path    = require("path");
const reader = require('xlsx');

var str=[];

app.use(bodyParser.urlencoded({
    extended:true
  }));

app.get("/", function(req,res){
    res.sendFile(path.join(__dirname+ '/index.html'));
  });
  app.get("/book", function(req,res){
      if (err){
        console.log(err);
      }
      else{
        res.sendFile(path.join(__dirname+ '/saved.html'));
      }
   
  });
  app.post("/book", function(req,res){
    var details = req.body;
    
    str.push(req.body);
    console.log(str);
    
    let workBook = reader.utils.book_new();
    const workSheet = reader.utils.json_to_sheet(str);
    reader.utils.book_append_sheet(workBook, workSheet, `response`);
    let exportFileName = `response.xls`;
    reader.writeFile(workBook, exportFileName);
    
    res.sendFile(path.join(__dirname+ '/saved.html'));
    
  });
















  app.listen(3000,function() {
    console.log("Server started on port 3000.");
  });
