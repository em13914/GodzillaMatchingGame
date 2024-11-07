console.log("Preload running...");

// loop through all the content you want to preload
var images = [];
function preload() {
  for (var i = 0; i < arguments.length; i++) {
    images[i] = new Image();
    images[i].src = preload.arguments[i];
  }
}

// images and sounds
preload(
  "images/godzilla_card.jpg",
  "images/godzilla1954.jpg",
  "images/godzilla1964.jpg",
  "images/godzilla1971.jpg",
  "images/godzilla1972.jpg",
  "images/godzilla1974.jpg",
  "images/godzilla1975.jpg",
  "images/rising_sun.png",
  "sounds/godzilla_roar_short.wav",
  "sounds/godzilla_roar.wav",
  "sounds/right_answer.mp3",
  "sounds/wrong_answer.mp3"
);
