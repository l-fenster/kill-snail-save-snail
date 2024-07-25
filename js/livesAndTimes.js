class LivesAndTimes {
  constructor(livesCounter, gameInstance) {
    this.livesCounter = livesCounter;
    this.gameInstance = gameInstance;
    console.log("LivesAndTimes created with gameInstance:", this.gameInstance);
  }

  init(lives) {
    const livesEls = [];
    for (let i = 0; i < lives; i++) {
      const lifeElement = document.createElement("img");
      lifeElement.src = "./images/heart.png";
      lifeElement.style.width = "20px";
      lifeElement.style.height = "20px";
      livesEls.push(lifeElement);
    }
    this.livesCounter.append(...livesEls);
  }

  decrementLives() {
    if (this.livesCounter.childElementCount > 0) {
      this.livesCounter.removeChild(this.livesCounter.lastChild);
    }
    console.log("Remaining lives:", this.livesCounter.childElementCount);
    if (this.livesCounter.childElementCount === 0) {
      console.log("No lives left, ending game");
      console.log(this.gameInstance); // Debug
      if (
        this.gameInstance &&
        typeof this.gameInstance.endGame === "function"
      ) {
        this.gameInstance.endGame(false);
      } else {
        console.error("gameInstance or endGame method not found");
      }
    }
  }
}
