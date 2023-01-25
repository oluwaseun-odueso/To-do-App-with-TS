import express, { Express, Request, Response  } from "express";
import dotenv from "dotenv";
dotenv.config();

const app: Express = express()
const port = process.env.PORT;

app.get('/', (req, res) => {
    res.send("To-do App Honepage");
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});