import { data } from '/data.js';

const grid = document.querySelector(".grid-container");
const daily = document.querySelector(".daily");
const weekly = document.querySelector(".weekly");
const monthly = document.querySelector(".monthly");


const data2 = JSON.parse(data);


function createActivities(timeframe) {
  
  grid.innerHTML = `<div class="profile">
      <div class="profile-details">
        <div class="img-container">
          <img src="/image-jeremy.png" alt="a man">
        </div>

        <div class="profile-text">
          <p class="small">Report for</p>
          <p class="big">Jeremy Robson</p>
        </div>
      </div>

      <div class="time">
        <p><a href="#" class="daily">Daily</a></p>
        <p><a href="#" class="weekly">Weekly</a></p>
        <p><a href="#" class="monthly">Monthly</a></p>
      </div>
    </div>`
    
  data2.forEach((item) => {
    const element = document.createElement("div");
    element.classList.add("activity");
    element.innerHTML = `
      <div class="activity-image ${item.title.toLowerCase()}"></div>
      <div class="activity-text">
        <div class="title">
          <p class="a">${item.title}</p>
          <div class="ellipsis">
            <img src="/icon-ellipsis.svg" alt="circles">
          </div>
        </div>
        <div class="activity-time">
          <p class="activity-big">${item.timeframes[timeframe].current}hrs</p>
          <p class="small">Last Week - ${item.timeframes[timeframe].previous}hrs</p>
        </div>
      </div>`;
    grid.appendChild(element);
  });
}


grid.addEventListener("click", function (e) {
  let g = e.target
  if (g.classList.contains("daily")) {
    createActivities("daily")
  } else if (g.classList.contains("weekly")) {
    createActivities("weekly")
  } else if (g.classList.contains("monthly")) {
    createActivities("monthly")
  }
})


document.addEventListener("DOMContentLoaded", () => createActivities("daily"));
