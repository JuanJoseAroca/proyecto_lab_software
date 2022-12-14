const path = require('path');
require('dotenv').config();

const config = {
    'root' : path.join(__dirname , '/../../'),
    'views' : path.join(__dirname , '/../views'),
    'controllers' : path.join(__dirname , '/../controllers'),
    'sqlCon' : {
        host: "localhost",
        user: "root",
        password: "",
        database: "lib",
        charset : 'utf8mb4'
    },
    'populateCon' : {
        host: "localhost",
        user: "root",
        password: "",
        database: "lib",
        charset : 'utf8mb4',
        multipleStatements: true
    }
}

module.exports = config;