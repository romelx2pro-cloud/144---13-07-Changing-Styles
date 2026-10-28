// Changing the color and background-color:
const h1 = document.querySelector("h1");
h1.style.color = "pink";
h1.style.backgroundColor = "yellow"; //camel cased! (not background-color but backgroundColor)

// Changing Multiple Elements:
const allLis = document.querySelectorAll("li");
const colors = ["red", "orange", "yellow", "green", "blue", "purple"];

// allLis.forEach((li, i) => {
//   const color = colors[i];
//   li.style.color = color;
// })
// allLis.forEach((el, i) => {
//   const c = colors[i];
//   el.style.color = c;
//   console.log(el, i);
// });

// for (let i = 0; i < allLis.length; i++) {
//   const element = allLis[i];
//   console.log((element.innerText = "w"));
// }
// for (const li of allLis) {
//   li.innerHTML = "<b>b</b>";
// }
// allLis.forEach((li, i) => {
//   const c = colors[i];
//   console.log(li, c);
//   li.style.color = c;
// });
