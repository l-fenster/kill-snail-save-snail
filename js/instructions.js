class Instructions {
  constructor() {
    this.instructionsPage = document.getElementById("instructions-page");
    this.gamePage = document.getElementById("game-container");
    this.deadEndPage = document.getElementById("dead-end");
  }
  reallyStartGame() {
    this.instructionsPage.style.display = "none";
    this.gamePage.style.display = "block";
  }
  automaticEnd() {
    this.instructionsPage.style.display = "none";
    this.deadEndPage.style.display = "block";
  }
}
