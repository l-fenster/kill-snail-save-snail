class LivesAndTimes {
  constructor(livesCounter, gameInstance) {
    this.livesCounter = livesCounter;
    this.gameInstance = gameInstance;
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
    this.livesCounter.removeChild(this.livesCounter.lastChild);
    if (this.livesCounter.childElementCount === 0) {
      this.gameInstance.trueEnd();
    }
  }
}
