// Import stylesheets
import "./style.css";

// Write Javascript code!
const appDiv = document.getElementById("app");
appDiv.innerHTML = `<h1>JS Starter</h1>`;

let citiesInTheWorld = [
  ["Amsterdam", "The Netherlands"],
  ["Moscow", "Russia"],
  ["Los Angeles", "The United States"],
  ["Seoul", "Korea"],
  ["Jakarta", "Indonesia"]
];

function returnNested() {
  let newObj = {};
  let key = 0;
  let value = 0;
  
  for (let i = 0; i < citiesInTheWorld.length; i++) {
    for (let j = 0; j < citiesInTheWorld[i].length; j++) {
      key = citiesInTheWorld[i][j];
      value = citiesInTheWorld[i][j + 1];
      newObj[key] = value;
      j += 1;
    }
  }
  return newObj;
}

console.log(returnNested(citiesInTheWorld));
