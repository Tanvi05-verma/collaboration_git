const http = require("http")

let server = http.createServer((req, res) => {
    if(req.method == "GET") {
        console.log("Server running");
        res.json({"message": "GET Request"})
    }
});


server.listen(3000);