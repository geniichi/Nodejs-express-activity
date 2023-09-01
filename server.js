const express = require("express");
const app = express();

app.set("view engine", "ejs")

app.get("/", (req, res) => {
    res.send("Hello");
});


app.get('/home', (req, res) =>{
    res.render('home', {name: "walter"});
});

app.get('/contactus', (req, res) =>{
    res.render('contactUs');
});


app.get('/aboutus', (req, res) =>{
    res.render('aboutUs');
});


app.listen(3000)
