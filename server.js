const http = require("http");
const mongodb = require("mongodb");

let db;
const connectionString = "mongodb+srv://KingDoni:Kingdoni48.@dan.9ygtq.mongodb.net/"

mongodb.connect(connectionString, {
    userNewUrlParser: true,
    useUnifiedTopology: true
}, (err, client) => {
    if(err) console.log ("ERROR on connection MongoDB")
    else {
        console.log("MongoDb connection succeed");
        module.exports = client;

        const app = require("./App");
        const server = http.createServer(app);
        let PORT = 3000
        server.listen(PORT, function () {
            console.log(
            `the server is running succesfuly on port: ${PORT},
             http://localhost:${PORT}`);
        });
    }    
});
