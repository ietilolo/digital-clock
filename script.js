const clock = document.querySelector("#clock");
const day_container = document.querySelector("#day");
const month_container = document.querySelector("#month");
const year_container = document.querySelector("#year");
const time_of_day_container = document.querySelector("#time_of_day");

function startClock() {
  const date = new Date();
  let time_hours = date.getHours();
  let time_minutes = date.getMinutes();
  let time_seconds = date.getSeconds();
  let time_of_day = "AM";
  if (time_hours === 0) {
    time_hours = 12;
  }
  if (time_hours > 12) {
    time_hours = time_hours - 12;
    time_of_day = "PM";
  }
  time_hours = time_hours < 10 ? "0" + time_hours : time_hours;
  time_minutes = time_minutes < 10 ? "0" + time_minutes : time_minutes;
  time_seconds = time_seconds < 10 ? "0" + time_seconds : time_seconds;
  time_of_day_container.innerHTML = time_of_day;
  clock.innerHTML = `${time_hours}:${time_minutes}:${time_seconds}`;
}
setInterval(startClock, 1000);

function startDate() {
  const date = new Date();
  let day = date.getDay();
  let month = date.getMonth();
  let year = date.getFullYear();

  // Day
  switch (day) {
    case 1:
      day = "Monday";
      break;
    case 2:
      day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
      break;
    case 7:
      day = "Sunday";
      break;
  }

  // Month
  switch (month) {
    case 0:
      month = "January";
      break;
    case 1:
      month = "Febuary";
      break;
    case 2:
      month = "March";
      break;
    case 3:
      month = "April";
      break;
    case 4:
      month = "May";
      break;
    case 5:
      month = "June";
      break;
    case 6:
      month = "July";
      break;
    case 7:
      month = "August";
      break;
    case 8:
      month = "September";
      break;
    case 9:
      month = "October";
      break;
    case 10:
      month = "November";
    case 11:
      month = "December";
      break;
  }

  day_container.innerHTML = day;
  month_container.innerHTML = month;
  year_container.innerHTML = year;
}
setTimeout(startDate, 500);
