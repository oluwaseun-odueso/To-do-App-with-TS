import dotenv from 'dotenv'
import connection from './databaseConnection';

dotenv.config();

// Functions for operations
export function addToDo(item: {}) {
    return new Promise((resolve, reject) => {
        let sql = `INSERT INTO to_do (items, set_date) VALUES ('${item}', now())`
        connection.query(sql, (error, results) => {
            if (error) reject(error)
            resolve(true)
        })
    })
}

export function returnItemId(){
    return new Promise((resolve, reject) => {
        connection.query("SELECT MAX(id) AS last_entry FROM to_do", (error, result) => {
            if (error) reject(error)
            resolve(result)
        })
    })
}

export function getAToDo (id: number) {
    return new Promise((resolve, reject) => {
        let sql = `SELECT * FROM to_do WHERE id = '${id}';`
        connection.query(sql, (error, results) => {
            if (error) reject(error)
            resolve(results)
        })
    })
}

export function getAllToDo () {
    return new Promise((resolve, reject) => {
        let sql = "SELECT * FROM todo.to_do;"
        connection.query(sql, (error, results) => {
            if (error) reject(error)
            resolve(results)
        })
    })
}

export function updateToDo (id: number, item: {}) {
    return new Promise((resolve, reject) => {
        let sql = `UPDATE to_do SET items = '${item}' WHERE id = ${id};`
        connection.query(sql, (error, results) => {
            if (error) reject(error)
            resolve(results)
        })
    })
}

export function deleteToDo (id: number) {
    return new Promise((resolve, reject) => {
        let sql = `DELETE FROM to_do WHERE id = ${id};`
        connection.query(sql, (error, results) => {
            if (error) reject(error)
            resolve(results)
        })
    })
}
