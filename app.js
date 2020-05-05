//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require("lodash");
let posts = [];

const homeStartingContent = "Lacus vel facilisis volutpat est velit egestas dui id ornare. Semper auctor neque vitae tempus quam. Sit amet cursus sit amet dictum sit amet justo. Viverra tellus in hac habitasse. Imperdiet proin fermentum leo vel orci porta. Donec ultrices tincidunt arcu non sodales neque sodales ut. Mattis molestie a iaculis at erat pellentesque adipiscing. Magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Adipiscing elit ut aliquam purus sit amet luctus venenatis lectus. Ultrices vitae auctor eu augue ut lectus arcu bibendum at. Odio euismod lacinia at quis risus sed vulputate odio ut. Cursus mattis molestie a iaculis at erat pellentesque adipiscing.";
const aboutContent = "Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Non diam phasellus vestibulum lorem sed. Platea dictumst quisque sagittis purus sit. Egestas sed sed risus pretium quam vulputate dignissim suspendisse. Mauris in aliquam sem fringilla. Semper risus in hendrerit gravida rutrum quisque non tellus orci. Amet massa vitae tortor condimentum lacinia quis vel eros. Enim ut tellus elementum sagittis vitae. Mauris ultrices eros in cursus turpis massa tincidunt dui.";
const contactContent = "Scelerisque eleifend donec pretium vulputate sapien. Rhoncus urna neque viverra justo nec ultrices. Arcu dui vivamus arcu felis bibendum. Consectetur adipiscing elit duis tristique. Risus viverra adipiscing at in tellus integer feugiat. Sapien nec sagittis aliquam malesuada bibendum arcu vitae. Consequat interdum varius sit amet mattis. Iaculis nunc sed augue lacus. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Pulvinar elementum integer enim neque. Ultrices gravida dictum fusce ut placerat orci nulla. Mauris in aliquam sem fringilla ut morbi tincidunt. Tortor posuere ac ut consequat semper viverra nam libero.";

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));

//Challenge 1 to connect Home Page with home ejs ⬆

app.get("/", function(req, res) {
  //Challenge 2 to render the content of homeStartingContent with
  //homeContent in the home.ejs file ⬆

  //Challenge 12 i have to put two variables insted of 1 i was thinking
  //in target though good job
  res.render("home", {
    homeContent: homeStartingContent,
    posts: posts
  });

});


//Challenge 5 to connect about & contact pages with variables
//and header footer ejs ⬆
app.get("/about", function(req, res) {

  res.render("about", {
    about: aboutContent
  });

});


app.get("/contact", function(req, res) {

  res.render("contact", {
    contact: contactContent
  });
});


//Challenge 7 - Connect with compose ejs ⬆

app.get("/compose", function(req, res) {

  res.render("compose");

});

//Challenge 8 to post data from compose input and log in console ⬆
app.post("/compose", function(req, res) {
  //Challenge 10 to create post object and pass the values from inputs ⬆
  const post = {
    title: req.body.postTitle,
    content: req.body.postBody
  };
  //Challenge 11 to create posts array in top and push post and display in console ⬆
  posts.push(post);
  res.redirect("/");

});

//Challenge 16 - Write the code for get with code parameters and console log ⬆
app.get("/posts/:postName", function(req, res) {
  //Challenge 17 - Create a console log for each Title that is same with parameter
  //title postName  ⬆

  //but forgot postedName inside the loop and couldn't pass the lowerCase
  const postedName = _.lowerCase(req.params.postName);

  posts.forEach(function(post) {


    const storedTitle = _.lowerCase(post.title);

    if (storedTitle === postedName) {

      //Challenge 19 i had to render the composed message to a new page
      res.render("post", {
        composedTitle: post.title,
        composedContent: post.content
      });
    }



  });



});







app.listen(3000, function() {
  console.log("Server started on port 3000");
});
