const db = require("../models");

module.exports = function(app) {
  app.get("/api/workouts", function(req, res) {
    console.log("in route")
    db.Workout.find({}).then(function(exersizes) {
      console.log("exersizes", exersizes)
      res.json(exersizes);
    }).catch(function(err){
      console.log("err", err)
    })
  });



};
