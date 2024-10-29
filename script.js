const dailyRoutine = document.querySelector(".daily-routine");
const weeklyRoutine = document.querySelector(".weekly-routine");
const monthlyRoutine = document.querySelector(".monthly-routine");
const boxesContainer = document.querySelector(".boxes-container");
const data = [
  {
    title: "Work",
    image: "./images/icon-work.svg",
    color: "#ff8c66",
    timeframes: {
      daily: {
        current: 5,
        previous: 7,
      },
      weekly: {
        current: 32,
        previous: 36,
      },
      monthly: {
        current: 103,
        previous: 128,
      },
    },
  },

  {
    title: "Play",
    image: "./images/icon-play.svg",
    color: "#56c2e6",
    timeframes: {
      daily: {
        current: 1,
        previous: 2,
      },
      weekly: {
        current: 10,
        previous: 8,
      },
      monthly: {
        current: 23,
        previous: 29,
      },
    },
  },
  {
    title: "Study",
    image: "./images/icon-study.svg", // Update with the correct path
    color: "#ff5c7c",
    timeframes: {
      daily: {
        current: 0,
        previous: 1,
      },
      weekly: {
        current: 4,
        previous: 7,
      },
      monthly: {
        current: 13,
        previous: 19,
      },
    },
  },
  {
    title: "Exercise",
    image: "./images/icon-exercise.svg", // Update with the correct path
    color: "#4acf81",
    timeframes: {
      daily: {
        current: 1,
        previous: 1,
      },
      weekly: {
        current: 4,
        previous: 5,
      },
      monthly: {
        current: 11,
        previous: 18,
      },
    },
  },
  {
    title: "Social",
    image: "./images/icon-social.svg", // Update with the correct path
    color: "#7536d3",
    timeframes: {
      daily: {
        current: 1,
        previous: 3,
      },
      weekly: {
        current: 5,
        previous: 10,
      },
      monthly: {
        current: 21,
        previous: 23,
      },
    },
  },
  {
    title: "Self Care",
    image: "./images/icon-self-care.svg", // Update with the correct path
    color: "#f1c75b",
    timeframes: {
      daily: {
        current: 0,
        previous: 1,
      },
      weekly: {
        current: 2,
        previous: 2,
      },
      monthly: {
        current: 7,
        previous: 11,
      },
    },
  },
];

function renderData(timeframe) {
  let rows = "";

  data.forEach((product) => {
    const timeData = product.timeframes[timeframe];
    rows += `
        <div class="weekly-box rounded-xl relative z-50 overflow-hidden" style="background-color: ${product.color};">
          <img src="${product.image}" class="absolute -top-3 -translate-1/2 right-4 w-14 -z-10" />
          <div class="bg-dark-blue active:bg-desaturated-blue z-10 p-6 rounded-lg mt-8">
            <div class="flex justify-between items-center">
              <span class="text-white">${product.title}</span>
              <img src="./images/icon-ellipsis.svg" />
            </div>
            <div class="md:flex md:flex-col flex flex-row items-center gap-5 md:gap-0 md:mt-4 text-white">
              <h1 class="text-4xl font-light md:items-start text-start md:w-full">${timeData.current}hrs</h1>
              <span class="text-pale-blue">Last ${timeframe} - ${timeData.previous}hrs</span>
            </div>
          </div>
        </div>
      `;
  });

  boxesContainer.innerHTML = rows;
}

// Initial render for weekly
renderData("weekly");

// Add event listeners for each routine
dailyRoutine.addEventListener("click", () => {
  renderData("daily");
  dailyRoutine.classList.add("active");
  weeklyRoutine.classList.remove("active");
  monthlyRoutine.classList.remove("active");
});

weeklyRoutine.addEventListener("click", () => {
  renderData("weekly");
  dailyRoutine.classList.remove("active");
  weeklyRoutine.classList.add("active");
  monthlyRoutine.classList.remove("active");
});

monthlyRoutine.addEventListener("click", () => {
  renderData("monthly");
  dailyRoutine.classList.remove("active");
  weeklyRoutine.classList.remove("active");
  monthlyRoutine.classList.add("active");
});

// weeklyRoutine.addEventListener("click", () => renderData("weekly"));
// monthlyRoutine.addEventListener("click", () => renderData("monthly"));

console.log(dailyRoutine);
