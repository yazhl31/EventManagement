import express from "express";
import { dbConnection } from "./database/dbConnection.js";
import dotenv from "dotenv";
import messageRouter from "./router/messageRouter.js";
import cors from "cors";

dotenv.config({ path: "./.env" });

const app = express();

app.use(
    cors({
        origin: [process.env.FRONTEND_URL], // Frontend origin
        methods: ["POST"],
        credentials: true,
    })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/v1/message", messageRouter);

// Connect to Database
dbConnection();

const PORT = process.env.PORT || 8001;

const server = app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

server.on("error", (err) => {
    if (err.code === "EADDRINUSE") {
        console.error(`Port ${PORT} is already in use`);
        process.exit(1);
    } else {
        console.error(err);
    }
});

export default app;
