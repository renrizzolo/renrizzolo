var fs = require("fs");
var multer = require("multer");
const fileName = "./server/projects.json";
const fileDest = "./src/api/projects.json";
var posts = require("../projects.json");

// update the json file and copy it to
// frontend src folder

var storage = multer.diskStorage({
  destination: function(req, file, next) {
    next(null, "./src/assets/uploads");
  },
  filename: function(req, file, next) {
    next(null, Date.now() + file.originalname + ".jpg");
  }
});
var upload = multer({ storage: storage });
var fUpload = upload.fields([{ name: "image", maxCount: 1 }]);

function createAndCopy(content) {
  return new Promise((resolve, reject) => {
    fs.writeFile(fileName, JSON.stringify(content), "utf8", function(err) {
      if (err) reject(err);
      console.log("wrote to " + fileName);
      // destination.txt will be created or overwritten by default.
      fs.copyFile(fileName, fileDest, err => {
        if (err) reject(err);
        console.log("copied to " + fileDest);
        resolve();
      });
    });
  });
}

module.exports = class Api {
  uploadImage(req, res, next) {
    // upload
    console.log("upliading ");

    fUpload(req, res, next, function(err) {
      // File details
      console.log(req.files.image[0].filename);
      // console.log(req.image);

      if (err) {
        console.error(err);
        console.log("An error occurred when uploading");
      } else {
        console.log("posted");

        next(
          "https://bittrexblobstorage.blob.core.windows.net/public/b043adc7-a129-410f-8d6b-66db958cb26d.png"
        );
        res.send({
          responseText:
            "https://bittrexblobstorage.blob.core.windows.net/public/b043adc7-a129-410f-8d6b-66db958cb26d.png"
        });
      }
    });
  }
  updateProject(req, res) {
    console.log("api/udate", req.body);

    // the form submission data
    const post = req.body;
    if (!post.id) res.render("error");

    // get the index of the project we want to update
    const index = posts.findIndex(function(project) {
      return post.id === project.id.toString();
    });
    console.log("index", index);
    // make sure the post exists
    if (index !== -1) {
      // build the project obj how we want it
      const project = {
        id: post.id, // hmm, this will be a string (should ids be forced to be a number or string?)
        slug: post.slug,
        coverImage: post.coverImage,
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
};
