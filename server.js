const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { 
  useNewUrlParser: true 
});

// mongoose.connect(process.env.MONGODB_URI || 
//   "mongodb://user1:password1@ds143241.mlab.com:43241/heroku_hx48m82x", { 
//   useNewUrlParser: true 
// });

// routes
require("./routes/apiRoutes")(app);
// require("./routes/htmlRoutes")(app);

app.listen(PORT, () => {
  console.log("Server listening on: http://localhost:" + PORT);
});
 