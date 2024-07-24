window.onload = function () {
  const startButton = document.getElementById("start-button");
  const yesButton = document.getElementById("yes-button");
  const noButton = document.getElementById("no-button");
  const submitButton = document.getElementById("submit-defence");
  const combineButton = document.getElementById("combine-button");
  const clearButton = document.getElementById("clear-button");
  const deadRestartButton = document.getElementById("dead-restart-button");
  const liveRestartButton = document.getElementById("live-restart-button");
  const combinationBox = document.getElementById("combinations-box");
  const startScreen = document.getElementById("game-intro");
  const instructionsPage = document.getElementById("instructions-page");
  const deadEndPage = document.getElementById("dead-end");
  const turnTime = document.getElementById("turn-timer");

  const possibleAttackNames = ["poison", "aliens", "birds", "salt", "Roberto"];

  const snail = document.getElementById("snail");
  const snailImage = document.createElement("img");
  snailImage.src = "./images/basic-snail.png";
  snailImage.style.width = "200px";
  snailImage.style.height = "200px";
  snail.appendChild(snailImage);

  const livesBox = document.getElementById("lives-box");

  let game;

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

  const attacks = new Attacks(possibleAttackNames);
  attacks.randomAttacks();
  game = new Game(livesBox.childElementCount);
  game.attacks = attacks;

  const livesAndTimes = new LivesAndTimes(livesBox, game);
  livesAndTimes.init(attacks.attacks.length);

  const correctDefenceForAttack = [
    new Defence("Gun", { attackName: "Roberto" }, game, livesAndTimes),
    new Defence("Spear", { attackName: "birds" }, game, livesAndTimes),
    new Defence("Metal", { attackName: "aliens" }, game, livesAndTimes),
    new Defence("Bucket of Water", { attackName: "salt" }, game, livesAndTimes),
    new Defence("Antidote", { attackName: "poison" }, game, livesAndTimes),
  ];

  startButton.addEventListener("click", startButtonHandler);
  yesButton.addEventListener("click", yesButtonHandler);
  noButton.addEventListener("click", noButtonHandler);
  deadRestartButton.addEventListener("click", restartGame);
  liveRestartButton.addEventListener("click", restartGame);
  combineButton.addEventListener("click", combineElements);
  clearButton.addEventListener("click", clearCombinationBox);

  function startButtonHandler() {
    startScreen.style.display = "none";
    instructionsPage.style.display = "block";
  }

  function yesButtonHandler() {
    game.reallyStartGame();
  }

  function noButtonHandler() {
    instructionsPage.style.display = "none";
    deadEndPage.style.display = "block";
  }

  function restartGame() {
    location.reload();
  }

  function combineElements() {
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
  }

  function clearCombinationBox() {
    combinationBox.innerHTML = "";
  }

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

  /*submitButton.addEventListener("click", function () {
    console.log("Submit button clicked");

    const submittedDefence = combinationBox.textContent.trim();
    console.log("Submitted Defence:", submittedDefence);

    if (!submittedDefence) {
      console.log("No defense submitted");
      livesAndTimes.decrementLives();
    } else {
      const currentAttack = attacks.attacks[attacks.attackIndex];
      const defence = correctDefenceForAttack.find(
        (def) => def.attack.attackName === currentAttack
      );
      if (defence) {
        defence.checkDefence(submittedDefence);
        console.log("Defense check passed");
        console.log(`attacks.attacks.length: ${attacks.attacks.length}`);
        console.log(
          `livesBox.childElementCount: ${livesBox.childElementCount}`
        );
      } else {
        console.log("No matching defense found for current attack");
        livesAndTimes.decrementLives();
      }
    }
    game.moveToNextAttack();
    clearCombinationBox();
  });*/

  /*submitButton.addEventListener("click", function () {
    console.log("Submit button clicked");

    const submittedDefence = combinationBox.textContent.trim();
    console.log("Submitted Defence:", submittedDefence);

    if (!submittedDefence) {
      console.log("No defense submitted");
      livesAndTimes.decrementLives();
    } else {
      const currentAttack = attacks.attacks[attacks.attackIndex];
      const defence = correctDefenceForAttack.find(
        (def) => def.attack.attackName === currentAttack
      );
      if (defence) {
        defence.checkDefence(submittedDefence);
        console.log("Defense check passed");
        console.log(`attacks.attacks.length: ${attacks.attacks.length}`);
        console.log(
          `livesBox.childElementCount: ${livesBox.childElementCount}`
        );
      } else {
        console.log("No matching defense found for current attack");
        livesAndTimes.decrementLives();
      }
    }

    game.moveToNextAttack();
    clearCombinationBox();
  });*/ //second iteration of this code

  submitButton.addEventListener("click", function () {
    const submittedDefence = combinationBox.textContent.trim();

    if (!submittedDefence) {
      livesAndTimes.decrementLives();
    } else {
      const currentAttack = attacks.attacks[attacks.attackIndex];
      const defence = correctDefenceForAttack.find(
        (def) => def.attack.attackName === currentAttack
      );
      if (defence) {
        defence.checkDefence(submittedDefence);
      } else {
        livesAndTimes.decrementLives();
      }
    }

    game.moveToNextAttack();
    clearCombinationBox();
  });

  correctDefenceForAttack.forEach((def) => (def.gameInstance = game));

  const deadEndMessageOptions = [
    "(you should feel bad)",
    "(we've already called PETA)",
    "(you murderer...)",
    "(his family will seek vengeance)",
    "(you orphaned his children)",
    "(are you proud of what you've done?)",
    "(did you enjoy killing an innocent snail?)",
    "(God have mercy on your soul)",
  ];

  const deadEndMessage = document.getElementById("feel-bad-message");
  if (deadEndMessage) {
    const feelBadMessage =
      deadEndMessageOptions[
        Math.floor(Math.random() * deadEndMessageOptions.length)
      ];
    deadEndMessage.appendChild(document.createTextNode(feelBadMessage));
  }
};
