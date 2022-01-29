const hoursHandElement = document.querySelector(".hour-hand");
const minutesHandElement = document.querySelector(".min-hand");
const secondsHandElement = document.querySelector(".second-hand");

function setTime() {
  //   console.log("Hi");
  const time = new Date();
  const seconds = time.getSeconds();

  console.log(seconds);
  const secondsDeg = (seconds / 60) * 360 + 90;
  secondsHandElement.style.transform = `rotate(${secondsDeg}deg)`;

  const minutes = time.getMinutes();
  const minutesDeg = (minutes / 60) * 360 + 90;
  minutesHandElement.style.transform = `rotate(${minutesDeg}deg)`;

  const hours = time.getHours();
  const hoursDeg = (hours / 12) * 360 + 90;
  hoursHandElement.style.transform = `rotate(${hoursDeg}deg)`;
}
setInterval(setTime, 1000);
