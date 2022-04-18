// import {
//   run_counter,
//   weightlifting_counter,
//   yoga_counter,
//   rest_counter,
// } from "./plan";

let run_counter = 0;
let rest_counter = 0;
let weightlifting_counter = 0;
let yoga_counter = 0;

getCounters();

//total workout
const totalWorkouts =
  run_counter + weightlifting_counter + yoga_counter + rest_counter;
$("#total").html(
  `Total workouts done: <span style="color:#E63946" ;><b>${totalWorkouts}</b></span>`
);

//chart
const ctx = document.getElementById("myChart").getContext("2d");
const myChart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["Run", "Weightlifting", "Yoga", "Rest"],
    datasets: [
      {
        label: "Total workouts done",
        data: [run_counter, weightlifting_counter, yoga_counter, rest_counter],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
        ],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 1,
        },
      },
    },
  },
});
function getCounters() {
  if (run_counter === 0) {
    if (localStorage.getItem("runCounter")) {
      run_counter = parseInt(localStorage.getItem("runCounter"));
    }
  }
  if (rest_counter === 0) {
    if (localStorage.getItem("restCounter")) {
      rest_counter = parseInt(localStorage.getItem("restCounter"));
    }
  }
  if (weightlifting_counter === 0) {
    if (localStorage.getItem("weightliftingCounter")) {
      weightlifting_counter = parseInt(
        localStorage.getItem("weightliftingCounter")
      );
    }
  }
  if (yoga_counter === 0) {
    if (localStorage.getItem("yogaCounter")) {
      yoga_counter = parseInt(localStorage.getItem("yogaCounter"));
    }
  }
}
