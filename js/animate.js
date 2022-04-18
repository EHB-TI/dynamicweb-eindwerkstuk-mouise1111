anime({
  targets: ".title",
  opacity: [1, 0],
  duration: 5000,
  delay: 2000,
});

const firstAnimation = anime({
  targets: "#backtitle",
  opacity: [1, 0],
  duration: 1500,
  delay: 3500,
});

const hideContainer = () => {
  $("#backtitle").hide();
};

setTimeout(() => {
  hideContainer();
}, 4500);

anime({
  targets: "#total",
  opacity: [0, 1],
  duration: 1000,
  delay: 500,
});

// const firstCotainer = $(".sport-container").eq(0);

//PLAN PAGE
anime({
  targets: ".day-container",
  scale: [0.8, 1],
  duration: 1000,
  delay: 0,
});

anime({
  targets: "#shakerSVG",
  scale: [0.8, 1],
  opacity: [0, 1],
  translateX: [-100, 0],
  duration: 1000,
  delay: 1500,
});

anime({
  targets: "#dumbellSVG",
  scale: [0.8, 1],
  opacity: [0, 1],
  translateX: [100, 0],
  duration: 1000,
  delay: 1500,
});

anime({
  targets: ".container",
  scale: [0.8, 1],
  opacity: [0, 1],
  translateX: [-100, 0],
  duration: 1000,
  delay: 4000,
});
