const { response } = require('express');
const express = require('express');
const app = express();

app.get('/', function(req, res) {
    res.send("<h1>Hello world</h1>");
});

app.get('/contact', function(req, res) {
    res.send("Contact me at : ajay123@gmail.com");
});

app.get('/about', function(req, res) {
    res.send("Hi its Ajay a fullstack Mern Developer and a programmer.")
})

app.listen(3000,function() {
    console.log("server start on port 3000");
});