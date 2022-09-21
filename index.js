var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var app = express();
var mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://blllrpy:sendhelp09@projects.6btckj8.mongodb.net/?retryWrites=true&w=majority"
);
var publicfolder = path.join(__dirname, "public");

app.use(express.static(publicfolder));
app.use(bodyParser.urlencoded({ extended: true }));

var User = mongoose.model("User", { name: String, age: Number });

app.get("", (req, res) => {
  res.render(publicfolder + "/form.ejs");
});

app.post("/user", (req, res) => {
  var user = new User({ name: req.body.username, age: req.body.age });

  user
    .save()
    .then((newUser) => {
      res.send("created new user");
    })
    .catch((err) => {
      res.send("something went wrong");
    });
});
app.listen(3000, () => {
  console.log("good good");
});
