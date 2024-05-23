const http = require("http");
const mongodb = require("mongodb");

const connectionString = 'mongodb+srv://coderkrllc:UyCIrJE8p9jkWtHc@cluster0.bdiut4c.mongodb.net/Reja';

mongodb.connect(
    connectionString,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },
    (err, client) => {
        if (err) console.log("Error connection MongoDB");
        else {
            console.log("MongoDB connection succeed");
            // console.log(client);
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


