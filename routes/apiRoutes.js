const db = require("../models");

module.exports = function(app) {
  app.get("/api/workouts", function(req, res) {
    console.log("in route5")
    db.Workout.find({}).then(function(exersizes) {
      console.log("in route7")
      res.json(exersizes);
    }).catch(function(err){
      console.log("err", err)
    })
  });



};
