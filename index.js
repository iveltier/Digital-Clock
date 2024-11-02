let is24hFormat = false;

function updateClock() {
  const now = new Date();
  let hours = now.getHours();
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const seconds = now.getSeconds().toString().padStart(2, "0");
  let timeString;

  if (!is24hFormat) {
    hours = hours.toString().padStart(2, "0");
    timeString = `${hours}:${minutes}:${seconds}`;
  } else {
    const meridiem = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    hours = hours.toString().padStart(2, "0");
    timeString = `${hours}:${minutes}:${seconds} ${meridiem}`;
  }

  document.getElementById("clock").textContent = timeString;
}

function switchTimeDisplay() {
  is24hFormat = !is24hFormat;
  updateClock();
}

updateClock();
setInterval(updateClock, 1000);

function changeRandomBackground() {
  const backgroundNum = Math.floor(Math.random() * 15) + 1;
  const body = document.getElementsByTagName("body")[0];
  body.style.backgroundImage = `url('img/background${backgroundNum}.jpg')`;
}
function changeBetterRandomBackground() {
  const backgroundNum = Math.floor(Math.random() * (39 - 16 + 1)) + 16;
  const body = document.getElementsByTagName("body")[0];
  body.style.backgroundImage = `url('img/background${backgroundNum}.jpg')`;
}

function changeClockColor() {
  document.getElementById("clock").style.color =
    document.getElementById("inputColor").value;
}
