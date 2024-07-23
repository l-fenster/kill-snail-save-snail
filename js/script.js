window.onload = function () {
  const startButton = document.getElementById("start-button");
  const yesButton = document.getElementById("yes-button");
  const noButton = document.getElementById("no-button");
  const combineButton = document.getElementById("combine-button");
  const clearButton = document.getElementById("clear-button");
  const deadRestartButton = document.getElementById("dead-restart-button");
  const liveRestartButton = document.getElementById("live-restart-button");
  const combinationBox = document.getElementById("combinations-box");

  const possibleAttackNames = ["poison", "aliens", "birds", "salt", "Roberto"];

  const elements = [
    "Fire",
    "Water",
    "Rock",
    "Mist",
    "Tree",
    "Metal",
    "Smoke",
    "Rain",
    "Wet Rocks",
    "Torch",
    "Antidote",
    "Spear",
    "Sword",
    "Bucket of Water",
    "Gun",
  ];

  const combinations = {
    "Fire,Water": "Mist",
    "Water,Fire": "Mist",
    "Fire,Rock": "Metal",
    "Rock,Fire": "Metal",
    "Water,Rock": "Tree",
    "Rock,Water": "Tree",
    "Mist,Water": "Rain",
    "Water,Mist": "Rain",
    "Mist,Fire": "Smoke",
    "Fire,Mist": "Smoke",
    "Mist,Rock": "Wet Rocks",
    "Rock,Mist": "Wet Rocks",
    "Metal,Water": "Bucket of Water",
    "Water,Metal": "Bucket of Water",
    "Metal,Fire": "Sword",
    "Fire,Metal": "Sword",
    "Metal,Rock": "Gun",
    "Rock,Metal": "Gun",
    "Water,Tree": "Antidote",
    "Tree,Water": "Antidote",
    "Tree,Fire": "Torch",
    "Fire,Tree": "Torch",
    "Tree,Rock": "Spear",
    "Rock,Tree": "Spear",
  };

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

  elements.forEach((element) => {
    const elementButton = document.getElementById(
      `element-${element.toLowerCase().replace(/ /g, "")}`
    );
    if (elementButton) {
      elementButton.addEventListener("dragstart", dragStart);
      elementButton.addEventListener("dragend", dragEnd);
    }
  });

  combinationBox.addEventListener("dragover", dragOver);
  combinationBox.addEventListener("drop", drop);

  function dragStart(event) {
    event.dataTransfer.setData("text", event.target.innerText);
    event.target.style.opacity = "0.4";
  }

  function dragEnd(event) {
    event.target.style.opacity = "1";
  }

  function dragOver(event) {
    event.preventDefault();
  }

  function drop(event) {
    event.preventDefault();
    const data = event.dataTransfer.getData("text");
    const elementsInBox = combinationBox.querySelectorAll("div");
    if (elementsInBox.length < 2) {
      const newElement = document.createElement("div");
      newElement.innerText = data;
      combinationBox.appendChild(newElement);
    }
  }

  combineButton.addEventListener("click", function () {
    const elementsInBox = Array.from(
      combinationBox.querySelectorAll("div")
    ).map((div) => div.innerText);
    if (elementsInBox.length === 2) {
      const key = elementsInBox.join(",");
      const result = combinations[key];
      combinationBox.innerHTML = "";
      const resultElement = document.createElement("div");
      resultElement.innerText = result || "Unknown Combination";
      combinationBox.appendChild(resultElement);
    }
  });

  clearButton.addEventListener("click", function () {
    combinationBox.innerHTML = "";
  });
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
