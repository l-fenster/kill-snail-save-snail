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

  automaticEnd() {
    this.instructionsPage.style.display = "none";
    this.deadEndPage.style.display = "block";
  }
  //maybe get rid of this and noButton

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
      this.attacks.attackIndex < this.attacks.attacks.length - 1
    ) {
      this.attacks.attackIndex++;
      this.displayNewAttack();
    } else if (this.attacks.attackIndex === this.attacks.attacks.length - 1) {
      console.log("All attacks defended!");
      if (this.lives > 0) {
        this.liveEnd(); // Show live-end page when all attacks are done
      } else {
        this.trueEnd(); //show dead-end page if no lives left
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
