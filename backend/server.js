const http = require("http");
const { Client } = require("pg");

const db = new Client({
    host: "database",
    port: 5432,
    user: "devopsuser",
    password: "devopspass",
    database: "devopsdb"
});

db.connect()
    .then(() => {
        console.log("Connected to PostgreSQL");

        const server = http.createServer(async (req, res) => {
            res.writeHead(200, {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*"
            });

            try {
                const result = await db.query("SELECT NOW() AS current_time");

                res.end(JSON.stringify({
                    message: "Hello from DevOps Backend!",
                    status: "success",
                    database: "connected",
                    time: result.rows[0].current_time
                }));
            } catch (error) {
                res.end(JSON.stringify({
                    message: "Database query failed",
                    status: "error"
                }));
            }
        });

        server.listen(3000, () => {
            console.log("Backend running on port 3000");
        });
    })
    .catch((error) => {
        console.error("Database connection failed:", error);
        process.exit(1);
    });