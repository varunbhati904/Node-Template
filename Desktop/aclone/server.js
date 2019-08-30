var express=require('express');
var app=express();
var port=processes.env.port || 5000;
app.get('/',function(req,res){res.send("Hello");});
app.listen(port,(function(err){if(!err) console.log("running on "+port);}
);