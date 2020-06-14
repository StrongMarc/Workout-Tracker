init();

async function init() {
  console.log("index4")  //xx
  // https://www.w3schools.com/jsref/prop_loc_search.asp
  if (location.search.split("=")[1] === undefined) {
    console.log("index7", location.search.split("=")[1]) //xx
    const workout = await API.getLastWorkout();
    console.log("index9", workout) //xx
    if (workout) {
      location.search = "?id=" + workout._id;
      console.log("ind-YES!")
    } else {
      document.querySelector("#continue-btn").classList.add("d-none")
    }
  } else { //xx
    console.log("index16", location.search.split("=")[1]) //xx
  }
}

