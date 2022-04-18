//#region counters
let run_counter = 0;
let weightlifting_counter = 0;
let yoga_counter = 0;
let rest_counter = 0;

getCountersFromLocalStorage();
//#endregion
//#region show and hide sports
$(".sports").hide();

$(".sport-container").click(function () {
  $(this).find(".sports").toggle();
});
//#endregion
//#region select the sport and up the counter
$(".run-svg").click(function () {
  moveSVG(this);
  run_counter++;
  localStorage.setItem("runCounter", run_counter);
});

$(".weightlifting-svg").click(function () {
  moveSVG(this);
  weightlifting_counter++;
  localStorage.setItem("weightliftingCounter", weightlifting_counter);
});

$(".yoga-svg").click(function () {
  moveSVG(this);
  yoga_counter++;
  localStorage.setItem("yogaCounter", yoga_counter);
});

$(".rest-svg").click(function () {
  moveSVG(this);
  rest_counter++;
  localStorage.setItem("restCounter", rest_counter);
});
//#endregion

//#region move the svg to the parent
function moveSVG(svg) {
  //Move svg to parent = select the SVG
  $(svg).prependTo($(svg).parent().parent());
  $(svg).addClass("sport-selected");
}
//#endregion

function getCountersFromLocalStorage() {
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

//#region get Border around current day
const borderContainer = (number) => {
  $(".day-container").eq(number).css("border", "5px solid #1D3557");
};
const currentDay = new Date().getDay();
switch (currentDay) {
  case 1:
    borderContainer(0);
    break;
  case 2:
    borderContainer(1);
    break;
  case 3:
    borderContainer(2);
    break;
  case 4:
    borderContainer(3);
    break;
  case 5:
    borderContainer(4);
    break;
  case 6:
    borderContainer(5);
    break;
  case 0:
    borderContainer(6);
    break;
  default:
    break;
}
//#endregion
