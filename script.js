// Credit to the Criterion Collection for the beautiful art
// https://www.criterion.com/boxsets/2648-godzilla-the-showa-era-films-1954-1975?srsltid=AfmBOorbuePBsglNBReSV3PZv8GWGNVL3vs8WTxX20dy5LXqpP_bSnua

// variables keep our code short
var g1 = document.getElementById("one");
var g2 = document.getElementById("two");
var g3 = document.getElementById("three");
var g4 = document.getElementById("four");
var g5 = document.getElementById("five");
var g6 = document.getElementById("six");
var g7 = document.getElementById("seven");
var g8 = document.getElementById("eight");

// array to hold the two elements we just clicked
var active_cards = [];

// track clicks, then check for correct/incorrect match
function clickCounter() {
  console.log("click!");
  clicks = clicks + 1;
}

function checkMatch() {
  console.log(active_cards);
  //if () {}
  //else {}
}

function incorrectClick(e) {
  e.classList.add("wrong");
  setTimeout(function () {
    e.classList.remove("wrong");
    e.src = "images/godzilla_card.jpg";
  }, 1500);
}

// MATCH 1 & 8
function flipCard1971A() {
  g1.src = "images/godzilla1971.jpg";
}
function flipCard1971B() {
  g2.src = "images/godzilla1971.jpg";
}
