// KEYS
// ArrowLeft was not made up
// Switch
const circle = document.querySelector(".circle");
const mouth = document.querySelector("#mouth");

function control(event) {
  switch (event.key) {
    case "ArrowUp":
      console.log("pressed up");
      mouth.classList.add("smile");
      mouth.classList.remove("frown");
      break;
    case "ArrowDown":
      mouth.classList.add("frown");
      mouth.classList.remove("smile");
      break;
    default:
      console.log("key not recognized");
  }
}

document.addEventListener("keydown", control);
