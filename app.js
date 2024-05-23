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
    console.log("User entered /")
    db.collection("plans")
        .find()
        .toArray((err, data) => {
            if (err) {
                console.log(err);
                res.end("Something went wrong!");
            } else {
                res.render('reja', { items: data });
            }
        });

});

app.get('/author', (req, res) => {
    console.log("User entred /author");
    res.render("author", { user: user });
});

app.post('/create-item', (req, res) => {
    console.log("User entred /create-item");
    console.log(req.body);
    const new_reja = req.body.reja;
    db.collection("plans").insertOne({ reja: new_reja }, (err, data) => {
        if (err) {
            console.log(err);
            res.end("something went wrong");
        } else {
            res.end("Successfully added");
        }
    })
})

module.exports = app;