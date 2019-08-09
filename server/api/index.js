var fs = require("fs");
var multer = require("multer");
const fileName = "./server/projects.json";
const fileDest = "./src/api/projects.json";
var posts = require("../projects.json");

var storage = multer.diskStorage({
  destination: function(req, file, next) {
    next(null, "./src/assets/uploads");
  },
  filename: function(req, file, next) {
    next(null, Date.now() + "-" + file.originalname);
  }
});

var upload = multer({ storage: storage });
var fUpload = upload.fields([{ name: "image", maxCount: 1 }]);

function createAndCopy(content) {
  return new Promise((resolve, reject) => {
    // (over) write server/projects.json
    fs.writeFile(fileName, JSON.stringify(content), "utf8", function(err) {
      if (err) reject(err);
      console.log("wrote to " + fileName);
      // copy to src/api folder
      fs.copyFile(fileName, fileDest, err => {
        if (err) reject(err);
        console.log("copied to " + fileDest);
        resolve();
      });
    });
  });
}

module.exports = class Api {
  uploadImage(req, res) {
    // upload
    fUpload(req, res, function(err) {
      // File details
      if (err) {
        console.error(err);
        console.log("An error occurred when uploading");
      } else {
        res.send({
          image: "/assets/uploads/" + req.files.image[0].filename
        });
      }
    });
  }

  createProject(req, res) {
    console.log("api/create", req.body);
    const post = req.body;
    if (!post.id) res.render("error");
    const lastIndex = posts[posts.length - 1].id;
    const id = Number(lastIndex) + 1; // ok we're just incrementing the id number

    const project = {
      id: id,
      slug: post.slug,
      datePublished: post.datePublished,
      coverImage: post.coverImage,
      heading: post.heading,
      subHeading: post.subHeading,
      link: post.link,
      tags: post["tags[]"],
      category: post.category,
      details: post.html
    };
    posts.push(project);
    console.log("nu posts", posts);

    createAndCopy(posts)
      .then(res.redirect("/"))
      .catch(err => console.log(err));
  }

  updateProject(req, res, next) {
    console.log("api/udate", req.body);

    // the form submission data
    const post = req.body;
    if (!post.id) res.render("error");

    // get the index of the project we want to update
    const index = posts.findIndex(function(project) {
      return Number(post.id) === Number(project.id);
    });
    // make sure the post exists
    if (index !== -1) {
      // build the project obj how we want it
      const project = {
        id: post.id, // hmm, this will be a string (should ids be forced to be a number or string?)
        slug: post.slug,
        coverImage: post.coverImage,
        datePublished: post.datePublished,
        heading: post.heading,
        subHeading: post.subHeading,
        link: post.link,
        tags: post["tags[]"],
        category: post.category,
        details: post.html // @todo: get/parse delta from quill
      };

      posts[index] = project;
      console.log("nu posts", posts);

      createAndCopy(posts)
        .then(res.redirect("/"))
        .catch(err => console.log(err));
    } else {
      res.render("error");
    }
  }

  deleteProject(req, res) {
    console.log("api/delete", req.body);
    const post = req.body;
    if (!post.id) res.render("error");

    const index = posts.findIndex(function(project) {
      return Number(post.id) === Number(project.id);
    });

    posts.splice(index, index);

    createAndCopy(posts)
      .then(res.redirect("/"))
      .catch(err => console.log(err));
  }
};
