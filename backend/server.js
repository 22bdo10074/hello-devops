const http = require("http");
const { Client } = require("pg");

const db = new Client({
    host: "database",
    port: 5432,
    user: "devopsuser",
    password: "devopspass",
    database: "devopsdb"
});

async function startServer() {
    try {
        await db.connect();
        console.log("Connected to PostgreSQL");

        await db.query(`
            CREATE TABLE IF NOT EXISTS users (
                id SERIAL PRIMARY KEY,
                name VARCHAR(100) NOT NULL,
                email VARCHAR(150) UNIQUE NOT NULL
            )
        `);

        console.log("Users table ready");

        const server = http.createServer(async (req, res) => {
            res.setHeader("Content-Type", "application/json");
            res.setHeader("Access-Control-Allow-Origin", "*");

            try {
                // GET /users
                if (req.method === "GET" && req.url === "/users") {
                    const result = await db.query(
                        "SELECT * FROM users ORDER BY id"
                    );

                    res.writeHead(200);
                    res.end(JSON.stringify(result.rows));
                    return;
                }

                // POST /users
                if (req.method === "POST" && req.url === "/users") {
                    let body = "";

                    req.on("data", chunk => {
                        body += chunk;
                    });

                    req.on("end", async () => {
                        const { name, email } = JSON.parse(body);

                        const result = await db.query(
                            "INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *",
                            [name, email]
                        );

                        res.writeHead(201);
                        res.end(JSON.stringify(result.rows[0]));
                    });

                    return;
                }

                // Default endpoint
                if (req.method === "GET" && req.url === "/") {
                    const result = await db.query(
                        "SELECT NOW() AS current_time"
                    );

                    res.writeHead(200);
                    res.end(JSON.stringify({
                        message: "Hello from DevOps Backend!",
                        status: "success",
                        database: "connected",
                        time: result.rows[0].current_time
                    }));
                    return;
                }

                res.writeHead(404);
                res.end(JSON.stringify({
                    message: "Route not found"
                }));

            } catch (error) {
                console.error(error);

                res.writeHead(500);
                res.end(JSON.stringify({
                    message: "Server error",
                    error: error.message
                }));
            }
        });

        server.listen(3000, () => {
            console.log("Backend running on port 3000");
        });

    } catch (error) {
        console.error("Database connection failed:", error);
        process.exit(1);
    }
}

startServer();