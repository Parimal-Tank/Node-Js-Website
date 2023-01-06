const express = require('express');

const app = express();

app.listen(3000);


app.get('/' , function(req , res){
    res.sendFile(__dirname + '/index.html');
})  

app.get('/contact',function(req, res){
    res.sendFile(__dirname + '/contact.html');
})

app.get('/profile/:id' , function(req , res){
    res.send("You requested to see profile with the id" + req.params.id);
})