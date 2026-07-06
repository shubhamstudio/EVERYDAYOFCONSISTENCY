let inp = document.querySelector("input");

inp.addEventListener("mouseout", (event) => {
  // highlight the mouseleave target
  console.dir(event);
  console.log(event);
  event.target.style.color = "skyblue";

//   reset the color after a short delay
  setTimeout(() => {
    event.target.style.color = "";
  }, 1000);
});