"use strict";
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

// monday card
// get the class ID of button
const makePinkButton = document.getElementById("make-pink");
const makeChartreuseButton = document.getElementById("make-chartreuse");
const cardThreeBg = document.getElementById("cardThree");
// get the specify card only
makePinkButton.addEventListener("click", function () {
  cardThree.style.backgroundColor = "#FFC0CB";
});

makeChartreuseButton.addEventListener("click", function () {
  cardThree.style.backgroundColor = "#DFFF00";
});

// Tuesday card
// get the class ID of button
const makeTealButton = document.getElementById("make-teal");
const makeAquaButton = document.getElementById("make-aqua");
const cardFourBg = document.getElementById("cardFour");
// get the specify card only
makeTealButton.addEventListener("click", function () {
  cardFour.style.backgroundColor = "#008080";
});

makeAquaButton.addEventListener("click", function () {
  cardFour.style.backgroundColor = "#00FFFF";
});

// Wednesday card
// get the class ID of button
const makeCeriseButton = document.getElementById("make-cerise");
const makeCharcoalButton = document.getElementById("make-charcoal");
const cardFiveBg = document.getElementById("cardFive");
// get the specify card only
makeCeriseButton.addEventListener("click", function () {
  cardFive.style.backgroundColor = "#de3163";
});

makeCharcoalButton.addEventListener("click", function () {
  cardFive.style.backgroundColor = "#36454f";
});

// Thursday card
// get the class ID of button
const makeCitronButton = document.getElementById("make-citron");
const makeCitrineButton = document.getElementById("make-citrine");
const cardSixBg = document.getElementById("cardsix");
// get the specify card only
makeCitronButton.addEventListener("click", function () {
  cardSix.style.backgroundColor = "#9fa91f";
});

makeCitrineButton.addEventListener("click", function () {
  cardSix.style.backgroundColor = "#e4d00a";
});

// Friday card
// get the class ID of button
const makeCoquelicotButton = document.getElementById("make-coquelicot");
const makeCoralButton = document.getElementById("make-coral");
const cardSevenBg = document.getElementById("cardSeven");
// get the specify card only
makeCoquelicotButton.addEventListener("click", function () {
  cardSeven.style.backgroundColor = "	#ff3800";
});

makeCoralButton.addEventListener("click", function () {
  cardSeven.style.backgroundColor = "#ff7f50";
});

// reset button
const clearButton = document.getElementById("clear-btn");
clearButton.addEventListener("click", function () {
  card.style.backgroundColor = "";
  cardTwo.style.backgroundColor = "";
  cardThree.style.backgroundColor = "";
  cardFour.style.backgroundColor = "";
  cardFive.style.backgroundColor = "";
  cardSix.style.backgroundColor = "";
  cardSeven.style.backgroundColor = "";
});
