const monthEl = document.querySelector(".date h1");
const fullDateEl = document.querySelector(".date p");
const daysEl = document.querySelector(".days");

const date = new Date();

const monthInx = date.getMonth();
const year = date.getFullYear();

const lastDay = new Date(year, monthInx + 1, 0).getDate();
const firstDay = new Date(year, monthInx, 1).getDay();

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

monthEl.innerText = months[monthInx];
fullDateEl.innerText = date.toDateString();

let days = "";

// Empty boxes before first day
for (let i = 0; i < firstDay; i++) {
  days += `<div class="empty"></div>`;
}

// Days of month
for (let i = 1; i <= lastDay; i++) {
  if (
    i === date.getDate() &&
    monthInx === date.getMonth() &&
    year === date.getFullYear()
  ) {
    days += `<div class="today">${i}</div>`;
  } else {
    days += `<div>${i}</div>`;
  }
}

daysEl.innerHTML = days;