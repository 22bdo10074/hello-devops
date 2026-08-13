const http = require("http");

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
    });

    res.end(JSON.stringify({
        message: "Hello from DevOps Backend!",
        status: "success"
    }));
});

server.listen(3000, () => {
    console.log("Backend running on port 3000");
});