var express=require('express');
var bodyParser=require('body-parser');
var mongo=require('mongodb').mongoClient;
var app=express();

var url="sdaassd";
app.get('/',function(req,res){
    res.sendFile(__dirname+'/index.html');
})

app.get('/insert',function(req,res){
    var data=req.query;
    mongo.connect(url,function(err,db){
        var con=db.collection('student');
        con.insertOne(data,function(err,res){
            if(!err)
            {
                
                res.send("<h1>data inserted successfully</h1>");
            }
        })
    })
})

app.get('/display',function(req,res){
    mongo.connect(url,function(err,db){
        var con=db.collection('student');
        var que={marks:{$lt:20}};
        var ans=con.find(que);
        ans.each(function(err,res){
            if(res!=null)
            {
            res.write(res.name);
            res.write("<Br></Br>")
            res.write(res.marks);
            res.write("<Br></Br>")
            }
        })
    })
})

app.listen(3000);