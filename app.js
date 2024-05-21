console.log("Web serverni boshlash");
const express = require("express");
const app = express();
const fs = require("fs");

//mongodb ni choqirish
const db = require("./server").db();

let user;
fs.readFile("database/user.json", 'utf8', (err, data) => {
    if (err) {
        console.log("ERROR", err);
    } else {
        user = JSON.parse(data);
    }
});

//Express
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Session
//Views
app.set('views', 'views');
app.set('view engine', 'ejs');

//Routing
app.get('/', (req, res) => {
    res.render('reja');
});

app.get('/author', (req, res) => {
    res.render("author", { user: user });
});

app.post('/create-item', (req, res) => {
    console.log(req.body);
    res.json({ test: "success" });
})

module.exports = app;