"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const to_dos_1 = require("./to-dos");
const app = (0, express_1.default)();
const port = process.env.PORT;
app.use(express_1.default.json());
app.use('/todo', to_dos_1.router);
app.get('/', (req, res) => {
    res.send("To-do App Homepage");
});
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
