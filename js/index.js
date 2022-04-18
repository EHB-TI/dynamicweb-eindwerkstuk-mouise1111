import options from "../config/config.js";

//this is the base url
let url =
  "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/";

//#region DOM variables
let readmore = $(".read-more");
let recipeTitle = $(".recipeTitle");
//#endregion

async function start() {
  const response = await fetch(`${url}random?number=4`, options);
  const data = await response.json();
  //#region populate Headers
  populateHeader(recipe1, 0);
  populateHeader(recipe2, 1);
  populateHeader(recipe3, 2);
  populateHeader(recipe4, 3);
  //#endregion

  return data;
}

function populateHeader(recipe, number) {
  recipeTitle.eq(number).html(recipe.title);
}

start();

let recipes = await start();
export default recipes;
