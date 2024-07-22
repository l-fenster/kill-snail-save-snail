window.onload = function () {
  const startButton = document.getElementById("start-button");
  const yesButton = document.getElementById("yes-button");
  const noButton = document.getElementById("no-button");
  const deadRestartButton = document.getElementById("dead-restart-button");
  const liveRestartButton = document.getElementById("live-restart-button");
  const fire = document.getElementById("element-a");
  const water = document.getElementById("element-b");
  const rock = document.getElementById("element-c");
  const mist = document.getElementById("element-ab");
  const tree = document.getElementById("element-bc");
  const metal = document.getElementById("element-ac");
  const smoke = document.getElementById("element-aba");
  const rain = document.getElementById("element-abb");
  const wetRocks = document.getElementById("element-abc");
  /* const torch = document.getElementById("element-bca");
  const antidote = document.getElementById("element-bcb");
  const spear = document.getElementById("element-bcc");
  const sword = document.getElementById("element-aca");
  const bucketOfWater = document.getElementById("element-acb");
  const gun = document.getElementById("element-acc");
  const combinationBox = getElementById("combinations-box");*/

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

  /*let defence1 = new Defence(fire, water, mist);

  defence1.combineElements();

  let defence2 = new Defence(water, fire, mist);

  defence2.combineElements();

  let defence3 = new Defence(fire, rock, metal);

  defence3.combineElements();

  let defence4 = new Defence(rock, fire, metal);

  defence4.combineElements();

  let defence5 = new Defence(rock, water, tree);

  defence5.combineElements();

  let defence6 = new Defence(water, rock, tree);

  defence6.combineElements();*/

  //drag and drop feature
  //fire + water = mist
  /* fire.addEventListener("dragstart", function (event) {
    event.dataTransfer.setData("text/plain", "fire");
    fire.style.backgroundColor = "green";
  });

  fire.addEventListener("dragend", function () {
    fire.style.backgroundColor = "pink";
  });

  combinationBox.addEventListener("dragover", function (event) {
    event.preventDefault();
  });

  combinationBox.addEventListener("drop", function (event) {
    event.preventDefault();
    const data = event.dataTransfer.getData("text");
    if (data === "fire") {
      combinationBox.innerHTML = "fire";
    }
  });*/

  //water + fire = mist
  water.addEventListener("dragstart", function (event) {
    event.dataTransfer.setData("text/plain", "water");
    water.style.backgroundColor = "green";
  });

  water.addEventListener("dragend", function () {
    water.style.backgroundColor = "red";
  });

  fire.addEventListener("dragover", function (event) {
    event.preventDefault();
    fire.style.backgroundColor = "red";
  });

  fire.addEventListener("drop", function (event) {
    event.preventDefault();
    const data = event.dataTransfer.getData("text");
    if (data === "water") {
      mist.classList.add("show");
    }
  });
  //water + rock = tree
  water.addEventListener("dragstart", function (event) {
    event.dataTransfer.setData("text/plain", "water");
    water.style.backgroundColor = "green";
  });

  water.addEventListener("dragend", function () {
    water.style.backgroundColor = "red";
  });

  rock.addEventListener("dragover", function (event) {
    event.preventDefault();
    rock.style.backgroundColor = "red";
  });

  rock.addEventListener("drop", function (event) {
    event.preventDefault();
    const data = event.dataTransfer.getData("text");
    if (data === "water") {
      tree.classList.add("show");
    }
  });
  //rock + water = tree
  rock.addEventListener("dragstart", function (event) {
    event.dataTransfer.setData("text/plain", "rock");
    rock.style.backgroundColor = "green";
  });

  rock.addEventListener("dragend", function () {
    rock.style.backgroundColor = "red";
  });

  water.addEventListener("dragover", function (event) {
    event.preventDefault();
    water.style.backgroundColor = "red";
  });

  water.addEventListener("drop", function (event) {
    event.preventDefault();
    const data = event.dataTransfer.getData("text");
    if (data === "rock") {
      tree.classList.add("show");
    }
  });
  //rock + fire = metal
  rock.addEventListener("dragstart", function (event) {
    event.dataTransfer.setData("text/plain", "rock");
    rock.style.backgroundColor = "green";
  });

  rock.addEventListener("dragend", function () {
    rock.style.backgroundColor = "red";
  });

  fire.addEventListener("dragover", function (event) {
    event.preventDefault();
    fire.style.backgroundColor = "red";
  });

  fire.addEventListener("drop", function (event) {
    event.preventDefault();
    const data = event.dataTransfer.getData("text");
    if (data === "rock") {
      metal.classList.add("show");
    }
  });
  //fire + rock = metal
  fire.addEventListener("dragstart", function (event) {
    event.dataTransfer.setData("text/plain", "fire");
    fire.style.backgroundColor = "green";
  });

  fire.addEventListener("dragend", function () {
    fire.style.backgroundColor = "red";
  });

  rock.addEventListener("dragover", function (event) {
    event.preventDefault();
    rock.style.backgroundColor = "red";
  });

  rock.addEventListener("drop", function (event) {
    event.preventDefault();
    const data = event.dataTransfer.getData("text");
    if (data === "fire") {
      metal.classList.add("show");
    }
  });

  //fire + mist = smoke
  fire.addEventListener("dragstart", function (event) {
    event.dataTransfer.setData("text/plain", "fire");
    fire.style.backgroundColor = "green";
  });

  fire.addEventListener("dragend", function () {
    fire.style.backgroundColor = "red";
  });

  mist.addEventListener("dragover", function (event) {
    event.preventDefault();
    mist.style.backgroundColor = "red";
  });

  mist.addEventListener("drop", function (event) {
    event.preventDefault();
    const data = event.dataTransfer.getData("text");
    if (data === "fire") {
      smoke.classList.add("show");
    }
  });
  //mist + fire = smoke
  mist.addEventListener("dragstart", function (event) {
    event.dataTransfer.setData("text/plain", "mist");
    mist.style.backgroundColor = "green";
  });

  mist.addEventListener("dragend", function () {
    mist.style.backgroundColor = "red";
  });

  fire.addEventListener("dragover", function (event) {
    event.preventDefault();
    fire.style.backgroundColor = "red";
  });

  fire.addEventListener("drop", function (event) {
    event.preventDefault();
    const data = event.dataTransfer.getData("text");
    if (data === "mist") {
      smoke.classList.add("show");
    }
  });
  //mist + water = rain
  mist.addEventListener("dragstart", function (event) {
    event.dataTransfer.setData("text/plain", "mist");
    mist.style.backgroundColor = "green";
  });

  mist.addEventListener("dragend", function () {
    mist.style.backgroundColor = "red";
  });

  water.addEventListener("dragover", function (event) {
    event.preventDefault();
    water.style.backgroundColor = "red";
  });

  water.addEventListener("drop", function (event) {
    event.preventDefault();
    const data = event.dataTransfer.getData("text");
    if (data === "mist") {
      rain.classList.add("show");
    }
  });
  //water + mist = rain
  water.addEventListener("dragstart", function (event) {
    event.dataTransfer.setData("text/plain", "water");
    water.style.backgroundColor = "green";
  });

  water.addEventListener("dragend", function () {
    water.style.backgroundColor = "red";
  });

  mist.addEventListener("dragover", function (event) {
    event.preventDefault();
    mist.style.backgroundColor = "red";
  });

  mist.addEventListener("drop", function (event) {
    event.preventDefault();
    const data = event.dataTransfer.getData("text");
    if (data === "water") {
      rain.classList.add("show");
    }
  });

  //mist + rock = wet rocks
  mist.addEventListener("dragstart", function (event) {
    event.dataTransfer.setData("text/plain", "mist");
    mist.style.backgroundColor = "green";
  });

  mist.addEventListener("dragend", function () {
    mist.style.backgroundColor = "red";
  });

  rock.addEventListener("dragover", function (event) {
    event.preventDefault();
    rock.style.backgroundColor = "red";
  });

  rock.addEventListener("drop", function (event) {
    event.preventDefault();
    const data = event.dataTransfer.getData("text");
    if (data === "mist") {
      wetRocks.classList.add("show");
    }
  });
  //rock + mist = wet rocks
  rock.addEventListener("dragstart", function (event) {
    event.dataTransfer.setData("text/plain", "rock");
    rock.style.backgroundColor = "green";
  });

  rock.addEventListener("dragend", function () {
    rock.style.backgroundColor = "red";
  });

  mist.addEventListener("dragover", function (event) {
    event.preventDefault();
    mist.style.backgroundColor = "red";
  });

  mist.addEventListener("drop", function (event) {
    event.preventDefault();
    const data = event.dataTransfer.getData("text");
    if (data === "rock") {
      wetRocks.classList.add("show");
    }
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
