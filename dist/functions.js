"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteToDo = exports.updateToDo = exports.getAllToDo = exports.getAToDo = exports.returnItemId = exports.addToDo = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const databaseConnection_1 = __importDefault(require("./databaseConnection"));
dotenv_1.default.config();
// Functions for operations
function addToDo(item) {
    return new Promise((resolve, reject) => {
        let sql = `INSERT INTO to_do (items, set_date) VALUES ('${item}', now())`;
        databaseConnection_1.default.query(sql, (error, results) => {
            if (error)
                reject(error);
            resolve(true);
        });
    });
}
exports.addToDo = addToDo;
;
function returnItemId() {
    return new Promise((resolve, reject) => {
        databaseConnection_1.default.query("SELECT MAX(id) AS last_entry FROM to_do", (error, result) => {
            if (error)
                reject(error);
            resolve(JSON.parse(JSON.stringify(result[0])).last_entry);
        });
    });
}
exports.returnItemId = returnItemId;
;
function getAToDo(id) {
    return new Promise((resolve, reject) => {
        let sql = `SELECT * FROM to_do WHERE id = '${id}';`;
        databaseConnection_1.default.query(sql, (error, results) => {
            if (error)
                reject(error);
            resolve(JSON.parse(JSON.stringify(results)));
        });
    });
}
exports.getAToDo = getAToDo;
;
function getAllToDo() {
    return new Promise((resolve, reject) => {
        let sql = "SELECT * FROM todo.to_do;";
        databaseConnection_1.default.query(sql, (error, results) => {
            if (error)
                reject(error);
            resolve(JSON.parse(JSON.stringify(results)));
        });
    });
}
exports.getAllToDo = getAllToDo;
;
function updateToDo(id, item) {
    return new Promise((resolve, reject) => {
        let sql = `UPDATE to_do SET items = '${item}' WHERE id = ${id};`;
        databaseConnection_1.default.query(sql, (error, results) => {
            if (error)
                reject(error);
            resolve(results);
        });
    });
}
exports.updateToDo = updateToDo;
;
function deleteToDo(id) {
    return new Promise((resolve, reject) => {
        let sql = `DELETE FROM to_do WHERE id = ${id};`;
        databaseConnection_1.default.query(sql, (error, results) => {
            if (error)
                reject(error);
            resolve(results);
        });
    });
}
exports.deleteToDo = deleteToDo;
;
