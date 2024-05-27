console.log("Web serverni boshlash");
const express = require("express");
const app = express();
const fs = require("fs");

//mongodb ni choqirish
const db = require("./server").db();

const mongodb = require("mongodb");

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
        console.log(data.ops);
        res.json(data.ops[0]);
    })
});

app.post('/delete-item', (req, res) => {
    const id = req.body.id;
    db.collection("plans").deleteOne({ _id: new mongodb.ObjectId(id) }, (err, data) => {
        res.json({ state: "succes" });
    });

});

app.post("/edit-item", (req, res) => {
    const data = req.body;
    console.log(data);
    db.collection("plans").findOneAndUpdate(
        { _id: new mongodb.ObjectId(data.id) },
        { $set: { reja: data.new_input } },
        function (err, data) {
            res.json({ state: "success" });
        });
});

app.post("/delete-all", (req, res) => {
    if (req.body.delete_all) {
        db.collection("plans").deleteMany(() => {
            res.json({ state: "Deleted all plans" });
        })
    }
})

module.exports = app;