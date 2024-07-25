class Game {
  constructor(lives, livesAndTimes) {
    this.instructionsPage = document.getElementById("instructions-page");
    this.gamePage = document.getElementById("game-container");
    this.injuredSnail = document.getElementById("injured-snail");
    this.deadEndPage = document.getElementById("dead-end");
    this.liveEndPage = document.getElementById("live-end");
    this.lives = lives;
    this.livesAndTimes = livesAndTimes;
    this.attacks = null;
    this.displayCount = 0;
    this.gameEnded = false;
    this.timerInterval = null;
    this.timeLeft = 40;
  }

  reallyStartGame() {
    this.instructionsPage.style.display = "none";
    this.gamePage.style.display = "block";
    this.displayNewAttack();
    this.startRoundTimer();
  }

  showInjuredSnail() {
    if (this.gameEnded) return; // Prevent showing injured snail if game ended
    /*this.gamePage.style.display = "none";
    this.injuredSnail.style.display = "block";*/
    setTimeout(() => {
      this.gamePage.style.display = "none";
      this.injuredSnail.style.display = "block";
    }, 500);
  }

  startRoundTimer() {
    const turnTime = document.getElementById("turn-timer");
    this.timeLeft = 40;
    turnTime.textContent = `${this.timeLeft} s`;

    if (this.timerInterval) {
      clearInterval(this.timerInterval);
    }

    this.timerInterval = setInterval(() => {
      this.timeLeft--;
      turnTime.textContent = `${this.timeLeft} s`;

      if (this.timeLeft < 0) {
        clearInterval(this.timerInterval);
        this.livesAndTimes.decrementLives(); // Decrement lives when time runs out
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

/*class Game {
  constructor(lives, livesAndTimes) {
    this.instructionsPage = document.getElementById("instructions-page");
    this.gamePage = document.getElementById("game-container");
    this.injuredSnail = document.getElementById("injured-snail");
    this.deadEndPage = document.getElementById("dead-end");
    this.liveEndPage = document.getElementById("live-end");
    this.happySnail = document.getElementById("happy-snail");
    this.lives = lives;
    this.livesAndTimes = livesAndTimes;
    this.attacks = null;
    this.displayCount = 0;
    this.gameEnded = false;
    this.timerInterval = null;
    this.timeLeft = 40;
  }

  reallyStartGame() {
    this.instructionsPage.style.display = "none";
    this.gamePage.style.display = "block";
    this.displayNewAttack();
    this.startRoundTimer();
  }

  showInjuredSnail() {
    if (this.gameEnded) return; // Prevent showing injured snail if game ended
    setTimeout(() => {
      this.gamePage.style.display = "block";
      this.injuredSnail.style.display = "none";
    }, 500);
    this.gamePage.style.display = "none";
    this.injuredSnail.style.display = "block";
  }

  showHappySnail() {
    setTimeout(() => {
      this.gamePage.style.display = "none";
      this.happySnail.style.display = "block";
    }, 3000);
    this.gamePage.style.display = "block";
    this.happySnail.style.display = "none";
  }

  startRoundTimer() {
    const turnTime = document.getElementById("turn-timer");
    this.timeLeft = 40;
    turnTime.textContent = `${this.timeLeft} s`;

    if (this.timerInterval) {
      clearInterval(this.timerInterval);
    }

    this.timerInterval = setInterval(() => {
      this.timeLeft--;
      turnTime.textContent = `${this.timeLeft} s`;

      if (this.timeLeft < 0) {
        clearInterval(this.timerInterval);
        this.livesAndTimes.decrementLives(); // Decrement lives when time runs out
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
}*/

/*
class Game {
  constructor(lives, livesAndTimes) {
    this.instructionsPage = document.getElementById("instructions-page");
    this.gamePage = document.getElementById("game-container");
    this.injuredSnail = document.getElementById("injured-snail");
    this.deadEndPage = document.getElementById("dead-end");
    this.liveEndPage = document.getElementById("live-end");
    this.happySnail = document.getElementById("happy-snail");
    this.lives = lives;
    this.livesAndTimes = livesAndTimes;
    this.attacks = null;
    this.displayCount = 0;
    this.gameEnded = false;
    this.timerInterval = null;
    this.timeLeft = 20;
  }

  reallyStartGame() {
    this.instructionsPage.style.display = "none";
    this.gamePage.style.display = "block";
    this.displayNewAttack();
    this.startRoundTimer();
  }

  showInjuredSnail() {
    if (this.gameEnded) return; // Prevent showing injured snail if game ended
    setTimeout(() => {
      if (this.gameEnded) return; // Re-check if game ended
      this.gamePage.style.display = "block";
      this.injuredSnail.style.display = "none";
    }, 500);
    this.gamePage.style.display = "none";
    this.injuredSnail.style.display = "block";
  }

  showHappySnail() {
    if (this.gameEnded) return; // Prevent showing happy snail if game ended
    setTimeout(() => {
      if (this.gameEnded) return; // Re-check if game ended
      this.gamePage.style.display = "none";
      this.happySnail.style.display = "block";
    }, 3000);
    this.gamePage.style.display = "block";
    this.happySnail.style.display = "none";
  }

  startRoundTimer() {
    const turnTime = document.getElementById("turn-timer");
    this.timeLeft = 20;
    turnTime.textContent = `${this.timeLeft} s`;

    if (this.timerInterval) {
      clearInterval(this.timerInterval);
    }

    this.timerInterval = setInterval(() => {
      this.timeLeft--;
      turnTime.textContent = `${this.timeLeft} s`;

      if (this.timeLeft < 0) {
        clearInterval(this.timerInterval);
        this.livesAndTimes.decrementLives(); // Decrement lives when time runs out
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
      console.log(`hearts: ${this.lives}`);
    } else {
      this.deadEndPage.style.display = "block";
      console.log(`hearts: ${this.lives}`);
    }

    // Stop any ongoing timer
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
      this.timerInterval = null;
    }
  }
}
*/

/*
class Game {
  constructor(lives, livesAndTimes) {
    this.instructionsPage = document.getElementById("instructions-page");
    this.gamePage = document.getElementById("game-container");
    this.injuredSnail = document.getElementById("injured-snail");
    this.deadEndPage = document.getElementById("dead-end");
    this.liveEndPage = document.getElementById("live-end");
    this.happySnail = document.getElementById("happy-snail");
    this.lives = lives;
    this.livesAndTimes = livesAndTimes;
    this.attacks = null;
    this.displayCount = 0;
    this.gameEnded = false;
    this.timerInterval = null;
    this.timeLeft = 20;
  }

  reallyStartGame() {
    this.instructionsPage.style.display = "none";
    this.gamePage.style.display = "block";
    this.displayNewAttack();
    this.startRoundTimer();
  }

  showInjuredSnail() {
    if (this.gameEnded) return; // Prevent showing injured snail if game ended
    setTimeout(() => {
      if (this.gameEnded) return; // Re-check if game ended
      this.gamePage.style.display = "block";
      this.injuredSnail.style.display = "none";
    }, 500);
    this.gamePage.style.display = "none";
    this.injuredSnail.style.display = "block";
  }

  showHappySnail() {
    if (this.gameEnded) return; // Prevent showing happy snail if game ended
    setTimeout(() => {
      if (this.gameEnded) return; // Re-check if game ended
      this.gamePage.style.display = "none";
      this.happySnail.style.display = "block";
    }, 3000);
    this.gamePage.style.display = "block";
    this.happySnail.style.display = "none";
  }

  startRoundTimer() {
    const turnTime = document.getElementById("turn-timer");
    this.timeLeft = 20;
    turnTime.textContent = `${this.timeLeft} s`;

    if (this.timerInterval) {
      clearInterval(this.timerInterval);
    }

    this.timerInterval = setInterval(() => {
      this.timeLeft--;
      turnTime.textContent = `${this.timeLeft} s`;

      if (this.timeLeft < 0) {
        clearInterval(this.timerInterval);
        this.livesAndTimes.decrementLives(); // Decrement lives when time runs out
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
      console.log(`hearts: ${this.lives}`);
    } else {
      this.deadEndPage.style.display = "block";
      console.log(`hearts: ${this.lives}`);
    }

    // Stop any ongoing timer
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
      this.timerInterval = null;
    }
  }
}
*/
