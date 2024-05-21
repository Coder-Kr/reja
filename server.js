const http = require("http");
const mongodb = require("mongodb");

const connectionString = "mongodb://atlas-sql-664c19ae0d50c24ef678ca3b-9siwj.a.query.mongodb.net/Reja?ssl=true&authSource=admin";

mongodb.connect(
    connectionString,
    {
        useNewUrlParser: true,
        UseUnifiedTopology: true,
    },
    (err, client) => {
        if (err) console.log("Error connection MongoDB");
        else {
            console.log("MongoDB connection succeed");
            // console.log(client);
            module.exports = client;
            const app = require("./app");
            //Server
            const server = http.createServer(app);
            let PORT = 3000;
            server.listen(PORT, () => {
                console.log(`Your sever is running at http://localhost:${PORT}`);
            });
        }
    }
);


