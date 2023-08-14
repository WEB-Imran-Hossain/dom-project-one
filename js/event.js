// saturday card
// get the class ID of button
const makeRedButton = document.getElementById("make-red");
const makeGreenButton = document.getElementById("make-green");
// get the specify card only
const card = document.querySelector(".card");
makeRedButton.addEventListener("click", function () {
  card.style.backgroundColor = "#FF0000";
});

makeGreenButton.addEventListener("click", function () {
  card.style.backgroundColor = "#008000";
});

// sunday card
// get the class ID of button
const makeOrangeButton = document.getElementById("make-orange");
const makeYellowButton = document.getElementById("make-yellow");
const cardTwoBg = document.getElementById("cardTwo");
// get the specify card only
makeOrangeButton.addEventListener("click", function () {
  cardTwo.style.backgroundColor = "#FFA500";
});

makeYellowButton.addEventListener("click", function () {
  cardTwo.style.backgroundColor = "#FFFF00";
});

// reset button
const clearButton = document.getElementById("clear-btn");
clearButton.addEventListener("click", function () {
  card.style.backgroundColor = "";
  cardTwo.style.backgroundColor = "";
});
