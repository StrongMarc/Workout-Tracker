const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const exerciseProperties = {
  type: { 
    type: String, 
    required: true 
  },
  name: {
    type: String, 
    required: true 
  },
  duration: Number,
  weight: Number,
  reps: Number, 
  sets: Number
};

const workoutSchema = new Schema({
  day: { 
    type: Date, 
    default: Date.now 
  },
  exercises: [exerciseProperties]
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;