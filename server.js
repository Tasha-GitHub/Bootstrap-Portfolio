// Include Server Dependencies
var express = require("express");
var bodyParser = require("body-parser");

// Create a new express app
var app = express();
// Sets an initial port. We'll use this later in our listener
var PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static("./public"));

// ================================================================================
// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
// ================================================================================

require("./routing/api-routes.js")(app);
require("./routing/html-routes.js")(app); 
// -------------------------------------------------


// Starting our express server
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
