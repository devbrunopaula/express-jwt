const router = require("express").Router();

router.get("/auth", (req, res) => {
  res.send(`<h1>Welcome to Bruno's Api</h1>`);
});

router.get("/", (req, res) => {
  res.send(`<h1>Welcome to Bruno's Api</h1>`);
});

module.exports = router;
