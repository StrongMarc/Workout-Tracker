const db = require("../models");

module.exports = function(app) {
  // app.get("/excercise?", function(req, res) {
  //   db.Image.find({}).then(function(dbImages) {
  //     res.json(dbImages);
  //   });
  // });

  // app.put("/api/images/:id", function(req, res) {
  //   db.Image.updateOne({ _id: req.params.id }, { rating: req.body.rating }).then(function(dbImage) {
  //     res.json(dbImage);
  //   });
  // });

  // db.Library.create({ name: "Campus Library" })
  // .then(dbLibrary => {
  //   console.log(dbLibrary);
  // })
  // .catch(({message}) => {
  //   console.log(message);
  // });
};
