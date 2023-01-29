import express, { Express, Request, Response  } from "express";
import {router} from './to-dos';

const app: Express = express();
const port = process.env.PORT;

app.use(express.json());
app.use('/todo', router)

app.get('/', (req, res) => {
    res.send("To-do App Homepage");
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});