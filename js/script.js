window.onload = function () {
  const startButton = document.getElementById("start-button");
  const yesButton = document.getElementById("yes-button");
  const noButton = document.getElementById("no-button");
  const deadRestartButton = document.getElementById("dead-restart-button");
  const liveRestartButton = document.getElementById("live-restart-button");
  //const fire = document.getElementById("element-a");
  // const water = document.getElementById("element-b");

  const possibleAttackNames = ["poison", "aliens", "birds", "salt", "Roberto"];

  let game;

  startButton.addEventListener("click", startButtonHandler);

  function startButtonHandler() {
    game = new Game();
    game.startIntro();
  }

  yesButton.addEventListener("click", yesButtonHandler);

  function yesButtonHandler() {
    instructions = new Game();
    instructions.reallyStartGame();
  }

  noButton.addEventListener("click", noButtonHandler);

  function noButtonHandler() {
    instructions = new Game();
    instructions.automaticEnd();
  }

  deadRestartButton.addEventListener("click", function () {
    restartGame();
  });

  liveRestartButton.addEventListener("click", function () {
    restartGame();
  });

  function restartGame() {
    location.reload();
  }

  //fire.addEventListener("dragstart", draggable(fire));

  //function draggable(event) {
  //event.currentTarget.style("opacity:0.3");
  //water.style = "border: 10px dashed gray;";
  //}

  //fire.addEventListener("dragend", function (event) {
  // fire.style = "opacity: 1";
  //water.style = "border: none";
  //});

  let attacks = new Attacks(possibleAttackNames);

  attacks.randomAttacks();

  let newAttack =
    attacks.attacks[Math.floor(Math.random() * attacks.attacks.length)];

  let newAttackDialogue = document.getElementById("new-attack");

  let attackText = document.createTextNode(
    `New day, new attack! How can you help your buddy snail against ${newAttack}?`
  );
  //newAttackDialogue.innerText = `New day, new attack! How can you help your buddy snail against ${newAttack}?`;
  //newAttackDialogue.innerHTML = `New day, new attack! How can you help your buddy snail against ${newAttack}?`;
  newAttackDialogue.appendChild(attackText);
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
