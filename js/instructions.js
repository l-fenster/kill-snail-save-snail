class Instructions {
  constructor() {
    this.instructionsPage = document.getElementById("instructions-page");
    this.gamePage = document.getElementById("game-container");
  }
  reallyStartGame() {
    this.instructionsPage.style.display = "none";
    this.gamePage.style.display = "block";
  }
}
