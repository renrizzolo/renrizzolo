var express = require("express");
var router = express.Router();
var posts = require("../projects.json");

router.get("/update/:id", function(req, res, next) {
  const post = posts.filter(function(post) {
    console.log(post.id, req.params.id);

    return post.id.toString() === req.params.id;
  });
  console.log("post:", post[0]);

  res.render("post", {
    title: "Update",
    action: "/api/update",
    post: post[0]
  });
});

router.get("/new", function(req, res, next) {
  const id = posts.length;
  res.render("post", {
    title: "Add new",
    action: "/api/create",
    post: {
      id,
      tags: []
    }
  });
});

module.exports = router;
