import data from "./index.js";
import { url } from "./index.js";
import options from "../config/config.js";

//#region DOM variables
const headerTitle = $("#title");
const intro = $("#article-summary"); // first sentence of summary | introduction to the dish
const ul = $("#ul-ingredients");
const nutritionul = $("#nutrition-ul");
const steps = $(".instructions-ol");
const readmore = $(".read-more");
//#endregion

//#region Populate
const firstRecipe = data.recipes[0];
function populate(recipe) {
  populateHeader(recipe);
  populateIntro(recipe);
  populateIngredients(recipe);
  nutritionPopulate(recipe);
  instructionsPopulate(recipe);
  $("#addFavorite").click(function () {
    addFavorite(recipe);
  });
}
function populateHeader(recipe) {
  headerTitle.html(recipe.title);
}
function populateIntro(recipe) {
  const str = recipe.summary;
  const firstSentence = str.substr(0, str.indexOf("."));
  intro.html(`<img src="../Assets/svg/quote.svg">${firstSentence}`);
}

function populateIngredients(recipe) {
  const ingredients = [];
  for (let i = 0; i < recipe.extendedIngredients.length; i++) {
    const element = recipe.extendedIngredients[i].original;
    ingredients.push(element);
  }

  //make am UNORDERED list with the array
  for (let j = 0; j < ingredients.length; j++) {
    const ingredient = ingredients[j];

    //line wrap is for the ingredient to be striked through when it gets clicked
    const node = `<li><span class='line_wrap'><span class='line'></span class="ingredient-span">${ingredient}</span></li>`;

    $("#ul-ingredients li").click(function () {
      $(this).find(".line").css("width", "100%");

      //if the list item is striked through (=doorstreept) then set the width back to 0%
      if ($(this).find(".line").width() > 0) {
        $(this).find(".line").css("width", "0%");
      }
    });
    ul.append(node);
  }
}

function nutritionPopulate(recipe) {
  nutritionul.html(`<p id='summaryParagraph'>${recipe.summary}</p>`);

  const boldtext = $("#summaryParagraph b")
    .map(function () {
      return $(this).text();
    })
    .get();
  boldtext.forEach((element) => {
    $(`<li> ${element} </li> `).appendTo(nutritionul);
  });
  $("#summaryParagraph").hide();

  //use recipe image as background for card
  const imageUrl = recipe.image;
  $(".nutrition").css("background-image", `url("${imageUrl}")`);
}

function instructionsPopulate(recipe) {
  let counterlist = 0;
  recipe.analyzedInstructions[0].steps.forEach((element) => {
    counterlist++;
    const step = element.step;
    const node = $(`<li><span>${counterlist}</span> ${step} </li>`);
    steps.append(node);
  });
}
//#endregion

async function addFavorite(recipe) {
  const idRecipe = recipe.id;
  const responseA = await fetch(`${url}${idRecipe}/summary`, options);
  const dataA = await responseA.json();

  const recipeName = dataA.title;

  // //save to localStorage
  let oldItems = JSON.parse(localStorage.getItem("FavoriteRecipes")) || [];

  const newItem = recipeName;
  oldItems.push(newItem);

  //alleen unieke waarden kunnen opgeslaan worden om te vermijden dat er 2 gelijke recipes zijn
  var unique = oldItems.filter((v, i, a) => a.indexOf(v) === i);

  localStorage.setItem("FavoriteRecipes", JSON.stringify(unique));
}

populate(firstRecipe);
