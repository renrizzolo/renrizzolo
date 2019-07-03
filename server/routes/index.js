var express = require("express");
var router = express.Router();
var posts = require("../projects.json");

/* GET home page. */

// Home page lists all projects

router.get("/", function(req, res, next) {
  res.render("index", { title: "Express", posts: posts });
});

module.exports = router;
