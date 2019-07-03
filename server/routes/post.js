var express = require("express");
var router = express.Router();
var posts = require("../projects.json");

// the project router

// creating/updating is
// done on the same template

router.get("/update/:id", function(req, res, next) {
  // get the post from the id param
  const post = posts.filter(function(post) {
    console.log(post.id, req.params.id);
    return post.id.toString() === req.params.id;
  });

  res.render("post", {
    title: "Update",
    // the form action
    action: "/api/update",
    post: post[0]
  });
});

router.get("/new", function(req, res, next) {
  const id = posts.length;
  res.render("post", {
    title: "Add new",
    action: "/api/create",
    // pass in empty post
    // with id
    post: {
      id,
      tags: [] // can't be empty so pug doesn't break when looping through them
    }
  });
});

module.exports = router;
