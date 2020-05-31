require("dotenv").config();
const express = require("express");
const mongoose = require('mongoose')
const app = express();

// const jwt = require("jsonwebtoken");
// const apiIndex = require("./routes/index");
// Routes Import
const users = require('./routes/api/users')
app.use(express.json());



// DB Connection
mongoose.connect(process.env.mongoDb, { useUnifiedTopology: true, useNewUrlParser: true })
.then( ()=> console.log('DB Connected'))
.catch( err => console.log(err))

app.use('/api/users', users)












const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server Running on port ${port}`));
