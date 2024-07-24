/*class Game {
  constructor(lives, livesAndTimes) {
    this.instructionsPage = document.getElementById("instructions-page");
    this.gamePage = document.getElementById("game-container");
    this.injuredSnail = document.getElementById("injured-snail");
    this.deadEndPage = document.getElementById("dead-end");
    this.liveEndPage = document.getElementById("live-end");
    this.lives = lives;
    this.attacks = null; // Set this later
    this.displayCount = 0;
    this.gameEnded = false;
    this.livesAndTimes = livesAndTimes;
    this.timerInterval = null;
  }

  reallyStartGame() {
    this.instructionsPage.style.display = "none";
    this.gamePage.style.display = "block";
    this.displayNewAttack();
  }

  showInjuredSnail() {
    this.gamePage.style.display = "none";
    this.injuredSnail.style.display = "block";
    setTimeout(() => {
      this.gamePage.style.display = "block";
    }, 1000);
  }

  endGame(isVictory) {
    if (this.gameEnded) return; // Ensure endGame logic runs only once
    this.gameEnded = true;
    console.log(isVictory ? "Game won" : "Game lost");
    // Hide all pages
    this.instructionsPage.style.display = "none";
    this.gamePage.style.display = "none";
    this.injuredSnail.style.display = "none";
    this.deadEndPage.style.display = "none";
    this.liveEndPage.style.display = "none";
    // Show the appropriate end page based on the outcome
    if (isVictory) {
      this.liveEndPage.style.display = "block";
    } else {
      this.deadEndPage.style.display = "block";
    }
  }

  moveToNextAttack() {
    console.log("Current attack index:", this.attacks.attackIndex);
    console.log("Total attacks:", this.attacks.attacks.length);
    if (
      this.attacks &&
      this.attacks.attackIndex < this.attacks.attacks.length - 1
    ) {
      this.attacks.attackIndex++;
      this.displayNewAttack();
    } else if (this.attacks.attackIndex === this.attacks.attacks.length - 1) {
      console.log("All attacks defended!");
      this.endGame(true);
    }
  }

  displayNewAttack() {
    const attackText = `New day, new attack! How can you help your buddy snail against ${
      this.attacks.attacks[this.attacks.attackIndex]
    }?`;
    document.getElementById("new-attack").textContent = attackText;
    this.displayCount++;
    this.startTimer();
  }

  startTimer() {
    const turnTime = document.getElementById("turn-timer");
    let timeRemaining = 10;
    turnTime.textContent = `Time remaining: ${timeRemaining} seconds`;

    if (this.timerInterval) {
      clearInterval(this.timerInterval);
    }

    this.timerInterval = setInterval(() => {
      timeRemaining--;
      turnTime.textContent = `Time remaining: ${timeRemaining} seconds`;

      if (timeRemaining <= 0) {
        clearInterval(this.timerInterval);
        this.moveToNextAttack();
        this.livesAndTimes.decrementLives();
      }
    }, 1000);
  }
}*/

/*class Game {
  constructor(lives) {
    this.instructionsPage = document.getElementById("instructions-page");
    this.gamePage = document.getElementById("game-container");
    this.injuredSnail = document.getElementById("injured-snail");
    this.deadEndPage = document.getElementById("dead-end");
    this.liveEndPage = document.getElementById("live-end");
    this.lives = lives;
    this.attacks = null; // Set this later
    this.displayCount = 0;
    this.gameEnded = false;
    this.timerInterval = null;
    this.timeLeft = 10; // Initial time for each round
  }
  reallyStartGame() {
    this.instructionsPage.style.display = "none";
    this.gamePage.style.display = "block";
    this.displayNewAttack();
    this.startRoundTimer();
  }

  startRoundTimer() {
    const turnTime = document.getElementById("turn-timer");
    this.timeLeft = 10; // Reset the timer for the new round
    turnTime.textContent = this.timeLeft;

    if (this.timerInterval) {
      clearInterval(this.timerInterval);
    }

    this.timerInterval = setInterval(() => {
      this.timeLeft--;
      turnTime.textContent = this.timeLeft;

      if (this.timeLeft <= 0) {
        clearInterval(this.timerInterval);
        livesAndTimes.decrementLives();
        this.moveToNextAttack();
      }
    }, 1000);
  }

  showInjuredSnail() {
    this.gamePage.style.display = "none";
    this.injuredSnail.style.display = "block";
    setTimeout(() => {
      this.gamePage.style.display = "block";
    }, 1000);
  }
  endGame(isVictory) {
    if (this.gameEnded) return; // Ensure endGame logic runs only once
    this.gameEnded = true;
    console.log(isVictory ? "Game won" : "Game lost");
    // Hide all pages
    this.instructionsPage.style.display = "none";
    this.gamePage.style.display = "none";
    this.injuredSnail.style.display = "none";
    this.deadEndPage.style.display = "none";
    this.liveEndPage.style.display = "none";
    // Show the appropriate end page based on the outcome
    if (isVictory) {
      this.liveEndPage.style.display = "block";
    } else {
      this.deadEndPage.style.display = "block";
    }
  }
  moveToNextAttack() {
    console.log("Current attack index:", this.attacks.attackIndex);
    console.log("Total attacks:", this.attacks.attacks.length);
    if (
      this.attacks &&
      this.attacks.attackIndex < this.attacks.attacks.length - 1
    ) {
      this.attacks.attackIndex++;
      this.displayNewAttack();
    } else if (this.attacks.attackIndex === this.attacks.attacks.length - 1) {
      console.log("All attacks defended!");
      this.endGame(true);
    }
    this.startRoundTimer(); // Reset the timer for the new round
  }
  displayNewAttack() {
    const attackText = `New day, new attack! How can you help your buddy snail against ${
      this.attacks.attacks[this.attacks.attackIndex]
    }?`;
    document.getElementById("new-attack").textContent = attackText;
    this.displayCount++;
  }
}*/ //iteration 1 of this code

class Game {
  constructor(lives) {
    this.instructionsPage = document.getElementById("instructions-page");
    this.gamePage = document.getElementById("game-container");
    this.injuredSnail = document.getElementById("injured-snail");
    this.deadEndPage = document.getElementById("dead-end");
    this.liveEndPage = document.getElementById("live-end");
    this.lives = lives;
    this.attacks = null;
    this.displayCount = 0;
    this.gameEnded = false;
    this.timerInterval = null;
    this.timeLeft = 10;
  }

  reallyStartGame() {
    this.instructionsPage.style.display = "none";
    this.gamePage.style.display = "block";
    this.displayNewAttack();
    this.startRoundTimer();
  }

  startRoundTimer() {
    const turnTime = document.getElementById("turn-timer");
    this.timeLeft = 3;
    turnTime.textContent = this.timeLeft;

    if (this.timerInterval) {
      clearInterval(this.timerInterval);
    }

    this.timerInterval = setInterval(() => {
      this.timeLeft--;
      turnTime.textContent = this.timeLeft;

      if (this.timeLeft < 0) {
        clearInterval(this.timerInterval);
        LivesAndTimes.livesCounter--;
        this.moveToNextAttack();
      }
    }, 1000);
  }

  moveToNextAttack() {
    if (
      this.attacks &&
      this.attacks.attackIndex < this.attacks.attacks.length - 1
    ) {
      this.attacks.attackIndex++;
      this.displayNewAttack();
      this.startRoundTimer();
    } else if (this.attacks.attackIndex === this.attacks.attacks.length - 1) {
      this.endGame(true);
    }
  }

  displayNewAttack() {
    const attackText = `New day, new attack! How can you help your buddy snail against ${
      this.attacks.attacks[this.attacks.attackIndex]
    }?`;
    document.getElementById("new-attack").textContent = attackText;
    this.displayCount++;
  }

  endGame(isVictory) {
    if (this.gameEnded) return;
    this.gameEnded = true;
    console.log(isVictory ? "Game won" : "Game lost");
    this.instructionsPage.style.display = "none";
    this.gamePage.style.display = "none";
    this.injuredSnail.style.display = "none";
    this.deadEndPage.style.display = "none";
    this.liveEndPage.style.display = "none";

    if (isVictory) {
      this.liveEndPage.style.display = "block";
    } else {
      this.deadEndPage.style.display = "block";
    }
  }
}
