const {Pool} = require('pg');

const pool = new Pool({
    host : "localhost",
    user : "conas",
    port : 5432,
    password: "1234",
    database: "conas",
});

module.exports = {pool}