//#region path
let paths = document.querySelectorAll("svg path"),
  i = 0;

paths.forEach(function (item, index) {
  i++;

  const pathLength = item.getTotalLength();

  item.setAttribute("stroke-dasharray", pathLength);
  item.setAttribute("stroke-dashoffset", pathLength);

  item.innerHTML =
    "<animate attributeName='stroke-dashoffset' begin = '5s' dur=5s to=0 fill='freeze' />";
});

//#endregion
