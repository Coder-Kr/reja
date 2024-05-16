console.log("Web serverni boshlash");
const express = require("express");
const app = express();
const http = require("http");
const fs = require("fs");

let user;
fs.readFile("database/user.json", 'utf-8', (err, data)=>{
    if(err){
        console.log("ERROR", err);
    }else{
        user = JSON.parse(data);
    }
});

//Express
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//Session
//Views
app.set('views', 'views');
app.set('view engine', 'ejs');

//Routing
app.get('/', (req, res)=>{
    res.render('harid');
});

app.get('/author', (req, res)=>{
    res.render("author", {user: user});
});

app.post('/create-item', (req, res)=>{
    console.log(req.body);
    res.json({test: "success"});
})



//Server
const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, ()=>{
    console.log(`Your sever is running at http://localhost:${PORT}`);
});
