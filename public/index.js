init();

async function init() {
  // https://www.w3schools.com/jsref/prop_loc_search.asp
  if (location.search.split("=")[1] === undefined) {
    const workout = await API.getLastWorkout();
    console.log("index6", workout)
    if (workout) {
      location.search = "?id=" + workout._id;
    } else {
      document.querySelector("#continue-btn").classList.add("d-none")
    }
  }
}

