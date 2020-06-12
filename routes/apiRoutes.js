const db = require("../models");

module.exports = function(app) {
  app.get("/api/workouts", function(req, res) {
    console.log("in route5")
    db.Workout.find({}).then(function(exersices) {
      console.log("in route7")
      res.json(exersices);
    }).catch(function(err){
      console.log("err", err)
    })
  });

  app.put("/api/workouts", function({body}, res) {
    console.log("in route15")
    console.log(body)
    db.Workout.create(body).then(function(exersices) {
      console.log("in route17")
      res.json(exersices);
    }).catch(function(err){
      console.log("err", err)
    })
  });

  app.get("/api/workouts/range", function(req, res) {
    db.Workout.find({}).then(function(exersices) {
      lastIndex = exersices.length-1
      lastDay = exersices[lastIndex].day.getDay()+1
      rangeExcercise = exersices.slice(lastIndex-lastDay, lastIndex)
      res.json(rangeExcercise);
    }).catch(function(err){
      console.log("err", err)
    })
  });
};
