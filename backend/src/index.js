const express = require('express');
const cors = require('cors');
// const {pool} = require('../src/config/database_pg')
// const dbcon= require('../src/controller/dbcontroller')
const route = require('./routes/apiroutes');

// const bp = require("body-parser");

const app = express();
app.use(express.json());
app.use(cors());
// app.use(bp.urlencoded({ extended: true }));
//wdadw
app.use('/api/tooltip', route);

const port = 5000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})