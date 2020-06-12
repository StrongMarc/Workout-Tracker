const API = {
  async getLastWorkout() {
    let res;
    try {
      res = await fetch("/api/workouts");
      console.log("api6", res)
    } catch (err) {
      console.log(err)
    }
    const json = await res.json();
    console.log("api11", json[json.length - 1])
    return json[json.length - 1];
  },
  async addExercise(data) {
    console.log("api15", data)
    const id = location.search.split("=")[1];

    const res = await fetch("/api/workouts/" + id, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });

    const json = await res.json();

    return json;
  },
  async createWorkout(data = {}) {
    console.log("api29", data)
    const res = await fetch("/api/workouts", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" }
    });
    console.log("api35", res)
    const json = await res.json();
    console.log("api37", json)
    return json;
  },

  async getWorkoutsInRange() {
    const res = await fetch(`/api/workouts/range`);
    const json = await res.json();

    return json;
  },
};
