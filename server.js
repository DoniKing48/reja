console.log('Web serverni boshlash')
const express = require("express");
const app = express();
const http = require("http");
const fs =  require("fs");

let user;
fs.readFile("database/user.json", "utf8", (err,data) => {
    if(err) {
        console.log("ERROR:",err);
    } else {
    user = JSON.parse(data)
    }
});

//1-kirish code
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//2-session code

//3-views code
app.set("views", "views");
app.set("view engine", "ejs");

//4-routing code

app.post("/create-item", (req,res) =>{
    console.log(req.body); 
    res.json({test:"succes"});
});

app.get("/author", (req,res) => {
    res.render("author", {user:user});
});

app.get("/", function(req, res) {
    res.render("BUY");
});


const server = http.createServer(app);
let PORT = 3000
server.listen(PORT, function () {
    console.log(`the server is running succesfuly on port: ${PORT}`);
});