const express = require('express')
const app = express()
const port = 3000

const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
}

app.use(express.json());

const mysql = require('mysql');
const connection = mysql.createConnection(config);

const createTable = `CREATE TABLE IF NOT EXISTS people(id int not null auto_increment, name varchar(255), primary key(id))`;
connection.query(createTable);
const insertName = `INSERT INTO people(name) values('Matheus')`;
connection.query(insertName);

app.get('/', (req, res) => {
    const getNames = `SELECT name FROM people`;
    connection.query(getNames, (error, results) => {
        if (error) {
            console.error('Erro ao obter os nomes:', error);
            return res.status(500).send('Erro ao obter os nomes');
        }
        const names = results.map(row => row.name);
        console.log('Nomes:', names);
        res.send(`
            <h1>Full Cycle Rocks!</h1>
            <h2>Nomes cadastrados:</h2>
            <ul>
                ${names.map(name => `<li>${name}</li>`).join('')}
            </ul>
        `);
    });
});

app.listen(port, () => {
    console.log('listening on port ', port)
})