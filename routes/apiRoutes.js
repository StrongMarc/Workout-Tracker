const db = require("../models");

module.exports = function(app) {
  app.get("/api/workouts", function(req, res) {
    console.log("in route5")
    db.Workout.find({}).then(function(exercises) {
      console.log("in route7")
      res.json(exercises);
    }).catch(function(err){
      console.log("err", err)
    })
  });

  app.put("/api/workouts/:id", function(req, res) {
    console.log("in route15")
    console.log(req.body)
    db.Workout.updateOne({ _id: req.params.id },{$push: { exercises: req.body }}).then(function(exercises) {
      console.log("in route18")
      res.json(exercises);
    }).catch(function(err){
      console.log("err", err)
    })
  });

  app.post("/api/workouts", function(req, res) {
    console.log("in route26")
    console.log(req.body)
    db.Workout.create(req.body).then(function(exercises) {
      console.log("in route28")
      res.json(exercises);
    }).catch(function(err){
      console.log("err", err)
    })
  });  

  app.get("/api/workouts/range", function(req, res) {
    db.Workout.find({}).then(function(exercises) {
      lastIndex = exercises.length-1
      console.log(exercises[lastIndex].day)
      lastDay = exercises[lastIndex].day.getDay()+1
      rangeExcercise = exercises.slice(lastIndex-lastDay+1, lastIndex+1)
      console.log(rangeExcercise)
      res.json(rangeExcercise);
    }).catch(function(err){
      console.log("err", err)
    })
  });
};
