// let inp = document.querySelector("input");

// inp.addEventListener("mouseout", (event) => {
//   // highlight the mouseleave target
//   console.dir(event);
//   console.log(event);
//   event.target.style.color = "skyblue";

// //   reset the color after a short delay
//   setTimeout(() => {
//     event.target.style.color = "";
//   }, 1000);
// });

// 1. Create a new button element
const myButton = document.createElement('button');

// 2. Set the button's text
myButton.textContent = 'Click Me!';

// 3. Add an event listener to change its color to green when clicked
myButton.addEventListener('click', function() {
  event.preventDefault();
    myButton.style.backgroundColor = 'green';
    myButton.style.color = 'white'; // Optional: Makes the text readable on green
});

// 4. Append the button to the webpage so it becomes visible
document.body.appendChild(myButton);
