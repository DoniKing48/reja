console.log('Web serverni boshlash')
const express = require("express");
const app = express();
const http = require("http");

//1-kirish code
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//2-session code

//3-views code
app.set("views", "views");
app.set("view engine", "ejs");

//4-routing code
app.get("/hello", function(req, res){
    res.end(`<h1 style="background: blue"> HI EVERYONE by DAN</h1>`);
});
app.get("/gift", function(req, res){
    res.end(`<h1 style="background: blue"> Sovgalar sahifasi</h1>`);
});

const server = http.createServer(app);
let PORT = 3000
server.listen(PORT, function () {
    console.log(`the server is running succesfuly on port: ${PORT}`);
});