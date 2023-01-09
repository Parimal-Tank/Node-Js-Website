const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false})

app.set('view engine' , 'ejs');
app.listen(3000);


//example of middleware implementation 
// app.use('/assets' , function(req,res , next){
//     console.log(req.url);
//     next();
// })

// middleware using express 
app.use('/assets' , express.static('assets'));   // use to map with static files

// using express methods

// app.get('/' , function(req , res){
//     res.sendFile(__dirname + '/index.html');
// })  

// app.get('/contact',function(req, res){
//     res.sendFile(__dirname + '/contact.html');
// })


// app.get('/profile/:id' , function(req , res){
//     res.send("You requested to see profile with the id" + req.params.id);
// })

// using EJS to view their contant

app.get('/' , function(req , res){
    res.render('index');
})  

app.get('/contact',function(req, res){
    // console.log(req.query); // Example of Query String
    res.render('contact' , {qs: req.query});
})

app.post('/contact', urlencodedParser ,function(req, res){
    console.log(req.body);
    res.render('contact-success' , {data : req.body});
})

app.get('/profile/:name' , function(req , res){
    const data = {age : 21 , job: 'Web Developer' , hobbies : ['Reading' , 'Outdoor Games' , 'Traveling']};
        res.render('profile' , {person: req.params.name , data : data});
})

