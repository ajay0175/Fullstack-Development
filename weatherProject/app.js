const { response } = require("express");
const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res) {
    const query = req.body.cityName;
    const apikey = "de064b4522248b961ec2083369232c4e";
    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query +"&appid=" + apikey + "&units=metric";
    
    https.get(url, function(response){
        console.log(response.statusCode);

        response.on("data", function(data) {
            const Weatherdata = JSON.parse(data);
            const temp = Weatherdata.main.temp;
            const weatherDescription = Weatherdata.weather[0].description;
            const icon = Weatherdata.weather[0].icon;
            const imageUrl = "https://openweathermap.org/img/wn/" + icon + "@2x.png"
            res.write("<p>The weather is currently " + weatherDescription + "<p>");
            res.write("<h1>The Temperature in "+ query + "  is " + temp +" degree celsius.</h1>");
            res.write("<img src =" + imageUrl +">");
            res.send();
        })
    });
});


app.listen(3000, function() {
    console.log("server is running on port 3000.");
});