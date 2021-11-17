const express = require('express')
const app = express()
const mysql = require('mysql')

const db = mysql.createPool({
    host: 'localhost',
    user: 'admin',
    password: 'password',
    database: 'FarmApp'
});

app.get('/', (req, res) => {
    res.send("Hello Rebex")
});

app.listen(3001, () => {
    console.log('running on port 3001')
});