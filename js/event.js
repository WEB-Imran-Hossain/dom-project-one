"use strict";
// saturday card
// get the class ID of button
const makeRedButton = document.getElementById("make-red");
const makeHarlequinButton = document.getElementById("make-harlequin");
const cardOne = document.getElementById("cardOne");
const paragraphOne = document.getElementById("paragraphOne");
// get the background color
makeRedButton.addEventListener("click", function () {
  cardOne.style.backgroundColor = "#FF0000";
  paragraphOne.textContent = "Today is a public holiday. No busy schedule.";
});

makeHarlequinButton.addEventListener("click", function () {
  cardOne.style.backgroundColor = "#3fff00";
  paragraphOne.textContent =
    "There is no holiday today. Must go to office on time.";
});

// sunday card
// get the class ID of button
const makeOrangeButton = document.getElementById("make-orange");
const makeYellowButton = document.getElementById("make-yellow");
const cardTwoBg = document.getElementById("cardTwo");
const paragraphTwo = document.getElementById("paragraphTwo");
// get the background color
makeOrangeButton.addEventListener("click", function () {
  cardTwo.style.backgroundColor = "#FFA500";
  paragraphTwo.textContent =
    "There is no holiday today. Must go to office on time.";
});

makeYellowButton.addEventListener("click", function () {
  cardTwo.style.backgroundColor = "#FFFF00";
  paragraphTwo.textContent =
    "There is no holiday today. Must go to office on time.";
});

// monday card
// get the class ID of button
const makePinkButton = document.getElementById("make-pink");
const makeChartreuseButton = document.getElementById("make-chartreuse");
const cardThreeBg = document.getElementById("cardThree");
const paragraphThree = document.getElementById("paragraphThree");
// get the background color
makePinkButton.addEventListener("click", function () {
  cardThree.style.backgroundColor = "#FFC0CB";
  paragraphThree.textContent =
    "There is no holiday today. Must go to office on time.";
});

makeChartreuseButton.addEventListener("click", function () {
  cardThree.style.backgroundColor = "#DFFF00";
  paragraphThree.textContent =
    "There is no holiday today. Must go to office on time.";
});

// Tuesday card
// get the class ID of button
const makeTealButton = document.getElementById("make-teal");
const makeAquaButton = document.getElementById("make-aqua");
const cardFourBg = document.getElementById("cardFour");
const paragraphFour = document.getElementById("paragraphFour");
// get the background color
makeTealButton.addEventListener("click", function () {
  cardFour.style.backgroundColor = "#008080";
  paragraphFour.textContent =
    "There is no holiday today. Must go to office on time.";
});

makeAquaButton.addEventListener("click", function () {
  cardFour.style.backgroundColor = "#00FFFF";
  paragraphFour.textContent =
    "There is no holiday today. Must go to office on time.";
});

// Wednesday card
// get the class ID of button
const makeCeriseButton = document.getElementById("make-cerise");
const makeCharcoalButton = document.getElementById("make-charcoal");
const cardFiveBg = document.getElementById("cardFive");
const paragraphFive = document.getElementById("paragraphFive");
// get the background color
makeCeriseButton.addEventListener("click", function () {
  cardFive.style.backgroundColor = "#de3163";
  paragraphFive.textContent =
    "There is no holiday today. Must go to office on time.";
});

makeCharcoalButton.addEventListener("click", function () {
  cardFive.style.backgroundColor = "#36454f";
  paragraphFive.textContent =
    "There is no holiday today. Must go to office on time.";
});

// Thursday card
// get the class ID of button
const makeCitronButton = document.getElementById("make-citron");
const makeCitrineButton = document.getElementById("make-citrine");
const cardSixBg = document.getElementById("cardSix");
const paragraphSix = document.getElementById("paragraphSix");
// get the background color
makeCitronButton.addEventListener("click", function () {
  cardSix.style.backgroundColor = "#9fa91f";
  paragraphSix.textContent =
    "There is no holiday today. Must go to office on time.";
});

makeCitrineButton.addEventListener("click", function () {
  cardSix.style.backgroundColor = "#e4d00a";
  paragraphSix.textContent =
    "There is no holiday today. Must go to office on time.";
});

// Friday card
// get the class ID of button
const makeCoquelicotButton = document.getElementById("make-coquelicot");
const makeCoralButton = document.getElementById("make-coral");
const cardSevenBg = document.getElementById("cardSeven");
const paragraphSeven = document.getElementById("paragraphSeven");
// get the background color
makeCoquelicotButton.addEventListener("click", function () {
  cardSeven.style.backgroundColor = "	#ff3800";
  paragraphSeven.textContent = "There is holiday today. No schedule Day.";
});

makeCoralButton.addEventListener("click", function () {
  cardSeven.style.backgroundColor = "#ff7f50";
  paragraphSeven.textContent = "There is holiday today. No schedule Day.";
});

// reset button
const clearButton = document.getElementById("clear-btn");
clearButton.addEventListener("click", function () {
  cardOne.style.backgroundColor = "";
  paragraphOne.textContent = "";
  cardTwo.style.backgroundColor = "";
  paragraphTwo.textContent = "";
  cardThree.style.backgroundColor = "";
  paragraphThree.textContent = "";
  cardFour.style.backgroundColor = "";
  paragraphFour.textContent = "";
  cardFive.style.backgroundColor = "";
  paragraphFive.textContent = "";
  cardSix.style.backgroundColor = "";
  paragraphSix.textContent = "";
  cardSeven.style.backgroundColor = "";
  paragraphSeven.textContent = "";
});
