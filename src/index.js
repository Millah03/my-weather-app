let now = new Date();
let hours = now.getHours();
let minutes = now.getMinutes();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let day = days[now.getDay()];

function showCity(event) {
  event.preventDefault();
  let h1 = document.querySelector("h1");
  let location = document.querySelector("#location-input");
  h1.innerHTML = `${location.value}`;
  getCity(location.value);
}

let h2 = document.querySelector("h2");
h2.innerHTML = `${day} ${hours}:${minutes}`;

let form = document.querySelector("form");
form.addEventListener("submit", showCity);

function showTemperature(response) {
  document.querySelector("#city").innerHTML = `${response.data.name}`;
  document.querySelector("#temperature").innerHTML = `${Math.round(
    response.data.main.temp
  )}`;
}
function getCity(city) {
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=914ab27dc24887be9302a219997db06b&units=imperial`;
  axios.get(apiUrl).then(showTemperature);
}
function handleSubmit(event) {
  event.preventDefault();
  let city = document.querySelector("#location-input").value;
  getCity(city);
}
function getLocation(position) {
  let apiUrl = `htpps://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=914ab27dc24887be9302a219997db06b&units=imperial`;
  axios.get(apiUrl).then(showTemperature);
}

function getCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(getLocation);
}
let search = document.querySelector("#location-input");
search.addEventListener("submit", handleSubmit);
let button = document.querySelector("button");
button.addEventListener("click", getCurrentLocation);
getCity("Riverside");
