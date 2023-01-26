import express, { Express, Request, Response  } from "express";
import dotenv from "dotenv";
dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(express.json());

app.get('/', (req, res) => {
    res.send("To-do App Homepage");
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});