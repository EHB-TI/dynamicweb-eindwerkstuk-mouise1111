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

  // const data = getData();
  const recipe1 = data.recipes[0];
  const recipe2 = data.recipes[1];
  const recipe3 = data.recipes[2];
  const recipe4 = data.recipes[3];
  // #region populate recipe page

  //#region populate Headers
  populateHeader(recipe1, 0);
  populateHeader(recipe2, 1);
  populateHeader(recipe3, 2);
  populateHeader(recipe4, 3);
  //#endregion

  return data;
  // return { recipe1, recipe2, recipe3, recipe4 };
}
// start()
//   .then((data) => console.log(data))
//   .catch((err) => console.error(err));

// $(readmore)
//   .eq(0)
//   .click(() => export recipes);
// $(readmore)
//   .eq(1)
//   .click(() => populate(recipe2));
// $(readmore)
//   .eq(2)
//   .click(() => populate(recipe3));
// $(readmore)
//   .eq(3)
//   .click(() => populate(recipe4));

function populateHeader(recipe, number) {
  recipeTitle.eq(number).html(recipe.title);
}

start();

let recipes = await start();
export default recipes;
