import options from "../config/config.js";

//this is the base url
export let url =
  "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/";

//#region DOM variables
let readmore = $(".read-more");
let recipeTitle = $(".recipeTitle");
//#endregion

async function start() {
  const response = await fetch(`${url}random?number=4`, options);
  const data = await response.json();

  //#region populate Headers
  populateHeader(data.recipes[0], 0);
  populateHeader(data.recipes[1], 1);
  populateHeader(data.recipes[2], 2);
  populateHeader(data.recipes[3], 3);
  //#endregion

  return data;
}

function populateHeader(recipe, number) {
  recipeTitle.eq(number).html(recipe.title);
}

// start();

const data = await start();
export default data;
