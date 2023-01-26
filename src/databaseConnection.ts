import mysql from 'mysql';
import dotenv from "dotenv";

dotenv.config();

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : process.env.DB_USER,
    password : process.env.DB_PASSWORD,
    database : process.env.DB_DATABASE 
});

connection.connect(() => {
    console.log('Database has been connected');
});

export default connection