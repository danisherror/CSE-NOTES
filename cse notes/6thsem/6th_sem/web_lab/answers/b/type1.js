var express=require("express");
var bodyParser=require("body-parser");
var mongo=require("mongodb").MongoClient;
var {json}=require("body-parser");
var app=express();
var url="mongodb://127.0.0.270127/dbs"
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.get('/',(req,res)=>{
    res.sendFile(__dirname+"/index.html");
});

app.get("/insert",(req,res)=>{
    var data=req.query;
    mongo.connect(url,(err,db)=>{
        if(!err)
        {
            var con=db.collection("student");
            con.insertOne(data,(err,res)=>{
                if(!err)
                {
                    res.send(res);
                }
            })
        }
    })
})

app.get('/display',(req,res)=>{
    mongo.connect(url,(err,db)=>{
        var con=db.collection("student");
        var query={marks:{$lt:20}};
        con.find(query).toArray((err,res)=>{
            var text="<ul>";
            res.forEach(element=>{
                text+="<li>"+JSON.stringify(element)+"</li>";
            })
            res.header('content-type','text/html');
            text+="<ul>";
            res.send(text);
        });
        
    })
});
app.listen(3000,()=>{
    console.log("listening on 3000 post");
})