var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var multer = require("multer");
var indexRouter = require("./routes/index");
var postRouter = require("./routes/post");
var Api = require("./api");
var app = express();

const api = new Api();
console.log(api.updateProject);

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
var storage = multer.diskStorage({
  destination: function(req, file, next) {
    next(null, "./src/assets/uploads");
  },
  filename: function(req, file, next) {
    next(null, file.originalname + ".jpg");
  }
});
var upload = multer({ storage: storage });
var fUpload = upload.fields([{ name: "image", maxCount: 1 }]);
app.post("/api/update", api.updateProject);

app.post("/api/upload", function(req, res, next) {
  // upload
  fUpload(req, res, function(err) {
    // File details
    console.log(req.files.image[0].filename);
    // console.log(req.image);

    if (err) {
      console.error(err);
      console.log("An error occurred when uploading");
    } else {
      res.send({
        image: "/assets/uploads/" + req.files.image[0].filename
      });
    }
  });
});

app.use("/", indexRouter);
app.use("/post", postRouter);

// app.post("/api/create", api.createProject);
// app.post('/api/delete', api.deleteProject)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
