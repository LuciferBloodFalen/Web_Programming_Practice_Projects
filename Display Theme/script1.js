let btn = document.querySelector("#modeChanger");

let curntMode = "light";

btn.addEventListener("click", () => {
  if (curntMode === "light") {
    document.querySelector("body").style.backgroundColor = "black";
    curntMode = "dark";
    btn.innerHTML = "LIGHT MODE";
  } else {
    document.querySelector("body").style.backgroundColor = "white";
    curntMode = "light";
    btn.innerHTML = "DARK MODE";
  }
});
