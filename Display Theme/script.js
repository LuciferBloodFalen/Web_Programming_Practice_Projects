let modeChanger = document.querySelector("#modeChanger");
let container = document.querySelector("#container");
let samplHead = document.querySelector("#samplHead");
let samplPara = document.querySelector("#samplPara");
let samplDiv = document.querySelector("#samplDiv");

let btnStatus = "off";

container.addEventListener("click", () => {
  if (btnStatus === "off") {
    document.querySelector("body").style.backgroundColor = "black";
    container.style.flexDirection = "row-reverse";
    modeChanger.style.animation =
      "slideRight 0.5s ease 0s 1 normal none running";
    container.style.backgroundColor = "#4e8098";
    samplHead.style.color = "white";
    samplPara.style.color = "white";
    samplDiv.style.color = "black";
    samplDiv.style.backgroundColor = "white";

    btnStatus = "on";
  } else {
    document.querySelector("body").style.backgroundColor = "white";
    container.style.flexDirection = "row";
    modeChanger.style.animation =
      "slideLeft 0.5s ease-in 0s 1 normal none running";
    container.style.backgroundColor = "#fcf7f8";
    samplHead.style.color = "black";
    samplPara.style.color = "black";
    samplDiv.style.color = "white";
    samplDiv.style.backgroundColor = "black";

    btnStatus = "off";
  }
});
