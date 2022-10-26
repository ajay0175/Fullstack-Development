const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res) {
    res.sendFile(__dirname +  "/index.html");
});

app.post('/', function(req, res) {
    let sum = Number(req.body.n1) * Number(req.body.n2);

    res.send("The sum of two number is " + sum);
});

app.get('/bmicalculator', function(req, res) {
    res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post('/bmicalculator', function(req, res) {
    let weight = parseFloat(req.body.weight); 
    let height = parseFloat(req.body.height);

    let bmi = weight / (height * height);

    res.send("The BMI is " + bmi);
});

app.listen('3000', function (){
    console.log("server set at 3000");
});