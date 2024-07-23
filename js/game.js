class Game {
  constructor(lives) {
    this.startScreen = document.getElementById("game-intro");
    this.instructionsPage = document.getElementById("instructions-page");
    this.gamePage = document.getElementById("game-container");
    this.deadEndPage = document.getElementById("dead-end");
    this.liveEndPage = document.getElementById("live-end");
    this.lives = lives;
    this.attacks = null; // Set this later
    this.displayCount = 0;
  }

  startIntro() {
    this.startScreen.style.display = "none";
    this.instructionsPage.style.display = "block";
  }

  reallyStartGame() {
    this.instructionsPage.style.display = "none";
    this.gamePage.style.display = "block";
  }

  automaticEnd() {
    this.instructionsPage.style.display = "none";
    this.deadEndPage.style.display = "block";
  }

  trueEnd() {
    this.gamePage.style.display = "none";
    this.deadEndPage.style.display = "block";
  }

  liveEnd() {
    this.gamePage.style.display = "none";
    this.liveEndPage.style.display = "block";
  }

  moveToNextAttack() {
    if (
      this.attacks &&
      this.attacks.attackIndex < this.attacks.attacks.length
    ) {
      this.attacks.attackIndex++;
      if (this.attacks.attackIndex < this.attacks.attacks.length) {
        this.displayNewAttack();
      } else {
        console.log("All attacks defended!");
        this.liveEnd(); // Show live-end page when all attacks are done
      }
    }
  }

  displayNewAttack() {
    const attackText = `New day, new attack! How can you help your buddy snail against ${
      this.attacks.attacks[this.attacks.attackIndex]
    }?`;
    document.getElementById("new-attack").textContent = attackText;
    this.displayCount++;
  }
}
