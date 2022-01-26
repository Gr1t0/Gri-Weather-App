let now = new Date();

let hours = now.getHours();

if (hours < 10) {
  hours = "0" + hours;
}

let minutes = now.getMinutes();

if (minutes < 10) {
  minutes = "0" + minutes;
}

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

let time = document.querySelector(".time");
time.innerHTML = `${day}, ${hours}:${minutes}`;

function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#searchCity");
  let h3 = document.querySelector("h3");
  h3.innerHTML = `${searchInput.value}`;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${searchInput.value}&units=metric`;
  console.log(apiUrl);
  axios
    .get(`${apiUrl}&appid=${apiKey}`)
    .then(showWeather)
    .catch((error) => {
      let h3 = document.querySelector("h3");
      console.log(error);
      h3.innerHTML = `${searchInput.value} Does not exist`;
    });
}

let form = document.querySelector(".search-class");
form.addEventListener("submit", search);

let apiKey = `fbfd0ba675ed0333a30a1c89647dc6a6`;

function showWeather(response) {
  console.log(response.data);
  let temperature = document.querySelector(".number");
  let temp = Math.round(response.data.main.temp);
  temperature.innerHTML = `${temp}`;
}
