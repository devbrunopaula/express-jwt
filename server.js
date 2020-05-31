require("dotenv").config();
const express = require("express");
const app = express();

const jwt = require("jsonwebtoken");

app.use(express.json());

//Import Routes

const apiIndex = require("./routes/index");

app.use("/api", apiIndex);

// app.post("/login", (req, res) => {
//   const username = req.body.username;
//   const user = { name: username };

//   const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN);

//   res.json({ accessToken: accessToken });
// });

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server Running on port ${port}`));
