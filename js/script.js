window.onload = function () {
  const startButton = document.getElementById("start-button");
  const yesButton = document.getElementById("yes-button");
  const noButton = document.getElementById("no-button");

  let game;
  let instructions;

  startButton.addEventListener("click", startButtonHandler);

  function startButtonHandler() {
    game = new Game();
    game.startIntro();
  }

  yesButton.addEventListener("click", yesButtonHandler);

  function yesButtonHandler() {
    instructions = new Instructions();
    instructions.reallyStartGame();
  }

  noButton.addEventListener("click", noButtonHandler);

  function noButtonHandler() {
    instructions = new Instructions();
    instructions.automaticEnd();
  }
};

/*
Attacks:
1.) poison - antidote
2.) aliens - tinfoil hat
3.) bird - mist, gun, rock, spear
4.) salt - bucket of water, rain
5.) enemy snail - gun

*fire + rock = metal - tinfoil hat
*fire + water = steam/mist
water + rock = tree
*metal + water = bucket of water
*metal + fire = sword
*metal + rock = gun
mist + water = rain
mist + fire = smoke
mist + rock = wet rocks
tree + water = antidote
tree + fire = torch
tree + rock = spear

*/
