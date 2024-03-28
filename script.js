"use strict";
const FeedButton = document.querySelector(".feedbutton");
const happyButton = document.querySelector("happybutton");
const dogReaction = document.querySelector(".dogreaction");
const hungerMessage = document.querySelector(".hunger");
const dogMessage = document.querySelector(".dogmessage");
const readyBtn = document.querySelector(".ready");
const startBtn = document.querySelector(".start");
const stopButton = document.querySelector(".stop");
let hunger = 100;
FeedButton.addEventListener("click", function () {
  console.log("hey");
  if (hunger <= 0) {
    hungerMessage.textContent = "Thank you Jayden. I am filled already!😆😇🐶";
    return;
  }

  if (hunger > 100) {
    dogReaction.textContent = "😓😓😔😭😓";
    return;
  } else {
    hunger -= 10;
    console.log(hunger);
    dogReaction.textContent = "😃😆😇🐶🐶";
  }
  console.log(hunger);
  hungerMessage.textContent = `${hunger}%`;
});

readyBtn.addEventListener("click", function () {
  if (hunger > 90) {
    dogMessage.textContent =
      "For me to play, I need to be well fed!. Please feed me";
  } else {
    dogMessage.textContent = "Hurray! 🎉🎈🎊🎅🥳 I am ready to play";
  }
});
stopButton.addEventListener("click", function () {
  dogMessage.textContent =
    "Hi Jayden, you want to stop playing?. Hope you are not angry with me?";
});
startBtn.addEventListener("click", function () {
  if (hunger > 90) {
    dogMessage.textContent =
      "For me to play, I need to be well fed!. Please feed me";
  } else {
    dogMessage.textContent =
      "Hurray! 🎉🎈🎊🎅🥳 I am playing 'catch the ball' with Jayden";
  }
});
