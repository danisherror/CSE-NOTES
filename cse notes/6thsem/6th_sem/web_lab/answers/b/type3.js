var bodyParser=require('body-parser');
var express=require('express');
var mongo=require('mongodb').mongoClient;
var bodyParserurlencoded=bodyParser.urlencoded({extended:false});

var url="sadas";

mongo.connect(url,function(err,db){
    if(!err)
    {
        console.log("connected to server");
        var con=db.collection('student');
        app.get('/',function(req,res){
            res.sendFile(__dirname+'/'+'index.html');
        })
        app.get('/insert',function(req,res){
            var data=req.query;
            con.insert(data,function(err,result){
                if(!err)
                {
                    res.status(201).json(result.ops[1]);
                }
            })
        })
        app.get('/display',function(req,res){
            con.find({}).toArray(function(err,ans){
                if(!err)
                {
                    res.status(200).json(ans);
                }
            })
        })

        var server=app.listen(function(){
            var host=server.address().address;
            var post=server.address().post;
            console.log("server listening in http://%s:%s",host,post);
        })

    }
    else
    {
        console.log("not connected");
    }
})