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
    this.timeLeft = 20;
  }

  reallyStartGame() {
    this.instructionsPage.style.display = "none";
    this.gamePage.style.display = "block";
    this.displayNewAttack();
    this.startRoundTimer();
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
    } else {
      this.deadEndPage.style.display = "block";
    }
  }
}
