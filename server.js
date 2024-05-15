const express = require("express");
const app = express();
const http = require("http");

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
