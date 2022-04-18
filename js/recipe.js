import recipes from "./index.js";

const firstRecipe = recipes.recipes[0];
//#region DOM variables
let headerTitle = $(".headerTitle");
let intro = $("#article-summary"); // first sentence of summary | introduction to the dish
var ul = $("#ul-ingredients");
var nutritionul = $("#nutrition-ul");
const image = $("#image-recipe");
const steps = $(".instructions-ol");
let readmore = $(".read-more");
//#endregion
function populate(recipe) {
  populateHeader(recipe);
  populateIntro(recipe);
  populateIngredients(recipe);
  nutritionPopulate(recipe);
  instructionsPopulate(recipe);
}
function populateHeader(recipe) {
  headerTitle.html(recipe.title);
}
function populateIntro(recipe) {
  var str = recipe.summary;
  var firstSentence = str.substr(0, str.indexOf("."));
  intro.html(`<img src="..Assets/svg/quote.svg">${firstSentence}`);
}

function populateIngredients(recipe) {
  const ingredients = [];
  for (let i = 0; i < recipe.extendedIngredients.length; i++) {
    const element = recipe.extendedIngredients[i].original;
    ingredients.push(element);
  }

  //make am UNORDERED list with the array
  for (let j = 0; j < ingredients.length; j++) {
    var ingredient = ingredients[j];

    //line wrap is for the ingredient to be striked through when it gets clicked
    var node = `<li><span class='line_wrap'><span class='line'></span class="ingredient-span">${ingredient}</span></li>`;

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

  var boldtext = $("#summaryParagraph b")
    .map(function () {
      return $(this).text();
    })
    .get();
  boldtext.forEach((element) => {
    $(`<li> ${element} </li> `).appendTo(nutritionul);
  });
  $("#summaryParagraph").hide();

  //use recipe image as background for card
  var imageUrl = recipe.image;
  $(".nutrition").css("background-image", `url("${imageUrl}")`);
}

function instructionsPopulate(recipe) {
  //instead of letting the html take care of the ordered list
  //I will add a span to make my own list with a counter

  var counterlist = 0;
  recipe.analyzedInstructions[0].steps.forEach((element) => {
    counterlist++;
    var step = element.step;
    var node = $(`<li><span>${counterlist}</span> ${step} </li>`);
    steps.append(node);
  });
}

async function addFavorite(recipe) {
  var idRecipe = recipe.id;
  console.log(idRecipe);
  // var url = `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/${id}/summary`
  // const responseA = await fetch(`https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/${idRecipe}/summary`)
  const responseA = await fetch(`${url}${idRecipe}/summary`, options);
  const dataA = await responseA.json();

  var recipeName = dataA.title;

  // //save to localStorage
  var oldItems = JSON.parse(localStorage.getItem("itemsArray")) || [];

  var newItem = recipeName;
  oldItems.push(newItem);

  localStorage.setItem("itemsArray", JSON.stringify(oldItems));
}

$(document).ready(function () {
  populate(firstRecipe);
});
