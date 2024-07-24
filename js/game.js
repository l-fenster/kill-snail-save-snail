class Game {
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
  }
}
